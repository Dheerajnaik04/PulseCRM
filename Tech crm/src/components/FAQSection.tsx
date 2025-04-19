'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

// FAQ data
const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all T-CRM features for 14 days with no credit card required. You can explore all features, add your team members, and import your data. At the end of the trial, you can choose a plan that fits your needs or extend your trial if you need more time to evaluate."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available and we'll prorate the cost. When downgrading, the changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer: "The number of team members depends on your plan. The Starter plan supports up to 5 team members, the Professional plan supports up to 20, and the Enterprise plan offers unlimited team members. Each team member gets their own login credentials and permissions can be customized based on their role."
  },
  {
    question: "How does T-CRM handle data security and privacy?",
    answer: "We take data security and privacy very seriously. T-CRM is GDPR and CCPA compliant, and we use industry-standard encryption for all data both in transit and at rest. We implement regular security audits, two-factor authentication, and role-based access controls. For Enterprise customers, we also offer custom security configurations and data residency options."
  },
  {
    question: "Can I import my existing customer data?",
    answer: "Absolutely! T-CRM supports importing data from CSV files, Excel spreadsheets, and direct integrations with many popular CRM systems. Our import wizard makes it easy to map your existing fields to T-CRM, and our support team is available to help with more complex migrations or large datasets."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support with response times based on your plan level. The Professional plan adds live chat support during business hours, while Enterprise customers receive 24/7 priority support, a dedicated account manager, and regular strategy sessions. We also provide extensive documentation, video tutorials, and monthly webinars for all customers."
  },
  {
    question: "Does T-CRM integrate with other tools?",
    answer: "Yes, T-CRM integrates with a wide range of business tools including email platforms (Gmail, Outlook), marketing automation tools (Mailchimp, HubSpot), accounting software (QuickBooks, Xero), communication tools (Slack, Microsoft Teams), and many more. We also offer an API for custom integrations and support Zapier for connecting with 3,000+ other applications."
  },
  {
    question: "What happens to my data if I cancel my subscription?",
    answer: "If you cancel your subscription, you'll have 30 days to export your data before it's permanently removed from our systems. We provide export tools to help you retrieve your data in standard formats like CSV or JSON. After the 30-day period, all your data will be securely deleted according to our data retention policy."
  }
]

// Group FAQs into columns for desktop view
const faqColumns = [
  faqs.slice(0, Math.ceil(faqs.length / 2)),
  faqs.slice(Math.ceil(faqs.length / 2))
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(i => i !== index)
        : [...prevOpenItems, index]
    )
  }
  
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
        staggerChildren: 0.1,
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
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about T-CRM
            </p>
          </motion.div>
        </div>
        
        {/* Mobile view - single column */}
        <motion.div 
          className="md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              variants={itemVariants}
              custom={index}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left py-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25, delay: 0.15 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Desktop view - two columns */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((faq, faqIndex) => {
                const globalIndex = colIndex === 0 
                  ? faqIndex 
                  : faqIndex + faqColumns[0].length
                
                return (
                  <motion.div
                    key={globalIndex}
                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                    variants={itemVariants}
                    custom={globalIndex}
                  >
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="flex justify-between items-center w-full text-left py-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openItems.includes(globalIndex) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(globalIndex) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                              height: { duration: 0.3 },
                              opacity: { duration: 0.25, delay: 0.15 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3 },
                              opacity: { duration: 0.25 }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 pb-4">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </motion.div>
        
        {/* Support CTA */}
        <motion.div
          className="mt-16 text-center bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to help</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Contact Support
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 