import HorizontalList from '@/layout/components/HorizontalList'
import styled from 'styled-components'
import { rangeFromOne } from '@/lib/array/range'

type ItemProps = {
  size: number
  bg?: string
  gap?: number
}

const RoundItem = styled.div<ItemProps>`
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  border-radius: 50%;
  margin-right: ${({ gap = 0 }) => gap}px;
  background: ${({ bg, theme }) => bg || theme.grey};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SquareItem = styled.div<ItemProps>`
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  border-radius: 5px;
  margin-right: ${({ gap = 0 }) => gap}px;
  background: ${({ bg, theme }) => bg || theme.grey};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Shim = styled.div`
  height: 1em;
`

function HorizontalListExample() {
  return (
    <div>
      <h5>Horizontal list</h5>
      <HorizontalList>
        {rangeFromOne(20).map((i) => (
          <SquareItem key={i} gap={10} size={100}>
            {i}
          </SquareItem>
        ))}
      </HorizontalList>
      <Shim />
      <HorizontalList>
        {rangeFromOne(30).map((i) => (
          <RoundItem key={i} gap={10} size={40}>
            {i}
          </RoundItem>
        ))}
      </HorizontalList>
    </div>
  )
}

export default HorizontalListExample
