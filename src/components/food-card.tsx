import type { FoodCard as FoodCardData } from "@/data/mockResponse";

type FoodCardProps = {
  details: FoodCardData["details"];
};

export default function FoodCard({ details }: FoodCardProps) {
  return (
    <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-4 shadow-sm dark:bg-zinc-800">
      <div className="flex items-start gap-3">
        {/* Image placeholder: small round thumbnail, top left */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-[10px] text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
          aria-label="Image placeholder"
        >
          Photo
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#E35336]">
            Food
          </p>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-[#E35336]">
            {details.restaurantName}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {details.mealType} · {details.priceRange}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm">~${details.estcostfor2USD} for two</p>
    </div>
  );
}
