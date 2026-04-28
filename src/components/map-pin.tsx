import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Map pin — a positioned button that renders a colored dot (and optional text label).
 * Pure visual: positioning, hover/click state, and tooltip rendering live in the consumer.
 *
 * The pin is absolutely positioned by the consumer via inline `style.left/top` percentages
 * relative to the map container.
 */

const dotVariants = cva(
  "block w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ease-out",
  {
    variants: {
      type: {
        town:     "bg-foreground border-background shadow-[0_0_0_1px_var(--color-foreground),0_0_14px_rgba(122,178,201,0.6)]",
        mountain: "bg-[#567b92] border-background shadow-[0_0_0_1px_#567b92,0_0_14px_rgba(86,123,146,0.5)]",
        faction:  "bg-[#4a5a3f] border-background shadow-[0_0_0_1px_#4a5a3f,0_0_10px_rgba(74,90,63,0.4)]",
        fortress: "bg-[#9a4a3a] border-background shadow-[0_0_0_1px_#9a4a3a,0_0_14px_rgba(107,42,42,0.5)]",
        event:    "bg-[#9a4a3a] border-background shadow-[0_0_0_1px_#9a4a3a,0_0_14px_rgba(107,42,42,0.5)]",
      },
      active: {
        true: "scale-[1.2] shadow-[0_0_0_1px_var(--color-foreground),0_0_0_6px_rgba(122,178,201,0.18),0_0_20px_rgba(122,178,201,0.9)]",
        false: "",
      },
    },
    defaultVariants: { type: "town", active: false },
  },
)

export type MapPinType = NonNullable<VariantProps<typeof dotVariants>["type"]>

export interface MapPinProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    Pick<VariantProps<typeof dotVariants>, "type" | "active"> {
  /** Optional text label rendered under the dot. */
  label?: string
}

const MapPin = React.forwardRef<HTMLButtonElement, MapPinProps>(
  ({ className, type, active, label, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      data-type={type ?? "town"}
      data-active={active ? "true" : undefined}
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2 bg-transparent border-0 p-0 cursor-pointer z-[3] group",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          dotVariants({ type, active }),
          "group-hover:scale-[1.2] group-hover:shadow-[0_0_0_1px_var(--color-foreground),0_0_0_6px_rgba(122,178,201,0.18),0_0_20px_rgba(122,178,201,0.9)]",
        )}
      />
      {label && (
        <span className="absolute top-[120%] left-1/2 -translate-x-1/2 font-[family-name:var(--font-heading)] text-[0.68rem] text-foreground whitespace-nowrap pointer-events-none opacity-80 [text-shadow:0_0_4px_var(--color-background),0_0_8px_var(--color-background)]">
          {label}
        </span>
      )}
      {children}
    </button>
  ),
)
MapPin.displayName = "MapPin"

export { MapPin, dotVariants as mapPinDotVariants }
