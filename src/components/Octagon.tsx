import { octagonPoints } from "../constants";

const Octagon = ({ children, className }) => {
    const size = 400
    const octagonPath = octagonPoints
      .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point[0] * size} ${point[1] * size}`)
      .join(' ') + 'Z'
  
    return (
      <svg viewBox={`0 0 ${size} ${size}`} className={`w-full ${className || ''}`}>
        <path d={octagonPath} fill="currentColor" />
        <foreignObject x="0" y="0" width={size} height={size}>
          <div className="flex items-center justify-center h-full p-8">
            {children}
          </div>
        </foreignObject>
      </svg>
    )
  }
  
  export default Octagon;