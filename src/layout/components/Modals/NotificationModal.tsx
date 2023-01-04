import styled from 'styled-components'
import devices from "@/layout/mediaQueries/devices";

export type NotificationModalProps = {
  title: string
  body: string
  onClose?: () => Promise<unknown>
  isShowed: boolean
}

function NotificationModal({ title, body, onClose, isShowed }: NotificationModalProps) {
  return (
    <NotificationModalWrapper isShowed={isShowed}>
      <div className="content">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
      <div className="buttons">
        <button onClick={onClose}>Close</button>
      </div>
    </NotificationModalWrapper>
  )
}

export default NotificationModal

type NotificationModalWrapperProps = {
  isShowed: boolean
}

const NotificationModalWrapper = styled.div<NotificationModalWrapperProps>`
  display: ${({ isShowed }) => (isShowed ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.modalBackground};
  box-shadow: 4px 4px 8px ${({ theme }) => theme.black};
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;
  .content {
    padding: 20px;
    .title {
      font-size: 1.1em;
      font-weight: bolder;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    button {
      flex-grow: 1;
      border: none;
      padding: 10px;
    }
  }

  @media ${devices.tablet} {
    max-width: 450px;
  }
`
