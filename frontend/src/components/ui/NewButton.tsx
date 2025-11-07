import { FaCalendar, FaPaw } from 'react-icons/fa'
import { FaCirclePlus, FaPerson } from 'react-icons/fa6'
import { Link } from 'react-router'

export default function NewButton() {
  return (
    <div className='relative inline-block group'>
      <button
        type='button'
        aria-haspopup='true'
        aria-expanded='false'
        className='rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400 items-center justify-center flex'
      >
        <FaCirclePlus className='text-2xl text-text-primary' />
      </button>

      <div
        className='
          invisible opacity-0 translate-y-2 pointer-events-none
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
          transition-all duration-150
          absolute right-0 mt-2 min-w-40 bg-white border border-gray-200 shadow-lg rounded-md p-4
        '
        role='menu'
        aria-label='New Item Menu'
      >
        <div>
          <Link
            to='/pets/new'
            className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
            role='menuitem'
          >
            <FaPaw className='mr-2 text-lg text-text-secondary' />
            New Pet
          </Link>

          <hr className='my-2 border-t border-gray-300' />

          <Link
            to='/clients/new'
            className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
            role='menuitem'
          >
            <FaPerson className='mr-2 text-lg text-text-secondary' />
            New Client
          </Link>

          <hr className='my-2 border-t border-gray-300' />

          <Link
            to='/appointments/new'
            className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
            role='menuitem'
          >
            <FaCalendar className='mr-2 text-lg text-text-secondary' />
            New Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
