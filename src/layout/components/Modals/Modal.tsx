import type { NotificationModalProps } from '@/layout/components/Modals/NotificationModal'
import NotificationModal from '@/layout/components/Modals/NotificationModal'
import type { ConfirmModalProps } from '@/layout/components/Modals/ConfirmModal'
import ConfirmModal from '@/layout/components/Modals/ConfirmModal'
import type { OperationalModalProps } from './OperationalModal'
import OperationalModal from './OperationalModal'
import { useContext } from 'react'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'

export enum ModalTypes {
  Notification,
  Confirmation,
  Operational
}

type BaseModalItem = {
  id: string
}

type NotificationModalItem = BaseModalItem & {
  type: ModalTypes.Notification
  props: NotificationModalProps
}

type OperationalModalItem = BaseModalItem & {
  type: ModalTypes.Operational
  props: OperationalModalProps
}

type ConfirmModalItem = BaseModalItem & {
  type: ModalTypes.Confirmation
  props: ConfirmModalProps
}

export type ModalItem = NotificationModalItem | OperationalModalItem | ConfirmModalItem

function Modal() {
  const { modals } = useContext(ModalContext)

  return (
    <div>
      {modals.map((modal) => {
        if (modal.type === ModalTypes.Notification) {
          return <NotificationModal key={modal.id} {...modal.props} />
        } else if (modal.type === ModalTypes.Confirmation) {
          return <ConfirmModal key={modal.id} {...modal.props} />
        } else {
          return <OperationalModal key={modal.id} {...modal.props} />
        }
      })}
    </div>
  )
}

export default Modal
