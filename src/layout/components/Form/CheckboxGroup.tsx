import type { ChangeEvent } from 'react'
import type { CheckboxValue } from '@/layout/components/Form/CheckboxField'
import CheckboxField from '@/layout/components/Form/CheckboxField'
import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import styled from 'styled-components'

const Wrapper = styled.div`
  > .label {
    margin-bottom: 5px;
    padding-left: 10px;
    color: ${({ theme }) => theme.disabled};
  }
  .group {
    margin-top: 0;
  }
`

type CheckboxGroupProps = {
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: string
  values: CheckboxValue[]
}
function CheckboxGroup({ name, label, values, onChange, disabled = false }: CheckboxGroupProps) {
  return (
    <Wrapper>
      {label && <p className="label">{label}</p>}
      <VerticalList className="group">
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
      </VerticalList>
    </Wrapper>
  )
}

export default CheckboxGroup
