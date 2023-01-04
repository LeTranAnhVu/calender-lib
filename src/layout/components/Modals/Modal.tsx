import type { NotificationModalProps } from '@/layout/components/Modals/NotificationModal'
import NotificationModal from '@/layout/components/Modals/NotificationModal'
import type { ConfirmationModalProps } from '@/layout/components/Modals/ConfirmationModal'
import ConfirmationModal from '@/layout/components/Modals/ConfirmationModal'
import type { OperationModalProps } from './OperationModal'
import OperationModal from './OperationModal'
import { useContext } from 'react'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'
import styled from 'styled-components'

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

type OperationModalItem = BaseModalItem & {
  type: ModalTypes.Operational
  props: OperationModalProps
}

type ConfirmationModalItem = BaseModalItem & {
  type: ModalTypes.Confirmation
  props: ConfirmationModalProps
}

export type ModalItem = NotificationModalItem | OperationModalItem | ConfirmationModalItem

function Modal() {
  const { modals } = useContext(ModalContext)

  const hasAny = modals.length && modals.find((m) => m.props.isShowed)

  if (!hasAny) {
    return <></>
  } else {
    return (
      <ModalWrapper>
        {modals.map((modal) => {
          if (modal.type === ModalTypes.Notification) {
            return <NotificationModal key={modal.id} {...modal.props} />
          } else if (modal.type === ModalTypes.Confirmation) {
            return <ConfirmationModal key={modal.id} {...modal.props} />
          } else {
            return <OperationModal key={modal.id} {...modal.props} />
          }
        })}
      </ModalWrapper>
    )
  }
}

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  justify-content: center;
  background: #8c8c8c3d;
`

