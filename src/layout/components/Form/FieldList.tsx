import styled from 'styled-components'
import { VerticalList } from '@/layout/components/VerticalList'

const FieldList = styled(VerticalList)`
  background: ${({ theme }) => theme.fieldBackground};
`

export default FieldList
