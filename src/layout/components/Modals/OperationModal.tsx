import styled from 'styled-components'
import devices from '@/layout/mediaQueries/devices'
import { BaseStyledModal } from '@/layout/components/Modals/BaseStyledModal'

export type OperationModalProps = {
  title: string
  onCancel?: () => Promise<unknown>
  onExecute?: () => Promise<unknown>
  isShowed: boolean
  component: () => JSX.Element
  cancelText?: string
  executeText?: string
}

function OperationModal({
  title,
  component,
  onCancel,
  onExecute,
  isShowed,
  cancelText = 'Cancel',
  executeText = 'Save'
}: OperationModalProps) {
  return (
    <OperationModalWrapper isShowed={isShowed} headerHeight={44}>
      <div className="header">
        <button onClick={onCancel}>{cancelText}</button>
        <span>{title}</span>
        <button onClick={onExecute}>{executeText}</button>
      </div>
      <div className="content">{component()}</div>
    </OperationModalWrapper>
  )
}

export default OperationModal

type ModalWrapperProps = {
  isShowed: boolean
  headerHeight: number
}

const OperationModalWrapper = styled(BaseStyledModal)<ModalWrapperProps>`
  display: ${({ isShowed }) => (isShowed ? 'flex' : 'none')};
  padding-top: ${({ headerHeight }) => headerHeight}px;

  .header {
    border-radius: ${({ theme }) => theme.borderRadius}px ${({ theme }) => theme.borderRadius}px 0 0;

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
    box-shadow: 1px 0 2px ${({ theme }) => theme.black};
  }
  .content {
    padding: 0 20px;
    overflow: scroll;
    max-height: 550px;
    width: 100%;
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
