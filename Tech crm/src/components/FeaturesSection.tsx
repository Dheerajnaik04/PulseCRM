'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PlaceholderImage from './ui/PlaceholderImage'
import { FadeIn, SlideUp, staggerContainer, slideUp } from './ui/animations'

const featureCategories = [
  {
    id: 'lead-management',
    name: 'Lead Management',
    features: [
      {
        title: 'Automated Lead Capture',
        description: 'Capture leads from various sources like website forms, social media, and email campaigns automatically.',
        icon: '📥'
      },
      {
        title: 'Lead Scoring',
        description: 'Prioritize leads based on their engagement and likelihood to convert using our AI-driven scoring system.',
        icon: '🎯'
      },
      {
        title: 'Pipeline Visualization',
        description: 'Visual representation of your sales pipeline with drag-and-drop functionality for easy management.',
        icon: '📊'
      }
    ]
  },
  {
    id: 'customer-management',
    name: 'Customer Management',
    features: [
      {
        title: 'Unified Customer View',
        description: 'Get a 360° view of each customer, including their history, preferences, and interactions.',
        icon: '👥'
      },
      {
        title: 'Interaction Tracking',
        description: 'Log all customer interactions across channels for better relationship management.',
        icon: '🔄'
      },
      {
        title: 'Sentiment Analysis',
        description: 'AI-powered sentiment analysis to understand customer satisfaction and potential issues.',
        icon: '😊'
      }
    ]
  },
  {
    id: 'automation',
    name: 'Automation',
    features: [
      {
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks and complex business processes with our visual workflow builder.',
        icon: '⚙️'
      },
      {
        title: 'Email Automation',
        description: 'Create, schedule, and automate personalized email campaigns to nurture leads and customers.',
        icon: '📧'
      },
      {
        title: 'Follow-up Reminders',
        description: 'Never miss a follow-up with automated reminders and task creation based on customer activities.',
        icon: '⏰'
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    features: [
      {
        title: 'Real-time Dashboards',
        description: 'Visualize key metrics and KPIs with customizable real-time dashboards.',
        icon: '📈'
      },
      {
        title: 'Sales Forecasting',
        description: 'Predict future sales trends using AI-powered forecasting based on historical data.',
        icon: '🔮'
      },
      {
        title: 'Custom Reports',
        description: 'Generate detailed reports on any aspect of your business with our drag-and-drop report builder.',
        icon: '📄'
      }
    ]
  }
]

export default function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const getCategory = () => featureCategories.find(category => category.id === activeCategory) || featureCategories[0]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-3">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything You Need to <span className="text-indigo-600">Excel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools streamlines your workflow and helps you build better customer relationships.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featureCategories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={slideUp}
                custom={index}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'text-white shadow-md' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Feature display */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {getCategory().features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredFeature(feature.title)}
                    onHoverEnd={() => setHoveredFeature(null)}
                  >
                    <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                      <div className="mb-4 text-4xl">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {feature.description}
                      </p>
                      <div className="h-1 w-12 bg-indigo-500 mt-4 rounded-full group-hover:w-full transition-all duration-300"></div>
                    </div>
                    {hoveredFeature === feature.title && (
                      <motion.div 
                        className="absolute -z-10 inset-0 bg-indigo-50 rounded-2xl"
                        layoutId="featureHover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Feature highlight */}
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -z-10 -inset-4 bg-indigo-50 rounded-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-lg border border-gray-100">
              <PlaceholderImage
                src="/images/dashboard-preview.jpg"
                fallbackSrc="/images/placeholder.jpg"
                alt="T-CRM Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                animationDelay={0.3}
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-gray-700 font-medium">Live data updates every 30 seconds</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  📈
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">+27%</div>
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  🔔
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">12 Tasks</div>
                  <div className="text-xs text-gray-500">Due Today</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <FadeIn>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-3">
                Intuitive Interface
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Data-Driven Decisions Made <span className="text-indigo-600">Simple</span>
              </h3>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  Our intuitive dashboards give you instant visibility into what matters most for your business. Track KPIs, monitor team performance, and identify trends at a glance.
                </p>
                <p>
                  Customize your views to focus on the metrics that drive your business forward. With T-CRM, you don't just collect data—you unlock its potential.
                </p>
              </div>
              
              <div className="mt-8">
                <motion.ul className="space-y-3">
                  {[
                    'Real-time data synchronization',
                    'Customizable widget layouts',
                    'Export reports in multiple formats',
                    'Set goals and track progress'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3">
                        <svg className="text-indigo-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform">
                  Explore All Features
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  )
} 