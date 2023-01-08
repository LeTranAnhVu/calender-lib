import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { Variant } from 'styled-components'
import styled from 'styled-components'
import variantToColor from '@/lib/helpers/variantToColor'

type Props = FontAwesomeIconProps & {
  icon: IconProp
  variant?: Variant
}

// <<<<<<< HEAD
export const Icon = (props: Props) => <StyledIcon {...props} />

const StyledIcon = styled(FontAwesomeIcon)<Props>`
  > path {
    color: ${({ variant, theme }) =>
      variant ? variantToColor(variant, theme) : theme.primaryText};
  }
`


// =======
// export const Icon = ({ icon, variant }: Props) => <StyledIcon icon={icon} variant={variant} />
//
// type StyledIconProps = {
//   variant?: Variant
// }
//
// const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
// >>>>>>> main
