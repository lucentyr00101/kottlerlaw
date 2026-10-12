# Kottler & Kottler

Landing page for Kottler & Kottler, a boutique, family-owned personal injury law firm in Los Angeles serving Southern California since 1968. It is a single page with a case review form that emails each inquiry to the firm through Gmail SMTP.

## Design and content sources

- **Design:** the [Figma Make file](https://www.figma.com/make/FNu1Yi8zmbWh6E4vZd9bFt/Kottler---Kottler), version 3 (the default view). Its layout was modeled on [lawbrothers.com](https://lawbrothers.com/). The Figma text was never checked and may be placeholder copy, so use it for layout only.
- **Content (source of truth):** the firm's previous website, [kottlerpersonalinjuryattorney.com](https://kottlerpersonalinjuryattorney.com/). Every firm fact on the page (case results, attorneys, memberships, address, fax, phone, languages) must be traceable to it.
- **No attorney photos.** At the client's request, the site does not show photos of the attorneys.

### Open questions for the client

- Founding year: the site says 1968, but the previous site's FAQ says 1969.
- The contact section promises a response "within 1 hour, and always within 8 hours" (from the previous site). Confirm this is still accurate.
- Doug Kottler's previous bio was a single line. Request education and memberships if they should be listed.
- The previous site shows a BBB seal. Confirm the accreditation is current before adding it.
- Hours: the Figma design said "available 24/7", but the previous site never claims this, so it was removed. Add it back only if the client confirms.

### Content available for future sections

The previous site also has material that would need new sections: attorney credentials, six more case results, a grouped list of practice areas, and 25 FAQ answers. It blocks plain HTTP clients, so read it in a browser.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) with React 19
- [Tailwind CSS 4](https://tailwindcss.com)
- [Nodemailer](https://nodemailer.com) over Gmail SMTP
- [Bun](https://bun.sh) as the package manager and script runner

## Getting started

Requirements: Bun 1.4 or later.

```bash
bun install
cp .env.example .env.local   # then fill in the values below
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `GMAIL_USER` | Yes | Gmail address that sends the inquiry emails. |
| `GMAIL_APP_PASSWORD` | Yes | 16-character Google App Password for that account. Your regular Gmail password will not work. |
| `CONTACT_TO` | No | Inbox that receives inquiries. Defaults to `GMAIL_USER`. |

To create an App Password:

1. Turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification) for the Gmail account.
2. Go to [App Passwords](https://myaccount.google.com/apppasswords) and create one.
3. Paste it into `GMAIL_APP_PASSWORD`, without spaces.

`.env.local` is gitignored. Never commit real credentials.

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start the development server. |
| `bun run build` | Create a production build. |
| `bun run start` | Serve the production build. |
| `bun run lint` | Run ESLint. |
| `bunx tsc --noEmit` | Type-check the project. |

## Project structure

```
app/
├── page.tsx                 # Landing page sections (Server Component)
├── layout.tsx               # Root layout, fonts, metadata
├── globals.css              # Theme tokens and shared component classes
├── actions/
│   └── contact.ts           # Server Action: validates the form and sends the email
├── _components/
│   ├── LeadForm.tsx         # Case review form (Client Component, useActionState)
│   ├── SiteHeader.tsx       # Sticky header with mobile menu
│   └── site.tsx             # Shared constants (phone, nav) and PhoneIcon
└── assets/                  # Logo, photography, membership badges
```

`CLAUDE.md` and `AGENTS.md` hold instructions for AI coding agents working in this repo. `AGENTS.md` is maintained by `next dev`; don't edit its managed block by hand.

## Styling notes

- Tailwind CSS 4 utilities, plus a few shared classes (`.v2-btn`, `.v2-label`, `.v2-h2`, …) in `app/globals.css`. Those classes must stay inside `@layer base` or `@layer components`, or they will override Tailwind's responsive utilities.
- Fonts: DM Sans (body) and Libre Caslon Display (headings), loaded with `next/font`.
- Images are static imports rendered with `next/image`.

## Contact form

The page has two copies of the case review form, one in the hero and one in the contact section. Both submit to the `sendContactMessage` Server Action in `app/actions/contact.ts`, which:

- validates first name, last name, phone, optional email, message, and the consent checkbox on the server;
- returns field-level errors and keeps what the visitor entered when something goes wrong;
- silently drops submissions that fill the hidden honeypot field (`company`);
- sends the inquiry from `GMAIL_USER` to `CONTACT_TO`, with Reply-To set to the visitor's email so staff can answer by replying.

If the Gmail credentials are missing or sending fails, the visitor is asked to call the firm and the error is logged on the server.

## Deployment

Any host that runs Next.js works, for example Vercel or a Node server running `bun run build && bun run start`. Set the environment variables above in the hosting provider's settings. The host must allow outbound SMTP connections to `smtp.gmail.com:465`.
