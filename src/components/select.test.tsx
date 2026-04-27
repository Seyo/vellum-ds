import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './select'

describe('Select', () => {
  it('renders the trigger with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Choose one')).toBeInTheDocument()
  })
})
