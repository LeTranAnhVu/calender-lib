import { assert, describe, expect, it } from 'vitest';
import { range, rangeFromOne } from '@/lib/array/range';

describe('range', () => {
  it('Returns the list as desired', () => {
    expect(range(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('Throw error when from is bigger than the to number', () => {
    expect(() => range(2, 1, 1)).toThrow();
  });
});

describe('rangeFromOne', () => {
  it('Returns the list as desired', () => {
    expect(rangeFromOne(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('Throw error when from is bigger than the to number', () => {
    expect(() => rangeFromOne(-1)).toThrow();
  });
});
