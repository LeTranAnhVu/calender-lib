import styled from 'styled-components'
import type { MouseEvent } from 'react'

type TimeFrameOverlayProps = {
  title: string
  content: string
  bgColor?: string
  top: number
  height: number
  lineHeight: number
  onClick?: (event: MouseEvent<HTMLDivElement>) => unknown
}

const TimeFrameOverlay = ({
  title,
  content,
  bgColor,
  top,
  height,
  lineHeight,
  onClick
}: TimeFrameOverlayProps) => {
  const titleHeight = lineHeight
  const numberOfLines = Math.round((height - titleHeight) / lineHeight)

  return (
    <Wrapper
      top={top}
      height={height}
      bgColor={bgColor}
      onClick={(event) => onClick && onClick(event)}>
      <Title>{title}</Title>
      <Content numberOfLines={numberOfLines} lineHeight={lineHeight}>
        {content}
      </Content>
    </Wrapper>
  )
}

export default TimeFrameOverlay

type WrapperProps = {
  bgColor?: string
  top: number
  height: number
}

const Wrapper = styled.div<WrapperProps>`
  &::before {
    background-color: ${(props) => props.bgColor || props.theme.blueDarker};
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    opacity: 0.9;
  }
  position: absolute;
  top: ${(props) => props.top}px;
  height: ${(props) => props.height}px;
  z-index: 1;
  width: 100%;
  border-left: solid 3px ${(props) => props.bgColor || props.theme.blue};
  border-radius: 3px;
  overflow: hidden;
`

type TitleProps = {
  color?: string
}

const Title = styled.div<TitleProps>`
  position: relative;
  z-index: 1;
  // The title is truncated in 1 line
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  width: 100%;
  margin-left: 2px;
  border-radius: 3px;

  font-size: 0.9em;
  font-weight: 800;
  color: ${(props) => props.color || props.theme.blue};
`

type ContentProp = {
  numberOfLines: number
  color?: string
  lineHeight: number
}

const Content = styled.div<ContentProp>`
  position: relative;
  z-index: 1;
  line-height: ${(prop) => prop.lineHeight}px;
  // The content is truncated where having no enough place
  display: -webkit-box;
  -webkit-line-clamp: ${(prop) => prop.numberOfLines};
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin-left: 2px;
  color: ${(props) => props.color || props.theme.blue};
  font-size: 0.8em;
`
