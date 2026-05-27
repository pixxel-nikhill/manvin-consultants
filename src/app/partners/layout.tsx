import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients & Network',
  description:
    'Our professional network of contractors, engineers, and suppliers in Rajasthan. Join the Manvin Consultants partner network by submitting your application.',
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
