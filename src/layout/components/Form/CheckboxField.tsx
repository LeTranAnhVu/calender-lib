import type { FieldBase } from '@/layout/components/Form/types'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import { Icon } from '@/layout/components/Icons/Icon'
import { useRef } from 'react'

type CheckboxFieldProps = FieldBase & {
  checked: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

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

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`

const InputWrapper = styled.div``

export type CheckboxValue = {
  value: string
  label: string
  checked: boolean
}
function CheckboxField({
  name,
  onChange,
  label,
  checked,
  value = '',
  disabled = false
}: CheckboxFieldProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (!checkboxRef.current) {
      return
    }

    checkboxRef.current.checked = !checked
    const event = new Event('input', { bubbles: true })
    checkboxRef.current.dispatchEvent(event)
  }

  return (
    <Field onClick={handleClick} disabled={disabled}>
      <p className="label">{label}</p>
      <InputWrapper>
        {checked && <Icon className="selected-icon" icon="check" />}
        <input
          ref={checkboxRef}
          onInput={onChange}
          style={{ width: 0, height: 0, visibility: 'hidden' }}
          type="checkbox"
          name={name}
          value={value}
        />
      </InputWrapper>
    </Field>
  )
}

export default CheckboxField
