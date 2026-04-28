import * as React from "react"

import { cn } from "@/lib/utils"

export interface StatusCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Big number on the left (e.g. campaign day). */
  day: number | string
  /** Small uppercase label under the day number (e.g. "Kampanjdag" / "Campaign day"). */
  dayLabel: string
  /** Section header above the quote (e.g. "Senast i kampanjen" / "Latest in the campaign"). */
  latestLabel: string
  /** Pull-quote shown in italics. */
  quote: string
  /** Attribution under the quote (e.g. "— Nildar Sunblight, dödsord"). */
  attribution: string
  /** Open questions / loose ends, rendered as a snowflake-bulleted list. */
  questions: string[]
}

/**
 * Status card from the Frostmaiden landing — large day count + quote + open questions.
 * Pure presentational; lift content via i18n in the consumer.
 */
const StatusCard = React.forwardRef<HTMLElement, StatusCardProps>(
  ({ className, day, dayLabel, latestLabel, quote, attribution, questions, ...props }, ref) => (
    <aside
      ref={ref}
      className={cn(
        "relative grid grid-cols-[auto_1fr] items-start gap-7",
        "border border-border bg-card/60 backdrop-blur-sm",
        "p-9 pb-8 shadow-2xl",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="font-[family-name:var(--font-heading)] text-7xl leading-none text-foreground">
          {day}
        </div>
        <div className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          {dayLabel}
        </div>
      </div>

      <div>
        <div className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mb-3">
          {latestLabel}
        </div>

        <blockquote
          className={cn(
            "italic text-[1.15rem] leading-snug text-foreground m-0 mb-3.5",
            "pl-3.5 border-l-2 border-[color:var(--color-tertiary)]"
          )}
        >
          {quote}
        </blockquote>

        <div className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          {attribution}
        </div>

        {questions.length > 0 && (
          <ul className="mt-4 pt-4 border-t border-dashed border-muted-foreground/40 list-none m-0 p-0">
            {questions.map((q, i) => (
              <li
                key={i}
                className="relative pl-[18px] mb-1.5 text-[0.95rem] text-muted-foreground last:mb-0 before:content-['❄'] before:absolute before:left-0 before:top-0 before:text-[0.8em] before:text-secondary"
              >
                {q}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
)
StatusCard.displayName = "StatusCard"

export { StatusCard }
