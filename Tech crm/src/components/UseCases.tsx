'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useCases = [
  {
    industry: 'Sales Teams',
    description: 'Track leads, manage your pipeline, and close more deals with our intuitive sales management tools.',
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
  },
  {
    industry: 'Marketing Agencies',
    description: 'Create, manage, and analyze customer-focused marketing campaigns that drive engagement and results.',
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
  },
  {
    industry: 'Customer Support',
    description: 'Provide exceptional service with a 360° view of customer interactions, issues, and resolutions.',
    color: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
  },
  {
    industry: 'E-commerce',
    description: 'Manage customer relationships across online channels and improve shopping experiences.',
    color: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-200',
  },
  {
    industry: 'Financial Services',
    description: 'Build trust and maintain compliance while managing client relationships and opportunities.',
    color: 'bg-red-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-200',
  },
  {
    industry: 'Healthcare',
    description: 'Securely manage patient relationships and streamline practice management with HIPAA-compliant tools.',
    color: 'bg-teal-50',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200',
  },
]

export default function UseCases() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-gray-600">
            T-CRM adapts to your specific industry needs, providing specialized tools and workflows that make sense for your business.
          </p>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${useCase.borderColor} ${useCase.color} h-full flex flex-col`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${useCase.textColor}`}>{useCase.industry}</h3>
              <p className="text-gray-700 flex-grow">{useCase.description}</p>
              <div className="mt-4">
                <a href="#" className={`font-medium ${useCase.textColor} hover:underline`}>
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 