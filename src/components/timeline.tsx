import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Timeline primitives — visual building blocks for the Frostmaiden vertical timeline.
 *   <TimelineLegend>          colored dots + labels for each event type
 *   <TimelineSessionHeader>   session row (link or text) with a horizontal divider
 *   <TimelineEventCard>       single event card with type-colored left border + dot
 *
 * Grouping, ordering, and the vertical guide line live in the consumer.
 */

export type TimelineEventType =
  | "social"
  | "travel"
  | "invest"
  | "combat"
  | "death"

const EVENT_COLORS: Record<TimelineEventType, string> = {
  social: "#8e44ad",
  travel: "#2980b9",
  invest: "#27ae60",
  combat: "#d4762a",
  death:  "#c0392b",
}

// ── Legend ─────────────────────────────────────────────────────────────────

export interface TimelineLegendItem {
  type: TimelineEventType
  label: string
}

export interface TimelineLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineLegendItem[]
}

const TimelineLegend = React.forwardRef<HTMLDivElement, TimelineLegendProps>(
  ({ className, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap gap-x-[1.1rem] gap-y-[0.4rem] max-w-[680px] mx-auto mb-6 pl-[52px]",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.type}
          className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.1em] text-muted-foreground"
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: EVENT_COLORS[item.type] }}
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  ),
)
TimelineLegend.displayName = "TimelineLegend"

// ── Session header ─────────────────────────────────────────────────────────

export interface TimelineSessionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  /** If provided, the label becomes a link. */
  href?: string
}

const TimelineSessionHeader = React.forwardRef<HTMLDivElement, TimelineSessionHeaderProps>(
  ({ className, label, href, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center gap-2.5 my-[1.8rem] mb-[1.1rem] -ml-9",
        "font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.2em] uppercase text-secondary",
        // dividers either side of the label
        "before:content-[''] before:flex-[0_0_24px] before:h-px before:bg-border",
        "after:content-[''] after:flex-1 after:h-px after:bg-border",
        className,
      )}
      {...props}
    >
      {href ? (
        <a
          href={href}
          className="text-inherit no-underline hover:text-[color:var(--color-secondary)]/80 hover:underline underline-offset-[3px]"
        >
          {label}
        </a>
      ) : (
        <span>{label}</span>
      )}
    </div>
  ),
)
TimelineSessionHeader.displayName = "TimelineSessionHeader"

// ── Event card ─────────────────────────────────────────────────────────────

export interface TimelineEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: TimelineEventType
  day: string
  icon: string
  title: string
  /** Description body. May contain HTML; rendered via dangerouslySetInnerHTML. */
  description: string
}

const TimelineEventCard = React.forwardRef<HTMLDivElement, TimelineEventCardProps>(
  ({ className, type, day, icon, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative mb-3.5",
        // Dot rendered via ::before pseudo (positioned at -16px to sit on the vertical guide line)
        "before:content-[''] before:absolute before:-left-4 before:top-4 before:w-2.5 before:h-2.5 before:rounded-full",
        "before:border-2 before:border-[color:var(--color-background)] before:-translate-x-1/2 before:z-[1]",
        className,
      )}
      style={{
        ["--tl-color" as string]: EVENT_COLORS[type],
        ...props.style,
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute -left-4 top-4 w-2.5 h-2.5 rounded-full border-2 border-[color:var(--color-background)] -translate-x-1/2 z-[1]"
        style={{ background: EVENT_COLORS[type] }}
      />
      <div
        className="bg-card border-l-[3px] rounded-r-[3px] px-4 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
        style={{ borderLeftColor: EVENT_COLORS[type] }}
      >
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.08em] text-muted-foreground whitespace-nowrap">
            {day}
          </span>
          <span className="text-[0.88rem]">{icon}</span>
          <span className="text-[0.95rem] font-semibold leading-[1.3] text-foreground">
            {title}
          </span>
        </div>
        <div
          className="text-[0.86rem] leading-[1.55] text-muted-foreground mt-1.5 [&_a]:text-secondary [&_a]:no-underline hover:[&_a]:underline [&_em]:italic [&_em]:text-secondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  ),
)
TimelineEventCard.displayName = "TimelineEventCard"

export {
  TimelineLegend,
  TimelineSessionHeader,
  TimelineEventCard,
}
