import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import { DivField } from './Field'
import type { FieldBase } from './types'

type ToggleSwitchProps = FieldBase & {
  checked: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const ToggleSwitch = ({ checked, onChange, name, label, disabled = false }: ToggleSwitchProps) => {
  return (
    <DivField disabled={disabled} noActive>
      <p className="label">{label}</p>
      <label>
        <Switch disabled={disabled} checked={checked} />
        <Input
          disabled={disabled}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </DivField>
  )
}

export default ToggleSwitch

type SwitchProps = {
  checked: boolean
  disabled: boolean
}

const Switch = styled.div<SwitchProps>`
  position: relative;
  width: calc(1.8rem * 1.8);
  height: 1.8rem;
  background: ${({ checked, theme }) => (checked ? '#31d158' : '#39393d')};
  border-radius: 2rem;
  transition: all 300ms;

  &:before {
    transition: all 300ms;
    content: '';
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2rem;
    top: 50%;
    background: ${({ theme }) => theme.white};
    transform: ${(props) =>
      props.checked ? 'translate(1.55rem, -50%)' : 'translate(0.15rem, -50%)'};
  }
`

const Input = styled.input`
  display: none;
`
