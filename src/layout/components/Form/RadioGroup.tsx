import type { ChangeEvent } from 'react'
import type { RadioValue } from '@/layout/components/Form/RadioField'
import { VerticalItem } from '@/layout/components/VerticalList'
import RadioField from '@/layout/components/Form/RadioField'
import FieldGroup from '@/layout/components/Form/FieldGroup'
import FieldList from '@/layout/components/Form/FieldList'

type RadioGroupProps = {
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: string
  value: string
  radioValues: RadioValue[]
}
function RadioGroup({
  label,
  name,
  value,
  radioValues,
  onChange,
  disabled = false
}: RadioGroupProps) {
  return (
    <FieldGroup>
      {label && <p className="label">{label}</p>}
      <FieldList className="group">
        {radioValues.map((radio) => (
          <VerticalItem key={radio.value}>
            <RadioField
              selectedValue={value}
              disabled={disabled}
              onChange={onChange}
              name={name}
              label={radio.label}
              value={radio.value}
            />
          </VerticalItem>
        ))}
      </FieldList>
    </FieldGroup>
  )
}

export default RadioGroup
