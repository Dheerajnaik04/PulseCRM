'use client'

import HeroSection from '@/components/HeroSection'
import ProductivitySection from '@/components/ProductivitySection'
// import ProductOverview from '@/components/ProductOverview'
// import FeaturesSection from '@/components/FeaturesSection'
import EnhancedFeaturesSection from '@/components/EnhancedFeaturesSection'
import CLVSection from '@/components/CLVSection'
import CollaborationSection from '@/components/CollaborationSection'
import LeadManagementSection from '@/components/LeadManagementSection'
import DemoForm from '@/components/DemoForm'
import UseCases from '@/components/UseCases'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ProductOverview /> */}
      <EnhancedFeaturesSection />
      <ProductivitySection />
      <UseCases />
      <CLVSection />
      <CollaborationSection />
      <LeadManagementSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <DemoForm />
    </>
  )
} 