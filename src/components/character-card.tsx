import * as React from "react"

import { cn } from "@/lib/utils"

export interface CharacterCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  portraitSrc: string
  name: string
  role: string
  blurb: string
  readMoreLabel: string
}

/**
 * Character card from the Frostmaiden landing — portrait with frost overlay,
 * role label, name in display font, blurb, and a read-more link footer.
 * Renders as an anchor; consumer provides href.
 */
const CharacterCard = React.forwardRef<HTMLAnchorElement, CharacterCardProps>(
  ({ className, portraitSrc, name, role, blurb, readMoreLabel, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "group flex flex-col no-underline text-inherit",
        "bg-card border border-border overflow-hidden",
        "shadow-[0_6px_18px_-8px_rgba(20,30,50,0.2)]",
        "transition-[transform,box-shadow] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(20,30,50,0.35)]",
        className,
      )}
      {...props}
    >
      <div className="relative overflow-hidden bg-muted aspect-[3/3.4]">
        <img
          src={portraitSrc}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover block [filter:sepia(0.1)_contrast(0.98)] dark:[filter:sepia(0.05)_brightness(0.85)_contrast(1)_saturate(0.9)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 40% at 50% 0%, rgba(199,221,232,0.55), transparent 60%), radial-gradient(ellipse 80% 30% at 50% 100%, rgba(199,221,232,0.35), transparent 60%)",
          }}
        />
      </div>

      <div className="p-5 pb-6">
        <div className="font-[family-name:var(--font-mono)] uppercase tracking-[0.22em] text-[0.68rem] text-muted-foreground mb-1">
          {role}
        </div>
        <div className="font-[family-name:var(--font-heading)] text-2xl mb-2 text-foreground">
          {name}
        </div>
        <p className="text-[0.9rem] leading-[1.45] text-muted-foreground m-0 mb-3.5">
          {blurb}
        </p>
        <div className="font-[family-name:var(--font-mono)] uppercase tracking-[0.22em] text-[0.7rem] text-foreground">
          {readMoreLabel}
        </div>
      </div>
    </a>
  ),
)
CharacterCard.displayName = "CharacterCard"

export { CharacterCard }
