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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: string
  values: CheckboxValue[]
}
function CheckboxGroup({ label, values, onChange, disabled = false }: CheckboxGroupProps) {
  return (
    <Wrapper>
      {label && <p className="label">{label}</p>}
      <VerticalList className="group">
        {values.map((day) => (
          <VerticalItem key={day.value}>
            <CheckboxField
              disabled={disabled}
              onChange={onChange}
              name={'day'}
              checked={day.checked}
              label={day.label}
              value={day.value}
            />
          </VerticalItem>
        ))}
      </VerticalList>
    </Wrapper>
  )
}

export default CheckboxGroup
