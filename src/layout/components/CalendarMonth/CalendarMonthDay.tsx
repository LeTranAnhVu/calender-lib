import { useEffect, useState } from 'react'
import './CalendarMonth.scss'
type Props = {
  date: number
  isToday: boolean
  firstDateIndex: number // from 1 to 7 - Mon to Sun
}
function CalendarMonthDay({ date, isToday, firstDateIndex }: Props) {
  const [className, setClassName] = useState<string>('')
  useEffect(() => {
    let cn = 'calendar-month-day'
    if (isToday) {
      cn += ' today'
    }

    setClassName(cn)
  }, [date, isToday])

  return (
    <div className={className} style={date === 1 ? { gridColumnStart: firstDateIndex } : {}}>
      {date}
    </div>
  )
}

export default CalendarMonthDay
