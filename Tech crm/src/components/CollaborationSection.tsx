'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  'Automate repetitive tasks',
  'Manage prospects within your sales funnel',
  'Improved data consolidation',
  'Monitor progress with reporting and analytics tools',
  'Generate sales leaderboards and productivity reports',
  'Facilitated marketing campaigns'
]

const features = [
  'Lead Capture',
  'Import Data',
  'Data Allotment',
  'Task Assignment',
  'Follow-up Reminders',
  'Workflow and Approvals',
  'Marketing Automation',
  'Sales Performance',
  'Client Services',
  'Payment Tracking'
]

export default function CollaborationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="collaboration" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Streamline Processes</h2>
            <p className="text-lg text-gray-600">
              From managing leads to simplifying and streamlining the sales pipeline, T-CRM platform allows 
              you to automate repetitive tasks, eliminate manual work, and boost performance. It incorporates 
              a variety of functions across sales, marketing, and service operations to help sales team 
              organize their work.
            </p>
            
            <div className="space-y-4 pt-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8"
              >
                <a href="/#demo-form" className="inline-flex items-center text-green-600 font-medium">
                  Discover all features
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            
            <div className="absolute -z-10 top-10 left-10 right-10 bottom-10 bg-gradient-to-r from-green-200 to-green-100 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 