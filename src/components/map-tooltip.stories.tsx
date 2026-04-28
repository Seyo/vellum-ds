import type { Meta, StoryObj } from "@storybook/react"

import { MapTooltip } from "./map-tooltip"

const meta: Meta<typeof MapTooltip> = {
  title: "Components/MapTooltip",
  component: MapTooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="relative w-[600px] h-[280px] bg-[var(--color-card)] border border-border p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MapTooltip>

const sample = {
  category: "Plats",
  title: "Bryn Shander",
  description:
    'Största staden i Ten-Towns. Flyktingar, tempel till Triaden, sheriffen. Gruppen vilade på <a href="#">The Hooked Knucklehead</a>.',
  linkHref: "#",
  linkText: "Öppna i wikin →",
}

export const Default: Story = {
  args: { ...sample, style: { left: 50, top: 50 } },
}

export const FlippedX: Story = {
  args: { ...sample, flipX: "-100%", style: { left: 480, top: 50 } },
}

export const FlippedY: Story = {
  args: { ...sample, flipY: "-100%", style: { left: 50, top: 220 } },
}

export const FlippedBoth: Story = {
  args: { ...sample, flipX: "-100%", flipY: "-100%", style: { left: 480, top: 220 } },
}

export const English: Story = {
  args: {
    ...sample,
    category: "Location",
    description: 'The largest city in Ten-Towns. Refugees, temples to the Triad, the sheriff.',
    linkText: "Open in wiki →",
    style: { left: 50, top: 50 },
  },
}
