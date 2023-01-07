import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

type IconType = 'primary' | 'success' | 'danger' | 'warning' | 'info'
type Props = FontAwesomeIconProps & {
  icon: IconProp
  type?: IconType
}

export const Icon = (props: Props) => <StyledIcon {...props} />

const StyledIcon = styled(FontAwesomeIcon)<Props>`
  > path {
    color: ${({ type, theme }) =>
      type === 'primary'
        ? theme.primary
        : type === 'success'
        ? theme.success
        : type === 'danger'
        ? theme.danger
        : type === 'warning'
        ? theme.warning
        : type === 'info'
        ? theme.info
        : theme.primaryText}; // * Default type is theme.primaryText
  }
`
