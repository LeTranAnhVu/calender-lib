/**
 * Convert a given hour as an argument and return number of pixel of the height value
 * @param duration duration of time
 * @param pixelPerHour number of pixel per hour
 * @returns
 */
export const durationToHeightPx = (duration: number, pixelPerHour: number): number => {
  if (duration <= 0) {
    throw new Error('The duration argument must be greater than 0!')
  }

  return duration * pixelPerHour
}
