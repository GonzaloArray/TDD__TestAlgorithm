import { it, expect, describe } from 'vitest'

const distance = 1
const sleighs = [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 }
]
const selectSleigh = (distanc, sleigh) => {
  if (Number.isNaN(distanc)) throw new Error('Not valid')
  if (!Array.isArray(sleigh)) throw new Error('Not valid')

  const energie = 20

  const data = sleigh.reduce((acc, prev) => {
    const result = prev.consumption * distanc
    if (result <= energie) {
      if (result > acc.consumption) {
        acc.name = prev.name
        acc.consumption = result
      }
    }
    return acc
  }, { name: '', consumption: 0 }).name

  return data !== '' ? data : null
}
// Unica bateria de 20w
describe('selectSleigh', () => {
  it('Should be a function', () => {
    expect(typeof selectSleigh).toBe('function')
  })

  it('Should throw an error if ', () => {
    expect(() => selectSleigh('adsf', 'sdaf')).toThrow()
  })

  it('Should be a (W)', () => {
    expect()
  })

  it('Should be a string', () => {
    expect(selectSleigh(distance, sleighs)).toBe('TMChein')
  })

  it('Should be a string', () => {
    expect(selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBe(null)
  })

  it('Should be a string', () => {
    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
    ).toBe('SamarJaffal')
  })
})
