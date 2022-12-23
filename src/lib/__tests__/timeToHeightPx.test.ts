import { assert, describe, expect, it } from 'vitest'
import { durationToHeightPx } from '../helpers/durationToHeightPx';

describe('durationToHeightPx', () => {
    it('Throw error when hour is less than 0', () => {
      expect(() => durationToHeightPx(-1, 47)).toThrow()
    })

    it('Throw error when hour is equal 0', () => {
        expect(() => durationToHeightPx(0, 47)).toThrow()
    })

    it('Return the number as desired', () => {
        expect(durationToHeightPx(0.5, 47)).toEqual(23.5)
    })
});
