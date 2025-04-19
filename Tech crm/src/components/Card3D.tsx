'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Card3DProps = {
  className?: string
  children: React.ReactNode
  intensity?: number
  animate?: boolean
  initialScale?: number
}

export default function Card3D({ 
  className = '', 
  children, 
  intensity = 20,
  animate = true,
  initialScale = 1
}: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animate) return
    
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within the element
    const y = e.clientY - rect.top // y position within the element
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate rotation based on mouse position
    // Adjust divisors to control sensitivity
    const rotateXValue = -((y - centerY) / intensity)
    const rotateYValue = (x - centerX) / intensity
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }
  
  const handleMouseLeave = () => {
    if (!animate) return
    
    setRotateX(0)
    setRotateY(0)
  }
  
  return (
    <motion.div 
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${initialScale})`,
        transition: 'transform 0.2s ease',
      }}
      whileHover={animate ? { scale: initialScale * 1.05 } : undefined}
    >
      {children}
    </motion.div>
  )
} 