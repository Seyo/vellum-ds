import type { Meta, StoryObj } from "@storybook/react"

import { CharacterCard } from "./character-card"

const meta: Meta<typeof CharacterCard> = {
  title: "Components/CharacterCard",
  component: CharacterCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CharacterCard>

const PORTRAIT =
  "https://seyo.github.io/frostmaiden-campaign/static/assets/portraits/zahir.png"

export const Default: Story = {
  args: {
    portraitSrc: PORTRAIT,
    name: "Zahir",
    role: "Halfling Warlock",
    blurb:
      "Från Calimport. Hög karisma, vass tunga, moraliskt tvivelaktig. Besegrade Nildar med Tasha's Hideous Laughter.",
    readMoreLabel: "Läs mer →",
    href: "#",
    style: { width: 280 },
  },
}

export const English: Story = {
  args: {
    ...Default.args,
    role: "Halfling Warlock",
    blurb:
      "From Calimport. High charisma, sharp tongue, morally questionable. Defeated Nildar with Tasha's Hideous Laughter.",
    readMoreLabel: "Read more →",
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <CharacterCard
        portraitSrc="https://seyo.github.io/frostmaiden-campaign/static/assets/portraits/zahir.png"
        name="Zahir"
        role="Halfling Warlock"
        blurb="Från Calimport. Hög karisma, vass tunga, moraliskt tvivelaktig."
        readMoreLabel="Läs mer →"
        href="#"
      />
      <CharacterCard
        portraitSrc="https://seyo.github.io/frostmaiden-campaign/static/assets/portraits/nasher.png"
        name="Nasher"
        role="Alv Paladin · Tyrs orden"
        blurb="Justiciar av Tyr från Neverwinter. Föll två gånger i strid."
        readMoreLabel="Läs mer →"
        href="#"
      />
      <CharacterCard
        portraitSrc="https://seyo.github.io/frostmaiden-campaign/static/assets/portraits/sork.png"
        name="Sork the Shadow"
        role="Ork Rogue"
        blurb="Avhoppare från Waterdeep via Fireshear. Spanare och bågskytt."
        readMoreLabel="Läs mer →"
        href="#"
      />
      <CharacterCard
        portraitSrc="https://seyo.github.io/frostmaiden-campaign/static/assets/portraits/borc.png"
        name="Borc the Orc"
        role="Goliath Barbar"
        blurb="Uppvuxen bland jättar på Moonshine Isle. Kan teleportera korta sträckor."
        readMoreLabel="Läs mer →"
        href="#"
      />
    </div>
  ),
}
