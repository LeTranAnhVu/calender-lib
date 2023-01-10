import type { FieldBase } from '@/layout/components/Form/types'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import Icon from '@/layout/components/Icon'
import { LabelField } from './Field'

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
  return (
    <LabelField disabled={disabled}>
      <p className="label">{label}</p>
      <InputWrapper>
        {checked && <Icon className="selected-icon" icon="check" />}
        <input
          checked={checked}
          onChange={onChange}
          style={{ display: 'none' }}
          type="checkbox"
          name={name}
          value={value}
        />
      </InputWrapper>
    </LabelField>
  )
}

export default CheckboxField
