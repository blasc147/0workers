import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox Component', () => {
  test('renders checkbox component', () => {
    render(
      <Checkbox label='Test Checkbox' checked={false} onChange={() => {}} />
    )
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument()
  })

  test('toggle checkbox', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox label='Test Checkbox' checked={false} onChange={handleChange} />
    )
    const checkbox = screen.getByLabelText('Test Checkbox')
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
