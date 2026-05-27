import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Vendors', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]


const socials = [
  {
    title: 'Instagram', href: 'https://instagram.com/manvinconsultants',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'WhatsApp', href: 'https://wa.me/919928977014',
    icon: (
      <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9.37 3 4 8.37 4 15c0 2.33.65 4.5 1.77 6.36L4 29l7.86-1.73A12.94 12.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm5.84 17.08c-.25.7-1.46 1.34-2 1.4-.53.06-1.04.25-3.5-.73-2.96-1.18-4.86-4.22-5.01-4.42-.14-.2-1.18-1.57-1.18-3s.74-2.12 1.01-2.41c.27-.29.59-.36.79-.36h.56c.18 0 .43-.07.67.51.25.6.85 2.08.93 2.23.08.15.13.32.03.51-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.3 1.41.28.14.44.12.6-.07.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.18 1.37z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1A', color: '#F5F0E8', borderTop: '3px solid #8B6914' }}>

      {/* ── Main grid ── */}
      <div className="footer-main-grid">

        {/* Brand col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <Link href="/">
            <Image
              src="/Final-logo.jpeg"
              alt="Manvin Consultants"
              width={400}
              height={178}
              style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <p style={{ fontSize: '.83rem', color: 'rgba(245,240,232,0.5)', lineHeight: '1.85', maxWidth: '260px' }}>
            Architecture &amp; interior consultancy rooted in Rajasthan.
            From concept to handover — one team, start to finish.
          </p>
          {/* Social pills */}
          <div style={{ display: 'flex', gap: '.6rem', marginTop: '.4rem' }}>
            {socials.map(s => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="footer-social-pill"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#BFA060', marginBottom: '1.2rem', fontWeight: 500 }}>
            Quick Links
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {quickLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontSize: '.83rem', color: 'rgba(245,240,232,0.5)', textDecoration: 'none', transition: 'color .2s' }}
                  className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#BFA060', marginBottom: '1.2rem', fontWeight: 500 }}>
            Get In Touch
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
            {[
              { icon: '📍', text: 'SF-44 B, JTM Mall Jagatpura, Jaipur – 302029' },
              { icon: '📞', text: '+91 99289 77014', href: 'tel:+919928977014' },
              { icon: '✉️', text: 'navinsharma29@gmail.com', href: 'mailto:navinsharma29@gmail.com' },
              { icon: '🕐', text: 'Mon – Sat, 9 AM – 7 PM' },
            ].map(item => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', fontSize: '.83rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.5 }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                {item.href
                  ? <a href={item.href} style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }} className="footer-link">{item.text}</a>
                  : <span>{item.text}</span>
                }
              </li>
            ))}
          </ul>
          <Link href="/consultation" className="btn-gold" style={{ marginTop: '1.5rem', fontSize: '.72rem', display: 'inline-block' }}>
            Free Consultation →
          </Link>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} Manvin Consultants. All rights reserved.</span>
        <span>Jaipur · Rajasthan · Est. 2009</span>
      </div>

    </footer>
  )
}
