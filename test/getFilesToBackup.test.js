import { it, describe, expect } from 'vitest'

const lastBackup = 1546300800

const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000]
]
const getFilesToBackup = (last, change) => {
  if (Number.isNaN(last)) throw new Error('No is a number')

  const reducer = change.reduce((acc, prev) => {
    const [id, lastUpdate] = prev

    if (lastUpdate > last && !acc.includes(id)) {
      acc.push(id)
    }

    return acc
  }, []).sort((a, b) => a - b)

  return reducer
}

describe('getFilesToBackup', () => {
  it('should return an empty array if no files were modified', () => {
    const lastBackup = 1620571200
    const changes = [
      [1, 1620484800],
      [2, 1620398400],
      [3, 1620312000]
    ]

    const filesToBackup = getFilesToBackup(lastBackup, changes)
    expect(filesToBackup).toEqual([])
  })

  it('should return an empty array if all files were modified before the last backup', () => {
    const lastBackup = 1620571200
    const changes = [
      [1, 1620484800],
      [2, 1620398400],
      [3, 1620312000]
    ]
    const filesToBackup = getFilesToBackup(lastBackup, changes)
    expect(filesToBackup).toEqual([])
  })

  it('should return an array with the ids of files modified after the last backup', () => {
    const filesToBackup = getFilesToBackup(lastBackup, changes)
    expect(filesToBackup).toEqual([1, 3])
  })

  it('should return a sorted array of file ids', () => {
    const filesToBackup = getFilesToBackup(lastBackup, changes)
    expect(filesToBackup).toEqual([1, 3])
  })
})
