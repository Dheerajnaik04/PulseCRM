'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation
    if (!email || !password) {
      setError('Please enter both email and password')
      setIsLoading(false)
      return
    }

    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to dashboard or home
      router.push('/')
    } catch (error) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gradient-to-r from-indigo-700/5 to-purple-500/5">
      <div className="w-full max-w-md px-4">
        <Card3D className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-soft-xl border border-gray-100"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Log in to your T-CRM account</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-rose-50 text-rose-500 rounded-md border border-rose-100 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
                >
                  {isLoading ? 'Logging in...' : 'Log In'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </Card3D>
      </div>
    </div>
  )
} 