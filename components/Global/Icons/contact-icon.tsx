interface IconProps {
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function ContactIcon({ className = "", width = 40, height = 40, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="16" r="6" stroke={color} strokeWidth="2.5" />
      <path
        d="M32 34C32 28.4772 26.6274 24 20 24C13.3726 24 8 28.4772 8 34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M20 5V8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="15" stroke={color} strokeWidth="2.5" />
    </svg>
  )
}
