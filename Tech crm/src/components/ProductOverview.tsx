'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  ChartBarIcon, 
  EnvelopeIcon, 
  BuildingOffice2Icon,
  PhoneIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Contact Management',
    description: 'Store all your customer data in one place with detailed profiles, interaction history, and smart segmentation.',
    icon: UsersIcon,
  },
  {
    name: 'Sales Pipeline',
    description: 'Track deals from lead to close with customizable stages, forecasting, and performance analytics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Email Campaigns',
    description: 'Create, automate, and track personalized email campaigns that nurture leads and engage customers.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Account Management',
    description: 'Manage multiple accounts and contacts with hierarchical relationships and account-specific insights.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Call Center Integration',
    description: 'Seamlessly integrate with your call center for complete call tracking, recording, and analysis.',
    icon: PhoneIcon,
  },
  {
    name: 'Workflow Automation',
    description: 'Automate repetitive tasks and complex business processes with customizable workflows.',
    icon: CogIcon,
  },
]

export default function ProductOverview() {
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
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive CRM system provides all the tools you need to manage customer relationships, 
            streamline sales processes, and grow your business.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="rounded-lg bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 