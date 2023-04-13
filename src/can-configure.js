export const canConfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformation = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformation[fromLetter]
    console.log(storedLetter)
    if (storedLetter && storedLetter !== toLetter) return false

    transformation[fromLetter] = toLetter
  }

  return true
}
