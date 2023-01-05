import CalendarMonthExample from '@/showcase/components/CalendarMonthExample'
import CalendarDayExample from '@/showcase/components/CalendarDayExample'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/lib/themes/default'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { RootStyles } from '@/lib/themes/root'
import IconExample from './components/IconExample'

import ModalContextProvider from '@/layout/components/contexts/ModalContextProvider'
import TimeContextProvider from '@/layout/components/contexts/TimeContextProvider'
import { Normalize } from 'styled-normalize'
import ModalExamples from './components/ModalExamples'
import Modal from '@/layout/components/Modals/Modal'
library.add(fas)

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TimeContextProvider>
        <ModalContextProvider>
          <>
            <RootStyles />
            <Normalize />
            <AppWrapper>
              <Modal />
              <TitleWrapper>
                <Title>Calendar Lib Show Case</Title>
              </TitleWrapper>
              <IconExample />
              <Hr />
              <CalendarMonthExample />
              <Hr />
              <CalendarDayExample />
              <Hr />
              <ModalExamples />
            </AppWrapper>
          </>
        </ModalContextProvider>
      </TimeContextProvider>
    </ThemeProvider>
  )
}

export default App

const AppWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`

const TitleWrapper = styled.div``
const Title = styled.h1``
const Hr = styled.hr``
