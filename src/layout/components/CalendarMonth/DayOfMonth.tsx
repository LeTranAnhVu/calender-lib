import styled from 'styled-components'
type Props = {
  date: number
  isToday: boolean
  firstDateIndex: number // from 1 to 7 - Mon to Sun
}
function DayOfMonth({ date, isToday, firstDateIndex }: Props) {
  return (
    <StyledDayOfMonth
      isToday={isToday}
      style={date === 1 ? { gridColumnStart: firstDateIndex } : {}}>
      {date}
    </StyledDayOfMonth>
  )
}

export default DayOfMonth

type StyledDayOfMonthProps = {
  isToday: boolean
}

const StyledDayOfMonth = styled.div<StyledDayOfMonthProps>`
  ${({ isToday }) =>
    isToday &&
    `
    font-weight: bolder;
    background: #f54a4a;
    color: $white;
  `}

  min-width: 44px;
  height: 44px;
  line-height: 2.9em;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:active {
    background: #f9f9f9;
    color: #1a1a1a;
    font-weight: bolder;
  }
`
