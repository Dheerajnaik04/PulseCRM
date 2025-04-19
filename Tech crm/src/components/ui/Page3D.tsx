'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Page3DProps {
  children: ReactNode
}

export default function Page3D({ children }: Page3DProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Handle mouse movement for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to be between -1 and 1
      setMouseX((e.clientX / windowWidth) * 2 - 1)
      setMouseY((e.clientY / windowHeight) * 2 - 1)
    }
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    
    // Initialize dimensions
    handleResize()
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth, windowHeight])
  
  // Calculate parallax transform based on mouse position and scroll
  const calculateTransform = (depth: number, index: number) => {
    // Make each section respond slightly differently
    const offsetX = mouseX * depth * (index % 2 === 0 ? 1 : -1)
    const offsetY = mouseY * depth * (index % 3 === 0 ? 1 : -1)
    
    // Add subtle rotation based on scroll position
    const rotateX = (scrollY / windowHeight) * 0.5 * (index % 2 === 0 ? 1 : -1)
    const rotateY = (scrollY / windowHeight) * 0.5 * (index % 3 === 0 ? 1 : -1)
    
    return {
      translateX: offsetX + 'px',
      translateY: offsetY + 'px',
      rotateX: rotateX + 'deg',
      rotateY: rotateY + 'deg'
    }
  }
  
  // Clone children and inject 3D effects
  const enhanced3DChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child
    
    // Add 3D effect to sections
    if (
      typeof child.type === 'string' && child.type === 'section' || 
      (typeof child.props.className === 'string' && child.props.className.includes('section'))
    ) {
      // Calculate 3D transform
      const transform = calculateTransform(5, index)
      
      return (
        <motion.div 
          className="preserve-3d"
          style={{
            transform: `translate3d(${transform.translateX}, ${transform.translateY}, 0px) rotateX(${transform.rotateX}) rotateY(${transform.rotateY})`,
            transition: 'transform 0.1s ease-out'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {child}
        </motion.div>
      )
    }
    
    // Special handling for header and footer - check component type more safely
    const componentName = typeof child.type !== 'string' && 
      (child.type as any).displayName || 
      (child.type as any).name || '';
    
    if (componentName === 'Header' || componentName === 'Footer') {
      return React.cloneElement(child, {
        ...child.props,
        className: `${child.props.className || ''} preserve-3d`,
        style: {
          ...(child.props.style || {}),
          transformStyle: 'preserve-3d',
          zIndex: 10
        }
      });
    }
    
    // Pass through any other elements
    return child
  })
  
  return (
    <div className="perspective-2000">
      {enhanced3DChildren}
    </div>
  )
} 