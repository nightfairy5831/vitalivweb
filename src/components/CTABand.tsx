import Link from "next/link";

export default function CTABand({
  title = "Your health, our priority.",
  text = "Book an appointment at any of our three branches across Brunei — or speak to us about the care that's right for you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="brand-gradient">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-lg text-white/85">{text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-50"
          >
            Book an Appointment
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/60 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
