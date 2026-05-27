import type { Metadata } from 'next'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
  title: 'Free Consultation – Manvin Consultants | Jaipur',
  description:
    'Claim your free consultation with Manvin Consultants. 15-min discovery call, basic plot planning, and a realistic cost estimate — no commitment required.',
}

const offers = [
  {
    icon: '⏱️',
    title: '15-Min Discovery Call',
    desc: 'A quick call to understand your vision, timeline, and budget. We figure out if we are the right fit — no sales pitch.',
  },
  {
    icon: '📐',
    title: 'Basic Plot Planning',
    desc: 'Share your plot size and location. We give you a high-level feasibility assessment — setbacks, FAR, floor count possibilities.',
  },
  {
    icon: '📊',
    title: 'Cost Estimate Sheet',
    desc: 'A realistic square-foot cost breakdown for current Jaipur market rates — structure, finishes, MEP, and professional fees.',
  },
]

const reasons = [
  { icon: '🤝', title: 'No Pressure', desc: 'Zero obligation. If we are not the right fit, we will tell you honestly and even point you elsewhere.' },
  { icon: '💡', title: 'Real Insights', desc: 'Actionable information — not vague promises. Every session is led by a senior team member.' },
  { icon: '📍', title: 'Local Expertise', desc: "We know Jaipur's bylaws, material costs, and contractors. Advice grounded in real, current local knowledge." },
]

export default function ConsultationPage() {
  return (
    <div className="page">

      {/* ── Hero ── */}
      <div className="consult-hero">
        <div className="tag rv" style={{ justifyContent: 'center' }}>No Cost. No Commitment.</div>
        <h1 className="h2 rv" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)' }}>
          Claim Your <em>Free</em> Consultation
        </h1>
        <p className="sub rv" style={{ margin: '0 auto', textAlign: 'center' }}>
          Fill in the form — we will review your details and respond within 24 hours
          with the right consultancy pathway for your project.
        </p>
      </div>

      {/* ── Split: offers left / form right ── */}
      <div className="consult-split">

        {/* Left — what you get */}
        <div className="consult-left">
          <div className="tag rv">What You Get</div>
          <h2 className="h2 rv" style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', marginBottom: '2rem' }}>
            Three sessions, <em>one form</em>
          </h2>

          {offers.map((o, i) => (
            <div key={o.title} className={`consult-offer rv${i > 0 ? ` rv${i}` : ''}`}>
              <div className="consult-offer-icon">{o.icon}</div>
              <div>
                <div className="consult-offer-title">{o.title}</div>
                <p className="consult-offer-desc">{o.desc}</p>
              </div>
            </div>
          ))}

          {/* Trust strip */}
          <div className="consult-trust rv">
            <div className="consult-trust-item">
              <span className="consult-trust-n">200+</span>
              <span className="consult-trust-l">Projects</span>
            </div>
            <div className="consult-trust-item">
              <span className="consult-trust-n">15+</span>
              <span className="consult-trust-l">Years</span>
            </div>
            <div className="consult-trust-item">
              <span className="consult-trust-n">24h</span>
              <span className="consult-trust-l">Response</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="consult-right">
          <ConsultationForm />
        </div>

      </div>

      {/* ── Why Free ── */}
      <div className="consult-why">
        <div className="tag rv" style={{ justifyContent: 'center' }}>Why Free?</div>
        <h2 className="h2 rv" style={{ textAlign: 'center' }}>
          We earn trust <em>before</em> a contract
        </h2>
        <div className="consult-why-grid">
          {reasons.map((r, i) => (
            <div key={r.title} className={`consult-why-card rv${i > 0 ? ` rv${i}` : ''}`}>
              <div style={{ fontSize: '1.8rem', marginBottom: '.8rem' }}>{r.icon}</div>
              <div style={{ fontFamily: 'var(--ff-d)', fontSize: '1.15rem', color: 'var(--cream)', marginBottom: '.5rem' }}>{r.title}</div>
              <p className="sub" style={{ fontSize: '.83rem' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
