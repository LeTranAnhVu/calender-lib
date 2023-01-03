import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
type Props = {
  icon: IconProp
  color?: string
}

export const Icon = ({ icon, color }: Props) => (
  <StyledIcon icon={icon} color={color} className="icon" />
)

type StyledIconProps = {
  color?: string
}

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  > path {
    color: ${({ color, theme }) => color || theme.primaryText};
  }
`
