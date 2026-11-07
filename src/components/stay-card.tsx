import type { StayCard as StayCardData } from "@/data/mockResponse";
import { formatShortDate } from "@/lib/format-date";

type StayCardProps = {
  details: StayCardData["details"];
};

export default function StayCard({ details }: StayCardProps) {
  const nights = Number(details.nights);
  const nightly = Number(details.nightlyPriceUsd);
  const total =
    Number.isFinite(nights) && Number.isFinite(nightly)
      ? Math.round(nights * nightly)
      : null;

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
      {/* Image placeholder with floating type badge */}
      <div className="relative aspect-[4/3] w-full bg-zinc-200 dark:bg-zinc-700">
        <span className="absolute inset-0 flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
          Image placeholder
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#820263] shadow-sm dark:bg-zinc-900 dark:text-fuchsia-300">
          Stay
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <h3 className="text-xl font-bold leading-snug tracking-tight text-[#820263] dark:text-fuchsia-300">
            {details.listingTitle}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {details.destination}
          </p>
        </div>

        {/* Dates as two tiles, not a line of text */}
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <div className="p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Check-in
            </p>
            <p className="mt-1 text-sm font-medium">
              {formatShortDate(details.checkIn)}
            </p>
          </div>
          <div className="border-l border-zinc-200 p-3 dark:border-zinc-700">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Check-out
            </p>
            <p className="mt-1 text-sm font-medium">
              {formatShortDate(details.checkOut)}
            </p>
          </div>
        </div>

        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-700">
          {details.nights} nights
        </span>

        <p className="rounded-xl bg-[#820263]/10 px-3 py-2 text-sm italic text-[#820263] dark:text-pink-200">
          {details.highlight}
        </p>

        {/* Price footer */}
        <div className="flex items-baseline gap-1 border-t border-zinc-200 pt-3 dark:border-zinc-700">
          <span className="text-lg font-bold">${details.nightlyPriceUsd}</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">night</span>
          {total !== null && (
            <span className="ml-auto text-sm text-zinc-500 dark:text-zinc-400">
              ${total} total
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
