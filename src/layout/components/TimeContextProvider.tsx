import type { ReactComponentElement } from 'react'
import { createContext, useEffect, useState } from 'react'
import { dateToHour, formatHourColonMinute } from '@/lib/date'

export type ITimeContext = {
  now: Date
  currentHour: number
  currentHourColonMinute: string
}

const initialValue: ITimeContext = {
  now: new Date(),
  currentHour: -1,
  currentHourColonMinute: ''
}

export const TimeContext = createContext<ITimeContext>(initialValue)

type Props = {
  children: ReactComponentElement<any>
}
function TimeContextProvider({ children }: Props) {
  const [currentHour, setCurrentHour] = useState(0)
  const [currentHourColonMinute, setCurrentHourColonMinute] = useState('00:00')

  const [now, setNow] = useState(new Date())

  // Set the current hour and update it every minute
  useEffect(() => {
    setNow(new Date())

    const interval = setInterval(() => {
      setNow(new Date())
    }, 500 * 60)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Set the current hour and update it every minute
  useEffect(() => {
    setCurrentHour(dateToHour(now))
    setCurrentHourColonMinute(formatHourColonMinute(now))
  }, [now])

  return (
    <TimeContext.Provider value={{ currentHour, now, currentHourColonMinute }}>
      {children}
    </TimeContext.Provider>
  )
}

export default TimeContextProvider
