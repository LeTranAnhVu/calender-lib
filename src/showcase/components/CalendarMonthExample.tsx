import {useEffect, useState} from 'react'
import Calendar from "@/layout/components/CalendarMonth/CalendarMonth";
import "./CalendarMonthExample.scss"

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const years = [2019, 2020, 2021, 2022, 2023, 2024]

function CalendarMonthExample() {
    const [today] = useState<Date>(new Date())
    const [month, setMonth] = useState(today.getMonth() + 1) // TODO refactor later
    const [year, setYear] = useState(today.getFullYear())
    const changeMonth = (value: string) => {
        const month = parseInt(value)
        setMonth(month)
    }

    const changeYear = (value: string) => {
        const year = parseInt(value)
        setYear(year)
    }

    return (
        <div className="calendar-month-example">
            <h2>Calendar {month}/{year}</h2>
            <select name="month" id="month" defaultValue={month} onChange={({target: {value}}) => changeMonth(value)}>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select> /
            <select name="year" id="year" defaultValue={year} onChange={({target: {value}}) => changeYear(value)}>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <hr/>
            <Calendar month={month} year={year}/>
        </div>
    )
}

export default CalendarMonthExample
