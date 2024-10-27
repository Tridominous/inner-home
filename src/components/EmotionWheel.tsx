
import { emotions, octagonPoints } from "../constants";

const EmotionWheel = ({ selectedEmotion, onSelectEmotion }) => {
  const size = 300
  const center = size / 2
  const scale = size * 0.9

  const octagonPath = octagonPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${center + point[0] * scale - scale / 2} ${center + point[1] * scale - scale / 2}`)
    .join(' ') + 'Z'

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      <path d={octagonPath} fill="#524F91" stroke="#8B5CF6" strokeWidth="2" />
      {emotions.map((emotion, index) => {
        const angle = (index / emotions.length) * 2 * Math.PI - Math.PI / 2
        const x = center + (scale / 2) * 0.8 * Math.cos(angle)
        const y = center + (scale / 2) * 0.8 * Math.sin(angle)
        return (
          <g key={emotion.name} onClick={() => onSelectEmotion(emotion)} className="cursor-pointer">
            <line
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke={selectedEmotion.name === emotion.name ? '#FFD700' : '#8B5CF6'}
              strokeWidth="2"
            />
            <text
              x={center + (scale / 2) * 0.9 * Math.cos(angle)}
              y={center + (scale / 2) * 0.9 * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={selectedEmotion.name === emotion.name ? '#FFD700' : '#8B5CF6'}
              className="text-xs font-bold"
            >
              {emotion.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default EmotionWheel;
