import type { DefaultTheme, Variant } from 'styled-components'

export default function variantToColor(variant: Variant, theme: DefaultTheme) {
  switch (variant) {
    case 'primary':
      return theme.primary
    case 'secondary':
      return theme.secondary
    case 'disabled':
      return theme.disabled
    case 'error':
      return theme.error
    case 'danger':
      return theme.danger
    case 'warning':
      return theme.warning
    case 'info':
      return theme.info
    default:
      return theme[variant]
  }
}
