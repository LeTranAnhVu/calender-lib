import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
type Props = {
  icon: IconProp
  color?: string
}

export const Icon = ({ icon, color }: Props) => <StyledIcon icon={icon} color={color} />

type StyledIconProps = {
  color?: string
}

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  > path {
    color: ${({ color, theme }) =>
      color === 'primary'
        ? theme.primary
        : color === 'success'
        ? theme.success
        : color === 'danger'
        ? theme.danger
        : color === 'warning'
        ? theme.warning
        : color === 'info'
        ? theme.info
        : theme.primaryText};
  }
`
