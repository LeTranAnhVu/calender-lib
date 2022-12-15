import { useEffect, useState } from 'react'
import { getDateIndex, getNumberOfDatesInMonth } from '@/lib/dateTimeApis'
import './CalendarMonth.scss'
import { rangeFromOne } from '@/lib/array/range'
import { DAYS_OF_WEEK } from '@/lib/constants'

type Props = {
  month: number
  year: number
}

function CalendarMonth({ month, year }: Props) {
  const [dates, setDates] = useState<number[]>([])
  const [firstDateIndex, setFirstDateIndex] = useState(0)
  const [today] = useState<Date>(new Date())

  useEffect(() => {
    const noOfDates = getNumberOfDatesInMonth(year, month)
    const dates = rangeFromOne(noOfDates)
    setDates(dates)
    setFirstDateIndex(getDateIndex(year, month, 1))
  }, [month, year])

  const firstDateStyle = {
    gridColumnStart: firstDateIndex
  }

  return (
    <div className="calendar-month-wrapper">
      <div className="calendar-month-header">
        {DAYS_OF_WEEK.map((name) => (
          <div key={name} className="calendar-month-header-day">
            {name}
          </div>
        ))}
      </div>
      <div className="calendar-month">
        {dates.map((date) => {
          if (date == 1) {
            return (
              <div className={`calendar-month-day`} style={firstDateStyle} key={date}>
                {date}
              </div>
            )
          }

          if (
            year === today.getFullYear() &&
            month === today.getMonth() + 1 &&
            date === today.getDate()
          ) {
            return (
              <div className="calendar-month-day today" key={date}>
                {date}
              </div>
            )
          }

          return (
            <div className="calendar-month-day" key={date}>
              {date}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarMonth
