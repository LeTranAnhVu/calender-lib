/**
 * Return the list of number from given number to given number with given step
 * @param from
 * @param to
 * @param step
 */
export function range(from: number, to: number, step: number): number[] {
  const bucket: number[] = [];
  if (from > to) {
    throw Error('The range function does not support for reserve range');
  }

  for (let i = from; i <= to; i += step) {
    bucket.push(i);
  }

  return bucket;
}

/**
 * Return the list of number from 1 to given number with the step is 1
 * @param to: the upper range
 */
export function rangeFromOne(to: number): number[] {
  const from = 1;
  const step = 1;
  return range(from, to, step);
}
