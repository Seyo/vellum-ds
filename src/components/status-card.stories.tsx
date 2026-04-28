import type { Meta, StoryObj } from "@storybook/react"

import { StatusCard } from "./status-card"

const meta: Meta<typeof StatusCard> = {
  title: "Components/StatusCard",
  component: StatusCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof StatusCard>

const sv = {
  day: 18,
  dayLabel: "Kampanjdag",
  latestLabel: "Senast i kampanjen",
  quote: '"Min fader rider på en drakes rygg och ska förgöra alla Ten-Towns."',
  attribution: "— Nildar Sunblight, dödsord",
  questions: [
    "⚠ Borc är medvetslös — stabiliserad av Zahir, men ej uppvaknad.",
    "Var varelsen i cellen verkligen Eevie?",
    "Vad har hänt med Keegan Valryn och The Burning Hammers?",
    "Jarthras pärlor är ännu inte återlämnade…",
  ],
}

const en = {
  day: 18,
  dayLabel: "Campaign day",
  latestLabel: "Latest in the campaign",
  quote: '"My father rides on a dragon\'s back and will destroy all of Ten-Towns."',
  attribution: "— Nildar Sunblight, dying words",
  questions: [
    "⚠ Borc is unconscious — stabilized by Zahir, but not yet awoken.",
    "Was the creature in the cell really Eevie?",
    "What happened to Keegan Valryn and The Burning Hammers?",
    "Jarthra's pearls have not yet been returned…",
  ],
}

export const Swedish: Story = {
  args: { ...sv },
}

export const English: Story = {
  args: { ...en },
}

export const NoQuestions: Story = {
  args: { ...sv, questions: [] },
}

export const SingleDigitDay: Story = {
  args: { ...sv, day: 3, questions: sv.questions.slice(0, 1) },
}
