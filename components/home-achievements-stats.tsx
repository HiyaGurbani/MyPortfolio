import { cn } from "@/lib/utils"

type StatItem = {
  label: string
  count: number | string
  highlight?: string
}

export function HomeAchievementsStats({
  items,
  className,
}: {
  items: StatItem[]
  className?: string
}) {
  const safeItems = (items ?? []).slice(0, 3)

  return (
    <div
      className={cn(
        "grid gap-3 rounded-md border border-border bg-background/60 p-3 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border",
        className,
      )}
      role="group"
      aria-label="Achievements overview"
    >
      {safeItems.map((it, idx) => (
        <div
            key={idx}
            className="flex flex-col items-center text-center md:px-3"
        >
            <div className="text-xl font-semibold leading-none text-foreground">
            {it.count}
            </div>
            <div className="text-sm font-medium text-foreground mt-1">
            {it.label}
            </div>
            {it.highlight ? (
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                {it.highlight}
            </p>
            ) : null}
        </div>
        ))}

    </div>
  )
}

export default HomeAchievementsStats
