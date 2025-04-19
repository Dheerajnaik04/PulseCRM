'use client'

import { useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedTooltipProps {
  children: ReactNode
  content: ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

const AnimatedTooltip = ({
  children,
  content,
  direction = 'top',
  delay = 0.2,
  className = ''
}: AnimatedTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true)
      setHasMounted(true)
    }, delay * 1000)
  }
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(false)
  }
  
  // Determine positioning based on direction
  let tooltipPosition: any = {}
  let arrowPosition: any = {}
  let tooltipAnimation: any = {}
  
  switch (direction) {
    case 'top':
      tooltipPosition = { bottom: '100%', left: '50%', transform: 'translateX(-50%) translateY(-8px)' }
      arrowPosition = { bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' }
      tooltipAnimation = { 
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
      }
      break
    case 'bottom':
      tooltipPosition = { top: '100%', left: '50%', transform: 'translateX(-50%) translateY(8px)' }
      arrowPosition = { top: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' }
      tooltipAnimation = { 
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 }
      }
      break
    case 'left':
      tooltipPosition = { right: '100%', top: '50%', transform: 'translateY(-50%) translateX(-8px)' }
      arrowPosition = { right: '-6px', top: '50%', transform: 'translateY(-50%) rotate(45deg)' }
      tooltipAnimation = { 
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -10 }
      }
      break
    case 'right':
      tooltipPosition = { left: '100%', top: '50%', transform: 'translateY(-50%) translateX(8px)' }
      arrowPosition = { left: '-6px', top: '50%', transform: 'translateY(-50%) rotate(45deg)' }
      tooltipAnimation = { 
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 }
      }
      break
  }
  
  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-50 w-64 p-4 text-sm bg-white border border-gray-100 rounded-lg shadow-lg preserve-3d"
            style={{ 
              ...tooltipPosition,
              transformStyle: 'preserve-3d',
              willChange: 'transform, opacity'
            }}
            initial={tooltipAnimation.initial}
            animate={tooltipAnimation.animate}
            exit={tooltipAnimation.exit}
            transition={{ 
              type: 'spring', 
              stiffness: 500, 
              damping: 30,
              mass: 1
            }}
          >
            {/* Floating animation for content */}
            <motion.div
              className="relative z-10"
              animate={{ 
                y: [0, hasMounted ? 3 : 0, 0],
                rotateX: [0, hasMounted ? 2 : 0, 0],
                rotateY: [0, hasMounted ? -2 : 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              {content}
            </motion.div>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-indigo-50/30 rounded-lg -z-10" />
            
            {/* Arrow */}
            <div 
              className="absolute w-3 h-3 bg-white border border-gray-100 transform"
              style={arrowPosition}
            />
            
            {/* Decorative dot in corner */}
            <motion.div
              className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-400/50"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedTooltip 