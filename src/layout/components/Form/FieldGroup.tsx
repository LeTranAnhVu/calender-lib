import styled from 'styled-components'

const FieldGroup = styled.div`
  > .label {
    margin-bottom: 5px;
    padding-left: 10px;
    color: ${({ theme }) => theme.disabled};
    font-size: 0.7em;
    text-transform: uppercase;
  }
  .group {
    margin-top: 0;
  }
`

export default FieldGroup
