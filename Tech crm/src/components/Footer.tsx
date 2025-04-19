'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon,
  GithubIcon
} from 'lucide-react'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Updates', href: '/updates' },
      { name: 'Roadmap', href: '/roadmap' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Support', href: '/support' },
      { name: 'API Reference', href: '/api' },
      { name: 'Demo', href: '/#demo-form' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'Security', href: '/security' },
    ]
  }
]

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold text-white mb-4">T-CRM</h2>
              </Link>
              <p className="text-gray-400 mb-6 max-w-xs">
                Empowering businesses to efficiently manage leads, customer engagement, 
                sales processes, and post-sale support.
              </p>
              
              {/* Contact information */}
              <div className="space-y-2">
                <a href="tel:+917421000303" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <PhoneIcon size={16} />
                  <span>+91-742-100-0303</span>
                </a>
                <a href="mailto:info@t-crm.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MailIcon size={16} />
                  <span>info@t-crm.com</span>
                </a>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPinIcon size={16} className="mt-1 flex-shrink-0" />
                  <span>T-CRM Headquarters, 123 Tech Park, Bangalore, India 560001</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation links */}
          {footerLinks.map((section, i) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 pb-6 mb-6"
        >
          <div className="max-w-xl mx-auto text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest CRM trends, tips, and product updates</p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent flex-grow text-white"
                required
              />
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2.5 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Social media */}
          <div className="flex justify-center space-x-5 mb-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <div>&copy; {new Date().getFullYear()} T-CRM. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 