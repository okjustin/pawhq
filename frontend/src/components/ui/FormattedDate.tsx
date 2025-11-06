import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

type DateProps = {
  children: string | Date | number,
  format?: string,
  fromNow?: boolean,
  utc?: boolean,
  refreshMs?: number,
  titleFormat?: string
}

export default function FormattedDate({
  children,
  format,
  fromNow = false,
  utc = true,
  refreshMs = 30000,
  titleFormat = 'YYYY-MM-DD HH:mm'
}: DateProps) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!fromNow) return

    const id = setInterval(() => {
      setTick(t => t + 1)
    }, refreshMs)

    return () => clearInterval(id)
  }, [fromNow, refreshMs])

  let date = typeof children === 'string' || typeof children === 'number'
    ? dayjs(children)
    : dayjs(children.toISOString ? children.toISOString() : children)

  if (utc) {
    date = dayjs.utc(date).tz(dayjs.tz.guess())
  }

  const display = fromNow
    ? date.fromNow()
    : format
    ? date.format(format)
    : date.format('D MMM YYYY, HH:mm')

  return <span title={date.format(titleFormat)}>{display}</span>
}