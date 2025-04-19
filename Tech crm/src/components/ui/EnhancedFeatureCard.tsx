'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedTooltip from './AnimatedTooltip'

interface EnhancedFeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
  depth?: number
  tooltipContent?: React.ReactNode
}

const EnhancedFeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  depth = 20,
  tooltipContent
}: EnhancedFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate normalized position (-1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)
    
    setMousePosition({ x: normalizedX, y: normalizedY })
  }

  const variants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 0,
      rotateY: 0
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: { 
        duration: 0.6,
        delay: delay * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  const iconsContainerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } }
  }

  // Default tooltip content if none provided
  const defaultTooltipContent = (
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">{title} Features</h4>
      <ul className="space-y-1 text-gray-600">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
          <span>Easy integration with existing systems</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
          <span>Advanced filters and search capabilities</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
          <span>Real-time updates and notifications</span>
        </li>
      </ul>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      className="col-span-1"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <AnimatedTooltip
        content={tooltipContent || defaultTooltipContent}
        direction="top"
        delay={0.5}
      >
        <motion.div
          ref={cardRef}
          className="h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-soft-md overflow-hidden preserve-3d perspective-1000 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setMousePosition({ x: 0, y: 0 })
          }}
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${-mousePosition.y * depth/4}deg) rotateY(${mousePosition.x * depth/4}deg) scale3d(1.02, 1.02, 1.02)`
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.3s ease',
            boxShadow: isHovered 
              ? `0 ${20 + Math.abs(mousePosition.y) * 20}px ${30 + Math.abs(mousePosition.x) * 20}px rgba(0, 0, 0, 0.1)`
              : '0 10px 30px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Floating particles in background when hovered */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary-100 opacity-70"
                    initial={{ 
                      x: `${Math.random() * 100}%`, 
                      y: `${Math.random() * 100}%`,
                      scale: 0 
                    }}
                    animate={{ 
                      x: `${Math.random() * 100}%`, 
                      y: `${Math.random() * 100}%`,
                      scale: 0.5 + Math.random() * 1.5
                    }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1.5 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div className="relative z-10">
            <motion.div 
              className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-4" 
              variants={iconsContainerVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              style={{
                transform: isHovered 
                  ? `translateZ(${depth}px)` 
                  : 'translateZ(0px)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="text-primary-600">
                {icon}
              </div>
            </motion.div>

            <motion.h3 
              className="text-xl font-bold text-gray-800 mb-2"
              style={{
                transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600"
              style={{
                transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {description}
            </motion.p>
            
            {/* Learn More indicator */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mt-4 text-primary-600 text-sm font-medium flex items-center"
                style={{ transform: 'translateZ(20px)' }}
              >
                <span>Hover for details</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatedTooltip>
    </motion.div>
  )
}

export default EnhancedFeatureCard 