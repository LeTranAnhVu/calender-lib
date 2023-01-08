import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import type { OptionTypeOfSelectField } from '@/layout/components/Form/SelectField'
import SelectField from '@/layout/components/Form/SelectField'
import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import { rangeFromOne } from '@/lib/array/range'

function createOptions(n: number): OptionTypeOfSelectField[] {
  return rangeFromOne(n).map(
    (i) => ({ label: i.toString(), value: i.toString() } as OptionTypeOfSelectField)
  )
}

function FormExample() {
  const listRef = useRef<HTMLUListElement>(null)
  const [selectValue, setSelectValue] = useState('dog')
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
      </form>
    </div>
  )
}

export default FormExample
