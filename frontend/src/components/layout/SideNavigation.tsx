import { NavLink } from 'react-router-dom'

export default function SideNavigation() {
  return (
    <aside className='w-64 bg-white border-r border-gray-200 flex flex-col'>
      <nav className='flex-1 p-3 space-y-1'>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${
              isActive
                ? 'bg-primary-100 text-primary-700 font-semibold'
                : 'hover:bg-gray-100'
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to='/calendar'
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${
              isActive
                ? 'bg-primary-100 text-primary-700 font-semibold'
                : 'hover:bg-gray-100'
            }`
          }
        >
          Calendar
        </NavLink>

        <NavLink
          to='/reports'
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md ${
              isActive
                ? 'bg-primary-100 text-primary-700 font-semibold'
                : 'hover:bg-gray-100'
            }`
          }
        >
          Reports
        </NavLink>
      </nav>
    </aside>
  )
}