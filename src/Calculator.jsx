import { evaluate } from 'mathjs'
import React, { useState } from 'react'

const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0]
]
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const operantions = ['-', '+', '/', '*']

export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleNumber = (number) => () => setValue(value.concat(number))

  return (
    <>
      <h2>Calculator</h2>
      <input type='text' value={value} readOnly />
      {
        rows.map((row, idx) => (
          <div key={idx} role='row'>
            {
              row.map(number => <button onClick={createHandleNumber(number)} key={number}>{number}</button>)
            }
          </div>
        ))
      }

      {
        operantions.map(operation => (
          <button onClick={createHandleNumber(operation)} key={operation}>{operation}</button>
        ))
      }

      <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
    </>
  )
}
