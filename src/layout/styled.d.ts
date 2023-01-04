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
    disabled: string
    background: string
    secondaryBackground: string
    overlayBackground: string
    modalBackground: string
    borderRadius: string
  }
}
