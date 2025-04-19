import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import RootLayoutWrapper from '@/components/RootLayoutWrapper'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat'
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

export const metadata: Metadata = {
  title: {
    template: '%s | T-CRM',
    default: 'T-CRM - Modern Customer Relationship Management'
  },
  description: 'Enterprise-grade CRM solution for growing businesses - manage leads, track sales, and build customer relationships.',
  keywords: [
    'CRM', 
    'customer relationship management', 
    'sales management', 
    'lead tracking', 
    'customer data', 
    'sales automation'
  ],
  authors: [{ name: 'T-CRM Team' }],
  creator: 'T-CRM',
  publisher: 'T-CRM Solutions',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <RootLayoutWrapper>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  )
} 