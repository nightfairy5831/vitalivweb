import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import SectionHeading from "@/components/SectionHeading";
import { branches, hours, clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment at Vitaliv Health & Wellness Clinic. Find our Jerudong, Aman and Kuala Belait branch locations, phone numbers and opening hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="brand-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get in touch" title="Book an appointment" intro="Request a visit using the form below, or contact your nearest branch directly. We look forward to caring for you." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <AppointmentForm />
          </div>

          {/* Branch details + hours */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-brand-deep dark:text-white">Our branches</h3>
            <div className="mt-5 space-y-5">
              {branches.map((b) => (
                <div key={b.name} className="rounded-2xl border border-brand-100 bg-cream p-5 dark:border-white/10 dark:bg-surface">
                  <p className="font-semibold text-brand-dark dark:text-brand-lime">{b.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-muted">{b.address}</p>
                  <div className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <p><span className="font-medium">Tel:</span> <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="hover:underline">{b.phone}</a></p>
                    <p><span className="font-medium">Mobile:</span> {b.mobile}</p>
                    <p><span className="font-medium">Fax:</span> {b.fax}</p>
                  </div>
                  <a href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-brand hover:underline dark:text-brand-light">View on map →</a>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold text-brand-deep dark:text-white">Opening hours</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-100 dark:border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {hours.map((h, i) => (
                    <tr key={h.day} className={i % 2 ? "bg-cream dark:bg-surface-2" : "bg-white dark:bg-surface"}>
                      <td className="px-4 py-3 font-medium text-brand-dark dark:text-brand-lime">{h.day}</td>
                      <td className="px-4 py-3 text-right text-gray-600 dark:text-muted">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500 dark:text-muted">
              Hours may vary by branch and on public holidays — please confirm by phone. General
              enquiries: <a href={`mailto:${clinic.email}`} className="text-brand hover:underline dark:text-brand-light">{clinic.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
