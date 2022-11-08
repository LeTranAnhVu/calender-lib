import {useEffect, useState} from 'react'
import Calendar from "@/layout/components/Calendar";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <hr/>
            <Calendar/>
        </div>
    )
}

export default App
