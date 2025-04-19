'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import React from 'react'

// Reusable animation variants for components
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export const slideDown: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 500 
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
}

export const slideLeft: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 30, 
      stiffness: 400 
    }
  },
  exit: {
    x: 20,
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
}

export const slideRight: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 30, 
      stiffness: 400 
    }
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const rotate: Variants = {
  hidden: { rotate: -5, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 15, 
      stiffness: 400 
    }
  }
}

export const scale: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 300 
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
}

// Pulse animation for highlighting elements
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: { 
    scale: [1, 1.05, 1],
    transition: { 
      repeat: Infinity, 
      repeatType: 'loop', 
      duration: 2, 
      ease: 'easeInOut' 
    }
  }
}

// Bounce animation
export const bounce: Variants = {
  hidden: { y: 0 },
  visible: { 
    y: [0, -10, 0],
    transition: { 
      repeat: Infinity, 
      repeatType: 'loop', 
      duration: 1.2, 
      ease: 'easeInOut' 
    }
  }
}

// Animated Component Wrappers
interface AnimatedProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  variants?: Variants
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration,
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const SlideUp: React.FC<SlideUpProps> = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideDown: React.FC<AnimatedProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={slideDown}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideLeft: React.FC<AnimatedProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={slideLeft}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideRight: React.FC<AnimatedProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={slideRight}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerChildren: React.FC<AnimatedProps> = ({ 
  children, 
  className = "",
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedScale: React.FC<AnimatedProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={scale}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
) 