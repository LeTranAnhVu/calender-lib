import { test, describe, expect } from 'vitest'
import { timeToTopPx } from '../helpers/timeToTopPx'

const basCases = [-1, 0]
const cases = [
  [1, 0],
  [0.75, 35.25],
  [4, 188]
]
describe('timeToTopPx', () => {
  test.each(basCases)('Throw error when hour is less than or equal to 0', (input: number) => {
    expect(() => timeToTopPx(input, 47)).toThrow()
  })

  test.each(cases)('Return the number as desired', (input: number, result: number) => {
    expect(timeToTopPx(input, 47)).toEqual(result)
  })
})
