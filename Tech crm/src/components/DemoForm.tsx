'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FadeIn, 
  SlideUp, 
  SlideDown, 
  staggerContainer, 
  slideUp,
  scale
} from './ui/animations'
import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Spinner } from './ui/spinner'

type FormData = {
  fullName: string
  email: string
  companyName: string
  phoneNumber: string
  jobTitle: string
  companySize: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

// Form input component for consistent styling
const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error, 
  required = false,
  options = [],
  index = 0
}: { 
  label: string
  name: keyof FormData
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  placeholder?: string
  error?: string
  required?: boolean
  options?: {value: string, label: string}[]
  index?: number
}) => {
  return (
    <motion.div
      className="mb-4"
      variants={slideUp}
      custom={index}
      transition={{
        delay: index * 0.05,
        duration: 0.4
      }}
    >
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label} {required && <span className="text-primary-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border ${error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-slate-200'} px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
          placeholder={placeholder}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border ${error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-slate-200'} px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border ${error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-slate-200'} px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
          placeholder={placeholder}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-xs text-rose-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    jobTitle: '',
    companySize: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter valid email'
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Required'
    }
    
    if (!formData.companySize) {
      newErrors.companySize = 'Select company size'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Reset form data on successful submission
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        jobTitle: '',
        companySize: '',
        message: ''
      })
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Submission error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const companySizeOptions = [
    { value: '', label: 'Select size' },
    { value: '1-10', label: '1-10' },
    { value: '11-50', label: '11-50' },
    { value: '51-200', label: '51-200' },
    { value: '201-500', label: '201-500' },
    { value: '501+', label: '501+' },
  ]

  return (
    <section id="demo-form" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
            className="rounded-2xl overflow-hidden"
          >
            {/* Header card */}
            <FadeIn className="p-8 bg-white shadow-sm rounded-2xl mb-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" clipRule="evenodd" />
                    <path d="M10 7a1 1 0 011 1v2a1 1 0 01-1 1 1 1 0 110-2V8a1 1 0 011-1z" />
                  </svg>
                </motion.div>
                <SlideDown className="text-xl font-semibold text-slate-800">
                  Request a Demo
                </SlideDown>
              </div>
              <SlideUp delay={0.1} className="text-slate-600 max-w-lg">
                See how T-CRM can transform your business. Fill out the form below to schedule a personalized demo.
              </SlideUp>
            </FadeIn>
            
            {/* Form card */}
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                  }}
                  className="p-8 bg-white shadow-sm rounded-2xl text-center border border-slate-100"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      opacity: 1
                    }}
                    transition={{ 
                      delay: 0.2,
                      duration: 0.6,
                      type: "spring"
                    }}
                    className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <SlideUp delay={0.3} className="text-xl font-semibold text-slate-800 mb-3">
                    Thank You!
                  </SlideUp>
                  <SlideUp delay={0.4} className="text-slate-600 mb-6">
                    Request submitted. We'll contact you soon.
                  </SlideUp>
                  <motion.button 
                    onClick={() => setIsSubmitted(false)} 
                    className="px-5 py-2.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 bg-white shadow-sm rounded-2xl border border-slate-100"
                >
                  <AnimatePresence>
                    {submitError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 mb-6 bg-rose-50 border border-rose-100 rounded-lg text-rose-600 text-sm"
                      >
                        {submitError}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <FormInput 
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        error={errors.fullName}
                        required
                        index={0}
                      />
                      
                      <FormInput 
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        error={errors.email}
                        required
                        index={1}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <FormInput 
                        label="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        error={errors.companyName}
                        required
                        index={2}
                      />
                      
                      <FormInput 
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 (742) 100-0303"
                        error={errors.phoneNumber}
                        index={3}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <FormInput 
                        label="Job Title"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Marketing Manager"
                        error={errors.jobTitle}
                        index={4}
                      />
                      
                      <FormInput 
                        label="Company Size"
                        name="companySize"
                        type="select"
                        value={formData.companySize}
                        onChange={handleChange}
                        error={errors.companySize}
                        options={companySizeOptions}
                        required
                        index={5}
                      />
                    </div>
                    
                    <FormInput 
                      label="Message (Optional)"
                      name="message"
                      type="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are your specific needs?"
                      error={errors.message}
                      index={6}
                    />
                    
                    <motion.div
                      className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                      variants={slideUp}
                      custom={7}
                    >
                      <div className="text-xs text-slate-500">
                        By submitting, you agree to our{' '}
                        <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                          Privacy Policy
                        </Link>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner className="w-4 h-4" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <span>Start Free Trial</span>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 