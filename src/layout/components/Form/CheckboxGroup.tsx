import type { ChangeEvent } from 'react'
import type { CheckboxValue } from '@/layout/components/Form/CheckboxField'
import CheckboxField from '@/layout/components/Form/CheckboxField'
import { VerticalItem } from '@/layout/components/VerticalList'
import FieldGroup from '@/layout/components/Form/FieldGroup'
import FieldList from '@/layout/components/Form/FieldList'

type CheckboxGroupProps = {
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: string
  values: CheckboxValue[]
}
function CheckboxGroup({ name, label, values, onChange, disabled = false }: CheckboxGroupProps) {
  return (
    <FieldGroup>
      {label && <p className="label">{label}</p>}
      <FieldList className="group">
        {values.map((checkbox) => (
          <VerticalItem key={checkbox.value}>
            <CheckboxField
              disabled={disabled}
              onChange={onChange}
              name={name}
              checked={checkbox.checked}
              label={checkbox.label}
              value={checkbox.value}
            />
          </VerticalItem>
        ))}
      </FieldList>
    </FieldGroup>
  )
}

export default CheckboxGroup
