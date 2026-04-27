import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 font-heading text-4xl font-semibold tracking-tight text-foreground",
      h2: "scroll-m-16 font-heading text-3xl font-semibold tracking-tight text-foreground",
      h3: "scroll-m-12 font-heading text-2xl font-semibold tracking-tight text-foreground",
      h4: "scroll-m-8 font-heading text-xl font-semibold tracking-tight text-foreground",
      lead: "font-body text-xl text-muted-foreground",
      body: "font-body leading-7",
      small: "font-body text-sm leading-none",
      muted: "font-body text-sm text-muted-foreground",
      code: "font-mono relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm font-semibold",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

const variantElementMap: Record<NonNullable<VariantProps<typeof typographyVariants>["variant"]>, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  small: "small",
  muted: "p",
  code: "code",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const Tag = (as ?? variantElementMap[variant!]) as React.ElementType
    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
