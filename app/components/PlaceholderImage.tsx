import React from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ width, height, text, className }) => {
  return (
    <div 
      className={`bg-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <p className="text-gray-600 text-center">
        {text || `${width}x${height}`}
      </p>
    </div>
  )
}

export default PlaceholderImage