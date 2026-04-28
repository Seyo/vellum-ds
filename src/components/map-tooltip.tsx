import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Map tooltip — fixed-width card with decorative L-corners, used as a popup on map pins.
 * Pure visual; positioning, edge-flip math, and portal mounting live in the consumer.
 *
 * Use the `flipX` / `flipY` props to invert the translate origin when the pin is near
 * the right/bottom edge of the map (pass "-100%" to flip).
 */

export interface MapTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase category label (e.g. "Plats" / "Location"). */
  category: string
  /** Display title (e.g. the pin's name). */
  title: string
  /** Description body. May contain HTML; rendered via dangerouslySetInnerHTML. */
  description: string
  /** Wiki link href + label. */
  linkHref: string
  linkText: string
  /** Edge-flip offsets, applied via CSS variables. Default "0%". */
  flipX?: string
  flipY?: string
}

const MapTooltip = React.forwardRef<HTMLDivElement, MapTooltipProps>(
  ({ className, category, title, description, linkHref, linkText, flipX = "0%", flipY = "0%", style, ...props }, ref) => (
    <div
      ref={ref}
      role="dialog"
      className={cn(
        "absolute w-[280px] z-[5]",
        // Position offset: flip by full width/height when near edges, then nudge outward by 18px.
        "transform-[translate(var(--vds-flip-x,0%),var(--vds-flip-y,0%))_translate(calc(18px_+_(var(--vds-flip-x,0%)_*_-0.2)),18px)]",
        "bg-card text-card-foreground",
        "border border-foreground",
        "px-5 pt-4.5 pb-4",
        "shadow-[0_18px_38px_-10px_rgba(20,30,50,0.4),0_0_0_4px_var(--color-card),0_0_0_5px_var(--color-border)]",
        "animate-in fade-in slide-in-from-top-1 duration-200",
        className,
      )}
      style={{
        ["--vds-flip-x" as string]: flipX,
        ["--vds-flip-y" as string]: flipY,
        ...style,
      }}
      {...props}
    >
      <span aria-hidden="true" className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-foreground border-r-0 border-b-0" />
      <span aria-hidden="true" className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-foreground border-l-0 border-b-0" />
      <span aria-hidden="true" className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-foreground border-r-0 border-t-0" />
      <span aria-hidden="true" className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-foreground border-l-0 border-t-0" />

      <div className="font-[family-name:var(--font-mono)] uppercase tracking-[0.26em] text-[0.7rem] text-muted-foreground mb-1.5">
        {category}
      </div>
      <div className="font-[family-name:var(--font-heading)] text-[1.4rem] leading-[1.1] mb-2 text-foreground">
        {title}
      </div>
      <p
        className="text-[0.9rem] leading-[1.45] text-muted-foreground m-0 mb-3.5 [&_a]:text-secondary [&_a]:no-underline hover:[&_a]:underline [&_em]:italic [&_em]:text-secondary"
        // description originates from controlled JSON in the consumer; safe to render as HTML.
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <a
        href={linkHref}
        className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[0.72rem] text-foreground no-underline border-b border-foreground pb-0.5 hover:text-secondary hover:border-secondary"
      >
        {linkText}
      </a>
    </div>
  ),
)
MapTooltip.displayName = "MapTooltip"

export { MapTooltip }
