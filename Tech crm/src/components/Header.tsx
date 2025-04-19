'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex items-center justify-between p-4" aria-label="Global">
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1">
            <span className="text-primary-600 font-bold text-2xl">T-</span>
            <span className="font-bold text-2xl text-gray-700">CRM</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-primary-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a 
            href="tel:+917421000303" 
            className="font-medium transition-colors duration-200 flex items-center text-gray-700 hover:text-primary-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91-742-100-0303
          </a>
          <Link 
            href="/login" 
            className="font-medium transition-colors duration-200 text-gray-700 hover:text-primary-600"
          >
            Login
          </Link>
          <Link 
            href="/#demo-form" 
            className="btn-primary"
          >
            Book a Demo
          </Link>
          <Link 
            href="/signup" 
            className="btn-primary bg-primary-700 text-white"
          >
            Free Trial
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1">
              <span className="text-primary-600 font-bold text-2xl">T-</span>
              <span className="text-gray-700 font-bold text-2xl">CRM</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="container divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <a
                  href="tel:+917421000303"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91-742-100-0303
                </a>
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/#demo-form"
                  className="btn-primary w-full justify-center flex py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary bg-primary-700 w-full justify-center flex py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 