import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Vitaliv Health & Wellness Clinic — Home">
      <Image
        src="/assets/logo.jpg"
        alt="Vitaliv Health and Wellness Clinic"
        width={300}
        height={144}
        priority
        className="h-12 w-auto md:h-14 dark:rounded-lg dark:bg-white dark:px-2 dark:py-1"
      />
    </Link>
  );
}
