"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow dark:bg-[#0a1310]/95 ${
        scrolled ? "shadow-sm dark:shadow-black/40" : "border-b border-brand-100 dark:border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-50 text-brand-dark dark:bg-white/10 dark:text-brand-lime"
                  : "text-gray-600 hover:bg-brand-50 hover:text-brand-dark dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-brand-lime"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="ml-1" />
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark dark:hover:bg-brand-mid"
          >
            Book an Appointment
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark dark:text-brand-lime"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden dark:border-white/10 dark:bg-[#0a1310]">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-dark dark:bg-white/10 dark:text-brand-lime"
                    : "text-gray-700 hover:bg-brand-50 dark:text-gray-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-brand px-4 py-3 text-center text-base font-semibold text-white"
            >
              Book an Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
