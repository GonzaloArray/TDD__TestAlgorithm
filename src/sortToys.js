export const sortToys = (toys, positions) => {
  const posX = positions.map(v => v).sort((a, b) => a - b)

  const result = posX.map((ye) => {
    return positions
      .map((pos, i) => ye === pos && toys[i])
      .filter(value => value !== false)
  })

  return result.flat()
}
