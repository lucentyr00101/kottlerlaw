import Image from "next/image";
import { cacheLife } from "next/cache";
import cityPhoto from "@/app/assets/la-building.jpg";
import logo from "@/app/assets/kottler-logo.png";
import aaajLogo from "@/app/assets/membership-aaaj.jpg";
import forumLogo from "@/app/assets/membership-forum.png";
import { LeadForm } from "./_components/LeadForm";
import { SiteHeader } from "./_components/SiteHeader";
import { phoneDisplay, phoneHref, PhoneIcon } from "./_components/site";

const wins = [
  { amount: "$40.5M", type: "Insurance Bad Faith", note: "Jury verdict. Insurer offered $0." },
  { amount: "$22M", type: "Auto Accident", note: "Jury verdict. Insurer offered $100K." },
  { amount: "$4.5M", type: "Truck Accident", note: "Settlement for our client." },
  { amount: "$3.7M", type: "Apartment Fire", note: "Burn injury jury verdict." },
];

const areas = [
  { name: "Car Accidents", pos: "12% 30%" },
  { name: "Truck Accidents", pos: "80% 20%" },
  { name: "Pedestrian Accidents", pos: "45% 75%" },
  { name: "Slip & Fall", pos: "95% 80%" },
  { name: "Wrongful Death", pos: "5% 90%" },
  { name: "Dog Bites", pos: "60% 10%" },
];

const steps = [
  { t: "Contact us", d: "Call us 24/7 or fill out the form. The consultation is free." },
  { t: "Tell us about your case", d: "Share what happened. We listen and explain your options in plain English." },
  { t: "We get to work", d: "Your attorney handles the evidence and the insurance company while you recover." },
];

const perks = [
  "No upfront fees",
  "Pay nothing unless we win",
  "Same attorney, one-on-one",
  "Available 24/7",
  "Free, private consultation",
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
        Zero fees or costs unless you win · Free consultation · Available 24/7
      </div>

      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="relative isolate bg-[#101c32] text-white">
          <Image src={cityPhoto} alt="" fill priority placeholder="blur" sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(10,20,38,.97)_0%,rgba(10,20,38,.9)_55%,rgba(10,20,38,.7)_100%)]" />
          <div className="v2-wrap grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="text-lg font-bold tracking-[0.1em] text-[#f0cf86] uppercase">Los Angeles Personal Injury Attorneys · Since 1968</p>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.95] font-extrabold tracking-tight uppercase">
                Your case.<br /><span className="font-serif font-normal text-[#f0cf86] normal-case">Our priority.</span>
              </h1>
              <p className="mt-8 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold">
                Call Kottler &amp; Kottler: <a href={phoneHref} className="text-[#f0cf86] underline decoration-2 underline-offset-8">{phoneDisplay}</a>
              </p>
              <p className="mt-6 max-w-xl text-[1.3rem] leading-[1.65] text-white/90">
                Free consultation. No fees unless we win. Speak one-on-one with an experienced attorney, any time of day or night.
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
            <Image src={forumLogo} alt="Million Dollar Advocates Forum" className="h-20 w-auto object-contain" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-20 lg:py-28">
          <div className="v2-wrap grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#101c32]">
              <Image src={cityPhoto} alt="Wilshire Boulevard, Los Angeles, near our offices" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#d9a441] px-7 py-5 text-[#101c32]">
                <p className="font-serif text-5xl leading-none">1968</p>
                <p className="text-lg font-bold">Serving injured Californians</p>
              </div>
            </div>
            <div>
              <p className="v2-eyebrow">Dedicated personal injury service</p>
              <h2 className="v2-h2 mt-4">Big-firm strength. Personal attention.</h2>
              <p className="v2-body mt-6">
                Your case will not be passed from person to person. At Kottler &amp; Kottler you speak one-on-one with the same attorney who knows your story and is invested in your outcome.
              </p>
              <p className="v2-body mt-5">
                We prepare every case with care, bring decades of courtroom experience, and stand ready to take on insurers that undervalue what you have lost.
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
                <h2 className="v2-h2 mt-4">Recent wins for our clients.</h2>
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
              Prior results do not guarantee a similar outcome. Every case is different.
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
                    src={cityPhoto}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 200vw"
                    style={{ objectPosition: a.pos }}
                    className="-z-20 scale-[2] object-cover transition duration-500 group-hover:scale-[2.2]"
                  />
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,28,50,.45)_0%,rgba(16,28,50,.95)_85%)]" />
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
                <li key={s.t} className="rounded-sm bg-white p-8 shadow-sm">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#101c32] font-serif text-4xl text-[#f0cf86]">{i + 1}</span>
                  <h3 className="mt-6 text-[1.6rem] leading-snug font-extrabold uppercase">{s.t}</h3>
                  <p className="mt-3 text-[1.15rem] leading-[1.6] text-[#2b3750]">{s.d}</p>
                </li>
              ))}
            </ol>
            <a href="#contact" className="v2-btn v2-btn-navy mt-10 tracking-wide uppercase">Get started</a>
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
                Every day matters after an injury. Tell us what happened and we will explain your options at no cost to you.
              </p>
              <a href={phoneHref} className="v2-btn v2-btn-gold mt-9 !text-2xl"><PhoneIcon /> {phoneDisplay}</a>
              <ul className="mt-10 grid gap-4 border-t border-white/25 pt-8 text-xl">
                {["Free, private consultation", "No fee unless we recover for you", "One-on-one with your attorney"].map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="text-[#f0cf86]" aria-hidden="true">✓</span>{t}</li>
                ))}
              </ul>
              <address className="mt-10 text-[1.15rem] leading-relaxed not-italic text-white/90">
                <strong className="block text-white">Visit our Los Angeles office</strong>
                6420 Wilshire Boulevard, Suite 2000 Penthouse<br />Los Angeles, CA 90048
              </address>
            </div>
            <LeadForm id="contact-form" title="Get your free case review" />
          </div>
        </section>
      </main>

      <footer className="bg-[#0a1425] py-12 text-white">
        <div className="v2-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Image src={logo} alt="Kottler & Kottler Attorneys at Law" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-5 text-lg leading-relaxed text-white/85">6420 Wilshire Boulevard, Suite 2000 Penthouse<br />Los Angeles, CA 90048</p>
          </div>
          <div className="md:text-right">
            <a href={phoneHref} className="font-serif text-3xl text-[#f0cf86]">{phoneDisplay}</a>
            <p className="mt-4 text-base text-white/75">© <CurrentYear /> Kottler &amp; Kottler. Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>

      <a href={phoneHref} className="fixed right-0 bottom-0 left-0 z-50 flex min-h-[4.5rem] items-center justify-center gap-3 bg-[#d9a441] text-xl font-extrabold text-[#101c32] md:hidden">
        <PhoneIcon /> Click to call · Available 24/7
      </a>
    </div>
  );
}
