import CalendarMonthExample from '@/showcase/components/CalendarMonthExample'
import CalendarDayExample from '@/showcase/components/CalendarDayExample'
import TimeContextProvider from '@/layout/components/TimeContextProvider'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/lib/themes/default'
import { RootStyles } from '@/lib/themes/root'
import ButtonExample from './components/ButtonExample'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TimeContextProvider>
        <>
          <RootStyles />
          <AppWrapper>
            <TitleWrapper>
              <Title>Calendar Lib Show Case</Title>
            </TitleWrapper>
            <ButtonExample />
            <Hr />
            <CalendarMonthExample />
            <Hr />
            <CalendarDayExample />
          </AppWrapper>
        </>
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
