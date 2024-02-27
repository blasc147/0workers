import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App component tests', () => {
  test('renders checkboxes for countries and select all', () => {
    render(<App />)
    expect(screen.getByLabelText('Select All')).toBeInTheDocument()
    expect(screen.getByLabelText('India')).toBeInTheDocument()
    expect(screen.getByLabelText('USA')).toBeInTheDocument()
    expect(screen.getByLabelText('France')).toBeInTheDocument()
  })

  test('select all checkbox checks all country checkboxes', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('Select All'))
    expect(screen.getByLabelText('India')).toBeChecked()
    expect(screen.getByLabelText('USA')).toBeChecked()
    expect(screen.getByLabelText('France')).toBeChecked()
  })

  test('selecting all countries checkboxes checks select all checkbox', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('India'))
    fireEvent.click(screen.getByLabelText('USA'))
    fireEvent.click(screen.getByLabelText('France'))
    expect(screen.getByLabelText('Select All')).toBeChecked()
  })

  test('deselecting one country checkbox unchecks select all checkbox', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('Select All'))
    fireEvent.click(screen.getByLabelText('India'))
    expect(screen.getByLabelText('Select All')).not.toBeChecked()
  })

  test('deselecting select all checkbox unchecks all country checkboxes', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('Select All'))
    fireEvent.click(screen.getByLabelText('Select All'))
    expect(screen.getByLabelText('India')).not.toBeChecked()
    expect(screen.getByLabelText('USA')).not.toBeChecked()
    expect(screen.getByLabelText('France')).not.toBeChecked()
  })
})
