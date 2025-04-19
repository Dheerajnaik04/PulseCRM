'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import EnhancedFeatureCard from './ui/EnhancedFeatureCard'
import ParallaxScroll from './ui/ParallaxScroll'
import {
  UserGroupIcon,
  ChartBarIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  CogIcon
} from '@heroicons/react/24/outline'

// Custom tooltip content components
const ContactManagementTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Contact Management Features</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Unified contact database with 360° views</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Custom fields and tagging system</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>AI-powered contact deduplication</span>
      </li>
    </ul>
  </div>
);

const SalesPipelineTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Sales Pipeline Features</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Visual kanban board with drag-and-drop</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Revenue forecasting with AI predictions</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Conversion rate analytics by stage</span>
      </li>
    </ul>
  </div>
);

const EmailCampaignsTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Email Campaigns Features</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Drag-and-drop email builder</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Behavioral triggered campaigns</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>A/B testing and performance analytics</span>
      </li>
    </ul>
  </div>
);

const AccountManagementTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Account Management Features</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Hierarchical account structures</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Account health scoring</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Relationship mapping between contacts</span>
      </li>
    </ul>
  </div>
);

const CallCenterTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Call Center Integration</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>One-click calling from any record</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Call recording with AI transcription</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Sentiment analysis and call scoring</span>
      </li>
    </ul>
  </div>
);

const WorkflowAutomationTooltip = () => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">Workflow Automation</h4>
    <ul className="space-y-1 text-gray-600">
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>No-code automation builder</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Trigger-based workflows</span>
      </li>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
        <span>Multi-stage approval processes</span>
      </li>
    </ul>
  </div>
);

const features = [
  {
    title: 'Contact Management',
    description: 'Store all your customer data in one place with detailed profiles, interaction history, and smart segmentation.',
    icon: <UserGroupIcon className="w-7 h-7" />,
    tooltipContent: <ContactManagementTooltip />
  },
  {
    title: 'Sales Pipeline',
    description: 'Track deals from lead to close with customizable stages, forecasting, and performance analytics.',
    icon: <ChartBarIcon className="w-7 h-7" />,
    tooltipContent: <SalesPipelineTooltip />
  },
  {
    title: 'Email Campaigns',
    description: 'Create, automate, and track personalized email campaigns that nurture leads and engage customers.',
    icon: <EnvelopeIcon className="w-7 h-7" />,
    tooltipContent: <EmailCampaignsTooltip />
  },
  {
    title: 'Account Management',
    description: 'Manage multiple accounts and contacts with hierarchical relationships and account-specific insights.',
    icon: <BuildingOffice2Icon className="w-7 h-7" />,
    tooltipContent: <AccountManagementTooltip />
  },
  {
    title: 'Call Center Integration',
    description: 'Seamlessly integrate with your call center for complete call tracking, recording, and analysis.',
    icon: <PhoneIcon className="w-7 h-7" />,
    tooltipContent: <CallCenterTooltip />
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and complex business processes with customizable workflows.',
    icon: <CogIcon className="w-7 h-7" />,
    tooltipContent: <WorkflowAutomationTooltip />
  }
]

export default function EnhancedFeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const controls = useAnimation()
  const mouseRef = useRef<HTMLDivElement>(null)
  const [mouseX, mouseY] = [useRef(0), useRef(0)]
  const [centerX, centerY] = [useRef(0), useRef(0)]
  
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return
      
      const rect = mouseRef.current.getBoundingClientRect()
      centerX.current = rect.left + rect.width / 2
      centerY.current = rect.top + rect.height / 2
      
      mouseX.current = (e.clientX - centerX.current) / 1000
      mouseY.current = (e.clientY - centerY.current) / 1000
      
      mouseRef.current.style.transform = `rotateX(${-mouseY.current}deg) rotateY(${mouseX.current}deg)`
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  const titleVariants = {
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
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  // Create floating shapes for visual enhancement
  const floatingShapes = [
    { size: 80, color: 'bg-primary-300/10', speed: 0.15, direction: 'up', offset: -50 },
    { size: 120, color: 'bg-indigo-300/5', speed: 0.2, direction: 'down', offset: 20 },
    { size: 60, color: 'bg-blue-300/10', speed: 0.1, direction: 'up', offset: 0 },
    { size: 100, color: 'bg-purple-300/5', speed: 0.25, direction: 'down', offset: -30 },
    { size: 70, color: 'bg-primary-400/10', speed: 0.18, direction: 'up', offset: 10 },
    { size: 90, color: 'bg-indigo-400/5', speed: 0.12, direction: 'down', offset: 40 }
  ]
  
  return (
    <section id="features" className="relative py-16 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white bg-[length:32px_32px]"></div>
        
        {/* Animated gradient shapes */}
        <div className="absolute top-20 -left-56 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-56 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Small animated dots */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary-400 rounded-full animate-float-slow opacity-30"></div>
        <div className="absolute top-2/3 right-10 w-4 h-4 bg-accent-orange rounded-full animate-float-slow-reverse opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-600 rounded-full animate-float opacity-20"></div>
      </div>
      
      <div className="container px-4 mx-auto text-center">
        {/* Section heading */}
        <div ref={ref} className="max-w-2xl mx-auto mb-20">
          <motion.span
            className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold text-primary-700 rounded-full bg-primary-50"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            POWERFUL FEATURES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything You Need to Manage Customer Relationships
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful tools to help you track, analyze, and optimize your customer interactions and grow your business.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <EnhancedFeatureCard
              key={feature.title}
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
              delay={index}
              depth={25}
              tooltipContent={feature.tooltipContent}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 