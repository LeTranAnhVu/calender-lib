import type { FieldBase } from '@/layout/components/Form/types'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import { Icon } from '@/layout/components/Icons/Icon'
import { useRef } from 'react'

type RadioFieldProps = FieldBase & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  selectedValue: string
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

export type RadioValue = {
  value: string
  label: string
}
function RadioField({
  name,
  onChange,
  label,
  selectedValue,
  value = '',
  disabled = false
}: RadioFieldProps) {
  const radioRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (!radioRef.current) {
      return
    }

    const event = new Event('input', { bubbles: true })
    radioRef.current.dispatchEvent(event)
  }

  return (
    <Field onClick={handleClick} disabled={disabled}>
      <p className="label">{label}</p>
      <InputWrapper>
        {value === selectedValue && <Icon className="selected-icon" icon="check" />}
        <input
          ref={radioRef}
          onInput={onChange}
          style={{ width: 0, height: 0, visibility: 'hidden' }}
          type="radio"
          name={name}
          value={value}
        />
      </InputWrapper>
    </Field>
  )
}

export default RadioField
