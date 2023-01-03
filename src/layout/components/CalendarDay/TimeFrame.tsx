import { range } from '@/lib/array/range'
import React, { useContext, useEffect, useRef, useState } from 'react'
import CurrentHourHighlight from '@/layout/components/CalendarDay/CurrentHourHighlight'
import { TimeContext } from '@/layout/components/contexts/TimeContextProvider'
import TimeFrameOverlay from './TimeFrameOverlay'
import styled from 'styled-components'

const hours = range(0, 23, 1)

const plans = [
  {
    id: 1,
    title: 'study',
    from: 7,
    to: 9
  },
  {
    title: 'working',
    from: 10.75,
    to: 12.5
  }
]

const CreateUserForm = () => {
  return (
    <form action="">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="submit" value="submit" />
    </form>
  )
}

const TimeFrame = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [currentHourTop, setCurrentHourTop] = useState(0)
  const [pxPerHour, setPxPerHour] = useState(0)
  const { currentHour } = useContext(TimeContext)

  useEffect(() => {
    const h = wrapperRef.current?.clientHeight ?? 0
    setPxPerHour(h / 24)
  }, [wrapperRef.current?.clientHeight])

  useEffect(() => {
    setCurrentHourTop(pxPerHour * currentHour)
  }, [currentHour, pxPerHour])

  return (
    <Wrapper ref={wrapperRef}>
      <CurrentHourHighlight top={currentHourTop} />
      <TimeFrameOverlay
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        top={100}
        height={200}
        lineHeight={24}
      />

      {hours.map((hour) => (
        <Element key={hour}>
          <Hour>
            <HourSpan>{`${hour}.00`}</HourSpan>
          </Hour>
          <Content></Content>
        </Element>
      ))}
    </Wrapper>
  )
}

export default TimeFrame

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Element = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
`

const Hour = styled.div`
  position: relative;
  margin-right: 10px;
  width: 35px;
`

const HourSpan = styled.span`
  position: absolute;
  left: 0;
  top: -11px;
  width: 40px;
  text-align: right;
`

const Content = styled.div`
  height: 50px;
  flex-grow: 1;
  border-top: 1px solid grey;
`
