import type { Meta, StoryObj } from "@storybook/react"

import {
  TimelineEventCard,
  TimelineLegend,
  TimelineSessionHeader,
} from "./timeline"

const legendItems = [
  { type: "social" as const, label: "Socialt" },
  { type: "travel" as const, label: "Resa" },
  { type: "invest" as const, label: "Utredning" },
  { type: "combat" as const, label: "Strid" },
  { type: "death" as const,  label: "Dödsfall" },
]

const meta: Meta = {
  title: "Components/Timeline",
}

export default meta

export const Legend: StoryObj = {
  render: () => <TimelineLegend items={legendItems} />,
}

export const SessionHeader: StoryObj = {
  render: () => (
    <div style={{ paddingLeft: 52, maxWidth: 680, margin: "0 auto" }}>
      <TimelineSessionHeader
        label="Session 2 — Dag 16–18 — Caer Konig & Kelvins Cairn"
        href="#"
      />
    </div>
  ),
}

export const EventCardDeath: StoryObj = {
  render: () => (
    <div style={{ paddingLeft: 52, maxWidth: 680, margin: "0 auto", position: "relative" }}>
      <TimelineEventCard
        type="death"
        day="Dag 7"
        icon="🐺"
        title="Aubril dödad av vargar"
        description='Gruppen vaknar och finner Aubril söndertrasad av vargar. <a href="#">Zahir</a> vill spränga kroppen med magi — Nasher sätter stopp.'
      />
    </div>
  ),
}

export const AllEventTypes: StoryObj = {
  render: () => (
    <div style={{ paddingLeft: 52, maxWidth: 680, margin: "0 auto", position: "relative" }}>
      <TimelineEventCard type="social" day="Dag 1"  icon="👥" title="Sällskapet träffas"  description="Kort möte i staden." />
      <TimelineEventCard type="travel" day="Dag 8"  icon="🏘️" title="Ankomst till Bryn Shander" description="Sen ankomst." />
      <TimelineEventCard type="invest" day="Dag 17" icon="🔍" title="Spårar fotspår"      description="Längs Lac Dinneshere." />
      <TimelineEventCard type="combat" day="Dag 18" icon="⚔️" title="Strid i fästningen"  description="Nildar besegrad." />
      <TimelineEventCard type="death"  day="Dag 7"  icon="🐺" title="Aubril dör"          description="Vargar i natten." />
    </div>
  ),
}

export const FullTimelineSlice: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: 24 }}>
      <TimelineLegend items={legendItems} />
      <div
        style={{
          position: "relative",
          maxWidth: 680,
          margin: "0 auto",
          paddingLeft: 52,
        }}
      >
        <TimelineSessionHeader label="Session 1 — Dag 1–16" href="#" />
        <TimelineEventCard type="social" day="Dag 1"  icon="👥" title="Träff i Fireshear" description="Sällskapet möts." />
        <TimelineEventCard type="death"  day="Dag 7"  icon="🐺" title="Aubril dödad"      description="Vargar i natten." />
        <TimelineSessionHeader label="Session 2 — Dag 16–18" href="#" />
        <TimelineEventCard type="combat" day="Dag 18" icon="⚔️" title="Nildar besegrad"   description="Slutstrid i fästningen." />
      </div>
    </div>
  ),
}
