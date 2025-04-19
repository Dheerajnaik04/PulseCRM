'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxScrollProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  offset?: number
}

const ParallaxScroll = ({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
  offset = 0
}: ParallaxScrollProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  let transform
  
  switch (direction) {
    case 'up':
      transform = useTransform(
        scrollYProgress, 
        [0, 1], 
        [100 * speed + offset, -100 * speed + offset]
      )
      break
    case 'down':
      transform = useTransform(
        scrollYProgress, 
        [0, 1], 
        [-100 * speed + offset, 100 * speed + offset]
      )
      break
    case 'left':
      transform = useTransform(
        scrollYProgress, 
        [0, 1], 
        [100 * speed + offset, -100 * speed + offset]
      )
      break
    case 'right':
      transform = useTransform(
        scrollYProgress, 
        [0, 1], 
        [-100 * speed + offset, 100 * speed + offset]
      )
      break
  }

  const isHorizontal = direction === 'left' || direction === 'right'
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [isHorizontal ? 'x' : 'y']: transform,
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxScroll 