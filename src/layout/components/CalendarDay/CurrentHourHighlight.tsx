import './CurrentHourHighlight.scss'
import { useContext } from 'react'
import { TimeContext } from '@/layout/components/TimeContextProvider'

type Prop = {
  top: number
}

const CurrentHourHighlight = ({ top }: Prop) => {
  const { currentHourColonMinute } = useContext(TimeContext)
  return (
    <div className="current-hour-highlight" style={{ top: top + 'px' }}>
      <span className="bar"></span>
      <span className="time">{currentHourColonMinute}</span>
    </div>
  )
}

export default CurrentHourHighlight
