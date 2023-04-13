import { it, describe, expect } from 'vitest'
import { fizzbuz } from '../src/fizzbuzz'

describe('fizzbuz', () => {
  it('deberia ser una funcion', () => {
    expect(typeof fizzbuz).toBe('function')
  })

  it('Si no es un numero, que lanze un error ', () => {
    expect(() => fizzbuz()).toThrow()
  })

  it('Si es un error, que lanze un mensaje de error', () => {
    expect(() => fizzbuz()).toThrow('Provided must be a number')
  })

  it('Si es un NaN, que lanze un error ', () => {
    expect(() => fizzbuz(NaN)).toThrow('Provided must be a number')
  })

  it('Debe de retornar 1', () => {
    expect(fizzbuz(1)).toBe(1)
  })

  it('Debe de retornar fizz, con multiplo de 3', () => {
    expect(fizzbuz(3)).toBe('fizz')
    expect(fizzbuz(6)).toBe('fizz')
    expect(fizzbuz(9)).toBe('fizz')
    expect(fizzbuz(12)).toBe('fizz')
  })

  it('Debe de retornar buzz, con multiplo de 5', () => {
    expect(fizzbuz(5)).toBe('buzz')
    expect(fizzbuz(10)).toBe('buzz')
    expect(fizzbuz(20)).toBe('buzz')
    expect(fizzbuz(25)).toBe('buzz')
  })

  it('Debe de retornar fizzbuzz, con multiplo de 5', () => {
    expect(fizzbuz(15)).toBe('fizzbuzz')
    expect(fizzbuz(30)).toBe('fizzbuzz')
    expect(fizzbuz(45)).toBe('fizzbuzz')
    expect(fizzbuz(60)).toBe('fizzbuzz')
  })
})
