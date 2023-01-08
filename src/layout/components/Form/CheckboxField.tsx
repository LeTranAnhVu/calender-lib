import type { FieldBase } from '@/layout/components/Form/types'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import Icon from '@/layout/components/Icon'
import { useRef } from 'react'
import Field from '@/layout/components/Form/Field'

type CheckboxFieldProps = FieldBase & {
  checked: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

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
          style={{ display: 'none' }}
          type="checkbox"
          name={name}
          value={value}
        />
      </InputWrapper>
    </Field>
  )
}

export default CheckboxField
