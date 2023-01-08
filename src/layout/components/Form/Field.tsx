import styled from 'styled-components'

type FieldProps = {
  disabled: boolean
}

const Field = styled.div<FieldProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  > .label {
    margin: 5px 0;
  }

  &:active {
    filter: brightness(70%);
  }

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`

export default Field
