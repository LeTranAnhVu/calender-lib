import {useEffect, useState} from "react";
import {getDateIndex, getNumberOfDatesInMonth} from "@/lib/dateTimeApis";
import "./Calendar.css"

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const years = [2019, 2020, 2021, 2022, 2023, 2024]

function Calendar() {
    const [dates, setDates] = useState<number[]>([])
    const [firstDateIndex, setFirstDateIndex] = useState(0)
    const [today] = useState<Date>(new Date())
    const [month, setMonth] = useState(today.getMonth() + 1) // TODO refactor later
    const [year, setYear] = useState(today.getFullYear())

    useEffect(() => {
        const noOfDates = getNumberOfDatesInMonth(year, month);
        let dates = []
        for (let i = 1; i <= noOfDates; i++) {
            dates.push(i)
        }

        setDates(dates)
        setFirstDateIndex(getDateIndex(year, month, 1))
    }, [month, setMonth, year, setYear])

    const changeMonth = (value: string) => {
        const month = parseInt(value)
        setMonth(month)
    }

    const changeYear = (value: string) => {
        const year = parseInt(value)
        setYear(year)
    }

    const firstDateStyle = {
        gridColumnStart: firstDateIndex
    }

    return (
        <div>
            <h2>Calendar {month}/{year}</h2>
            <select name="month" id="month" onChange={({target: {value}}) => changeMonth(value)}>
                {months.map(m => <option key={m} value={m} selected={m == month}>{m}</option>)}
            </select> /
            <select name="year" id="year" onChange={({target: {value}}) => changeYear(value)}>
                {years.map(y => <option key={y} value={y} selected={y == year}>{y}</option>)}
            </select>

            <div className="calendar-month">
                {dates.map((date) => {
                    if (date == 1) {
                        return <div className={`calendar-month-day`} style={firstDateStyle} key={date}>{date}</div>
                    }

                    return <div className="calendar-month-day" key={date}>{date}</div>
                })}
            </div>
        </div>
    )
}

export default Calendar