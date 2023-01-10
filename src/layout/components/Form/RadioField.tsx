import type { FieldBase } from '@/layout/components/Form/types'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'
import Icon from '@/layout/components/Icon'
import { useRef } from 'react'
import Field, { LabelField } from '@/layout/components/Form/Field'

type RadioFieldProps = FieldBase & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  selectedValue: string
}

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
  return (
    <LabelField disabled={disabled}>
      <p className="label">{label}</p>
      <InputWrapper>
        {value === selectedValue && <Icon className="selected-icon" icon="check" />}
        <input
          // ref={radioRef}
          onChange={onChange}
          style={{ display: 'none' }}
          type="radio"
          name={name}
          value={value}
        />
      </InputWrapper>
    </LabelField>
  )
}

export default RadioField
