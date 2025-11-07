import { FaCalendar, FaPaw } from 'react-icons/fa'
import { FaCirclePlus, FaPerson } from 'react-icons/fa6'
import { Link } from 'react-router'
import Popover from './Popover'

export default function NewButton() {
  return (
    <Popover
      trigger={<FaCirclePlus className='text-2xl text-text-primary' />}
      label='New Item Menu'
    >
      <div>
        <Link
          to='/pets/new'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaPaw className='mr-2 text-lg text-text-secondary' /> New Pet
        </Link>

        <hr className='my-2 border-t border-gray-300' />

        <Link
          to='/clients/new'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaPerson className='mr-2 text-lg text-text-secondary' /> New Client
        </Link>

        <hr className='my-2 border-t border-gray-300' />

        <Link
          to='/appointments/new'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaCalendar className='mr-2 text-lg text-text-secondary' /> New
          Appointment
        </Link>
      </div>
    </Popover>
  )
}
