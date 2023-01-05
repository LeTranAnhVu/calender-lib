import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

type IconType = 'primary' | 'success' | 'danger' | 'warning' | 'info'
type Props = {
  icon: IconProp
  type?: IconType
}

export const Icon = ({ icon, type }: Props) => <StyledIcon icon={icon} type={type} />

type StyledIconProps = {
  type?: IconType
}

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
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
