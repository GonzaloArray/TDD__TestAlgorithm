import { it, describe, expect } from 'vitest'

const checkStepNumber = (systemNames, stepNumbers) => {
  if (!Array.isArray(stepNumbers)) throw new Error('Step number must be an array')
  if (!Array.isArray(systemNames)) throw new Error('Systems number must be an array')

  return systemNames.every((e, i) => {
    return stepNumbers[i] < stepNumbers[i + systemNames.slice(i + 1).indexOf(e) + 1
    ] + !(systemNames.lastIndexOf(e) - i)
  }
  )
}

describe('checkStepNumber', () => {
  it('Should be a function', () => {
    expect(typeof checkStepNumber).toBe('function')
  })

  it('Should throw an error if the step number is not a array', () => {
    expect(() => checkStepNumber()).toThrow()
  })

  it.skip('Should be a tree_1 - [1, 2]', () => {
    expect(checkStepNumber(['tree_1', 'tree_1'], [33, 54])).toEqual([1, 2])
  })

  it.skip('Should be a tree_1 - [33, 44]', () => {
    expect(checkStepNumber(['tree_1', 'tree_1'], [33, 54])).toEqual([33, 44])
  })

  it('Should return true if the number is a valid step number', () => {
    expect(checkStepNumber(['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'], [1, 33, 10, 2, 44, 20])).toBe(true)
  })

  it('Should return true if the number is a valid step number', () => {
    expect(checkStepNumber(['house', 'house', 'tree_1', 'tree_1', 'house', 'tree_2', 'tree_2', 'tree_3'], [5, 2, 1, 2, 3, 4, 5, 6])).toBe(false)
  })

  it('Should return true if the number is a valid step number', () => {
    expect(checkStepNumber(['tree_1', 'tree_1', 'house'], [2, 1, 10])).toBe(false)
  })
})
