import type { ReactNode } from 'react'

type PopoverProps = {
  trigger: ReactNode
  children: ReactNode
  position?: 'left' | 'right'
  widthClass?: string
  label?: string
}

export default function Popover({
  trigger,
  children,
  position = 'right',
  widthClass = 'min-w-40',
  label,
}: PopoverProps) {
  const alignClass = position === 'right' ? 'right-0' : 'left-0'

  return (
    <div className='relative inline-block group'>
      <button
        type='button'
        aria-haspopup='true'
        aria-expanded='false'
        className='rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400 items-center justify-center flex'
      >
        {trigger}
      </button>

      <div
        className={`
          invisible opacity-0 translate-y-2 pointer-events-none
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
          transition-all duration-150
          absolute ${alignClass} mt-2 ${widthClass} bg-white border border-gray-200 shadow-lg rounded-md p-4
        `}
        role='menu'
        aria-label={label}
      >
        {children}
      </div>
    </div>
  )
}
