'use client'
import Link from 'next/link'
import { useState } from 'react'

type Fields = {
  name: string
  profession: string
  phone: string
  city: string
  experience: string
  note: string
}

const empty: Fields = {
  name: '', profession: '', phone: '',
  city: '', experience: '', note: '',
}

export default function PartnersPage() {
  const [fields, setFields] = useState<Fields>(empty)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof Fields, v: string) =>
    setFields(prev => ({ ...prev, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please contact us on WhatsApp instead.')
      }
    } catch {
      setError('Something went wrong. Please contact us on WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">

      {/* ── Hero ── */}
      <div className="svcs-hero">
        <div
          className="svcs-hero-inner"
          style={{ gridTemplateColumns: '1fr', paddingBottom: '2rem' }}
        >
          <div>
            <div className="tag">Trusted Network</div>
            <h2 className="h2">
              Our Professional <em>Vendors</em>
            </h2>
            <p className="sub" style={{ marginTop: '1rem', maxWidth: '600px' }}>
              We collaborate with the finest contractors, engineers, and suppliers to
              bring our designs to life. Find the right expert for your build, or join
              our growing network.
            </p>
          </div>
        </div>
      </div>

      {/* ── Network directory ── */}
      <div className="network-wrap" style={{ paddingTop: '2rem' }}>
        <div className="rv" style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--gold)',
          padding: '2rem 2.5rem',
          maxWidth: '600px',
        }}>
          <div style={{ fontFamily: 'var(--ff-d)', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '.5rem' }}>
            Our verified network is growing
          </div>
          <p style={{ fontSize: '.85rem', color: 'var(--stone)', lineHeight: 1.75 }}>
            We are in the process of listing our trusted contractors, engineers, and
            suppliers. Check back soon — or apply below to be among the first featured.
          </p>
        </div>

        {/* ── Join form ── */}
        <div className="join-net-box rv">
          <h3 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.5rem', marginBottom: '.5rem' }}>
            Are you a professional? Join our network.
          </h3>
          <p className="sub" style={{ marginBottom: '2rem' }}>
            Submit your details and we will review your application. If there&apos;s a fit,
            we will reach out within a few days.
          </p>

          {submitted ? (
            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid #4A72B0',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.3rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '.6rem' }}>
                Application received!
              </h4>
              <p style={{ color: 'var(--stone)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Thank you, <strong>{fields.name}</strong>. We review applications periodically
                and will be in touch on <strong>{fields.phone}</strong> if there&apos;s a good fit.
              </p>
              <button
                className="btn-outline"
                onClick={() => { setFields(empty); setSubmitted(false) }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <form className="cf" onSubmit={handleSubmit}>

              <div className="cf-row">
                <div className="cf-g">
                  <label>Full Name / Business Name *</label>
                  <input
                    type="text"
                    placeholder="Your name or business name"
                    required
                    value={fields.name}
                    onChange={e => set('name', e.target.value)}
                  />
                </div>
                <div className="cf-g">
                  <label>Profession / Specialisation *</label>
                  <input
                    type="text"
                    placeholder="e.g. Electrician, Contractor, 3D Artist"
                    required
                    value={fields.profession}
                    onChange={e => set('profession', e.target.value)}
                  />
                </div>
              </div>

              <div className="cf-row" style={{ marginTop: '1rem' }}>
                <div className="cf-g">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={fields.phone}
                    onChange={e => set('phone', e.target.value)}
                  />
                </div>
                <div className="cf-g">
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder="City you primarily operate in"
                    required
                    value={fields.city}
                    onChange={e => set('city', e.target.value)}
                  />
                </div>
              </div>

              <div className="cf-row" style={{ marginTop: '1rem' }}>
                <div className="cf-g">
                  <label>Years of Experience *</label>
                  <select
                    required
                    value={fields.experience}
                    onChange={e => set('experience', e.target.value)}
                  >
                    <option value="" disabled>Select range</option>
                    <option>Less than 1 year</option>
                    <option>1 – 3 years</option>
                    <option>3 – 5 years</option>
                    <option>5 – 10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>

              <div className="cf-g" style={{ marginTop: '1rem' }}>
                <label>About your work (optional)</label>
                <textarea
                  placeholder="Types of projects you have worked on, team size, any relevant experience or certifications…"
                  value={fields.note}
                  onChange={e => set('note', e.target.value)}
                />
              </div>

              {error && (
                <p style={{ color: '#c0392b', fontSize: '.83rem', margin: '.5rem 0' }}>{error}</p>
              )}

              <div style={{ marginTop: '1.2rem' }}>
                <button type="submit" className="cf-submit" disabled={loading}>
                  {loading ? 'Sending…' : 'Apply for Listing →'}
                </button>
              </div>

            </form>
          )}
        </div>

        <p className="sub" style={{ marginTop: '2rem' }}>
          Already a partner?{' '}
          <Link href="/contact" style={{ color: 'var(--gold)' }}>
            Get in touch →
          </Link>
        </p>
      </div>

    </div>
  )
}
