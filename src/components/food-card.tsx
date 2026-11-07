import type { FoodCard as FoodCardData } from "@/data/mockResponse";

type FoodCardProps = {
  details: FoodCardData["details"];
};

export default function FoodCard({ details }: FoodCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white p-4 shadow-md ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
      <div className="flex items-start gap-3">
        {/* Image placeholder: small round thumbnail, top left */}
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-[10px] text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
          aria-label="Image placeholder"
        >
          Photo
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-[#E35336]/10 px-3 py-0.5 text-xs font-semibold text-[#E35336]">
            Food
          </span>
          <h3 className="mt-1 text-xl font-bold leading-snug tracking-tight text-[#E35336] dark:text-orange-300">
            {details.restaurantName}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#E35336]/10 px-2.5 py-0.5 text-xs font-medium text-[#E35336]">
              {details.mealType}
            </span>
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium dark:bg-zinc-700">
              {details.priceRange}
            </span>
          </div>
        </div>
      </div>

      {/* Price footer */}
      <div className="mt-4 flex items-baseline gap-1 border-t border-zinc-200 pt-3 dark:border-zinc-700">
        <span className="text-lg font-bold">~${details.estcostfor2USD}</span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">for two</span>
      </div>
    </article>
  );
}
