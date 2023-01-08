import styled from 'styled-components'
import Panel from '@/layout/components/Panel'

export const VerticalItem = styled.div`
  border-bottom: 0.5px solid ${({ theme }) => theme.grey};
  display: flex;
  width: 100%;
  margin: 0;
  padding: 5px 10px;

  &:last-child {
    border: none;
  }
`

export const VerticalList = styled(Panel)`
  padding: 0;
  overflow: auto;
`
