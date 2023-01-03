import type { DefaultTheme } from 'styled-components'

const white = '#f9f9f9'
const black = '#1a1a1a'
const grey = 'grey'
const red = '#f54a4a'
const blue = '#2d92bd'
const blueDarker = '#323c49'

export const defaultTheme: DefaultTheme = {
  white,
  black,
  grey,
  red,
  blue,
  blueDarker: blueDarker,
  primary: red,
  disabled: grey,
  background: '#242424',
  primaryText: white
}
