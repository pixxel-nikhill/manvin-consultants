'use client'
import { useState } from 'react'

type Fields = {
  name: string
  phone: string
  email: string
  projectType: string
  budget: string
  plotSize: string
  location: string
  message: string
}

const empty: Fields = {
  name: '', phone: '', email: '',
  projectType: '', budget: '',
  plotSize: '', location: '', message: '',
}

export default function ContactPage() {
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
        setTimeout(() => { setSubmitted(false); setFields(empty) }, 5000)
      } else {
        setError('Something went wrong. Please try WhatsApp instead.')
      }
    } catch {
      setError('Something went wrong. Please try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="contact-layout">

        {/* ── Left info panel ── */}
        <div className="contact-left">
          <div>
            <div className="tag rv">Get In Touch</div>
            <h2 className="h2 rv">
              Let&apos;s build your <em>vision</em> together
            </h2>
            <p className="sub rv" style={{ marginBottom: '2.5rem' }}>
              Share a few details and we&apos;ll respond within 24 hours with the right
              consultancy pathway for your project.
            </p>

            <div className="contact-detail rv">
              <div className="cd-ico">📍</div>
              <div>
                <div className="cd-lbl">Office</div>
                <div className="cd-val">Shop No. SF-44 B, JTM Mall Jagatpura,<br />Opp. Jagatpura Railway Station,<br />Jaipur, Rajasthan – 302029</div>
              </div>
            </div>
            <div className="contact-detail rv">
              <div className="cd-ico">📞</div>
              <div>
                <div className="cd-lbl">Phone / WhatsApp</div>
                <div className="cd-val">
                  <a href="tel:+919928977014" style={{ color: 'var(--cream)' }}>
                    +91 99289 77014
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-detail rv">
              <div className="cd-ico">✉️</div>
              <div>
                <div className="cd-lbl">Email</div>
                <div className="cd-val">
                  <a
                    href="mailto:manvinjpr@gmail.com"
                    style={{ color: 'var(--cream)' }}
                  >
                    manvinjpr@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-detail rv">
              <div className="cd-ico">🕑</div>
              <div>
                <div className="cd-lbl">Working Hours</div>
                <div className="cd-val">Mon – Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>
          </div>

          <div className="wa-cta-box rv">
            <div className="wa-cta-txt">
              <h4>Prefer WhatsApp?</h4>
              <p>Most clients start here — quick, easy, no forms.</p>
            </div>
            <a
              className="wa-btn"
              href="https://wa.me/919928977014?text=Hello%2C%20I%20want%20to%20discuss%20a%20project%20with%20Manvin%20Consultants."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Now
            </a>
          </div>

          <div className="map-box rv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.8310290!3d26.8374535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7276b4c72b3%3A0x437c6ea7cd5c6ce4!2sManvin%20consultants!5e0!3m2!1sen!2sin!4v1699000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manvin Consultants location"
            />
            <a
              href="https://share.google/WqtdVVD6RKCjXJiWp"
              target="_blank"
              rel="noopener noreferrer"
              className="gmb-btn rv"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              View on Google Business
            </a>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="contact-right">
          <div className="tag rv">Project Enquiry</div>
          <h3
            className="rv"
            style={{
              fontFamily: 'var(--ff-d)',
              fontSize: '1.6rem',
              fontWeight: 300,
              color: 'var(--cream)',
              marginBottom: '2rem',
            }}
          >
            Tell us about your project
          </h3>

          {submitted ? (
            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid #3a6e4a',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '.6rem' }}>
                Enquiry received!
              </h4>
              <p style={{ color: 'var(--stone)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Thank you, <strong>{fields.name}</strong>. We&apos;ll get back to you on{' '}
                <strong>{fields.phone}</strong> within 24 hours.
              </p>
              <button
                className="btn-outline"
                onClick={() => { setFields(empty); setSubmitted(false) }}
              >
                Send another enquiry
              </button>
              <p style={{ color: 'var(--stone)', fontSize: '.78rem', marginTop: '.8rem', opacity: 0.6 }}>
                Form will reset automatically in a few seconds.
              </p>
            </div>
          ) : (
            <form className="cf" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-g">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={fields.name}
                    onChange={e => set('name', e.target.value)}
                  />
                </div>
                <div className="cf-g">
                  <label>WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={fields.phone}
                    onChange={e => set('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="cf-g">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your email address (optional)"
                  value={fields.email}
                  onChange={e => set('email', e.target.value)}
                />
              </div>
              <div className="cf-row">
                <div className="cf-g">
                  <label>Project Type *</label>
                  <select
                    required
                    value={fields.projectType}
                    onChange={e => set('projectType', e.target.value)}
                  >
                    <option value="" disabled>Select type</option>
                    <option>Residential Home</option>
                    <option>Commercial Building</option>
                    <option>Industrial Facility</option>
                    <option>Interior Design Only</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div className="cf-g">
                  <label>Budget Range (₹)</label>
                  <select
                    value={fields.budget}
                    onChange={e => set('budget', e.target.value)}
                  >
                    <option value="" disabled>Select range</option>
                    <option>Under ₹10 Lakh</option>
                    <option>₹10 – ₹30 Lakh</option>
                    <option>₹30 – ₹75 Lakh</option>
                    <option>₹75 Lakh – ₹1.5 Cr</option>
                    <option>Above ₹1.5 Cr</option>
                  </select>
                </div>
              </div>
              <div className="cf-row">
                <div className="cf-g">
                  <label>Plot Size (approx.)</label>
                  <input
                    type="text"
                    placeholder="e.g. 200 sq yd or 50×80 ft"
                    value={fields.plotSize}
                    onChange={e => set('plotSize', e.target.value)}
                  />
                </div>
                <div className="cf-g">
                  <label>Location / Area</label>
                  <input
                    type="text"
                    placeholder="Area or locality, city"
                    value={fields.location}
                    onChange={e => set('location', e.target.value)}
                  />
                </div>
              </div>
              <div className="cf-g">
                <label>Tell us about your project</label>
                <textarea
                  placeholder="Briefly describe your project — floors, timeline, any specific requirements or ideas you have in mind…"
                  value={fields.message}
                  onChange={e => set('message', e.target.value)}
                />
              </div>

              {error && (
                <p style={{ color: '#c0392b', fontSize: '.83rem', marginBottom: '.5rem' }}>{error}</p>
              )}

              <button
                type="submit"
                className="cf-submit"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send Enquiry →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
