"use client";

import { useState } from "react";
import { branches, services } from "@/lib/content";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center dark:border-white/10 dark:bg-surface">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full brand-gradient text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-deep dark:text-white">Thank you!</h3>
        <p className="mt-2 text-gray-600 dark:text-muted">
          Your appointment request has been received. Our team will call you shortly to confirm
          your booking.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-brand/30 px-5 py-2 text-sm font-semibold text-brand-dark hover:border-brand dark:border-white/20 dark:text-brand-lime"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-[#0e1814] dark:text-ink dark:placeholder:text-muted/70 dark:[color-scheme:dark]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 dark:bg-surface dark:ring-white/10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Full name *</span>
          <input required type="text" name="name" className={field} placeholder="Your name" />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Phone *</span>
          <input required type="tel" name="phone" className={field} placeholder="+673 ..." />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Email</span>
          <input type="email" name="email" className={field} placeholder="you@example.com" />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Preferred branch *</span>
          <select required name="branch" className={field} defaultValue="">
            <option value="" disabled>Select a branch</option>
            {branches.map((b) => (
              <option key={b.name} value={b.name}>{b.name}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Service</span>
          <select name="service" className={field} defaultValue="">
            <option value="">General consultation</option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Preferred date</span>
          <input type="date" name="date" className={field} />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Preferred time</span>
          <input type="time" name="time" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-brand-dark dark:text-brand-lime">Notes</span>
          <textarea name="notes" rows={4} className={field} placeholder="Tell us briefly how we can help" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-dark sm:w-auto"
      >
        Request Appointment
      </button>
      <p className="mt-3 text-xs text-gray-500 dark:text-muted">
        This form is a demonstration — submissions are not stored or sent. Please call your branch to confirm a booking.
      </p>
    </form>
  );
}
