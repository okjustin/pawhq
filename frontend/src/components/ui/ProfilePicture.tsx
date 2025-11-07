import { FaUser } from 'react-icons/fa'

type Props = {
  imageUrl?: string
  size?: 'sm' | 'md' | 'lg'
  type?: 'photo' | 'initials'
  userName?: string
  backgroundColor?: string
}

const base =
  'rounded-full flex items-center justify-center font-semibold text-white overflow-hidden'

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-md',
  lg: 'w-16 h-16 text-lg',
}

export default function ProfilePicture({
  imageUrl,
  size = 'md',
  type = 'photo',
  userName = '',
  backgroundColor = 'bg-gray-400',
}: Props) {
  if (type === 'photo' && imageUrl) {
    return (
      <img
        src={imageUrl}
        alt='Profile'
        className={`${base} ${sizes[size]} object-cover`}
      />
    )
  }

  if (userName) {
    const initials = userName
      .split(' ')
      .map((namePart) => namePart.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('')

    return (
      <div className={`${base} ${sizes[size]} ${backgroundColor}`}>
        {initials}
      </div>
    )
  }

  return (
    <div className={`${base} ${sizes[size]} ${backgroundColor}`}>
      <FaUser size={sizes[size].split(' ')[1]} />
    </div>
  )
}
