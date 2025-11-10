import { FaPaw } from 'react-icons/fa'
import Inbox from '../ui/Inbox'
import NewButton from '../ui/NewButton'
import ProfilePicturePopover from '../ui/ProfilePicturePopover'
import SearchInput from '../ui/SearchInput'

export default function TopBar() {
  return (
    <header className='h-16 border-b border-gray-300 flex items-center justify-between p-4 bg-gray-100'>
      <FaPaw className='text-3xl text-text-primary' />
      <SearchInput />
      <div className='flex items-center gap-6'>
        <NewButton />
        <Inbox />
        <ProfilePicturePopover />
      </div>
    </header>
  )
}
