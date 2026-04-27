import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('accepts user input', async () => {
    const user = userEvent.setup()
    render(<Input placeholder="Type here" />)
    const input = screen.getByPlaceholderText('Type here')
    await user.type(input, 'Hello Faerûn')
    expect(input).toHaveValue('Hello Faerûn')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled placeholder="Disabled" />)
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} placeholder="Change me" />)
    await user.type(screen.getByPlaceholderText('Change me'), 'a')
    expect(handleChange).toHaveBeenCalled()
  })
})
