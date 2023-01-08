import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import { rangeFromOne } from '@/lib/array/range'
import styled from 'styled-components'

function createItems() {
  return rangeFromOne(100).map((i) => ({ text: 'this is item no: ' + i }))
}

function VerticalListExample() {
  return (
    <Wrapper>
      <h5>Vertical list</h5>
      <VerticalList style={{ maxHeight: '400px', maxWidth: '400px', width: '100%' }}>
        {createItems().map((item) => (
          <VerticalItem key={item.text}>{item.text}</VerticalItem>
        ))}
      </VerticalList>
    </Wrapper>
  )
}

export default VerticalListExample

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`
