import styled from 'styled-components'

export type OperationalModalProps = {
  title: string
  onCancel?: () => Promise<unknown>
  onExecute?: () => Promise<unknown>
  isShowed: boolean
  component: () => JSX.Element
  cancelText?: string
  executeText?: string
}

function OperationalModal({
  title,
  component,
  onCancel,
  onExecute,
  isShowed,
  cancelText = 'Cancel',
  executeText = 'Save'
}: OperationalModalProps) {
  return (
    <OperationalModalWrapper
      isShowed={isShowed}
      borderRadius={8}
      topOffsetOfModal={40}
      headerHeight={44}>
      <div className="modal">
        <div className="header">
          <button onClick={onCancel}>{cancelText}</button>
          <span>{title}</span>
          <button onClick={onExecute}>{executeText}</button>
        </div>
        <div className="content">{component()}</div>
      </div>
    </OperationalModalWrapper>
  )
}

export default OperationalModal

type ModalWrapperProps = {
  isShowed: boolean
  topOffsetOfModal: number
  headerHeight: number
  borderRadius: number
}

const OperationalModalWrapper = styled.div<ModalWrapperProps>`
  display: ${({ isShowed }) => (isShowed ? 'flex' : 'none')};
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 999;
  justify-content: center;

  .modal {
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.modalBackground};
    top: ${({ topOffsetOfModal }) => topOffsetOfModal}px;
    border-radius: ${({ borderRadius }) => borderRadius}px ${({ borderRadius }) => borderRadius}px 0
      0;

    height: calc(100% - ${({ topOffsetOfModal }) => topOffsetOfModal}px);

    .header {
      border-radius: ${({ borderRadius }) => borderRadius}px ${({ borderRadius }) => borderRadius}px
        0 0;

      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      background: ${({ theme }) => theme.modalBackground};
      padding: 10px 20px;
      height: ${({ headerHeight }) => headerHeight}px;
    }
    .content {
      padding: 0 20px;
      margin-top: ${({ headerHeight }) => headerHeight}px;
      overflow: scroll;
      height: calc(100% - ${({ headerHeight }) => headerHeight}px);
    }
  }
`
