import './Modal.scss'
import { useContext } from 'react'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'
function Modal() {
  const { isShowed, content } = useContext(ModalContext)
  const isDisplay = isShowed ? 'block' : 'none'
  return (
    <div className="modal" style={{ display: isDisplay, top: '100px' }}>
      <p className="title">{content?.title}</p>
      <p className="body">{content?.body}</p>
      <hr />
      {content?.editComponent()}
    </div>
  )
}

export default Modal
