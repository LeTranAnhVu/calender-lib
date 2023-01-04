import styled from 'styled-components'
import devices from '@/layout/mediaQueries/devices'

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
      <div className="header">
        <button onClick={onCancel}>{cancelText}</button>
        <span>{title}</span>
        <button onClick={onExecute}>{executeText}</button>
      </div>
      <div className="content">{component()}</div>
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
  box-shadow: 4px 4px 8px ${({ theme }) => theme.black};
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: calc(100% - ${({ topOffsetOfModal }) => topOffsetOfModal}px);
  transform: translate(-50%, -50%);
  width: 100%;
  background: ${({ theme }) => theme.modalBackground};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding-top: ${({ headerHeight }) => headerHeight}px;

  .header {
    border-radius: ${({ borderRadius }) => borderRadius}px ${({ borderRadius }) => borderRadius}px 0
      0;

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
    box-shadow: 1px 0px 2px ${({ theme }) => theme.black};
  }
  .content {
    padding: 0 20px;
    overflow: scroll;
    max-height: 550px;
  }

  @media ${devices.mobileL} {
    .content {
      max-height: 600px;
    }
  }

  @media ${devices.tablet} {
    max-width: 500px;
  }
`
