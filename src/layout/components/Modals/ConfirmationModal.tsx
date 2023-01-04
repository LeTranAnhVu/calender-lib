import styled from 'styled-components'
import devices from '@/layout/mediaQueries/devices'
import { BaseStyledModal } from '@/layout/components/Modals/BaseStyledModal'

export type ConfirmationModalProps = {
  title: string
  body: string
  onCancel?: () => Promise<unknown>
  onConfirm?: () => Promise<unknown>
  isShowed: boolean
}

function ConfirmationModal({ title, body, onConfirm, onCancel, isShowed }: ConfirmationModalProps) {
  return (
    <ConfirmationModalWrapper isShowed={isShowed}>
      <div className="content">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
      <div className="buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </ConfirmationModalWrapper>
  )
}

export default ConfirmationModal

type ConfirmationModalWrapperProps = {
  isShowed: boolean
}

const ConfirmationModalWrapper = styled(BaseStyledModal)<ConfirmationModalWrapperProps>`
  display: ${({ isShowed }) => (isShowed ? 'block' : 'none')};
  overflow: hidden;
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

    button:first-of-type {
      border-right: 2px solid ${({ theme }) => theme.grey};
    }
  }

  @media ${devices.tablet} {
    max-width: 400px;
  }
`
