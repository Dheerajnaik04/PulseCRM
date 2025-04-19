'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FadeIn, SlideUp, SlideDown, staggerContainer, slideUp } from './ui/animations'
import Card3D from './Card3D'

const highlights = [
  'Generate Leads',
  'Track Prospects',
  'Avail Opportunities',
  'Close Deals',
  'Retain Clients'
]

// Stats data
type Stat = {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '10k+', label: 'Active Users' },
  { value: '85%', label: 'Retention Rate' },
  { value: '12x', label: 'ROI Increase' }
]

export default function HeroSection() {
  const [highlightIndex, setHighlightIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Transform values for parallax elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const decorationScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const decorationOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % highlights.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-20 pb-28 lg:pt-28 lg:pb-40">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Light grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:30px_30px]"></div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary-50 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Customer Relationships with T-CRM
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Streamline your sales process, improve customer satisfaction, and drive growth with our powerful CRM solution designed for modern businesses.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#demo-form" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Start Free Trial
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 bg-accent-orange hover:bg-accent-orange-dark text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Explore Features
              </a>
            </motion.div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 perspective-1000">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: 25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    translateY: -10,
                    rotateX: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white shadow-md border border-gray-100 rounded-xl p-4 transition-all duration-300 transform preserve-3d"
                >
                  <div 
                    className="text-2xl md:text-3xl text-primary-600 font-bold transform translate-z-10"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7 + (index * 0.1) 
                      }}
                    >
                      {stat.value}
                    </motion.span>
                  </div>
                  <div 
                    className="text-sm text-gray-500 mt-1 transform translate-z-5"
                    style={{ transform: "translateZ(5px)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:flex hidden justify-center items-center"
          >
            {/* Add a floating UI mockup or illustration here */}
            <div className="relative preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-accent-orange/5 rounded-xl blur-xl"></div>
              <div className="relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xl transform translate-z-0" style={{ transform: "translateZ(0)" }}>
                {/* Placeholder for UI image/animation */}
                <div className="aspect-[4/3] w-full max-w-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  {/* Replace with actual image */}
                  <svg className="w-24 h-24 opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* UI Elements overlay */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-gray-100 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-gray-100 rounded-md h-6 w-64"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-500 rounded-xl shadow-lg transform rotate-12 translate-z-20" style={{ transform: "translateZ(20px) rotate(12deg)" }}></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-orange rounded-full shadow-lg transform rotate-45 translate-z-30" style={{ transform: "translateZ(30px) rotate(45deg)" }}></div>
            </div>
            
            {/* Floating details */}
            <div className="absolute top-10 -right-16 bg-white rounded-lg shadow-xl p-4 transform rotate-6 animate-float translate-z-15" style={{ transform: "translateZ(15px) rotate(6deg)" }}>
              <div className="w-48 h-24 flex flex-col">
                <div className="text-sm font-semibold text-gray-800">Sales Performance</div>
                <div className="mt-2 flex-1 flex items-end">
                  <div className="w-4 h-12 bg-primary-200 rounded-sm"></div>
                  <div className="w-4 h-16 bg-primary-400 rounded-sm ml-2"></div>
                  <div className="w-4 h-20 bg-primary-600 rounded-sm ml-2"></div>
                  <div className="w-4 h-14 bg-primary-800 rounded-sm ml-2"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-20 bg-white rounded-lg shadow-xl p-4 transform -rotate-3 animate-float-reverse border border-gray-100 translate-z-25" style={{ transform: "translateZ(25px) rotate(-3deg)" }}>
              <div className="w-48 flex flex-col">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-gray-800">Task Reminder</div>
                    <div className="text-xs text-gray-500">Follow up with client</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted by logos */}
        <motion.div 
          className="mt-16 pt-6 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center text-sm text-gray-500 mb-4">TRUSTED BY INNOVATIVE COMPANIES</div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-4">
            {['Google', 'Microsoft', 'Airbnb', 'Shopify', 'Stripe'].map((company, index) => (
              <div key={index} className="text-gray-700 font-semibold text-xl">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 