import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { services, packages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From family medicine and specialist ENT to ultrasound, sleep medicine, audiology and health screening packages — explore the full range of Vitaliv services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header banner */}
      <section>
        <div className="relative aspect-[4260/1212] w-full">
          <Image src="/assets/services/1.jpg" alt="Our Services — the Vitaliv Health & Wellness medical team" fill sizes="100vw" priority className="object-cover" />
        </div>
      </section>

      {/* Services list (alternating) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((s, i) => (
            <article key={s.title} className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl dark:text-white">{s.title}</h2>
                <p className="mt-3 text-lg font-medium text-brand dark:text-brand-light">{s.blurb}</p>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-muted">{s.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="scroll-mt-24 bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Health screening" title="Screening packages" intro="Comprehensive checks designed around your age, gender and health priorities. Speak to us to find the right fit." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-surface dark:ring-white/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand dark:text-brand-light">{p.audience}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-deep dark:text-white">{p.name}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600 dark:text-muted">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2"><span className="mt-0.5 text-brand dark:text-brand-light">✓</span><span>{i}</span></li>
                  ))}
                </ul>
                {p.options && (
                  <p className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs text-brand-dark dark:bg-white/10 dark:text-brand-lime">{p.options}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Not sure which service you need?" text="Our team is happy to guide you. Book a consultation and we'll help you find the right care." />
    </>
  );
}
