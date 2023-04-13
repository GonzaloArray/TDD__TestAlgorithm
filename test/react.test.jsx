import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, it, describe, expect } from 'vitest'
import { Calculator, equalSign, numbers, operantions } from '../src/Calculator'

describe('Calculator', () => {
  // Limpio el dom
  afterEach(cleanup)

  it('Should render', () => {
    render(<Calculator />)
  })

  it('Should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
  })

  it('Should render number', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('Should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })

  it('should render operantions', () => {
    render(<Calculator />)
  })

  it('should render operantions', () => {
    render(<Calculator />)

    operantions.forEach(operantion => {
      screen.getByText(operantion)
    })
  })

  it('should user input after checking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('12')
  })

  it('should user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
