import { assert, describe, expect, it } from 'vitest'
import { getDateIndex, getNumberOfDatesInMonth, getDateIndexesInMonth, getDateIndexesInYear } from '../dateTimeApis';

describe('getDateIndex', () => {
    it('Return index 1 as monday on 12/09/2022', () => {
      expect(getDateIndex(2022, 9, 12)).toEqual(1)
    })
});

describe('getNumberOfDatesInMonth', () => {
  it('Return number 30 days in February, 2022', () => {
    expect(getNumberOfDatesInMonth(2022, 2)).toEqual(28)
  })
});

describe('getDateIndexesInMonth', () => {
  it('Return list of date indexes in June, 2022', () => {
    expect(getDateIndexesInMonth(2022, 6)).toEqual({"0": [5,12,19,26], "1": [6, 13, 20, 27], "2": [7, 14, 21, 28], "3": [1, 8, 15, 22, 29], "4": [2, 9, 16, 23, 30], "5": [3, 10, 17, 24], "6": [4, 11, 18, 25]})
  })
});

describe('getDateIndexesInYear', () => {
  it('Return list of keys in object indexes in 2022', () => {
    expect(Object.keys(getDateIndexesInYear(2022))).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"])
  })
});