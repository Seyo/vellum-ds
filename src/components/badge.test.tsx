import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './badge'

describe('Badge', () => {
  it('renders with label', () => {
    render(<Badge>Legendary</Badge>)
    expect(screen.getByText('Legendary')).toBeInTheDocument()
  })

  it('renders each variant without error', () => {
    const variants = ['default', 'secondary', 'tertiary', 'outline', 'destructive'] as const
    for (const variant of variants) {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>)
      expect(screen.getByText(variant)).toBeInTheDocument()
      unmount()
    }
  })

  it('applies additional className', () => {
    render(<Badge className="test-class">Badge</Badge>)
    expect(screen.getByText('Badge')).toHaveClass('test-class')
  })
})
