'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import PlaceholderImage from './ui/PlaceholderImage'
import Card3D from './ui/Card3D'

const strategies = [
  'Offer a Referral Program',
  'Provide Targeted, Personalized Campaigns',
  'Put Them First – Listen Your Customers',
  'Optimize Your Customer Service',
  'Reward Your Most Loyal Clients',
  'Benefit from Cross-Selling and Upselling Strategies'
]

export default function CLVSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="clv" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <Card3D className="rounded-xl overflow-hidden shadow-xl">
              <PlaceholderImage 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
                fallbackSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Customer Lifetime Value" 
                width={600}
                height={350}
                className="w-full rounded-xl"
                animationDelay={0.3}
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/30 to-transparent rounded-xl pointer-events-none"></div>
            </Card3D>
            
            {/* Floating elements for 3D effect */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-md border border-gray-100 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  🔍
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">+92%</div>
                  <div className="text-xs text-gray-500">Retention Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Maximize CLV</h2>
            <p className="text-lg text-gray-600">
              Maximizing customer lifetime value (CLV) is a continuous process that requires dedication 
              and a focus on long-term customer relationships. By implementing effective strategies and 
              utilizing data-driven insights, businesses can reap the rewards of a loyal and profitable 
              customer base.
            </p>
            
            <div className="space-y-4 pt-4">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={strategy}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                  <p className="text-gray-700">{strategy}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 