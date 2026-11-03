import type { StayCard as StayCardData } from "@/data/mockResponse";

type StayCardProps = {
  details: StayCardData["details"];
};

export default function StayCard({ details }: StayCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl rounded-bl-sm bg-white shadow-sm dark:bg-zinc-800">
      {/* Image placeholder */}
      <div className="flex aspect-[16/9] w-full items-center justify-center bg-zinc-200 text-sm text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
        Image placeholder
      </div>

      <div className="px-4 pb-4 pt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#820263]">
          Stay
        </p>
        <h3 className="mt-1 text-2xl font-bold leading-tight text-[#820263]">
          {details.listingTitle}
        </h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {details.destination}
        </p>

        <p className="mt-3 text-sm">
          {details.checkIn} → {details.checkOut} · {details.nights} nights
        </p>
        <p className="text-sm">${details.nightlyPriceUsd} per night</p>

        <p className="mt-3 border-l-4 border-[#820263] pl-3 text-sm italic text-zinc-600 dark:text-zinc-300">
          {details.highlight}
        </p>
      </div>
    </div>
  );
}
