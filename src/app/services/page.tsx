import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services – Manvin Consultants | Jaipur',
  description:
    'Architectural design & house planning, interior design, and turn key projects — end-to-end design services in Jaipur, Rajasthan.',
}

export default function ServicesPage() {
  return (
    <div className="page">

      {/* ── Hero ── */}
      <div className="svcs-hero">
        <div className="svcs-hero-inner">
          <div>
            <div className="tag">What We Offer</div>
            <h2 className="h2">End-to-end design &amp; <em>consultancy</em></h2>
            <p className="sub" style={{ marginTop: '1rem' }}>
              From first sketch to final key — Manvin Consultants handles every phase
              so you don&apos;t have to juggle multiple firms.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--bg3)', padding: '1.4rem', borderLeft: '2px solid var(--gold)' }}>
              <div style={{ fontFamily: 'var(--ff-d)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--cream2)', lineHeight: '1.7' }}>
                &quot;One team. One point of contact. No confusion.&quot;
              </div>
            </div>
            <Link href="/consultation" className="btn-gold" style={{ alignSelf: 'flex-start' }}>
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* ── Services list ── */}
      <div className="svcs-list">

        <div className="svcs-item rv">
          <div className="svcs-item-n">01</div>
          <div>
            <div className="svcs-item-icon">◈</div>
            <div className="svcs-item-title">Architectural Design</div>
            <p className="svcs-item-desc">
              We create homes, offices, and facilities that blend your vision with
              practical precision — site studies, zoning, concept layouts, detailed
              drawings, approval sets, and complete house plans for any plot size.
            </p>
            <div className="svcs-item-tags">
              <span className="tag-pill">Residential</span>
              <span className="tag-pill">Commercial</span>
              <span className="tag-pill">Industrial</span>
              <span className="tag-pill">House Planning</span>
              <span className="tag-pill">Site Planning</span>
              <span className="tag-pill">Feasibility Studies</span>
            </div>
          </div>
          <div className="svcs-item-img">
            <Image src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80" alt="Architecture" fill style={{ objectFit: 'cover' }} sizes="220px" />
          </div>
        </div>

        <div className="svcs-item rv">
          <div className="svcs-item-n">02</div>
          <div>
            <div className="svcs-item-icon">◉</div>
            <div className="svcs-item-title">Interior Design &amp; Space Planning</div>
            <p className="svcs-item-desc">
              Curated interiors that feel personal, purposeful, and future-ready. Smart
              layouts, material &amp; finish selection, lighting strategy, and modular or
              custom joinery tailored to how you live.
            </p>
            <div className="svcs-item-tags">
              <span className="tag-pill">Space Optimization</span>
              <span className="tag-pill">Material Selection</span>
              <span className="tag-pill">Lighting Design</span>
              <span className="tag-pill">Modular Interiors</span>
            </div>
          </div>
          <div className="svcs-item-img">
            <Image src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=300&q=80" alt="Interior" fill style={{ objectFit: 'cover' }} sizes="220px" />
          </div>
        </div>

        <div className="svcs-item rv">
          <div className="svcs-item-n">03</div>
          <div>
            <div className="svcs-item-icon">◧</div>
            <div className="svcs-item-title">Turn Key Projects</div>
            <p className="svcs-item-desc">
              Complete project delivery from first drawing to final handover. We manage
              design, procurement, contractor coordination, quality control, and budget —
              so you receive a finished space with zero hassle.
            </p>
            <div className="svcs-item-tags">
              <span className="tag-pill">End-to-End Delivery</span>
              <span className="tag-pill">Project Scheduling</span>
              <span className="tag-pill">Quality Control</span>
              <span className="tag-pill">Vendor Coordination</span>
              <span className="tag-pill">Budget Management</span>
            </div>
          </div>
          <div className="svcs-item-img">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&q=80" alt="Turn Key Projects" fill style={{ objectFit: 'cover' }} sizes="220px" />
          </div>
        </div>

      </div>

      {/* ── CTA ── */}
      <div className="free-hook">
        <div className="tag rv" style={{ justifyContent: 'center' }}>Get Started</div>
        <h2 className="h2 rv" style={{ textAlign: 'center' }}>
          Not sure which service <em>you need?</em>
        </h2>
        <p className="sub rv" style={{ margin: '0 auto', textAlign: 'center' }}>
          Book a free consultation and we will tell you exactly what your project needs — no guesswork.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link href="/consultation" className="btn-gold rv">Book Free Consultation →</Link>
          <Link href="/contact" className="btn-outline rv">Send an Enquiry</Link>
        </div>
      </div>

    </div>
  )
}
