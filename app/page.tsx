import Image from "next/image";
import { cacheLife } from "next/cache";
import cityPhoto from "@/app/assets/la-building.jpg";
import logo from "@/app/assets/kottler-logo.png";
import aaajLogo from "@/app/assets/membership-aaaj.jpg";
import caalaLogo from "@/app/assets/membership-caala.png";
import bbbLogo from "@/app/assets/membership-bbb.png";
import officePhoto from "@/app/assets/office-conference-room.jpg";
import carAccidentPhoto from "@/app/assets/practice-car-accident.jpg";
import dogBitePhoto from "@/app/assets/practice-dog-bite.jpg";
import pedestrianPhoto from "@/app/assets/practice-pedestrian-accident.jpg";
import slipFallPhoto from "@/app/assets/practice-slip-and-fall.jpg";
import truckAccidentPhoto from "@/app/assets/practice-truck-accident.jpg";
import wrongfulDeathPhoto from "@/app/assets/practice-wrongful-death.jpg";
import { LeadForm } from "./_components/LeadForm";
import { SiteHeader } from "./_components/SiteHeader";
import { phoneDisplay, phoneHref, PhoneIcon } from "./_components/site";

const wins = [
  { amount: "$40.5M", type: "Insurance Bad Faith", note: "Jury verdict for F.F. of Los Angeles. Insurer offered $0." },
  { amount: "$22M", type: "Auto Accident", note: "Jury verdict for D.C. of San Bernardino. Insurer offered $100K." },
  { amount: "$4.5M", type: "Truck Accident", note: "Settlement for H.P. of Montebello." },
  { amount: "$3.7M", type: "Apartment Fire", note: "Burn injury jury verdict for E.B. of Los Angeles. Insurer offered $0." },
];

// Verbatim from the firm's Google and Yelp listings (Oct 2026). "…" marks trimmed text.
const reviewSources = [
  { name: "Google", rating: "4.2", count: 42, href: "https://www.google.com/maps/search/Kottler+%26+Kottler+6420+Wilshire+Blvd+Los+Angeles" },
  { name: "Yelp", rating: "4.5", count: 71, href: "https://www.yelp.com/search?find_desc=Kottler+%26+Kottler&find_loc=Los+Angeles%2C+CA" },
];

const reviews = [
  {
    name: "Naz N.",
    source: "Yelp",
    text: "From the very beginning, Cathy was incredibly helpful, compassionate, and attentive throughout the entire process. She always kept us informed and was available whenever we had questions. … We are extremely happy with the outcome of my mother's case, especially the settlement and the excellent job they did negotiating the medical liens.",
  },
  {
    name: "James S.",
    source: "Google",
    text: "This law firm was handling a claim for my estranged father. He unfortunately passed away during the process and this firm hired a PI who tracked me down. … For a firm to do this for a smaller payout speaks volumes about their integrity.",
  },
  {
    name: "Giannina T.",
    source: "Yelp",
    text: "Attorney Douglas Kottler also checked in with me personally from time to time, which gave me confidence that my case and well-being truly mattered to them. … I found them to be honest, knowledgeable, dedicated, and truly committed to helping people in need.",
  },
  {
    name: "Stephanie V.",
    source: "Google",
    text: "Last year I was hit while at a stop and knew that K&K was who I needed to reach out to, even with me now living in AZ. I worked with Cathy Gomez & team, they were absolutely incredible to work with. Very responsive to emails, calls and always kind and professional.",
  },
  {
    name: "Roger T.",
    source: "Yelp",
    text: "I was able to seek treatment for my medical needs without any anxiety. Throughout the process I felt that Kottler and Kottler had my best interest. … It's a relief to know you are in good hands. I had a team of attorneys on my side.",
  },
  {
    name: "Jessica M.",
    source: "Google",
    text: "So satisfied with Kottler and Kottler! They took on my case November 2024, Cathy Gomez was on top of it! Always communicating with me via phone and email! Let me know all the details and talked me through everything, answered all my questions.",
  },
];

