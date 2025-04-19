'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Card3D from './ui/Card3D'

// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "T-CRM transformed our sales process completely. We've increased our conversion rates by 42% and reduced our sales cycle by over a month.",
    author: "Sarah Johnson",
    title: "Sales Director",
    company: "TechGrowth Solutions",
    avatar: "/images/testimonials/avatar-1.png",
    rating: 5,
    increase: "42%"
  },
  {
    id: 2,
    content: "The customer segmentation features allow us to target our marketing with incredible precision. Our ROI on campaigns has more than doubled since implementation.",
    author: "Michael Chen",
    title: "Marketing Manager",
    company: "InnovateCorp",
    avatar: "/images/testimonials/avatar-2.png",
    rating: 5,
    increase: "115%"
  },
  {
    id: 3,
    content: "What impressed me most was how quickly our team adopted the platform. The intuitive interface meant minimal training and maximum productivity from day one.",
    author: "Priya Patel",
    title: "Operations Lead",
    company: "Quantum Retail",
    avatar: "/images/testimonials/avatar-3.png",
    rating: 5,
    increase: "89%"
  },
  {
    id: 4,
    content: "The automation workflows have freed up our support team to focus on complex issues. Customer satisfaction is up and response times are down dramatically.",
    author: "James Rodriguez",
    title: "Customer Success Manager",
    company: "Elevate Services",
    avatar: "/images/testimonials/avatar-4.png",
    rating: 5,
    increase: "67%"
  }
]

export default function TestimonialsSection() {
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  // Start animation when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [])
  
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={controls}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium inline-block mb-5">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how companies like yours have achieved remarkable results with our platform
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="max-w-6xl w-full">
            {/* Desktop view - multiple cards */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <Card3D 
                    className="bg-white rounded-xl p-6 h-full" 
                    depth={15}
                  >
                    <div className="mb-4 flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden mr-4 relative">
                          {/* Placeholder for avatar */}
                          <div className="absolute inset-0 flex items-center justify-center text-primary-500 font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="bg-accent-orange-light px-3 py-1 rounded-full flex items-center">
                        <svg className="w-4 h-4 text-accent-orange mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-accent-orange-dark font-medium text-sm">{testimonial.increase}</span>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile/tablet view - carousel */}
            <div 
              ref={testimonialsRef}
              className="lg:hidden"
            >
              <div className="relative">
                <motion.div
                  className="overflow-hidden relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center">
                    <Card3D 
                      className="bg-white rounded-xl p-6 max-w-md w-full"
                    >
                      <div className="mb-4 flex">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      
                      <p className="text-gray-700 mb-6 italic min-h-[100px]">
                        "{testimonials[activeIndex].content}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden mr-4 relative">
                            {/* Placeholder for avatar */}
                            <div className="absolute inset-0 flex items-center justify-center text-primary-500 font-bold text-lg">
                              {testimonials[activeIndex].author.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                            <p className="text-sm text-gray-600">
                              {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="bg-accent-orange-light px-3 py-1 rounded-full flex items-center">
                          <svg className="w-4 h-4 text-accent-orange mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-accent-orange-dark font-medium text-sm">{testimonials[activeIndex].increase}</span>
                        </div>
                      </div>
                    </Card3D>
                  </div>
                </motion.div>
                
                {/* Carousel controls */}
                <div className="flex justify-center mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 mx-1 rounded-full ${
                        index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                      } transition-colors duration-200`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats banner */}
        <motion.div
          className="mt-20 bg-primary-600 rounded-2xl p-8 md:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.7,
            delay: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 100
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4,200+</div>
              <div className="text-primary-100">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">53%</div>
              <div className="text-primary-100">Average Revenue Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 