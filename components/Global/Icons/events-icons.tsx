interface IconProps {
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function EventsIcon({ className = "", width = 40, height = 40, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5" y="10" width="30" height="25" rx="2" stroke={color} strokeWidth="2.5" />
      <path d="M5 16H35" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 5V10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 5V10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22L18 28L28 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
