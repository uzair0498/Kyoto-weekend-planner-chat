import type { ExperienceCard as ExperienceCardData } from "@/data/mockResponse";

type ExperienceCardProps = {
  details: ExperienceCardData["details"];
};

export default function ExperienceCard({ details }: ExperienceCardProps) {
  return (
    <div className="flex overflow-hidden rounded-2xl rounded-bl-sm bg-white shadow-sm dark:bg-zinc-800">
      {/* Image placeholder: strip down the left side */}
      <div className="flex w-24 shrink-0 items-center justify-center bg-zinc-200 px-1 text-center text-xs text-zinc-500 sm:w-28 dark:bg-zinc-700 dark:text-zinc-400">
        Image placeholder
      </div>

      <div className="min-w-0 flex-1 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0D5C63]">
          Experience
        </p>
        <h3 className="mt-1 text-2xl font-bold leading-tight text-[#0D5C63]">
          {details.activityName}
        </h3>

        <ul className="mt-3 space-y-1 text-sm">
          {details.dayPlan.map((day) => (
            <li key={day.day}>
              {day.day} · {day.duration} · ${day["priceperguest(USD)"]} per
              guest
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
