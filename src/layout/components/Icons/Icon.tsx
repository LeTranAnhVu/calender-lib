import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import './Icon.css'
type Props = {
  icon: IconName
}

export const Icon = ({ icon }: Props) => <FontAwesomeIcon icon={icon} className="icon" />

// TODO: Adding style for icon
