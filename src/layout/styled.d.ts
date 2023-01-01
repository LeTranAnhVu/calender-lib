// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string
    black: string
    grey: string
    red: string
    bluePrimary: string
    bluePrimaryDarker: string
    primary: string
    disabled: string
    background: string
  }
}
