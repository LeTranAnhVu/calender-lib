import type { DefaultTheme } from 'styled-components'

const white = '#f9f9f9'
const black = '#1a1a1a'
const grey = 'grey'
const greyLighter = '#edede9'
const red = '#dc3545'
const blue = '#2d92bd'
const blueDarker = '#323c49'
const green = '#198754'
const blueLighter = '#0dcaf0'
const yellow = '#ffc107'

export const defaultTheme: DefaultTheme = {
  white,
  black,
  grey,
  red,
  blue,
  blueDarker: blueDarker,
  primary: red,
  secondary: grey,
  success: green,
  danger: red,
  info: blueLighter,
  warning: yellow,
  disabled: greyLighter,
  background: '#242424',
  secondaryBackground: '#262626',
  primaryText: white,
  modalBackground: '#3e3e3e',
  borderRadius: '8px',
  error: red,
  overlayBackground: '#8c8c8c3d'
}
