'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // For demo purposes, we'll use a hardcoded admin/password
  // In a real app, you would use a proper authentication system
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password')
      setIsLoading(false)
      return
    }

    // Demo credentials check (DON'T DO THIS IN PRODUCTION)
    if (username === 'admin' && password === 'admin123') {
      // Set a session token in localStorage
      localStorage.setItem('t-crm-admin-auth', 'true')
      
      // Redirect to dashboard
      router.push('/admin/dashboard')
    } else {
      setError('Invalid credentials')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">T-CRM Admin</h1>
            <p className="text-gray-600">Log in to access the admin dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 text-rose-500 rounded-md border border-rose-100 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="admin"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 