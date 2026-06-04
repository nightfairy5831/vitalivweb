import Link from "next/link";
import { branches, clinic, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="brand-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white px-4 py-3 inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.jpg" alt="Vitaliv" className="h-12 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/80">
              {clinic.name}. Established {clinic.established}. Quality, comprehensive
              healthcare for individuals of all ages in Brunei Darussalam.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-white hover:underline">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg">Our Branches</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {branches.map((b) => (
                <div key={b.name} className="text-sm text-white/85">
                  <p className="font-semibold text-white">{b.name}</p>
                  <p className="mt-1 leading-relaxed">{b.address}</p>
                  <p className="mt-2">
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="hover:underline">
                      {b.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-white/70 sm:flex-row">
          <p>© {clinic.established}–2026 {clinic.name}. All rights reserved.</p>
          <a href={`mailto:${clinic.email}`} className="hover:text-white hover:underline">
            {clinic.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
