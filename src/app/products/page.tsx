import type { Metadata } from "next";
import Image from "next/image";
import CTABand from "@/components/CTABand";
import ProductSlider from "@/components/ProductSlider";
import { productCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Quality healthcare products available at Vitaliv — respiratory devices, nasal care, skincare, hearing aids and home-monitoring devices. Prices in Brunei dollars.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header banner */}
      <section>
        <div className="relative aspect-[2840/808] w-full">
          <Image src="/assets/products/Our-Services-3.png" alt="Healthcare Products — Vitaliv Health & Wellness Clinic" fill sizes="100vw" priority className="object-cover" />
        </div>
      </section>

      {/* Categories — only products that have images are shown */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {productCategories
          .map((cat) => ({ ...cat, items: cat.items.filter((p) => p.images && p.images.length > 0) }))
          .filter((cat) => cat.items.length > 0)
          .map((cat) => (
          <section key={cat.category} className="mb-16 scroll-mt-24" id={cat.category.toLowerCase().replace(/[^a-z]+/g, "-")}>
            <div className="border-b border-brand-100 pb-4 dark:border-white/10">
              <h2 className="text-2xl font-semibold text-brand-deep dark:text-white">{cat.category}</h2>
              <p className="mt-1 text-gray-600 dark:text-muted">{cat.blurb}</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((p) => (
                <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg dark:bg-surface dark:ring-white/10 dark:hover:shadow-black/40">
                  {p.images && p.images.length > 0 && (
                    <ProductSlider images={p.images} alt={p.name} />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-brand-deep dark:text-white">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-muted">{p.desc}</p>
                    <p className="mt-4 text-lg font-semibold text-brand dark:text-brand-light">{p.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CTABand title="Need help choosing a product?" text="Visit any branch or book a consultation — our team will recommend the right product for your needs." />
    </>
  );
}
