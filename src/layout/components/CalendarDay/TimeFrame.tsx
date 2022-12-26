import { range } from '@/lib/array/range'
import './TimeFrame.scss'
import React, { useContext, useEffect, useRef, useState } from 'react'
import CurrentHourHighlight from '@/layout/components/CalendarDay/CurrentHourHighlight'
import { TimeContext } from '@/layout/components/TimeContextProvider'

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
  const [currentHourTop, setCurrentHourTop] = useState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [pxPerHour, setPxPerHour] = useState(0)
  const { currentHour } = useContext(TimeContext)

  useEffect(() => {
    const h = wrapperRef.current?.clientHeight ?? 0
    setWrapperHeight(h)
    setPxPerHour(h / 24)
  }, [wrapperRef.current?.clientHeight])

  useEffect(() => {
    setCurrentHourTop(pxPerHour * currentHour)
  }, [wrapperHeight, pxPerHour])

  return (
    <div ref={wrapperRef} className="time-frame-wrapper">
      <CurrentHourHighlight top={currentHourTop} />
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
    </div>
  )
}

export default TimeFrame
