interface IconProps {
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function HouseIcon({ className = "", width = 40, height = 40, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 5L5 17.5V35H15V25H25V35H35V17.5L20 5Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15 25H25V35H15V25Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
