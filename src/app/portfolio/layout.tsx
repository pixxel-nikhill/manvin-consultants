import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse completed architecture and interior design projects by Manvin Consultants — residential homes, commercial spaces, and industrial buildings across Rajasthan.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
