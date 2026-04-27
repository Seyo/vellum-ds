import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from './dialog'
import { Button } from './button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Scroll</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>The Prophecy of Rime</DialogTitle>
          <DialogDescription>
            An ancient scroll speaks of a darkness that descends from the north, where Auril holds the sun at bay.
          </DialogDescription>
        </DialogHeader>
        <p className="font-body text-sm">The cold that grips Icewind Dale grows stronger each passing tenday. Only the bravest adventurers dare venture into the tundra.</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close Scroll</Button>
          </DialogClose>
          <Button>Accept Quest</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
