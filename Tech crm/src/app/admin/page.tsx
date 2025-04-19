'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminIndex() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem('t-crm-admin-auth')
    if (authToken) {
      router.push('/admin/dashboard')
    } else {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
    </div>
  )
} 