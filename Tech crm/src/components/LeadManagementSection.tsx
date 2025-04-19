'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TabsWithAnimation from './ui/TabsWithAnimation'
import Card3D from './ui/Card3D'
import {
  InboxArrowDownIcon,
  CursorArrowRaysIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline'

export default function LeadManagementSection() {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const headingVariants = {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  // Features for Lead Management tab
  const LeadManagementFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <InboxArrowDownIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Lead Capture</h3>
        <p className="text-gray-600">
          Capture leads from various sources like website forms, social media, and email campaigns automatically.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <CursorArrowRaysIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Scoring</h3>
        <p className="text-gray-600">
          Prioritize leads based on their engagement and likelihood to convert using our AI-driven scoring system.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <ChartBarIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Pipeline Visualization</h3>
        <p className="text-gray-600">
          Visual representation of your sales pipeline with drag-and-drop functionality for easy management.
        </p>
      </Card3D>
    </div>
  )

  // Features for Customer Management tab
  const CustomerManagementFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <UsersIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">360° Customer View</h3>
        <p className="text-gray-600">
          Get a complete view of customer interactions, purchase history, support tickets, and communication in one place.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Segmentation</h3>
        <p className="text-gray-600">
          Group customers based on behavior, demographics, purchase patterns, and engagement levels for targeted marketing.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Activity Tracking</h3>
        <p className="text-gray-600">
          Automatically log all customer touchpoints including emails, calls, meetings, and support interactions.
        </p>
      </Card3D>
    </div>
  )

  // Features for Automation tab
  const AutomationFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <CogIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automation</h3>
        <p className="text-gray-600">
          Create custom workflows to automate repetitive tasks and ensure consistent follow-ups.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Scheduling</h3>
        <p className="text-gray-600">
          Let customers book appointments directly into your calendar with automatic reminders and follow-ups.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Automation</h3>
        <p className="text-gray-600">
          Send personalized emails based on customer behavior, engagement triggers, and journey stage.
        </p>
      </Card3D>
    </div>
  )

  // Features for Analytics & Reporting tab
  const AnalyticsFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <ChartPieIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Dashboards</h3>
        <p className="text-gray-600">
          Create personalized dashboards with key metrics and KPIs that matter most to your business.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Reporting</h3>
        <p className="text-gray-600">
          Generate detailed reports on sales performance, team activity, conversion rates, and revenue forecasts.
        </p>
      </Card3D>

      <Card3D className="bg-white rounded-xl p-6 border border-gray-100 h-full shadow-soft-md">
        <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Trend Analysis</h3>
        <p className="text-gray-600">
          Identify patterns and trends in customer behavior, sales cycles, and market dynamics with AI-powered analytics.
        </p>
      </Card3D>
    </div>
  )

  const tabs = [
    {
      id: 'lead-management',
      label: 'Lead Management',
      icon: <InboxArrowDownIcon className="w-4 h-4" />,
      content: <LeadManagementFeatures />
    },
    {
      id: 'customer-management',
      label: 'Customer Management',
      icon: <UsersIcon className="w-4 h-4" />,
      content: <CustomerManagementFeatures />
    },
    {
      id: 'automation',
      label: 'Automation',
      icon: <CogIcon className="w-4 h-4" />,
      content: <AutomationFeatures />
    },
    {
      id: 'analytics',
      label: 'Analytics & Reporting',
      icon: <ChartPieIcon className="w-4 h-4" />,
      content: <AnalyticsFeatures />
    }
  ]

  return (
    <section id="lead-management" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            className="text-center mb-12"
            variants={headingVariants}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Comprehensive CRM Tools
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to manage your sales process from lead generation to customer retention
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={controls}
          >
            <TabsWithAnimation tabs={tabs} defaultTab="lead-management" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 