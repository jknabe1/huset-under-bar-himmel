interface IconProps {
    className?: string
    width?: number | string
    height?: number | string
    color?: string
  }
  
  export default function MenuIcon({ className = "", width = 40, height = 40, color = "currentColor" }: IconProps) {
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
          d="M10 10H30M10 20H30M10 30H30"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15Z"
          fill={color}
        />
        <path
          d="M7 31C8.65685 31 10 29.6569 10 28C10 26.3431 8.65685 25 7 25C5.34315 25 4 26.3431 4 28C4 29.6569 5.34315 31 7 31Z"
          fill={color}
        />
      </svg>
    )
  }
  