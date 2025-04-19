'use client'

import { useState, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Card3DProps {
  children: ReactNode
  className?: string
  depth?: number
  shadow?: boolean
}

const Card3D = ({ 
  children, 
  className = "", 
  depth = 20, 
  shadow = true 
}: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const cardWidth = rect.width
    const cardHeight = rect.height
    
    // Get mouse position relative to card center
    const centerX = rect.left + cardWidth / 2
    const centerY = rect.top + cardHeight / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Calculate rotation based on mouse position (percentage from center)
    const rotateXValue = (mouseY / (cardHeight / 2)) * -depth/3
    const rotateYValue = (mouseX / (cardWidth / 2)) * depth/3
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setScale(1.02)
  }
  
  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }
  
  const handleMouseEnter = () => {
    setScale(1.02)
  }
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative preserve-3d perspective-${depth*50} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div style={{ transform: "translateZ(0px)" }}>
        {children}
      </div>
      
      {shadow && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-black/10 -z-10"
          style={{
            transform: `translateZ(-20px) rotateX(${rotateX * 1.2}deg) rotateY(${rotateY * 1.2}deg) scale(0.98)`,
            filter: "blur(15px)",
            opacity: 0.5 + (Math.abs(rotateX) + Math.abs(rotateY)) / 50,
          }}
        />
      )}
    </motion.div>
  )
}

export default Card3D 