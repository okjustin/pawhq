import { useState } from 'react'
import { FaInbox } from 'react-icons/fa'
import Popover from './Popover'
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
    <Popover
      trigger={<FaInbox className='text-2xl text-text-primary' />}
      label='Inbox'
      widthClass='min-w-64'
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
    </Popover>
  )
}
