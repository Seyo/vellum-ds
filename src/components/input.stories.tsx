import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter your name...' },
}

export const WithValue: Story = {
  args: { defaultValue: 'Drizzt Do\'Urden', placeholder: 'Character name' },
}

export const Disabled: Story = {
  args: { disabled: true, value: 'Cannot edit', readOnly: true },
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Secret password...' },
}
