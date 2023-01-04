import styled from 'styled-components'
import devices from '@/layout/mediaQueries/devices'
import { BaseStyledModal } from '@/layout/components/Modals/BaseStyledModal'

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

const NotificationModalWrapper = styled(BaseStyledModal)<NotificationModalWrapperProps>`
  display: ${({ isShowed }) => (isShowed ? 'block' : 'none')};
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
