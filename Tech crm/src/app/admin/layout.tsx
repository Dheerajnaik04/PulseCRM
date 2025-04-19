'use client'

import './admin.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Admin pages won't use the 3D effect
  return (
    <div className="admin-layout">
      {children}
    </div>
  )
} 