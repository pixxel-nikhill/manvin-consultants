import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ScrollRevealInit from '@/components/ScrollRevealInit'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans',
})

export const metadata: Metadata = {
  title: {
    default: 'Manvin Consultants – Architecture & Interior Design, Jaipur',
    template: '%s | Manvin Consultants',
  },
  description:
    'Architectural, interior & construction consultancy rooted in Rajasthan. From Ghar Ka Naksha to full-site supervision — one team, start to finish.',
  icons: {
    icon: '/Final-logo.jpeg',
    shortcut: '/Final-logo.jpeg',
    apple: '/Final-logo.jpeg',
  },
  openGraph: {
    siteName: 'Manvin Consultants',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <ScrollRevealInit />
      </body>
    </html>
  )
}
