import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { evitalivConditions, branches, clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "eVitaliv — Online Consultation",
  description:
    "eVitaliv brings health to your fingertips. Consult a Vitaliv doctor online for non-emergency care via the PlatoConnect app — from the comfort of your home.",
};

const steps = [
  { n: "1", title: "Download PlatoConnect", text: "Get the PlatoConnect app from the App Store or Google Play." },
  { n: "2", title: "Book your slot", text: "Choose a convenient time and register your details." },
  { n: "3", title: "Video consultation", text: "Speak face-to-face with a Vitaliv doctor from anywhere." },
  { n: "4", title: "Advice & prescriptions", text: "Receive guidance, prescriptions or referrals as needed." },
];

export default function EvitalivPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light">eVitaliv</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl dark:text-white">Health at your fingertips</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              A number of conditions can be treated via online consultation. eVitaliv is an
              extremely effective tool for non-emergency medical care — making the most of your
              time from the comfort of your own home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#download" className="rounded-full bg-brand px-7 py-3 text-base font-semibold text-white transition hover:bg-brand-dark dark:hover:bg-brand-mid">Get the app</a>
              <span className="text-sm text-gray-600 dark:text-muted">Powered by PlatoConnect</span>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Image src="/assets/evitaliv/download-1-1.png" alt="A patient on a video consultation with a Vitaliv doctor" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow="What we can help with" title="Conditions suited to online care" intro="Use our virtual consultation platform for everyday, non-emergency conditions like these:" />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {evitalivConditions.map((c) => (
            <div key={c} className="rounded-xl bg-cream px-4 py-5 text-center text-sm font-medium text-brand-dark ring-1 ring-brand-100 dark:bg-surface dark:text-brand-lime dark:ring-white/10">
              {c}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500 dark:text-muted">
          For emergencies or conditions that require a physical examination, please visit a branch in person.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-cream dark:bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="How it works" title="Four simple steps" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-surface dark:ring-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full brand-gradient text-lg font-semibold text-white">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-brand-deep dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-3xl brand-gradient p-10 lg:grid-cols-2 lg:p-16">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Download PlatoConnect</h2>
              <p className="mt-4 max-w-md text-white/85">Available on your mobile device. Download PlatoConnect to start your online consultation with Vitaliv today.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                  <Image src="/assets/evitaliv/2-1.png" alt="Get it on Google Play" width={180} height={54} className="h-12 w-auto" />
                </div>
                <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                  <Image src="/assets/evitaliv/appp.png" alt="Download on the App Store" width={180} height={54} className="h-12 w-auto" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/95 p-6">
              <h3 className="font-serif text-xl text-brand-deep">Prefer to call? Contact a branch:</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {branches.map((b) => (
                  <li key={b.name} className="flex items-center justify-between gap-3">
                    <span className="font-medium text-brand-dark">{b.name.replace(" Branch", "")}</span>
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="hover:underline">{b.phone}</a>
                  </li>
                ))}
                <li className="flex items-center justify-between gap-3 border-t border-brand-100 pt-3">
                  <span className="font-medium text-brand-dark">Email</span>
                  <a href={`mailto:${clinic.email}`} className="hover:underline">{clinic.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
