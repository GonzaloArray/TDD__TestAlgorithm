import { it, describe, expect } from 'vitest'
import { sortToys } from '../src/sortToys'

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

describe('sortToys', () => {
  it('should return a list of array', () => {
    expect(sortToys(toys, positions)).toStrictEqual(['puzzle', 'car', 'ball', 'doll'])
  })
})
