import React from 'react'

const CircularText = ({
  text = 'LASHED BY TASH • Award-nominated lash artistry • Steinbach, MB •',
  size = 180,
  color = '#FAF9F5',
  duration = 18,
  textClassName = 'font-sans text-[10px] uppercase tracking-[2.5px]',
  className = '',
}) => {
  const radius = size / 2 - 8
  const pathId = `circular-text-path-${text.length}-${size}`

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        animation: `spin-${pathId} ${duration}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes spin-${pathId} {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <path
            id={pathId}
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text fill={color} className={textClassName}>
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </div>
  )
}

export default CircularText