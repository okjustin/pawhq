type Props = {
  type: 'error' | 'warning' | 'info' | 'success',
  size?: 'sm' | 'md' | 'lg'
}

const icons = {
  error: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6L18 18M6 18L18 6"
      />
    </>
  ),
  warning: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v8"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01"
      />
    </>
  ),
  info: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6h.01"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12v6"
      />
    </>
  ),
  success: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  )
}

const bg = {
  error: 'bg-error-500',
  warning: 'bg-warning-500',
  info: 'bg-info-500',
  success: 'bg-success-500'
}

const circleSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10'
}

const svgSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10'
}

export default function Icon({ type, size = 'md' }: Props) {
  return (
    <div className={`${circleSizes[size]} ${bg[type]} rounded-full inline-flex items-center justify-center text-white`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className={svgSizes[size]}
      >
        {icons[type]}
      </svg>
    </div>
  )
}
