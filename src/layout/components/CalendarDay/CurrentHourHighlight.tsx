import { useContext } from 'react'
import { TimeContext } from '@/layout/components/contexts/TimeContextProvider'
import styled from 'styled-components'

type Prop = {
  top: number
}

const CurrentHourHighlight = ({ top }: Prop) => {
  const { currentHourColonMinute } = useContext(TimeContext)
  return (
    <HighLight top={top}>
      <Bar />
      <Time>{currentHourColonMinute}</Time>
    </HighLight>
  )
}

export default CurrentHourHighlight

type HightLightProp = {
  top: number
}

const HighLight = styled.div<HightLightProp>`
  position: absolute;
  top: ${(prop) => prop.top}px;
  width: 100%;
  z-index: 100;
  height: 1px;
  background: ${(props) => props.theme.red};
`

const Time = styled.span`
  font-size: 0.6em;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.background};
  padding: 0 2px;
`

const Bar = styled.span`
  display: block;
  width: 100%;
`
