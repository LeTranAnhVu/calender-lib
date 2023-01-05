import { useContext, useEffect, useState } from 'react'
import { getDateIndex, getNumberOfDatesInMonth } from '@/lib/dateTimeApis'
import { rangeFromOne } from '@/lib/array/range'
import { DAYS_OF_WEEK } from '@/lib/constants'
import styled from 'styled-components'
import DayOfMonth from '@/layout/components/CalendarMonth/DayOfMonth'
import { TimeContext } from '@/layout/components/contexts/TimeContextProvider'
import Panel from "@/layout/components/Panel";

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
    <Wrapper>
      <Header>
        {DAYS_OF_WEEK.map((name) => (
          <HeaderDay key={name}>{name}</HeaderDay>
        ))}
      </Header>
      <Month>
        {dates.map((date) => (
          <DayOfMonth
            key={date}
            date={date}
            firstDateIndex={firstDateIndex}
            isToday={isToday(date)}
          />
        ))}
      </Month>
    </Wrapper>
  )
}

export default CalendarMonth

const Wrapper = styled(Panel)``

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
