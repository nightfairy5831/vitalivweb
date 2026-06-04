import { clinic } from "@/lib/content";

// Floating WhatsApp click-to-chat button — mirrors the original site's
// "Open chat / For appointment" widget. Number: Aman branch mobile.
const WHATSAPP_NUMBER = "6738248315";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi ${clinic.shortName}, I'd like to make an appointment.`
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp for an appointment"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white py-2 text-sm font-medium text-brand-dark opacity-0 shadow-md transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100 sm:block dark:bg-surface dark:text-brand-lime dark:ring-1 dark:ring-white/10">
        For appointment — chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.713 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.233 1.587h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.752-9.055A12.717 12.717 0 0 0 16.003 3.2zm0 23.2h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.003 1.05 1.068-3.903-.252-.4a10.56 10.56 0 0 1-1.62-5.637c0-5.867 4.773-10.64 10.643-10.64a10.57 10.57 0 0 1 7.52 3.122 10.57 10.57 0 0 1 3.116 7.524c0 5.867-4.773 10.64-10.64 10.64zm5.834-7.967c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.779-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </span>
    </a>
  );
}
