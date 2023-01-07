import styled from 'styled-components'
import Panel from '@/layout/components/Panel'

export const VerticalItem = styled.li`
  border-bottom: 0.5px solid ${({ theme }) => theme.grey};
  display: flex;
  width: 100%;
  margin: 0;
  padding: 5px 10px;

  &:last-child {
    border: none;
  }
`

type VerticalListProps = {
  maxHeight?: number
}
export const VerticalList = styled.ul<VerticalListProps>`
  padding: 0;
  overflow: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.secondaryBackground};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.black};
  ${({ maxHeight }) => maxHeight && 'max-height: ' + maxHeight + 'px'}
`
