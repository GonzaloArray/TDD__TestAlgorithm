import { it, describe, expect } from 'vitest'
import { dryNumber } from '../src/dryNumber'

describe('dryNumber', () => {
  it('should be a function', () => {
    expect(typeof dryNumber).toBe('function')
  })

  it('should throw an error', () => {
    expect(() => dryNumber('pineapples')).toThrow()
  })

  it.skip('should be a return array', () => {
    expect(dryNumber(1, 2)).toEqual([])
  })

  it('should be a return strict array of values', () => {
    expect(dryNumber(0, 0)).toStrictEqual([0])
  })
})
