'use client'
import Image from 'next/image'
import { useState } from 'react'

const filters = ['All', 'Residential', 'Commercial', 'Industrial', 'Interior']

const projects = [
  // Residential
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=85', alt: 'Modern Villa', cat: 'Residential', title: 'Modern Family Villa', wide: true },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', alt: 'Luxury Bungalow', cat: 'Residential', title: 'Luxury Bungalow', wide: false },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85', alt: 'Contemporary Villa', cat: 'Residential', title: 'Contemporary Villa', wide: true },
  // Commercial
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Corporate Office', cat: 'Commercial', title: 'Corporate HQ', wide: false },
  { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', alt: 'Retail Complex', cat: 'Commercial', title: 'Retail Complex', wide: false },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', alt: 'Commercial Building', cat: 'Commercial', title: 'Commercial Plaza', wide: false },
  // Industrial
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', alt: 'Industrial Facility', cat: 'Industrial', title: 'Manufacturing Facility', wide: false },
  { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80', alt: 'Warehouse', cat: 'Industrial', title: 'Warehouse Complex', wide: false },
  // Interior
  { src: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80', alt: 'Living Room', cat: 'Interior', title: 'Luxury Living Room', wide: false },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', alt: 'Modern Kitchen', cat: 'Interior', title: 'Modern Kitchen', wide: false },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', alt: 'Master Bedroom', cat: 'Interior', title: 'Master Bedroom Suite', wide: false },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <div className="page">

      {/* ── Hero ── */}
      <div className="port-hero">
        <div>
          <div className="tag">Our Work</div>
          <h2 className="h2" style={{ marginBottom: '.5rem' }}>
            Project <em>Portfolio</em>
          </h2>
          <p className="sub">
            200+ projects delivered across Jaipur and Rajasthan — residential,
            commercial, and industrial.
          </p>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="port-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filt${active === f ? ' on' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      {visible.length === 0 ? (
        <div style={{ padding: '4rem 1.4rem', textAlign: 'center', color: 'var(--stone)' }}>
          No projects in this category yet.
        </div>
      ) : (
        <div className="port-grid">
          {visible.map((p) => (
            <div key={p.title} className={`port-item${p.wide && active === 'All' ? ' wide' : ''}`}>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 50vw, 33vw" />
              <div className="port-hover">
                <div className="port-cat">{p.cat}</div>
                <div className="port-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
