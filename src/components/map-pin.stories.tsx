import type { Meta, StoryObj } from "@storybook/react"

import { MapPin } from "./map-pin"

const meta: Meta<typeof MapPin> = {
  title: "Components/MapPin",
  component: MapPin,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["town", "mountain", "faction", "fortress", "event"],
    },
    active: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="relative w-[280px] h-[180px] bg-[var(--color-card)] border border-border">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MapPin>

export const Town: Story = {
  args: {
    type: "town",
    label: "Bryn Shander",
    style: { left: "50%", top: "50%" },
    "aria-label": "Bryn Shander",
  },
}

export const Mountain: Story = {
  args: { type: "mountain", style: { left: "50%", top: "50%" }, "aria-label": "Kelvins Cairn" },
}

export const Faction: Story = {
  args: { type: "faction", style: { left: "50%", top: "50%" }, "aria-label": "Dvärgadalen" },
}

export const Fortress: Story = {
  args: {
    type: "fortress",
    label: "Sunblight's Fortress",
    style: { left: "50%", top: "50%" },
    "aria-label": "Sunblight's Fortress",
  },
}

export const Event: Story = {
  args: { type: "event", label: "Aubril's Fate", style: { left: "50%", top: "50%" } },
}

export const Active: Story = {
  args: { type: "town", active: true, style: { left: "50%", top: "50%" } },
}

export const AllTypes: Story = {
  render: () => (
    <>
      <MapPin type="town"     style={{ left: "16%", top: "50%" }} aria-label="Town" />
      <MapPin type="mountain" style={{ left: "33%", top: "50%" }} aria-label="Mountain" />
      <MapPin type="faction"  style={{ left: "50%", top: "50%" }} aria-label="Faction" />
      <MapPin type="fortress" style={{ left: "67%", top: "50%" }} aria-label="Fortress" />
      <MapPin type="event"    style={{ left: "84%", top: "50%" }} aria-label="Event" />
    </>
  ),
}
