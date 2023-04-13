export const fizzbuz = (number) => {
  if (typeof number !== 'number') throw new Error('Provided must be a number')
  if (Number.isNaN(number)) throw new Error('Provided must be a number')

  const multiples = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiples)
    .forEach(([multiples, valor]) => {
      if (number % multiples === 0) output += valor
    })

  return output === '' ? number : output
}
