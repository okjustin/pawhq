import { FaBuilding, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router'
import Popover from './Popover'
import ProfilePicture from './ProfilePicture'

export default function ProfilePicturePopover() {
  return (
    <Popover
      trigger={
        <ProfilePicture
          size='sm'
          type='initials'
          userName='Justin Tyson'
          backgroundColor='bg-green-500'
        />
      }
    >
      <div>
        <Link
          to='/profile/settings'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaCog className='mr-2 text-lg text-text-secondary' /> Settings
        </Link>

        <hr className='my-2 border-t border-gray-300' />

        <Link
          to='/company'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaBuilding className='mr-2 text-lg text-text-secondary' /> Company
        </Link>

        <hr className='my-2 border-t border-gray-300' />

        <Link
          to='/logout'
          className='flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded'
        >
          <FaSignOutAlt className='mr-2 text-lg text-text-secondary' /> Logout
        </Link>
      </div>
    </Popover>
  )
}
