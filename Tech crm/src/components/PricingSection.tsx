'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckIcon } from '@heroicons/react/24/outline'
import Card3D from './ui/Card3D'

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 49,
      annual: 39
    },
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 contacts",
      "Email campaigns",
      "Basic lead management",
      "Contact tracking",
      "Email templates",
      "Mobile app",
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "bg-white",
    depth: 15
  },
  {
    id: "professional",
    name: "Professional",
    price: {
      monthly: 99,
      annual: 79
    },
    description: "For growing teams needing more features",
    features: [
      "Up to 10,000 contacts",
      "Advanced reporting",
      "Sales automation",
      "Multiple pipelines",
      "Custom fields",
      "API access",
      "Email campaigns",
      "Lead scoring",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "bg-primary-50",
    depth: 25
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: 199,
      annual: 159
    },
    description: "For large organizations with complex needs",
    features: [
      "Unlimited contacts",
      "Dedicated account manager",
      "Advanced security",
      "Custom integrations",
      "Advanced automations",
      "Priority support",
      "Training sessions",
      "User roles & permissions",
      "Workflow customization",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "bg-white",
    depth: 15
  }
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const togglePricingPeriod = (annual: boolean) => {
    setIsAnnual(annual)
  }

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium inline-block mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Simple Pricing
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans for Every Business
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the perfect plan that fits your business needs
          </motion.p>
          
          <motion.div 
            className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <button
              onClick={() => togglePricingPeriod(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                !isAnnual 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
            <button
              onClick={() => togglePricingPeriod(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isAnnual 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-pressed={isAnnual}
            >
              Annual <span className="text-accent-orange font-medium">Save 20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const initialDelay = 0.3 + (index * 0.1)
            const isSelected = selectedPlan === plan.id
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: initialDelay,
                  type: "spring",
                  damping: 25
                }}
                className={`${plan.popular ? "md:-mt-4 md:mb-4 z-10" : ""} ${isSelected ? "scale-105 z-20" : ""} transition-transform duration-300`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <Card3D 
                  className={`${plan.color} rounded-2xl overflow-hidden border ${
                    isSelected 
                      ? 'border-primary-500 ring-2 ring-primary-500 shadow-lg' 
                      : plan.popular 
                        ? 'border-primary-300' 
                        : 'border-gray-200'
                  } h-full shadow-sm cursor-pointer transition-all duration-300`}
                  depth={isSelected ? plan.depth + 10 : plan.depth}
                >
                  <div className={`p-8 h-full flex flex-col ${plan.popular ? 'border-t-4 border-primary-500' : ''}`}>
                    {plan.popular && (
                      <div className="py-1 px-3 bg-primary-100 text-primary-800 text-xs font-medium rounded-full self-start mb-4">
                        Most Popular
                      </div>
                    )}
                    
                    {isSelected && (
                      <div className="py-1 px-3 bg-accent-orange-light text-accent-orange-dark text-xs font-medium rounded-full self-start mb-4">
                        Selected
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold text-gray-900">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-gray-600 ml-2 mb-1">/mo</span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-accent-orange font-medium mt-1">
                          Billed annually
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <button
                        className={`w-full py-3 rounded-lg text-center font-medium transition-colors duration-200 ${
                          isSelected
                            ? 'bg-accent-orange text-white hover:bg-accent-orange-dark'
                            : plan.popular
                              ? 'bg-primary-600 text-white hover:bg-primary-700'
                              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            )
          })}
        </div>
        
        {/* FAQ Teaser */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Have questions about our pricing or features?
          </p>
          <a 
            href="#faq" 
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
          >
            Check out our FAQ section
          </a>
        </motion.div>
      </div>
    </section>
  )
} 