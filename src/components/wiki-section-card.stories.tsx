import type { Meta, StoryObj } from "@storybook/react"

import { WikiSectionCard } from "./wiki-section-card"

const meta: Meta<typeof WikiSectionCard> = {
  title: "Components/WikiSectionCard",
  component: WikiSectionCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof WikiSectionCard>

export const Default: Story = {
  args: {
    title: "NPC:er",
    subtitle: "Levande, döda och försvunna",
    count: 13,
    items: ["Jarthra", "Trovus", "Glenn", "Foxes in the Snow", "Keegan Valryn"],
    overflowLabel: "+ 8 fler",
    footerLabel: "Öppna kapitel",
    href: "#",
    style: { width: 360 },
  },
}

export const NoOverflow: Story = {
  args: {
    title: "Sessioner",
    subtitle: "Dag för dag, session för session",
    count: 2,
    items: [
      "Session 01 — Vägen till Caer Konig",
      "Session 02 — Caer Konig: Fästningen vid Kelvins Cairn",
    ],
    footerLabel: "Öppna kapitel",
    href: "#",
    style: { width: 360 },
  },
}

export const English: Story = {
  args: {
    title: "NPCs",
    subtitle: "Living, dead, and missing",
    count: 13,
    items: ["Jarthra", "Trovus", "Glenn", "Foxes in the Snow", "Keegan Valryn"],
    overflowLabel: "+ 8 more",
    footerLabel: "Open chapter",
    href: "#",
    style: { width: 360 },
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1100px]">
      <WikiSectionCard
        title="NPC:er"
        subtitle="Levande, döda och försvunna"
        count={13}
        items={["Jarthra", "Trovus", "Glenn", "Foxes in the Snow", "Keegan Valryn"]}
        overflowLabel="+ 8 fler"
        footerLabel="Öppna kapitel"
        href="#"
      />
      <WikiSectionCard
        title="Platser"
        subtitle="Städer, ruiner och fästningar"
        count={7}
        items={["Icewind Dale", "Bryn Shander", "Caer Konig", "Easthaven", "Fireshear"]}
        overflowLabel="+ 2 fler"
        footerLabel="Öppna kapitel"
        href="#"
      />
      <WikiSectionCard
        title="Sessioner"
        subtitle="Dag för dag, session för session"
        count={2}
        items={[
          "Session 01 — Vägen till Caer Konig",
          "Session 02 — Caer Konig: Fästningen vid Kelvins Cairn",
        ]}
        footerLabel="Öppna kapitel"
        href="#"
      />
    </div>
  ),
}
