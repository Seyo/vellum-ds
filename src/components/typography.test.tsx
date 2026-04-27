import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Typography } from './typography'

describe('Typography', () => {
  it('renders as a paragraph by default', () => {
    render(<Typography>Body text</Typography>)
    expect(screen.getByText('Body text').tagName).toBe('P')
  })

  it('renders h1 variant as h1 element', () => {
    render(<Typography variant="h1">Heading</Typography>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading')
  })

  it('renders h2 variant as h2 element', () => {
    render(<Typography variant="h2">Subheading</Typography>)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subheading')
  })

  it('renders code variant as code element', () => {
    render(<Typography variant="code">const x = 1</Typography>)
    expect(screen.getByText('const x = 1').tagName).toBe('CODE')
  })

  it('allows overriding the element with as prop', () => {
    render(<Typography as="span">Span text</Typography>)
    expect(screen.getByText('Span text').tagName).toBe('SPAN')
  })

  it('applies additional className', () => {
    render(<Typography className="custom-class">Text</Typography>)
    expect(screen.getByText('Text')).toHaveClass('custom-class')
  })
})
