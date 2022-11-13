import './App.css'
import calendarIcon from './assets/logo3.svg'
import CalendarMonthExample from "@/showcase/components/CalendarMonthExample";

function App() {
    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={calendarIcon} className="app-logo" alt="Calendar lib logo"/>
                </a>
                <h1 className="h1">Calendar Lib Show Case</h1>
            </div>
            <hr/>
            <CalendarMonthExample/>
        </div>
    )
}

export default App
