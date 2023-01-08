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

const StyledIcon = styled(FontAwesomeIcon)<Props>`
  > path {
    color: ${({ variant, theme }) =>
      variant ? variantToColor(variant, theme) : theme.primaryText};
  }
`

const Icon = (props: Props) => <StyledIcon {...props} />
export default Icon
