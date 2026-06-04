"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-cream shadow-sm">
      <div className="relative aspect-[16/9] sm:aspect-[3753/1320]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} — ${slide.text}`}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-dark shadow transition hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-dark shadow transition hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-brand" : "w-2.5 bg-brand/40 hover:bg-brand/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
