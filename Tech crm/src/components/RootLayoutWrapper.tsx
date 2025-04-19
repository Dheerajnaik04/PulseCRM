'use client'

import React from 'react'
import Page3D from './ui/Page3D'
import Header from './Header'
import Footer from './Footer'

export default function RootLayoutWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Page3D>
      <Header />
      <section className="section">
        {children}
      </section>
      <Footer />
    </Page3D>
  )
} 