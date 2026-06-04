import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { services, packages, branches, clinic } from "@/lib/content";

const highlights = [
  { title: "Established 2007", text: "Nearly two decades of trusted, individualised care for families in Brunei." },
  { title: "Three Branches", text: "Jerudong, Aman and Kuala Belait — quality healthcare close to home." },
  { title: "UK-Trained Doctors", text: "A consultant ENT surgeon and family-medicine physicians with UK credentials." },
  { title: "All Ages Welcome", text: "From antenatal scans to senior home visits — care for every stage of life." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="fade-up">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-dark shadow-sm dark:bg-white/10 dark:text-brand-lime">
              Health &amp; Wellness Clinic · Brunei Darussalam
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl lg:text-6xl dark:text-white">
              Be healthy.
              <br />
              <span className="text-brand dark:text-brand-light">Stay healthy.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">{clinic.mission}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark dark:hover:bg-brand-mid">
                Book an Appointment
              </Link>
              <Link href="/services" className="rounded-full border border-brand/30 bg-white px-7 py-3 text-base font-semibold text-brand-dark transition hover:border-brand dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-brand-light">
                Our Services
              </Link>
            </div>
          </div>
          <div className="fade-up">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <Image src="/assets/services/4.png" alt="A Vitaliv doctor consulting with a patient" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-brand-100 bg-cream p-6 transition hover:shadow-md dark:border-white/10 dark:bg-surface dark:hover:shadow-black/40">
              <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-lime">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="What we do" title="Comprehensive care, under one roof" intro="At Vitaliv Health & Wellness Clinic we provide quality, comprehensive healthcare to individuals of all ages." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg dark:bg-surface dark:ring-white/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-deep dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-muted">{s.blurb}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark dark:hover:bg-brand-mid">
              View all services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialised showcase carousel */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow="Specialised services" title="Advanced diagnostics & wellness" intro="Ultrasound, sleep medicine and audiology — delivered with modern technology and a personal touch." />
        <div className="mt-12"><HeroCarousel /></div>
      </section>

      {/* Health screening packages */}
      <section className="brand-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Stay ahead" title="Health screening packages" intro="Know your numbers. Choose a package tailored to your age, lifestyle and health goals." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p) => (
              <div key={p.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-surface dark:ring-white/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand dark:text-brand-light">{p.audience}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-deep dark:text-white">{p.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-muted">
                  {p.includes.slice(0, 3).map((i) => (
                    <li key={i} className="flex gap-2"><span className="mt-1 text-brand dark:text-brand-light">✓</span><span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10"><Link href="/services#packages" className="font-semibold text-brand-dark hover:underline dark:text-brand-lime">See all packages →</Link></div>
        </div>
      </section>

      {/* eVitaliv promo */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Image src="/assets/evitaliv/download-1-1.png" alt="A patient using the eVitaliv online consultation on a phone" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="eVitaliv" title="Health at your fingertips" intro="Make the most of your time with virtual consultations from the comfort of your home. eVitaliv is an effective tool for non-emergency medical care." />
            <Link href="/evitaliv" className="mt-8 inline-flex rounded-full bg-brand px-7 py-3 text-base font-semibold text-white transition hover:bg-brand-dark dark:hover:bg-brand-mid">Discover eVitaliv</Link>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Find us" title="Three branches across Brunei" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {branches.map((b) => (
              <div key={b.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-surface dark:ring-white/10">
                <h3 className="text-lg font-semibold text-brand-deep dark:text-white">{b.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-muted">{b.address}</p>
                <div className="mt-4 space-y-1 text-sm">
                  <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-brand-dark dark:text-brand-lime">Tel:</span> {b.phone}</p>
                  <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-brand-dark dark:text-brand-lime">Mobile:</span> {b.mobile}</p>
                </div>
                <a href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline dark:text-brand-light">View on map →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
