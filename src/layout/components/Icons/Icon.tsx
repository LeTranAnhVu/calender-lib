import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconName } from '@fortawesome/fontawesome-svg-core'

type Props = {
  icon: IconName
}

export const Icon = ({ icon }: Props) => <FontAwesomeIcon icon={icon} />

// TODO: Adding style for icon
