import TimeFrame from '@/layout/components/CalendarDay/TimeFrame'

type Props = {
  day: Date
}

const CalendarDay = () => {
  return (
    <div>
      <p>Thursday 15.12.2022</p>
      <div className="time-frame">
        <TimeFrame />
      </div>
    </div>
  )
}

export default CalendarDay
