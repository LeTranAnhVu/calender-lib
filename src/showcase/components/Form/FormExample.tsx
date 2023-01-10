import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import type { OptionTypeOfSelectField } from '@/layout/components/Form/SelectField'
import SelectField from '@/layout/components/Form/SelectField'
import { rangeFromOne } from '@/lib/array/range'
import type { CheckboxValue } from '@/layout/components/Form/CheckboxField'
import CheckboxGroup from '@/layout/components/Form/CheckboxGroup'
import RadioGroup from '@/layout/components/Form/RadioGroup'
import FieldList from '@/layout/components/Form/FieldList'
import { VerticalItem } from '@/layout/components/VerticalList'
import ToggleSwitch from '@/layout/components/Form/ToggleSwitch'

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
    checked: true
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

const genders = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  },
  {
    value: 'other',
    label: 'Other'
  }
]

function FormExample() {
  const listRef = useRef<HTMLUListElement>(null)
  const [selectValue, setSelectValue] = useState('dog')
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValue[]>(dayCheckboxValues)
  const [gender, setGender] = useState('')
  const [isAirplaneMode, setIsAirplaneMode] = useState(true)

  const getScrollableParent = () => {
    return listRef.current
  }

  const handleSwitchChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAirplaneMode(event.target.checked)
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

  const handleRadioChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== gender) {
      setGender(event.target.value)
    }
  }

  return (
    <div>
      <h5>Form example</h5>
      <form onSubmit={handleSubmit}>
        <FieldList ref={listRef} style={{ maxWidth: '400px', width: '100%' }}>
          <VerticalItem>
            <ToggleSwitch
              checked={isAirplaneMode}
              onChange={handleSwitchChanged}
              label={'Airplane Mode'}
              name={'airplaneMode'}
            />
          </VerticalItem>
          <VerticalItem>
            <SelectField
              disabled={isAirplaneMode}
              name="Age"
              label="Your age"
              options={createOptions(40)}
              getScrollableParent={getScrollableParent}
              onChange={handleChange}
              value={selectValue}
              optionModalMaxHeight={200}
            />
          </VerticalItem>
        </FieldList>
        <CheckboxGroup
          name="activeDays"
          label="Active days"
          values={checkboxValues}
          onChange={handleCheckboxChanged}
        />

        <RadioGroup
          name="gender"
          label="Gender"
          value={gender}
          radioValues={genders}
          onChange={handleRadioChanged}
        />
      </form>
    </div>
  )
}

export default FormExample
