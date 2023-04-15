export const dryNumber = (defect, barcode) => {
  if (Number.isNaN(defect) || Number.isNaN(barcode)) throw new Error('Type Error, not is a number')

  if (typeof defect !== 'number' || typeof barcode !== 'number') throw new Error('Type Error')

  const result = []

  for (let i = 0; i <= barcode; i++) {
    const number = String(i)
    if (number.includes(defect)) {
      result.push(i)
    }
  }

  return result
}
