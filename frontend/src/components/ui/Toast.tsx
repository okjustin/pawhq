import { useEffect } from 'react'
import Icon from './Icon'
import { RxCross2 } from "react-icons/rx"
import FormattedDate from './FormattedDate'

type Props = {
  type?: 'error' | 'warning' | 'info' | 'success'
  title?: string
  message?: string
  date?: string | Date | number
  code?: string
  autoCloseMs?: number
  onClose?: () => void
  onClick?: () => void
}

export default function Toast({
  type = 'warning',
  title = 'Something went wrong',
  message = 'An unexpected error occurred.',
  date = Date.now(),
  code = 'E-0000',
  autoCloseMs,
  onClose,
  onClick
}: Props) {

  useEffect(() => {
    if (!autoCloseMs || !onClose) return

    const timer = setTimeout(() => onClose(), autoCloseMs)
    return () => clearTimeout(timer)
  }, [autoCloseMs, onClose])

  const handleClick = (e: React.MouseEvent) => {
    const isCloseButton = (e.target as HTMLElement).closest('.toast-close')
    if (isCloseButton) return

    onClick?.()
  }

  return (
    <div
      className='bg-white outline-gray-300 outline rounded-sm p-4 w-80 flex flex-col gap-4 cursor-pointer hover:bg-gray-50 transition-colors'
      onClick={handleClick}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Icon type={type} />
          <h1 className='text-sm font-semibold'>{title}</h1>
        </div>
        <RxCross2
          className='toast-close cursor-pointer text-2xl text-text-muted font-bold hover:text-error-500 active:text-error-600 transition-colors'
          onClick={() => onClose?.()}
        />
      </div>

      <p className='text-sm text-text-secondary'>{message}</p>

      <div className='flex justify-between items-center caption'>
        <span>{code}</span>
        <FormattedDate fromNow>{date}</FormattedDate>
      </div>
    </div>
  )
}
