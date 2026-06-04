"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (i: number) => setIndex((i + count) % count);

  // Auto-advance only when there's more than one image.
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 3500);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="group relative aspect-square overflow-hidden bg-cream dark:bg-white">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — image ${i + 1} of ${count}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className={`object-contain p-4 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {count > 1 && (
        <>
          {/* Prev / Next — appear on hover */}
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-1.5 text-brand-dark opacity-0 shadow transition group-hover:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-1.5 text-brand-dark opacity-0 shadow transition group-hover:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-brand" : "w-1.5 bg-brand/40 hover:bg-brand/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
