'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Page3D from '@/components/ui/Page3D'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    agreeToTerms: false
  })

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    agreeToTerms: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState(false)

  const validate = () => {
    let tempErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      agreeToTerms: ''
    }
    let isValid = true

    if (!formData.fullName) {
      tempErrors.fullName = 'Full name is required'
      isValid = false
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters'
      isValid = false
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your password'
      isValid = false
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = 'Passwords do not match'
      isValid = false
    }

    if (!formData.companyName) {
      tempErrors.companyName = 'Company name is required'
      isValid = false
    }

    if (!formData.agreeToTerms) {
      tempErrors.agreeToTerms = 'You must agree to the terms and conditions'
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      setIsLoading(true)
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // If successful
        setSignupSuccess(true)
        
      } catch (error) {
        console.error('Signup error:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
        <Page3D>
          <div className="w-full max-w-md">
            <img 
              src="/images/signup-illustration.svg" 
              alt="T-CRM Platform" 
              className="w-full h-auto"
            />
          </div>
        </Page3D>
      </div>
      
      <div className="md:w-1/2 max-w-md w-full space-y-8">
        {signupSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white py-8 px-6 shadow-soft-xl rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your account has been created successfully. Please check your email for verification.
            </p>
            <Link href="/login" className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Go to Login
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white py-8 px-6 shadow-soft-xl rounded-lg"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
              <p className="mt-2 text-gray-600">
                Join T-CRM to manage your customer relationships effectively
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    className="form-input mt-1"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="form-input mt-1"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    className="form-input mt-1"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    className="form-input mt-1"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="form-input mt-1"
                    placeholder="Your company name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                      I agree to the <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Create Account"}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 