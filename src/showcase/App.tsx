import './App.css'
import CalendarMonthExample from '@/showcase/components/CalendarMonthExample'
import CalendarDayExample from '@/showcase/components/CalendarDayExample'

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="h1">Calendar Lib Show Case</h1>
      </div>
      <hr />
      <CalendarMonthExample />
      <hr />
      <CalendarDayExample />
    </div>
  )
}

export default App
