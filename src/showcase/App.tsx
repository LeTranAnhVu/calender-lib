import CalendarMonthExample from '@/showcase/components/CalendarMonthExample'
import CalendarDayExample from '@/showcase/components/CalendarDayExample'
import TimeContextProvider from '@/layout/components/TimeContextProvider'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/lib/themes/default'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@/layout/components/Icons/Icon'
import { RootStyles } from '@/lib/themes/root'

library.add(fas)
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TimeContextProvider>
        <>
          <RootStyles />
          <AppWrapper>
            <TitleWrapper>
              <Title>Calendar Lib Show Case</Title>
              <Icon icon="cog" />
            </TitleWrapper>
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
