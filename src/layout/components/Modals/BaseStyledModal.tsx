import styled from 'styled-components'

export const BaseStyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.modalBackground};
  box-shadow: 4px 4px 8px ${({ theme }) => theme.black};
  width: 90%;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  z-index: 999;
`
