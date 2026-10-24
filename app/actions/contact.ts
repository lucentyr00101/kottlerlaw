'use server'

import nodemailer from 'nodemailer'

export type ContactField = 'first' | 'last' | 'phone' | 'email' | 'message' | 'consent'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<ContactField, string>>
  values?: Partial<Record<Exclude<ContactField, 'consent'>, string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+().\-\s]{7,25}$/
const GENERIC_ERROR = 'Something went wrong sending your request. Please call us at 888-300-2266.'

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (read(formData, 'company')) return { status: 'success' }

  const values = {
    first: read(formData, 'first'),
    last: read(formData, 'last'),
    phone: read(formData, 'phone'),
    email: read(formData, 'email'),
    message: read(formData, 'message'),
  }
  const { first, last, phone, email, message } = values

  const errors: ContactState['errors'] = {}
  if (!first || first.length > 80) errors.first = 'Please enter your first name.'
  if (!last || last.length > 80) errors.last = 'Please enter your last name.'
  if (!PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number.'
  if (email && (!EMAIL_RE.test(email) || email.length > 200)) errors.email = 'Please enter a valid email address.'
  if (message.length > 5000) errors.message = 'Please keep your message under 5000 characters.'
  if (!formData.get('consent')) errors.consent = 'Please agree to be contacted.'
  if (Object.keys(errors).length) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors, values }
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set')
    return { status: 'error', message: GENERIC_ERROR, values }
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  const name = `${first} ${last}`
  const rows: [string, string][] = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || '—'],
  ]
  const body = message || '(No details provided)'

  try {
    await transporter.sendMail({
      from: `"Kottler & Kottler Website" <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo: email ? { name, address: email } : undefined,
      subject: `New case consultation request from ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nWhat happened:\n${body}`,
      html: `${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('')}
<p><strong>What happened:</strong></p>
<p style="white-space:pre-wrap">${escapeHtml(body)}</p>`,
    })
  } catch (err) {
    console.error('Contact form: failed to send email', err)
    return { status: 'error', message: GENERIC_ERROR, values }
  }

  return { status: 'success' }
}
