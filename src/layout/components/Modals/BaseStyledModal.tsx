import styled from 'styled-components'
import Panel from '@/layout/components/Panel'

export const BaseStyledModal = styled(Panel)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.modalBackground};
  width: 90%;
  overflow: hidden;
  z-index: 999;
  padding: 0;
`
