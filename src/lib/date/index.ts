export function pad2(n: number): string {
  return (n < 10 ? '0' : '') + n
}

export function formatHourColonMinute(date: Date) {
  return `${pad2(date.getHours())}: ${pad2(date.getMinutes())}`
}

export function minuteToHour(minute: number): number {
  return minute / 60
}

export function dateToHour(date: Date): number {
  return date.getHours() + minuteToHour(date.getMinutes())
}
