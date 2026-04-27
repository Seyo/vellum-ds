import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary', 'outline', 'destructive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: 'Adventurer', variant: 'default' },
}

export const Secondary: Story = {
  args: { children: 'Frost-touched', variant: 'secondary' },
}

export const Tertiary: Story = {
  args: { children: 'Legendary', variant: 'tertiary' },
}

export const Outline: Story = {
  args: { children: 'Common', variant: 'outline' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="tertiary">Legendary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Cursed</Badge>
    </div>
  ),
}
