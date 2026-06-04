import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { clinic, doctors, careTeam } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2007, Vitaliv Health & Wellness Clinic provides quality, individualised care across Brunei — led by UK-trained doctors and a dedicated care team.",
};

const values = [
  { title: "Quality", text: "We pride ourselves on delivering quality service for your individual health needs." },
  { title: "Communication", text: "We listen, explain and plan your care together — because you know your body best." },
  { title: "Prevention", text: "Our goal is simple: to help you be healthy, and to stay healthy for life." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative">
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
          <Image src="/assets/about/Untitled-design-2-1500x630.png" alt="Vitaliv Health & Wellness Clinic" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-brand-deep/55 dark:bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-lime">About Us</p>
              <h1 className="mt-2 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">Caring for Brunei since {clinic.established}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light">Our mission</p>
        <p className="mt-4 text-2xl font-serif leading-relaxed text-brand-deep sm:text-3xl dark:text-white">&ldquo;{clinic.mission}&rdquo;</p>
      </section>

      {/* Values */}
      <section className="bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 dark:bg-surface dark:ring-white/10">
                <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-lime">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow="Our doctors" title="Led by experienced, UK-trained physicians" intro="Our medical team brings together consultant ENT expertise and family-medicine experience, supported by Dr Mary Ann Kwok and a wider clinical team." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <article key={d.name} className="text-center">
              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                <Image src={d.image} alt={d.name} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-brand-deep dark:text-white">{d.name}</h3>
              <p className="text-sm font-medium text-brand dark:text-brand-light">{d.role}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-muted">{d.creds}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Care team */}
      <section className="bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Our people" title="The team behind your care" intro="Audiologists, cardiac and sleep technicians, medical assistants, nurses and administrative staff — all dedicated to your wellbeing." />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {careTeam.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                  <Image src={m.image} alt={m.name} fill sizes="(min-width: 640px) 200px, 40vw" className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-brand-deep dark:text-white">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Meet us in person" text="We'd love to welcome you to Vitaliv. Book a consultation at the branch most convenient for you." />
    </>
  );
}
