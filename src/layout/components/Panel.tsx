import styled from 'styled-components'

const Panel = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.secondaryBackground};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.black};
  padding: 20px;
`

export default Panel
