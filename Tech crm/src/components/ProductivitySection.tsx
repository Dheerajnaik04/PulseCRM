'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  BuildingOffice2Icon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import PlaceholderImage from './ui/PlaceholderImage'
import Card3D from './ui/Card3D'

const benefits = [
  {
    name: 'Targeting new customers',
    icon: UserGroupIcon,
  },
  {
    name: 'Prioritize your leads better',
    icon: ChartBarIcon,
  },
  {
    name: 'Centralize sales operations',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Reduce sales cycle',
    icon: ArrowPathIcon,
  },
  {
    name: 'Improve sales conversions',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Improve customer retention',
    icon: UsersIcon,
  },
]

export default function ProductivitySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="productivity" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Productivity
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Increase Sales</h2>
            <p className="text-lg text-gray-600">
              Bring in quality leads, nurture them, and turn them into happy, paying customers. 
              Get a complete view of all customer data—personal details and communication. 
              With the right offers made to the right customers at the optimal time, you can make better deals, 
              resulting in improved ROI.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 h-6 w-6 text-primary-600">
                    <benefit.icon aria-hidden="true" />
                  </div>
                  <p className="text-gray-700">{benefit.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card3D className="rounded-xl overflow-hidden shadow-xl">
              <PlaceholderImage 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                fallbackSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Productivity Dashboard" 
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
                animationDelay={0.3}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent rounded-xl pointer-events-none"></div>
            </Card3D>

            {/* Floating element for 3D effect */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-md border border-gray-100 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  📈
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">+27%</div>
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 