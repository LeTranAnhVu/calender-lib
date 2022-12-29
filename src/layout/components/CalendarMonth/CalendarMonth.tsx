import { useEffect, useState } from 'react'
import { getDateIndex, getNumberOfDatesInMonth } from '@/lib/dateTimeApis'
import './CalendarMonth.scss'
import { rangeFromOne } from '@/lib/array/range'
import { DAYS_OF_WEEK } from '@/lib/constants'
import styled from 'styled-components'

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
    <Wrapper>
      <Header>
        {DAYS_OF_WEEK.map((name) => (
          <HeaderDay key={name}>{name}</HeaderDay>
        ))}
      </Header>
      <Month>
        {dates.map((date) => {
          if (date == 1) {
            return (
              <DayOfMonth key={date} style={firstDateStyle}>
                {date}
              </DayOfMonth>
            )
          }

          if (
            year === today.getFullYear() &&
            month === today.getMonth() + 1 &&
            date === today.getDate()
          ) {
            return <Today key={date}>{date}</Today>
          }

          return <DayOfMonth key={date}>{date}</DayOfMonth>
        })}
      </Month>
    </Wrapper>
  )
}

export default CalendarMonth

const Wrapper = styled.div``

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-row-gap: 10px;
  grid-column-gap: 2px;
  text-align: center;
  margin-bottom: 10px;
`

const HeaderDay = styled.div``

const Month = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-row-gap: 10px;
  grid-column-gap: 2px;
  text-align: center;
`

const DayOfMonth = styled.div`
  min-width: 44px;
  height: 44px;
  line-height: 2.9em;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:active {
    background: #f9f9f9;
    color: #1a1a1a;
    font-weight: bolder;
  }
`

const Today = styled.div`
  font-weight: bolder;
  background: #f54a4a;
  color: $white;

  min-width: 44px;
  height: 44px;
  line-height: 2.9em;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:active {
    background: #f9f9f9;
    color: #1a1a1a;
    font-weight: bolder;
  }
`
