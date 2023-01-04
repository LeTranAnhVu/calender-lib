import styled from 'styled-components'

export enum Size {
  small,
  medium,
  large
}

export enum BgColor {
  primary,
  secondary,
  disabled,
  error
}

type ButtonPatternProps = {
  bgColor?: BgColor | undefined
  text: string
  size?: Size | undefined
}

/**
 * @param text (require) content of the button
 * @param bgColor (optional, value: number) default: white. There are 4 pattern colors: primary is 0, secondary is 1, disabled is 2 and error is 3.
 * @param size (value: number) default: small. There are 3 pattern sizes: small is 0, medium is 1 and large is 2.
/** */
const ButtonPattern = ({ bgColor, text, size = 0 }: ButtonPatternProps) => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Button bgColor={bgColor} size={size} onClick={handleClick}>
      {text}
    </Button>
  )
}

export default ButtonPattern

type ButtonProps = {
  bgColor?: BgColor | undefined
  size: Size
}

const Button = styled.button<ButtonProps>`
  width: max-content;
  border: none;
  border-radius: ${({ size }) => (size === 0 ? '0.3em' : '0.5em')};
  padding: ${({ size }) => (size === 0 ? '0.5em 1em' : '0.75em 1.25em')};
  background-color: ${({ bgColor, theme }) =>
    bgColor === 0
      ? theme.primary
      : bgColor === 1
      ? theme.secondary
      : bgColor === 2
      ? theme.disabled
      : bgColor === 3
      ? theme.danger
      : theme.white};
  color: ${({ bgColor, theme }) =>
    bgColor === 0 || bgColor === 1 || bgColor === 2 ? theme.white : theme.black};
  font-size: ${({ size }) => (size === 0 ? '1em' : size === 1 ? '1.25em' : '1.5em')};
  pointer-events: ${({ bgColor }) => (bgColor === 2 ? 'none' : null)};
`
