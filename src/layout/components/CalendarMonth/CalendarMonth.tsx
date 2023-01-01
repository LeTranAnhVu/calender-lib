import { useContext, useEffect, useState } from 'react'
import { getDateIndex, getNumberOfDatesInMonth } from '@/lib/dateTimeApis'
import './CalendarMonth.scss'
import { rangeFromOne } from '@/lib/array/range'
import { DAYS_OF_WEEK } from '@/lib/constants'
import { TimeContext } from '@/layout/components/TimeContextProvider'
import CalendarMonthDay from '@/layout/components/CalendarMonth/CalendarMonthDay'

type Props = {
  month: number
  year: number
}

function CalendarMonth({ month, year }: Props) {
  const [dates, setDates] = useState<number[]>([])
  const [firstDateIndex, setFirstDateIndex] = useState(0)
  const { now } = useContext(TimeContext)

  useEffect(() => {
    const noOfDates = getNumberOfDatesInMonth(year, month)
    const dates = rangeFromOne(noOfDates)
    setDates(dates)
    const dateIndex = getDateIndex(year, month, 1)
    setFirstDateIndex(dateIndex === 0 ? 7 : dateIndex)
  }, [month, year])

  const isToday = (date: number): boolean => {
    return year === now.getFullYear() && month === now.getMonth() + 1 && date === now.getDate()
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
        {dates.map((date) => (
          <CalendarMonthDay
            key={date}
            date={date}
            firstDateIndex={firstDateIndex}
            isToday={isToday(date)}
          />
        ))}
      </div>
    </div>
  )
}

export default CalendarMonth
