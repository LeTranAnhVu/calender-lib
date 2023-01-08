// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string
    black: string
    grey: string
    red: string
    blue: string
    blueDarker: string
    primary: string
    success: string
    danger: string
    warning: string
    info: string
    disabled: string
    background: string
    secondaryBackground: string
    fieldBackground: string
    overlayBackground: string
    primaryText: string
    modalBackground: string
    borderRadius: string
  }
}
