type Props = {
  children: React.ReactNode,
  variant?: 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'text' | 'success',
  size?: 'sm' | 'md' | 'lg'
}

const base = 'inline-flex items-center justify-center rounded-md font-medium'

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  danger: 'bg-error-500 text-white hover:bg-error-600',
  warning: 'bg-warning-500 text-white hover:bg-warning-600',
  success: 'bg-success-500 text-white hover:bg-success-600',
  info: 'bg-info-500 text-white hover:bg-info-600',
  text: 'bg-transparent text-primary-500 hover:bg-primary-100',
}

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-md',
  lg: 'px-6 py-3 text-lg'
}

export default function Button({ children, variant = 'primary', size = 'md' }: Props) {
  return <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
    {children}
  </button>
}
