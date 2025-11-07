type Props = {
  children: React.ReactNode
  variant?:
    | 'primary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'secondary'
    | 'text'
  size?: 'sm' | 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center rounded-md font-medium transition-colours focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  danger: 'bg-error-500 text-white hover:bg-error-600 active:bg-error-700',
  warning:
    'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700',
  success:
    'bg-success-500 text-white hover:bg-success-600 active:bg-success-700',
  info: 'bg-info-500 text-white hover:bg-info-600 active:bg-info-700',
  secondary:
    'bg-gray-500 text-text-primary hover:bg-gray-300 active:bg-gray-400',
  text: 'bg-transparent text-primary-500 hover:underline active:text-primary-700',
}

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-md',
  lg: 'px-6 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
}: Props) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  )
}
