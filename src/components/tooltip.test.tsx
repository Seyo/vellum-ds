import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip'

describe('Tooltip', () => {
  it('renders trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows content on hover', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Ancient knowledge</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    await user.hover(screen.getByText('Hover me'))
    // Radix renders text in both the visible content and a hidden aria span; use role query
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Ancient knowledge')
  })
})
