import { useState } from 'react'
import Calendar from '@/layout/components/CalendarMonth/CalendarMonth'
import './CalendarMonthExample.scss'

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const years = [2019, 2020, 2021, 2022, 2023, 2024]

function CalendarMonthExample() {
  const [today] = useState<Date>(new Date())
  const [month, setMonth] = useState(today.getMonth() + 1) // TODO refactor later
  const [year, setYear] = useState(today.getFullYear())
  const changeMonth = (value: string) => {
    const month = parseInt(value)
    setMonth(month)
  }

  const changeYear = (value: string) => {
    const year = parseInt(value)
    setYear(year)
  }

  const setToday = () => {
    setMonth(today.getMonth() + 1)
    setYear(today.getFullYear())
  }

  return (
    <div className="calendar-month-example">
      <h2 className="h2">
        <button
          onClick={setToday}
          disabled={today.getMonth() + 1 === month && today.getFullYear() === year}>
          Today
        </button>
        <select
          name="month"
          id="month"
          value={month}
          onChange={({ target: { value } }) => changeMonth(value)}>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          name="year"
          id="year"
          value={year}
          onChange={({ target: { value } }) => changeYear(value)}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </h2>
      <Calendar month={month} year={year} />
    </div>
  )
}

export default CalendarMonthExample
