'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type FormSubmission = {
  fullName: string
  email: string
  companyName: string
  phoneNumber: string
  jobTitle: string
  companySize: string
  message: string
  timestamp: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem('t-crm-admin-auth')
    if (!authToken) {
      router.push('/admin/login')
      return
    }
    
    setIsAuthenticated(true)
    
    const fetchSubmissions = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/get-submissions')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch submissions')
        }
        
        setSubmissions(data.submissions || [])
        setError(null)
      } catch (err) {
        console.error('Error fetching submissions:', err)
        setError(err instanceof Error ? err.message : 'An error occurred while fetching submissions')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchSubmissions()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('t-crm-admin-auth')
    router.push('/admin/login')
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-0">
      <header className="bg-indigo-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <h1 className="text-white text-xl md:text-2xl font-bold">T-CRM Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-white hover:text-indigo-100 text-sm font-medium"
              >
                Back to Website
              </Link>
              <button 
                onClick={handleLogout}
                className="text-indigo-100 hover:text-white text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Submissions</h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="bg-rose-50 text-rose-500 p-4 rounded-md border border-rose-100">
              {error}
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No submissions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date/Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(submission.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{submission.fullName}</div>
                        {submission.jobTitle && (
                          <div className="text-xs text-gray-500">{submission.jobTitle}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.companyName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.companySize}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 