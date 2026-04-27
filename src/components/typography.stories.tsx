import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'lead', 'body', 'small', 'muted', 'code'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading1: Story = {
  args: { variant: 'h1', children: 'Rime of the Frostmaiden' },
}

export const Heading2: Story = {
  args: { variant: 'h2', children: 'Chapter I: The Long Dark' },
}

export const Heading3: Story = {
  args: { variant: 'h3', children: 'Icewind Dale Awaits' },
}

export const Lead: Story = {
  args: { variant: 'lead', children: 'A tale of cold, despair, and unlikely heroes.' },
}

export const Body: Story = {
  args: { variant: 'body', children: 'The wind howls across the tundra, carrying with it the cries of wolves and the distant crackling of the glacier.' },
}

export const Muted: Story = {
  args: { variant: 'muted', children: 'Source: Icewind Dale: Rime of the Frostmaiden, p. 12' },
}

export const Code: Story = {
  args: { variant: 'code', children: 'auril.castSpell("Blizzard")' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-xl">
      <Typography variant="h1">Rime of the Frostmaiden</Typography>
      <Typography variant="h2">Chapter I: The Long Dark</Typography>
      <Typography variant="h3">Icewind Dale Awaits</Typography>
      <Typography variant="h4">The Companions</Typography>
      <Typography variant="lead">A tale of cold, despair, and unlikely heroes.</Typography>
      <Typography variant="body">The wind howls across the tundra, carrying with it the cries of wolves and the distant crackling of the glacier. Few dare to venture this far north.</Typography>
      <Typography variant="muted">Source: Icewind Dale: Rime of the Frostmaiden, p. 12</Typography>
      <Typography variant="code">auril.castSpell("Blizzard")</Typography>
    </div>
  ),
}
