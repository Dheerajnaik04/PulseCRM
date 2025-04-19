'use client'

import { useState, useRef, ReactNode, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Tab = {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface TabsWithAnimationProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

const TabsWithAnimation = ({
  tabs,
  defaultTab,
  className = ''
}: TabsWithAnimationProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || (tabs.length > 0 ? tabs[0].id : ''))
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(null)
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([])
  const wrapperRef = useRef<HTMLDivElement>(null)
  
  // Set the bounding box of the active tab and the wrapper
  useEffect(() => {
    const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab)
    if (activeTabIndex >= 0 && tabsRef.current[activeTabIndex]) {
      setTabBoundingBox(tabsRef.current[activeTabIndex]?.getBoundingClientRect() || null)
    }
    if (wrapperRef.current) {
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    }
  }, [activeTab, tabs])
  
  // Calculate the position of the active indicator
  const translateX = tabBoundingBox && wrapperBoundingBox 
    ? tabBoundingBox.left - wrapperBoundingBox.left 
    : 0
  
  // Animation variants
  const tabVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Tabs header */}
      <div className="relative mb-8">
        <div
          ref={wrapperRef}
          className="flex space-x-1 border-b border-gray-200 overflow-x-auto hide-scrollbar pb-px"
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              ref={el => {
                tabsRef.current[idx] = el;
                return;
              }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap flex items-center ${
                activeTab === tab.id
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.icon && (
                <span className="mr-2">{tab.icon}</span>
              )}
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Animated active indicator */}
        {tabBoundingBox && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-primary-500"
            initial={false}
            animate={{
              width: tabBoundingBox.width,
              x: translateX,
              opacity: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          />
        )}
      </div>
      
      {/* Tab content with animation */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {tabs.map(tab => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                {tab.content}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TabsWithAnimation 