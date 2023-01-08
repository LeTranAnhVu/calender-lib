import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import type { OptionTypeOfSelectField } from '@/layout/components/Form/SelectField'
import SelectField from '@/layout/components/Form/SelectField'
import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import { rangeFromOne } from '@/lib/array/range'
import type { CheckboxValue } from '@/layout/components/Form/CheckboxField'
import CheckboxGroup from '@/layout/components/Form/CheckboxGroup'

function createOptions(n: number): OptionTypeOfSelectField[] {
  return rangeFromOne(n).map(
    (i) => ({ label: i.toString(), value: i.toString() } as OptionTypeOfSelectField)
  )
}

const dayCheckboxValues: CheckboxValue[] = [
  {
    value: 'mon',
    label: 'Monday',
    checked: false
  },
  {
    value: 'tue',
    label: 'Tuesday',
    checked: false
  },
  {
    value: 'wed',
    label: 'Wednesday',
    checked: false
  },
  {
    value: 'thu',
    label: 'Thursday',
    checked: false
  },
  {
    value: 'fri',
    label: 'Friday',
    checked: false
  }
]

function FormExample() {
  const listRef = useRef<HTMLUListElement>(null)
  const [selectValue, setSelectValue] = useState('dog')
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValue[]>(dayCheckboxValues)
  const getScrollableParent = () => {
    return listRef.current
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected value:', event.target.value)
    setSelectValue(event.target.value)
  }

  const handleCheckboxChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxValues(
      checkboxValues.map((c) =>
        c.value === event.target.value ? { ...c, checked: event.target.checked } : c
      )
    )
  }

  return (
    <div>
      <h5>Form example</h5>
      <form onSubmit={handleSubmit}>
        <VerticalList ref={listRef} style={{ maxWidth: '400px', width: '100%' }}>
          <VerticalItem>
            <SelectField
              name="Age"
              label="Your age"
              options={createOptions(40)}
              getScrollableParent={getScrollableParent}
              onChange={handleChange}
              value={selectValue}
              optionModalMaxHeight={200}
            />
          </VerticalItem>
        </VerticalList>
        <CheckboxGroup
          label="Active days"
          values={checkboxValues}
          onChange={handleCheckboxChanged}
        />
      </form>
    </div>
  )
}

export default FormExample
