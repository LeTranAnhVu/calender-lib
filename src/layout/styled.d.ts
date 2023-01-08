// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export type Palette = 'white' | 'black' | 'grey' | 'red' | 'blue' | 'blueDarker'

  export type Variant =
    | Palette
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'disabled'
    | 'secondary'
    | 'error'

  type VariantTheme = Record<Variant, string>

  export interface DefaultTheme extends VariantTheme {
    background: string
    secondaryBackground: string
    overlayBackground: string
    primaryText: string
    modalBackground: string
    borderRadius: string
  }
}
