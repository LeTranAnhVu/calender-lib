import reactLogo from './assets/react.svg'
import './App.css'
import CalendarMonthExample from "@/showcase/components/CalendarMonthExample";

function App() {
    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <hr/>
            <CalendarMonthExample/>
        </div>
    )
}

export default App
