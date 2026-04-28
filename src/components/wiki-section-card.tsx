import * as React from "react"

import { cn } from "@/lib/utils"

export interface WikiSectionCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Small label above the title (e.g. "Levande, döda och försvunna" / "Living, dead, and missing"). */
  subtitle: string
  /** Display title (e.g. "NPC:er"). */
  title: string
  /** Big number on the right of the header. */
  count: number
  /** Top items to preview. Up to ~5; rest summarized via overflowLabel. */
  items: string[]
  /** Optional label rendered as a muted last-row when items were truncated (e.g. "+ 8 fler"). */
  overflowLabel?: string
  /** Footer call-to-action label (e.g. "Öppna kapitel"). */
  footerLabel: string
}

/**
 * Wiki section card — chapter-style preview from the Frostmaiden landing.
 * Top accent gradient line, subtitle + count header, display-font title,
 * dashed-separated items list, footer with arrow.
 */
const WikiSectionCard = React.forwardRef<HTMLAnchorElement, WikiSectionCardProps>(
  (
    { className, subtitle, title, count, items, overflowLabel, footerLabel, ...props },
    ref,
  ) => (
    <a
      ref={ref}
      className={cn(
        "relative flex flex-col no-underline text-inherit min-h-[260px]",
        "bg-card border border-border p-7",
        "transition-[transform,box-shadow] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(20,30,50,0.3)]",
        // top accent line
        "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:opacity-50",
        "before:[background:linear-gradient(to_right,transparent,var(--color-secondary),transparent)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-baseline justify-between mb-1.5">
        <div className="font-[family-name:var(--font-mono)] uppercase tracking-[0.22em] text-[0.68rem] text-muted-foreground">
          {subtitle}
        </div>
        <div className="font-[family-name:var(--font-heading)] text-3xl text-muted-foreground leading-none">
          {count}
        </div>
      </div>

      <div className="font-[family-name:var(--font-heading)] text-[1.8rem] leading-[1.1] mb-4 text-foreground">
        {title}
      </div>

      <ul className="m-0 mb-auto p-0 list-none border-t border-dashed border-muted-foreground/40 pt-3.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="text-[0.95rem] text-muted-foreground py-1 border-b border-dotted border-muted-foreground/25 last:border-b-0"
          >
            {it}
          </li>
        ))}
        {overflowLabel && (
          <li className="text-[0.95rem] text-muted-foreground/70 italic py-1">{overflowLabel}</li>
        )}
      </ul>

      <div className="mt-4 pt-3.5 border-t border-muted-foreground/40 flex justify-between font-[family-name:var(--font-mono)] uppercase tracking-[0.22em] text-[0.7rem] text-foreground">
        <span>{footerLabel}</span>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  ),
)
WikiSectionCard.displayName = "WikiSectionCard"

export { WikiSectionCard }
