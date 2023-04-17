import { it, describe, expect } from 'vitest'

const getOptimalPath = (path) => {
  if (!Array.isArray(path)) throw new Error('Path must be an array')

  return path.reduceRight((prev, current) => {
    return current.map((v, i) => {
      return v + Math.min(prev[i], prev[i + 1])
    })
  })[0]
}

describe('getOptimalPath', () => {
  it('Should be a function', () => {
    expect(typeof getOptimalPath).toBe('function')
  })

  it('Should a throw errr', () => {
    expect(() => getOptimalPath()).toThrow()
  })

  it.skip('Should be a [0, 4, 1]', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual([0, 4, 1])
  })

  it('Should be a 0 --> 4 --> 1', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
  })
})
