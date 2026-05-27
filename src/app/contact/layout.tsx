import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Manvin Consultants in Jaipur. Visit us at JTM Mall Jagatpura, call +91 99289 77014, or send a project enquiry online.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
