import styled from 'styled-components'

type ButtonSize = 'small' | 'medium'

type ButtonBgColor = 'primary' | 'secondary' | 'disabled' | 'error'

type ButtonProps = {
  bgColor?: ButtonBgColor
  text: string
  size?: ButtonSize
}

const OutlineButton = ({ bgColor, text, size = 'small' }: ButtonProps) => {
  return (
    <Wrapper bgColor={bgColor} size={size}>
      {text}
    </Wrapper>
  )
}

export default OutlineButton

type WrapperProps = {
  bgColor?: ButtonBgColor
  size: ButtonSize
}

const Wrapper = styled.button<WrapperProps>`
  background-color: transparent;
  height: ${({ size }) => (size === 'small' ? '42px' : '60px')};
  width: 120px;
  padding: 0.25em;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
  border-color: ${({ bgColor, theme }) =>
    bgColor === 'primary'
      ? theme.primary
      : bgColor === 'secondary'
      ? theme.secondary
      : bgColor === 'disabled'
      ? theme.disabled
      : bgColor === 'error'
      ? theme.danger
      : theme.white}; // Default color is white

  color: ${({ bgColor, theme }) => (bgColor === 'disabled' ? theme.grey : theme.white)};
  font-size: ${({ size }) => (size === 'small' ? '0.95em' : '1.05em')};
  font-weight: 500;

  pointer-events: ${({ bgColor }) => (bgColor === 'disabled' ? 'none' : null)};
  user-select: none;

  // the button will be truncated if overscale
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :active {
    background-color: ${({ bgColor, theme }) =>
      bgColor === 'primary'
        ? theme.primary
        : bgColor === 'secondary'
        ? theme.secondary
        : bgColor === 'disabled'
        ? theme.disabled
        : bgColor === 'error'
        ? theme.danger
        : theme.white}; // Default color is white

    color: ${({ bgColor, theme }) =>
      bgColor === 'primary' || bgColor === 'error' || bgColor === 'secondary'
        ? theme.white
        : bgColor === 'disabled'
        ? theme.grey
        : theme.black};
  }
`
