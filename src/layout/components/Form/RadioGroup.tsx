import type { ChangeEvent } from 'react'
import type { RadioValue } from '@/layout/components/Form/RadioField'
import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import styled from 'styled-components'
import RadioField from '@/layout/components/Form/RadioField'

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
    <Wrapper>
      {label && <p className="label">{label}</p>}
      <VerticalList className="group">
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
      </VerticalList>
    </Wrapper>
  )
}

export default RadioGroup
