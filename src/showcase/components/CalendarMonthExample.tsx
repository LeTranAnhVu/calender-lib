import { useState } from 'react'
import Calendar from '@/layout/components/CalendarMonth/CalendarMonth'
import styled from 'styled-components'

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
    <MonthExample>
      <Bar>
        <Button
          onClick={setToday}
          disabled={today.getMonth() + 1 === month && today.getFullYear() === year}>
          Today
        </Button>
        <Select
          name="month"
          id="month"
          value={month}
          onChange={({ target: { value } }) => changeMonth(value)}>
          {months.map((m) => (
            <Option key={m} value={m}>
              {m}
            </Option>
          ))}
        </Select>
        <Select
          name="year"
          id="year"
          value={year}
          onChange={({ target: { value } }) => changeYear(value)}>
          {years.map((y) => (
            <Option key={y} value={y}>
              {y}
            </Option>
          ))}
        </Select>
      </Bar>
      <Calendar month={month} year={year} />
    </MonthExample>
  )
}

export default CalendarMonthExample

const MonthExample = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
`

const Bar = styled.h2`
  text-align: right;
`

const Button = styled.button`
  font-size: 14px;
  margin-right: 5px;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.primary};
  &:disabled {
    border: 2px solid ${(props) => props.theme.disabled};
  }
`

const Select = styled.select``
const Option = styled.option``
