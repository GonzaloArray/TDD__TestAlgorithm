import { it, describe, expect } from 'vitest'
import { canConfigure } from '../src/can-configure'

describe('canReconfigure', () => {
  it('Should throw if second parameter is missing', () => {
    expect(() => canConfigure('asdf')).toThrow()
  })

  it('Should return a boolean', () => {
    expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('Should return false if strings provided have different length', () => {
    expect(canConfigure('abc', 'de')).toBe(false)
  })

  it('Should return false if strings provided have different length even with same unique letters', () => {
    expect(canConfigure('abb', 'de')).toBe(false)
  })

  it('Should return false if strings provided have a different number of unique letters', () => {
    expect(canConfigure('abc', 'dde')).toBe(false)
  })

  it('Should return false if strings has a different order of transformation', () => {
    expect(canConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
