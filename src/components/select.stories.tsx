import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Choose a class..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Martial</SelectLabel>
          <SelectItem value="fighter">Fighter</SelectItem>
          <SelectItem value="barbarian">Barbarian</SelectItem>
          <SelectItem value="ranger">Ranger</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Spellcaster</SelectLabel>
          <SelectItem value="wizard">Wizard</SelectItem>
          <SelectItem value="cleric">Cleric</SelectItem>
          <SelectItem value="druid">Druid</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
