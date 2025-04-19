'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface PlaceholderImageProps {
  src: string
  fallbackSrc: string
  alt: string
  width: number
  height: number
  className?: string
  animationDelay?: number
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  src,
  fallbackSrc,
  alt, 
  width, 
  height, 
  className = "", 
  animationDelay = 0 
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  
  // Generate a gradient based on the alt text for the fallback
  const generateGradient = (text: string) => {
    // Simple hash function to generate colors
    const hash = text.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    
    const color1 = `hsl(${Math.abs(hash) % 360}, 70%, 85%)`
    const color2 = `hsl(${(Math.abs(hash) % 360 + 40) % 360}, 80%, 75%)`
    
    return `linear-gradient(135deg, ${color1}, ${color2})`
  }
  
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    } else {
      setError(true)
    }
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay }}
        className={`${className} overflow-hidden flex items-center justify-center rounded-xl`}
        style={{ 
          background: generateGradient(alt),
          height: height,
          width: '100%'
        }}
      >
        <div className="p-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-800 mb-1">{alt}</p>
            <p className="text-xs text-gray-500">Image Preview</p>
          </div>
        </div>
      </motion.div>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="relative"
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        style={{ objectFit: "cover" }}
      />
      
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-xl">
          <div className="w-12 h-12 rounded-full border-4 border-t-indigo-500 border-indigo-200 animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}

export default PlaceholderImage 