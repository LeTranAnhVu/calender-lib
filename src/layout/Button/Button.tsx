import styled from 'styled-components'

type ButtonSize = 'small' | 'medium' | 'large'

type ButtonBgColor = 'primary' | 'secondary' | 'disabled' | 'error'

type ButtonProps = {
  bgColor?: ButtonBgColor
  text: string
  size?: ButtonSize
}

/**
 * @param text (require) content of the button.
 * @param bgColor (optional) default color is white.
 * @param size (optional) default size is small.
/** */
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
  width: ${({ size }) => (size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px')};
  padding: ${({ size }) => (size === 'small' ? '0.4em' : '0.5em')};
  border: none;
  border-radius: 0.3em;
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
  font-size: ${({ size }) => (size === 'small' ? '1em' : size === 'medium' ? '1.25em' : '1.5em')};
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
