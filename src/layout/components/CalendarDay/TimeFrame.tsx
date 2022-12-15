import { range, rangeFromOne } from '@/lib/array/range'
import './TimeFrame.scss'
import { useRef } from 'react'

const hours = range(0, 23, 1)

const plans = [
  {
    title: 'study',
    from: 3,
    to: 4.5
  }
]

const TimeFrame = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={wrapperRef} className="time-frame-wrapper">
      <div className="task">
        <p>title</p>
      </div>
      {hours.map((hour) => (
        <div key={hour} className="time-frame-element">
          <div className="hour">
            <span>{`${hour}.00`}</span>
          </div>
          <div className="content" />
        </div>
      ))}

      <div className="time-frame-element">
        <div className="hour">
          <span>{`0.00`}</span>
        </div>
        <div className="content" />
      </div>
    </div>
  )
}

export default TimeFrame
