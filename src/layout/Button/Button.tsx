import styled from 'styled-components'

type ButtonSize = 'small' | 'medium'

type ButtonBgColor = 'primary' | 'secondary' | 'disabled' | 'error'

type ButtonProps = {
  bgColor?: ButtonBgColor
  text: string
  size?: ButtonSize
}

const Button = ({ bgColor, text, size = 'small' }: ButtonProps) => {
  return (
    <Wrapper bgColor={bgColor} size={size}>
      {text}
    </Wrapper>
  )
}

export default Button

type WrapperProps = {
  bgColor?: ButtonBgColor
  size: ButtonSize
}

const Wrapper = styled.button<WrapperProps>`
  height: ${({ size }) => (size === 'small' ? '42px' : '60px')};
  width: 120px;
  padding: 0.25em;
  border: none;
  border-radius: 0.45em;
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
  font-size: ${({ size }) => (size === 'small' ? '0.95em' : '1.05em')};
  font-weight: 500;

  pointer-events: ${({ bgColor }) => (bgColor === 'disabled' ? 'none' : null)};
  user-select: none;

  // the button will be truncated if overscale
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :active {
    filter: brightness(85%);
  }
`
