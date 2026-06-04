export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider ${
            light ? "text-brand-lime" : "text-brand dark:text-brand-light"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-semibold sm:text-4xl ${
          light ? "text-white" : "text-brand-deep dark:text-white"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/85" : "text-gray-600 dark:text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
