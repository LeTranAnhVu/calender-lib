import { createContext, useState } from 'react'
import type { WithChildrenProps } from '@/layout/components/contexts/types'
import type { Nullable } from '@/layout/types'

export type ModalContent = {
  title: string
  body: string
  editComponent: () => JSX.Element
}

export type IModalContext = {
  showModal: (content: ModalContent) => void
  closeModal: () => void
  isShowed: boolean
  content: Nullable<ModalContent>
}

const initialValue: IModalContext = {
  showModal: () => null,
  closeModal: () => null,
  isShowed: false,
  content: null
}

export const ModalContext = createContext<IModalContext>(initialValue)

type Props = WithChildrenProps
function ModalContextProvider({ children }: Props) {
  const [isShowed, setIsShowed] = useState(false)
  const [content, setContent] = useState<Nullable<ModalContent>>(null)

  const show = (content: ModalContent) => {
    setIsShowed(true)
    setContent(content)
  }

  const closeModal = () => {
    setIsShowed(false)
  }

  return (
    <ModalContext.Provider value={{ showModal: show, isShowed, closeModal, content }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
