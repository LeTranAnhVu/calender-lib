import styled from 'styled-components'

export type ConfirmModalProps = {
  title: string
  body: string
  onCancel?: () => Promise<unknown>
  onConfirm?: () => Promise<unknown>
  isShowed: boolean
}

function ConfirmModal({ title, body, onConfirm, onCancel, isShowed }: ConfirmModalProps) {
  return (
    <ConfirmModalWrapper isShowed={isShowed}>
      <div className="content">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
      <div className="buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </ConfirmModalWrapper>
  )
}

export default ConfirmModal

type ConfirmModalWrapperProps = {
  isShowed: boolean
}

const ConfirmModalWrapper = styled.div<ConfirmModalWrapperProps>`
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

    button:first-of-type {
      border-right: 2px solid ${({ theme }) => theme.grey};
    }
  }
`
