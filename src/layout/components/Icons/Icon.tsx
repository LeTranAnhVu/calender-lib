import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { Variant } from 'styled-components'
import styled from 'styled-components'
import variantToColor from '@/lib/helpers/variantToColor'

type Props = {
  icon: IconProp
  variant?: Variant
}

export const Icon = ({ icon, variant }: Props) => <StyledIcon icon={icon} variant={variant} />

type StyledIconProps = {
  variant?: Variant
}

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  > path {
    color: ${({ variant, theme }) =>
      variant ? variantToColor(variant, theme) : theme.primaryText};
  }
`
