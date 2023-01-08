import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import { rangeFromOne } from '@/lib/array/range'
import styled from 'styled-components'

function createItems() {
  return rangeFromOne(10).map((i) => ({ text: 'this is item no: ' + i }))
}

function VerticalListExample() {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <h5>Vertical list</h5>
      <VerticalList maxHeight={200}>
        {createItems().map((item) => (
          <VerticalItem key={item.text}>{item.text}</VerticalItem>
        ))}
      </VerticalList>
    </div>
  )
}

export default VerticalListExample
