import { test, describe, expect } from 'vitest'
import { durationToHeightPx } from '../helpers/durationToHeightPx'

const basCases = [-1, 0]
const cases = [
  [0.5, 23.5],
  [2, 94]
]
describe('durationToHeightPx', () => {
  test.each(basCases)('Throw error when hour is less than or equal to 0', (input: number) => {
    expect(() => durationToHeightPx(input, 47)).toThrow()
  })

  test.each(cases)('Return the number as desired', (input: number, result: number) => {
    expect(durationToHeightPx(input, 47)).toEqual(result)
  })
})
