import { isArray } from 'mathjs'

export const gifts = ['cat']

export const wrapping = (gifts) => {
  if (!isArray(gifts)) throw new Error('gifts must be an array')

  const as = '*'
  const wrap = '\n'

  return gifts.map(gift => as.repeat(gift.length + 2) + wrap + '*' + gift + '*' + wrap + as.repeat(gift.length + 2))
}
