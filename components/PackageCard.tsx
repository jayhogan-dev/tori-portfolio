import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export type PackageCardProps = {
  title: string;
  pricePerMonth: number;
  paidInFullNote?: string;
  tagline?: string;
  taglineIcon?: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel?: string;
  recommended?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
};

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  pricePerMonth,
  paidInFullNote,
  tagline,
  taglineIcon,
  bullets,
  ctaHref,
  ctaLabel = "Book a consultation",
  recommended = false,
  gradientFrom = "from-teal-700",
  gradientTo = "to-cyan-500",
  className,
}) => {
  return (
    <article
      className={cn(
        "relative isolate flex w-full max-w-[320px] flex-col rounded-[28px] px-6 pb-6 pt-8 shadow-2xl transition-transform",
        recommended
          ? [
              "bg-gradient-to-b text-white",
              gradientFrom,
              gradientTo,
              "ring-2 ring-white/50",
              "scale-105", // 👈 slightly bigger
              "z-10", // 👈 ensures it sits above neighbors
            ]
          : [
              "bg-white text-zinc-900",
              "dark:bg-primary-black-200 dark:text-white",
              "border border-zinc-200 dark:border-zinc-700",
            ],
        className,
      )}
    >
      {/* Recommended badge */}
      {recommended && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-white border-2 border-primary-blue-300 px-5 py-2 text-lg font-extrabold text-primary-blue-700 shadow-lg">
            Recommended
          </div>
        </div>
      )}

      {/* Card Header */}
      <header className="mb-4 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
        {paidInFullNote && <p className="mt-1 text-sm/6">{paidInFullNote}</p>}
        <p className="mt-4 text-3xl font-extrabold">
          ${pricePerMonth}
          <span className="ml-1 text-base font-semibold">/month</span>
        </p>
      </header>

      {/* Tagline */}
      {tagline && (
        <p className="mb-3 text-center text-base font-semibold">
          {taglineIcon && <span className="mr-2">{taglineIcon}</span>}
          {tagline}
        </p>
      )}

      <ul className="mt-2 mb-6 list-disc space-y-2 pl-5 text-[15px] leading-6">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-auto flex justify-center">
        <Link
          href={ctaHref}
          target="_blank"
          className={cn(
            buttonVariants({
              variant: recommended ? "white" : "slate",
              size: "lg",
            }),
          )}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* subtle inner overlay to deepen top edge like the mock */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] ring-1 ring-white/10" />
    </article>
  );
};

export default PackageCard;
