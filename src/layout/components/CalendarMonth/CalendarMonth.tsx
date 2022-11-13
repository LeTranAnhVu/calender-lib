import {useEffect, useState} from "react";
import {getDateIndex, getNumberOfDatesInMonth} from "@/lib/dateTimeApis";
import "./CalendarMonth.scss"

type Props = {
    month: number
    year: number 
}

function CalendarMonth({month, year}: Props) {
    const [dates, setDates] = useState<number[]>([])
    const [firstDateIndex, setFirstDateIndex] = useState(0)
    const [today] = useState<Date>(new Date())

    useEffect(() => {
        const noOfDates = getNumberOfDatesInMonth(year, month);
        let dates = []
        for (let i = 1; i <= noOfDates; i++) {
            dates.push(i)
        }

        setDates(dates)
        setFirstDateIndex(getDateIndex(year, month, 1))
    }, [month, year])


    const firstDateStyle = {
        gridColumnStart: firstDateIndex
    }

    return (
        <div className="calendar-month">
            {dates.map((date) => {
                if (date == 1) {
                    return <div className={`calendar-month-day`} style={firstDateStyle} key={date}>{date}</div>
                }

                if (date == today.getDate()) {
                    return <div className="calendar-month-day today" key={date}>{date}</div>
                }

                return <div className="calendar-month-day" key={date}>{date}</div>
            })}
        </div>
    )
}

export default CalendarMonth