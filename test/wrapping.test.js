import { it, describe, expect } from 'vitest'
import { gifts, wrapping } from '../src/wrapping'

describe('Wrapping', () => {
  it('should be a function', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('should throw if not a array', () => {
    expect(() => wrapping('2fsd')).toThrowError()
  })

  it('should throw if not a array', () => {
    expect(() => wrapping()).toThrowError()
  })

  it('should have a length 1', () => {
    expect(gifts).toHaveLength(1)
  })

  it('should be a return array', () => {
    expect(wrapping(gifts)).toStrictEqual(['*****\n*cat*\n*****'])
  })
})