const areas = [
  { name: "Car Accidents", photo: carAccidentPhoto },
  { name: "Truck Accidents", photo: truckAccidentPhoto },
  { name: "Pedestrian Accidents", photo: pedestrianPhoto },
  { name: "Slip & Fall", photo: slipFallPhoto },
  { name: "Wrongful Death", photo: wrongfulDeathPhoto },
  { name: "Dog Bites", photo: dogBitePhoto },
];

const steps = [
  { t: "Contact us", d: "Call us or fill out the form. The consultation is free." },
  { t: "Tell us about your case", d: "Share what happened. We listen and explain your options in plain English." },
  { t: "We get to work", d: "Your attorney handles the evidence and the insurance company while you recover." },
];

const perks = [
  "No upfront fees",
  "No fee unless we win",
  "Same attorney, one-on-one",
  "Habla Español",
  "Free initial consultation",
];

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <div className="v2 min-h-screen bg-white pb-20 text-[#14213a] md:pb-0">
      <div className="hidden bg-[#d9a441] py-2 text-center text-base font-bold text-[#101c32] md:block">
        No fee unless we win · Free consultation · Available 24/7 · Habla Español
      </div>

      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="relative isolate bg-[#101c32] text-white">
          <Image src={cityPhoto} alt="" fill priority placeholder="blur" sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(10,20,38,.97)_0%,rgba(10,20,38,.9)_55%,rgba(10,20,38,.7)_100%)]" />
          <div className="v2-wrap grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="text-lg font-bold tracking-[0.1em] text-[#f0cf86] uppercase">Southern California Personal Injury Attorneys · Since 1968</p>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.95] font-extrabold tracking-tight uppercase">
                Your case.<br /><span className="font-serif font-normal text-[#f0cf86] normal-case">Our priority.</span>
              </h1>
              <p className="mt-8 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold">
                Call Kottler &amp; Kottler: <a href={phoneHref} className="text-[#f0cf86] underline decoration-2 underline-offset-8">{phoneDisplay}</a>
              </p>
              <p className="mt-6 max-w-xl text-[1.3rem] leading-[1.65] text-white/90">
                Free consultation. No fee unless we win. Speak one-on-one with the same experienced attorney from start to finish.
              </p>
              <ul className="mt-8 grid gap-3 text-xl font-semibold sm:grid-cols-2">
                {perks.slice(0, 4).map((p) => (
                  <li key={p} className="flex items-center gap-3"><span className="text-[#f0cf86]" aria-hidden="true">✓</span>{p}</li>
                ))}
              </ul>
            </div>
            <LeadForm id="hero-form" title="Get your free case review" />
          </div>
        </section>

        {/* STAT BAND */}
        <section className="bg-[#d9a441] text-[#101c32]">
          <div className="v2-wrap grid gap-8 py-12 lg:grid-cols-[1.1fr_2fr] lg:items-center">
            <div>
              <p className="text-lg font-bold tracking-[0.1em] uppercase">Landmark verdict</p>
              <p className="font-serif text-[clamp(4.5rem,9vw,8rem)] leading-none">$40.5M</p>
              <p className="mt-2 text-xl font-semibold">Against an insurer that offered $0.</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#101c32]/25 md:grid-cols-3">
              {[["$22M", "Auto accident verdict"], ["$4.5M", "Truck accident settlement"], ["$3.7M", "Apartment fire verdict"]].map(([a, l]) => (
                <div key={a} className="bg-[#d9a441] p-5 first:col-span-2 md:first:col-span-1">
                  <p className="font-serif text-5xl">{a}</p>
                  <p className="mt-2 text-lg leading-snug font-semibold">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEMBERSHIPS */}
        <section className="border-b border-[#14213a]/15 bg-[#f6f2e9] py-8">
          <div className="v2-wrap flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <p className="text-lg font-bold tracking-[0.1em] uppercase">Proud members of</p>
            <Image src={aaajLogo} alt="American Association for Justice" className="h-16 w-auto object-contain" />
            <Image src={caalaLogo} alt="Consumer Attorneys Association of Los Angeles" className="h-11 w-auto object-contain" />
            <Image src={bbbLogo} alt="BBB Accredited Business" className="h-20 w-auto object-contain" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-20 lg:py-28">
          <div className="v2-wrap grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#101c32]">
              <Image src={officePhoto} alt="Conference room at the Kottler & Kottler office overlooking Los Angeles" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#d9a441] px-7 py-5 text-[#101c32]">
                <p className="font-serif text-5xl leading-none">1968</p>
                <p className="text-lg font-bold">Serving Southern California</p>
              </div>
            </div>
            <div>
              <p className="v2-eyebrow">Boutique, family-owned law firm</p>
              <h2 className="v2-h2 mt-4">Big-firm strength. Personal attention.</h2>
              <p className="v2-body mt-6">
                Kottler &amp; Kottler is a family-owned and operated personal injury firm that has always limited its practice to representing seriously injured people and their families in and around Southern California. Because we carefully select our cases, you get one-on-one communication with the same attorney, every step of the way.
              </p>
              <p className="v2-body mt-5">
                Attorneys Donald Kottler, Douglas E. Kottler and Shari S. Daneshrad are well respected in legal circles, and the Kottlers have appeared on national programs such as &ldquo;The Today Show.&rdquo; Most of our clients are repeat clients or referrals from other clients, and we prepare every case to its maximum potential.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="v2-btn v2-btn-navy tracking-wide uppercase">Get a free case review</a>
                <a href={phoneHref} className="v2-btn border-2 border-[#14213a]"><PhoneIcon /> {phoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT WINS */}
        <section id="results" className="scroll-mt-24 bg-[#101c32] py-20 text-white lg:py-28">
          <div className="v2-wrap">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="v2-eyebrow !text-[#f0cf86]">Case results</p>
                <h2 className="v2-h2 mt-4">Results for our clients.</h2>
              </div>
              <a href="#contact" className="v2-btn v2-btn-gold tracking-wide uppercase">See what your case is worth</a>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {wins.map((w) => (
                <div key={w.amount} className="border-t-4 border-[#d9a441] bg-white/[0.07] p-7">
                  <p className="font-serif text-6xl leading-none text-[#f0cf86]">{w.amount}</p>
                  <p className="mt-5 text-xl font-bold tracking-wide uppercase">{w.type}</p>
                  <p className="mt-2 text-lg leading-snug text-white/85">{w.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-base leading-relaxed text-white/75">
              Prior results do not guarantee a similar outcome. Every case is different. This advertisement may contain a testimonial or endorsement which does not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="scroll-mt-24 bg-[#f6f2e9] py-20 lg:py-28">
          <div className="v2-wrap">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="v2-eyebrow">Client reviews</p>
                <h2 className="v2-h2 mt-4">What our clients say.</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {reviewSources.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border-2 border-[#14213a] bg-white px-5 py-3 transition hover:-translate-y-px">
                    <span className="font-serif text-4xl leading-none"><span className="text-[#d9a441]" aria-hidden="true">★</span> {s.rating}</span>
                    <span className="text-base leading-snug">
                      <span className="block font-bold">{s.name} rating</span>{s.count} reviews
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-sm border-t-4 border-[#d9a441] bg-white p-7 shadow-sm">
                  <p className="text-xl tracking-[0.15em] text-[#d9a441]" role="img" aria-label="5 out of 5 stars">★★★★★</p>
                  <blockquote className="mt-4 flex-1 text-[1.1rem] leading-[1.65] text-[#2b3750]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-[#14213a]/15 pt-4">
                    <span className="text-lg font-bold">{r.name}</span>
                    <span className="text-sm font-semibold tracking-wide text-[#2b3750]/80 uppercase">{r.source} review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#2b3750]/80">
              Reviews are quoted as written on Google and Yelp; some are shortened, marked with &ldquo;…&rdquo;. Testimonials do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
            </p>
          </div>
        </section>

        {/* PRACTICE AREAS */}
        <section id="practice" className="scroll-mt-24 py-20 lg:py-28">
          <div className="v2-wrap">
            <p className="v2-eyebrow">Personal injury</p>
            <h2 className="v2-h2 mt-4 max-w-3xl">How can we help you?</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <a key={a.name} href="#contact" className="group relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-sm bg-[#101c32] p-7 text-white">
                  <Image
                    src={a.photo}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="-z-20 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,28,50,.15)_0%,rgba(16,28,50,.55)_45%,rgba(16,28,50,.95)_90%)]" />
                  <h3 className="text-[1.9rem] leading-tight font-extrabold tracking-tight uppercase">{a.name}</h3>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 border-b-2 border-[#d9a441] pb-1 text-lg font-bold text-[#f0cf86]">Get started →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#f6f2e9] py-20 lg:py-28">
          <div className="v2-wrap">
            <p className="v2-eyebrow">Simple and stress-free</p>
            <h2 className="v2-h2 mt-4">Three easy steps to get started.</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.t} className="rounded-sm bg-white p-8 text-center shadow-sm">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#101c32] font-serif text-4xl text-[#f0cf86]">{i + 1}</span>
                  <h3 className="mt-6 text-[1.6rem] leading-snug font-extrabold uppercase">{s.t}</h3>
                  <p className="mt-3 text-[1.15rem] leading-[1.6] text-[#2b3750]">{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <a href="#contact" className="v2-btn v2-btn-navy w-full tracking-wide uppercase sm:w-auto sm:min-w-[24rem]">Get started</a>
            </div>
          </div>
        </section>

        {/* POST-ACCIDENT BANNER */}
        <section className="bg-[#d9a441] py-14 text-[#101c32]">
          <div className="v2-wrap">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-tight font-extrabold tracking-tight uppercase">Been in an accident? Get the help you need.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {perks.map((p) => (
                <div key={p} className="border-2 border-[#101c32] bg-white/30 p-5 text-xl leading-snug font-bold">{p}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={phoneHref} className="v2-btn v2-btn-navy !text-2xl"><PhoneIcon /> {phoneDisplay}</a>
              <a href="#contact" className="v2-btn border-2 border-[#101c32] tracking-wide uppercase">Free case review</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 bg-[#101c32] py-20 text-white lg:py-28">
          <div className="v2-wrap grid gap-14 lg:grid-cols-2">
            <div>
              <p className="v2-eyebrow !text-[#f0cf86]">Free consultation</p>
              <h2 className="v2-h2 mt-4">Injured? Don&apos;t wait. Call us today.</h2>
              <p className="mt-6 max-w-lg text-[1.25rem] leading-[1.65] text-white/90">
                Every day matters after an injury. Tell us what happened and we will explain your options at no cost to you. We usually respond within 1 hour, and always within 8 hours.
              </p>
              <a href={phoneHref} className="v2-btn v2-btn-gold mt-9 !text-2xl"><PhoneIcon /> {phoneDisplay}</a>
              <ul className="mt-10 grid gap-4 border-t border-white/25 pt-8 text-xl">
                {["Free initial consultation", "No fee unless we win a recovery for you", "One-on-one with the same attorney", "Available 24/7", "Habla Español"].map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="text-[#f0cf86]" aria-hidden="true">✓</span>{t}</li>
                ))}
              </ul>
              <address className="mt-10 text-[1.15rem] leading-relaxed not-italic text-white/90">
                <strong className="block text-white">Visit our Los Angeles office</strong>
                6420 Wilshire Boulevard, Penthouse<br />Los Angeles, CA 90048-5562<br />Fax: 213-387-2889
              </address>
            </div>
            <LeadForm id="contact-form" title="Get your free case review" />
          </div>
        </section>
      </main>

      <footer className="bg-[#0a1425] py-12 text-white">
        <div className="v2-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Image src={logo} alt="Kottler & Kottler Attorneys at Law" className="h-20 w-auto brightness-0 invert" />
            <p className="mt-5 text-lg leading-relaxed text-white/85">6420 Wilshire Boulevard, Penthouse<br />Los Angeles, CA 90048-5562<br />Fax: 213-387-2889</p>
          </div>
          <div className="md:text-right">
            <a href={phoneHref} className="font-serif text-3xl text-[#f0cf86]">{phoneDisplay}</a>
            <p className="mt-4 text-base text-white/75">© <CurrentYear /> Kottler &amp; Kottler. Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>

      <a href={phoneHref} className="fixed right-0 bottom-0 left-0 z-50 flex min-h-[4.5rem] items-center justify-center gap-3 bg-[#d9a441] text-xl font-extrabold text-[#101c32] md:hidden">
        <PhoneIcon /> Click to call · Free consultation
      </a>
    </div>
  );
}
