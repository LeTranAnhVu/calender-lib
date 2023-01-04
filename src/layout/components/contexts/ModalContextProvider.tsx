import { createContext, useState } from 'react'
import type { WithChildrenProps } from '@/layout/components/contexts/types'
import type { ModalItem } from '@/layout/components/Modals/Modal'

export type IModalContext = {
  modals: ModalItem[]
  addModals: (modalItems: ModalItem[]) => void
  addModal: (modalItems: ModalItem) => void
  closeModal: (id: string) => void
}

const initialValue: IModalContext = {
  modals: [],
  addModal: () => null,
  addModals: () => null,
  closeModal: () => null
}

export const ModalContext = createContext<IModalContext>(initialValue)

type Props = WithChildrenProps
function ModalContextProvider({ children }: Props) {
  const [modals, setModals] = useState<ModalItem[]>([])

  const addModals = (modalItems: ModalItem[]) => {
    setModals((statedModals) => [...statedModals, ...modalItems])
  }

  const addModal = (modalItems: ModalItem) => {
    setModals((statedModals) => [...statedModals, modalItems])
  }

  const closeModal = (id: string) => {
    setModals((statedModals) => statedModals.filter((m) => m.id != id))
  }

  return (
    <ModalContext.Provider value={{ modals, addModal, addModals, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
