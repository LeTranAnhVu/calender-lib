import { useContext } from 'react'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'
import styled from 'styled-components'
function Modal() {
  const { isShowed, content } = useContext(ModalContext)
  const isDisplay = isShowed ? 'block' : 'none'
  return (
    <ModalWrapper style={{ display: isDisplay, top: '100px' }}>
      <p className="title">{content?.title}</p>
      <p className="body">{content?.body}</p>
      <hr />
      {content?.editComponent()}
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100vw;
  background: ${({ theme }) => theme.white};
  height: 400px;
  color: ${({ theme }) => theme.black};
  z-index: 999;
`

export default Modal
