import './App.css'
import CalendarMonthExample from '@/showcase/components/CalendarMonthExample'
import CalendarDayExample from '@/showcase/components/CalendarDayExample'
import TimeContextProvider from '@/layout/components/TimeContextProvider'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/themes/default'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TimeContextProvider>
        <div className="App">
          <div>
            <h1 className="h1">Calendar Lib Show Case</h1>
          </div>
          <hr />
          <CalendarMonthExample />
          <hr />
          <CalendarDayExample />
        </div>
      </TimeContextProvider>
    </ThemeProvider>
  )
}

export default App
