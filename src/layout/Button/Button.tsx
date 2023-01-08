import type { Variant } from 'styled-components'
import styled from 'styled-components'
import Icon from '../components/Icon'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { ElementSize } from '../types'
import type { MouseEventHandler, PropsWithChildren } from 'react'
import variantToColor from '@/lib/helpers/variantToColor'

type ButtonProps = PropsWithChildren & {
  variant?: Variant
  size?: ElementSize
  icon?: IconProp
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, variant, size = 'md', icon, onClick }: ButtonProps) => {
  return (
    <Wrapper variant={variant} size={size} onClick={onClick}>
      {children} {icon && <Icon icon={icon} variant={variant} />}
    </Wrapper>
  )
}

export default Button

type WrapperProps = {
  variant?: Variant
  size: ElementSize
}

const Wrapper = styled.button<WrapperProps>`
  background-color: transparent;
  width: max-content;
  padding: 0.25em;
  border: none;
  color: ${({ variant, theme }) => (variant ? variantToColor(variant, theme) : theme.primaryText)};
  font-size: ${({ size }) => (size === 'md' ? '1em' : '0.8em')};
  font-weight: 500;

  pointer-events: ${({ variant }) => (variant === 'disabled' ? 'none' : null)};
  user-select: none;

  :active {
    filter: brightness(90%);
  }
`
