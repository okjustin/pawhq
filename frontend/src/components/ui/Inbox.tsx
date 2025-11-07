import { useState } from 'react'
import { FaInbox } from 'react-icons/fa'
import Toast, { type ToastProps } from './Toast'

type ToastMessage = ToastProps & { id: string }

export default function Inbox() {
  const [messages, setMessages] = useState<ToastMessage[]>([
    {
      id: crypto.randomUUID(),
      type: 'info',
      title: 'Welcome to PawHQ!',
      message:
        'Thanks for signing up to PawHQ. We hope you enjoy using our app.',
      code: 'I-1000',
    },
    {
      id: crypto.randomUUID(),
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile has been successfully updated.',
      code: 'S-2001',
    },
    {
      id: crypto.randomUUID(),
      type: 'warning',
      title: 'Storage Almost Full',
      message:
        'You are nearing your storage limit. Consider upgrading your plan.',
      code: 'W-3002',
    },
    {
      id: crypto.randomUUID(),
      type: 'error',
      title: 'Payment Failed',
      message:
        'There was an issue processing your payment. Please update your billing information.',
      code: 'E-4003',
    },
  ])

  return (
    <div className='relative inline-block group'>
      <button
        type='button'
        aria-haspopup='true'
        aria-expanded='false'
        className='p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400'
      >
        <FaInbox className='text-2xl text-text-primary' />
      </button>

      <div
        className='
          invisible opacity-0 translate-y-2 pointer-events-none
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
          transition-all duration-150
          absolute right-0 mt-2 min-w-64 bg-white border border-gray-200 shadow-lg rounded-md p-4
        '
        role='menu'
        aria-label='Inbox'
      >
        <h3 className='font-semibold mb-2'>Inbox</h3>
        <div className='flex flex-col gap-3 max-h-80 overflow-y-auto p-4'>
          {messages.length === 0 && (
            <p className='text-sm text-text-secondary'>No new messages.</p>
          )}
          {messages.map((msg) => (
            <Toast
              key={msg.id}
              {...msg}
              onClose={() =>
                setMessages((msgs) => msgs.filter((m) => m.id !== msg.id))
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
