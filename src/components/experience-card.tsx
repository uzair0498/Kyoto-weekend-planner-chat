import type { ExperienceCard as ExperienceCardData } from "@/data/mockResponse";
import {
  formatDayOfMonth,
  formatMonth,
  formatWeekday,
} from "@/lib/format-date";

type ExperienceCardProps = {
  details: ExperienceCardData["details"];
};

export default function ExperienceCard({ details }: ExperienceCardProps) {
  return (
    <article className="flex overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
      {/* Image placeholder: strip down the left side */}
      <div className="flex w-24 shrink-0 items-center justify-center bg-zinc-200 px-1 text-center text-xs text-zinc-500 sm:w-28 dark:bg-zinc-700 dark:text-zinc-400">
        Image placeholder
      </div>

      <div className="min-w-0 flex-1 space-y-3 p-4">
        <span className="inline-block rounded-full bg-[#0D5C63]/10 px-3 py-1 text-xs font-semibold text-[#0D5C63] dark:text-teal-200">
          Experience
        </span>
        <h3 className="text-xl font-bold leading-snug tracking-tight text-[#0D5C63] dark:text-teal-300">
          {details.activityName}
        </h3>

        {/* One row per day: calendar tile, day and duration, price */}
        <ul className="space-y-3">
          {details.dayPlan.map((day) => (
            <li key={day.day} className="flex items-center gap-3">
              <div className="w-14 shrink-0 overflow-hidden rounded-xl border border-zinc-200 text-center dark:border-zinc-700">
                <p className="bg-[#0D5C63] py-0.5 text-[10px] font-semibold tracking-wider text-white">
                  {formatMonth(day.day)}
                </p>
                <p className="py-1 text-lg font-bold leading-none">
                  {formatDayOfMonth(day.day)}
                </p>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{formatWeekday(day.day)}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="whitespace-nowrap rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium dark:bg-zinc-700">
                    {day.duration}
                  </span>
                  <span className="text-sm">
                    <span className="font-bold">
                      ${day["priceperguest(USD)"]}
                    </span>{" "}
                    <span className="text-zinc-500 dark:text-zinc-400">
                      per guest
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
