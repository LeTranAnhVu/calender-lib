import { assert, describe, expect, it } from 'vitest'
import { timeToTopPx } from '../helpers/timeToTopPx';

describe('timeToTopPx', () => {
    it('Throw error when hour is less than 0', () => {
      expect(() => timeToTopPx(-1, 47)).toThrow()
    })

    it('Throw error when hour is equal 0', () => {
        expect(() => timeToTopPx(0, 47)).toThrow()
    })

    it('Return 0 when hour is equal 1', () => {
        expect(timeToTopPx(1, 47)).toEqual(0)
    })

    it('Return the number as desired', () => {
        expect(timeToTopPx(0.75, 47)).toEqual(35.25)
    })
});