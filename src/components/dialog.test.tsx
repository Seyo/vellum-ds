import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
} from './dialog'

function TestDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>The Prophecy</DialogTitle>
          <DialogDescription>An ancient message.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

describe('Dialog', () => {
  it('is closed by default', () => {
    render(<TestDialog />)
    expect(screen.queryByText('The Prophecy')).not.toBeInTheDocument()
  })

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<TestDialog />)
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('The Prophecy')).toBeInTheDocument()
    expect(screen.getByText('An ancient message.')).toBeInTheDocument()
  })

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<TestDialog />)
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('The Prophecy')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByText('The Prophecy')).not.toBeInTheDocument()
  })
})
