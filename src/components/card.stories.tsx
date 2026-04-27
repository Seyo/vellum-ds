import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>The Frostmaiden's Lair</CardTitle>
        <CardDescription>A frigid cavern deep within the Reghed Glacier.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-body text-sm">The air is so cold your breath crystallises before you. The walls glitter with blue-white ice.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Explore</Button>
        <Button size="sm" variant="outline">Retreat</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>Ice Axe +2</CardTitle>
          <Badge variant="tertiary">Legendary</Badge>
        </div>
        <CardDescription>A weapon forged by the frost giant smiths.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-body text-sm">Damage: 1d6+4 slashing. On a hit, deal an extra 1d6 cold damage.</p>
      </CardContent>
    </Card>
  ),
}
