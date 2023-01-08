import styled from 'styled-components'
import type { FieldBase } from '@/layout/components/Form/types'
import Icon from '@/layout/components/Icon'
import { VerticalItem, VerticalList } from '@/layout/components/VerticalList'
import type { ChangeEvent } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { Nullable } from '@/layout/types'

enum SelectModalState {
  Closed,
  Calculating,
  Showed
}

type SelectProps = {
  top?: number
  right?: number
  isShowed: SelectModalState
}

type FieldProps = {
  disabled: boolean
}

// TODO : don't know why it can't use the Field.tsx
const Field = styled.div<FieldProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  > .label {
    margin: 5px 0;
  }

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`

const SelectWrapper = styled.div`
  position: relative;

  .current-value {
    margin-right: 15px;
  }

  .up {
    position: absolute;
    right: 0;
    top: 5.5px;
    font-size: 0.6em;
  }

  .down {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 0.6em;
  }
`

const Select = styled(VerticalList)<SelectProps>`
  min-width: 200px;
  position: fixed;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  z-index: 999;
  box-shadow: 4px 5px 9px 1px ${({ theme }) => theme.black};
  visibility: ${({ isShowed }) => (isShowed === SelectModalState.Showed ? 'visible' : 'hidden')};
  ${({ isShowed }) => isShowed === SelectModalState.Closed && 'display: none;'}
`

const Option = styled(VerticalItem)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 35px;
  &:active {
    filter: brightness(70%);
  }

  .selected-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`

export type OptionTypeOfSelectField = {
  value: string
  label: string | number
}

type SelectFieldProps = FieldBase & {
  options: OptionTypeOfSelectField[]
  getScrollableParent?: () => Nullable<HTMLElement>
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  value?: string
  optionModalMaxHeight?: number
}

const noneOption: OptionTypeOfSelectField = { label: 'None', value: '' }
function SelectField({
  onChange,
  getScrollableParent,
  label,
  options,
  value = '',
  optionModalMaxHeight,
  disabled = false
}: SelectFieldProps) {
  const selectedOption = options.find((option) => option.value === value) || noneOption
  const [selectState, setSelectState] = useState<SelectProps>({ isShowed: SelectModalState.Closed })
  const selectWrapperRef = useRef<Nullable<HTMLDivElement>>(null)
  const selectRef = useRef<Nullable<HTMLUListElement>>(null)
  const realSelectRef = useRef<Nullable<HTMLSelectElement>>(null)

  // When tap/click on the field to open the options, it does not open yet, but will calculate the height of options first
  const handleClick = () => {
    if (selectState.isShowed) {
      setSelectState({ isShowed: SelectModalState.Closed })
      return
    }

    if (!selectWrapperRef.current) {
      return
    }

    const wrapperRect = selectWrapperRef.current.getBoundingClientRect()
    const selectRight = window.innerWidth - wrapperRect.right

    // Calculate the top value so that the modal can visible in viewport
    const selectTop = wrapperRect.bottom

    setSelectState({
      top: selectTop,
      right: selectRight,
      isShowed: SelectModalState.Calculating
    })
  }

  // After turn the state to 'Calculating', the height of the options can accessible, and it is time to show the modal
  // Make sure that the modal is visible by calculate the correct top for user can see it.
  useLayoutEffect(() => {
    if (
      selectState.isShowed === SelectModalState.Calculating &&
      selectWrapperRef.current &&
      selectRef.current
    ) {
      const wrapperRect = selectWrapperRef.current.getBoundingClientRect()
      let selectTop = wrapperRect.bottom
      const selectRight = window.innerWidth - wrapperRect.right

      const rect = selectRef.current.getBoundingClientRect()
      const selectHeight = rect.height
      // Calculate the top value so that the modal can visible in viewport
      if (
        wrapperRect.bottom + selectHeight >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        selectTop = wrapperRect.top - selectHeight
      }

      setSelectState({
        top: selectTop,
        right: selectRight,
        isShowed: SelectModalState.Showed
      })
    }
  }, [selectState, selectRef])

  // Handle closing modal when scrolling
  useEffect(() => {
    if (!selectState.isShowed) {
      return
    }

    const resetState = () => {
      setSelectState({ isShowed: SelectModalState.Closed })
    }

    let scrollableNode: HTMLElement
    if (typeof getScrollableParent === 'function') {
      const scrollableNode = getScrollableParent()
      scrollableNode?.addEventListener('scroll', resetState)
    }

    window.addEventListener('scroll', resetState)
    return () => {
      window.removeEventListener('scroll', resetState)
      scrollableNode?.removeEventListener('scroll', resetState)
    }
  }, [selectState])

  const handleOptionSelected = (option: OptionTypeOfSelectField) => {
    if (!realSelectRef.current) {
      return
    }

    // Programmatically trigger the change event of the native(real) select element.
    realSelectRef.current.value = option.value
    const event = new Event('change', { bubbles: true })
    realSelectRef.current.dispatchEvent(event)
  }

  return (
    <Field disabled={disabled} onClick={handleClick}>
      <p className="label">{label}</p>
      <SelectWrapper ref={selectWrapperRef}>
        <span className="current-value">{selectedOption.label}</span>
        <Select
          maxHeight={optionModalMaxHeight}
          ref={selectRef}
          className="select"
          {...selectState}>
          {[{ ...noneOption }, ...options].map((opt) => (
            <Option onClick={() => handleOptionSelected(opt)} key={opt.label}>
              {value === opt.value && <Icon className="selected-icon" icon="check" />}
              {opt.label}
            </Option>
          ))}
        </Select>
        <Icon className="up" icon="angle-up" />
        <Icon className="down" icon="angle-down" />

        <select onChange={onChange} ref={realSelectRef} style={{ display: 'none' }}>
          {[{ ...noneOption }, ...options].map((opt) => (
            <option value={opt.value} onClick={() => handleOptionSelected(opt)} key={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      </SelectWrapper>
    </Field>
  )
}

export default SelectField
