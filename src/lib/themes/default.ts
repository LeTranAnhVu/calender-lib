import type { DefaultTheme } from 'styled-components'

const white = '#f9f9f9'
const black = '#1a1a1a'
const grey = 'grey'
const red = '#dc3545'
const blue = '#2d92bd'
const blueDarker = '#323c49'
const green = '#198754'
const lightBlue = '#0dcaf0'
const yellow = '#ffc107'

export const defaultTheme: DefaultTheme = {
  white,
  black,
  grey,
  red,
  blue,
  blueDarker: blueDarker,
  primary: red,
  success: green,
  danger: red,
  info: lightBlue,
  warning: yellow,
  disabled: grey,
  background: '#242424',
  primaryText: white
}