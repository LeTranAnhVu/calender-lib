import styled, { css } from 'styled-components'

type FieldProps = {
  disabled: boolean
  noActive?: boolean
}

export const baseFieldStyle = css<FieldProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  > .label {
    margin: 5px 0;
  }

  ${({ noActive }) =>
    !noActive &&
    `
    &:active {
    filter: brightness(70%);
  }`}

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`

const Field = styled.label<FieldProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  > .label {
    margin: 5px 0;
  }

  ${({ noActive }) =>
    !noActive &&
    `
    &:active {
    filter: brightness(70%);
  }`}

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`

export const LabelField = styled.label`
  ${baseFieldStyle}
`

export const DivField = styled.div`
  ${baseFieldStyle}
`
