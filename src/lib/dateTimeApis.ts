/**
 * Convert the well-known calendar month (1..12) to Javascript month (0..11)
 * @param calendarMonth
 */
const toJsMonth = (calendarMonth: number): number => {
    if (calendarMonth < 1 || calendarMonth > 12) {
        throw Error("CalendarMonth month invalid!")
    }

    return calendarMonth - 1
}

// ================================= Public Functions =================================
/**
 * Returns the index of a day in a week (0..6) while 0 is Sunday and 6 is Saturday.
 * @param year
 * @param month from 1 to 12
 * @param date from 1 to 31
 */
export const getDateIndex = (year: number, month: number, date: number): number => {
    return new Date(year, toJsMonth(month), date).getDay()
}

/**
 * Return the number of days in specific month and year.
 * @param year
 * @param month from 1 to 12
 */
export const getNumberOfDatesInMonth = (year: number, month: number): number => {
    const overDate = 40
    return overDate - new Date(year, toJsMonth(month), overDate).getDate()
}

/**
 * Get the list of date indexes in a specific month in year
 * Return format is an object { index: [dates] }
 * @param year
 * @param month 1..12
 */
export const getDateIndexesInMonth = (year: number, month: number): Record<number, number[]> => {
    let datesObj: Record<number, number[]> = {}
    const numberOfDates = getNumberOfDatesInMonth(year, month)
    for (let i = 1; i <= numberOfDates; i++) {
        const index = getDateIndex(year, month, i)
        datesObj[index] = datesObj[index] ? [...datesObj[index], i]: [i]
    }

    return datesObj
}

/**
 * Get the list of date indexes in a specific year
 * Return format is an object { month: { index: [dates] } }
 * @param year
 */
export const getDateIndexesInYear = (year: number): Record<number, Record<number, number[]>> => {
    let datesObj: Record<number, Record<number, number[]>> = {}
    for (let month = 1; month <= 12; month++) {
        datesObj[month] = getDateIndexesInMonth(year, month)
    }
    
    return datesObj
}