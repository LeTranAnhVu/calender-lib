import TimeFrame from '@/layout/components/CalendarDay/TimeFrame'
import { Icon } from '../Icons/Icon'

type Props = {
  day: Date
}

const CalendarDay = () => {
  return (
    <div>
      <p>Thursday 15.12.2022</p>
      <Icon icon="star" />
      <div className="time-frame">
        <TimeFrame />
      </div>
    </div>
  )
}

export default CalendarDay
