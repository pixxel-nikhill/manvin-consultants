'use client'
import { useState } from 'react'

type Answers = {
  sessionType: string
  projectType: string
  budget: string
  plotSize: string
  location: string
  preferredDay: string
  preferredTime: string
  name: string
  phone: string
  email: string
}

const empty: Answers = {
  sessionType: '', projectType: '', budget: '',
  plotSize: '', location: '',
  preferredDay: '', preferredTime: '',
  name: '', phone: '', email: '',
}

const STEP_LABELS = ['Session', 'Project', 'Timing', 'Contact', 'Review']
const STEPS = STEP_LABELS.length

export default function ConsultationForm() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Answers>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof Answers, v: string) =>
    setAnswers(prev => ({ ...prev, [k]: v }))

  const next = () => setStep(s => Math.min(s + 1, STEPS))
  const back = () => setStep(s => Math.max(s - 1, 1))
  const goTo = (i: number) => { if (i < step) setStep(i) }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try WhatsApp instead.')
      }
    } catch {
      setError('Something went wrong. Please try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="wiz-success">
        <div className="wiz-success-check">✓</div>
        <h3 className="wiz-success-title">We&apos;ve got your request!</h3>
        <p className="wiz-success-sub">
          Thank you, <strong>{answers.name}</strong>. Our team will reach out on{' '}
          <strong>{answers.phone}</strong> within 24 hours.
        </p>
        <div className="wiz-summary" style={{ width: '100%', maxWidth: '420px' }}>
          <div className="wiz-summary-row"><span>Session</span><strong>{answers.sessionType}</strong></div>
          <div className="wiz-summary-row"><span>Project</span><strong>{answers.projectType || '—'}</strong></div>
          <div className="wiz-summary-row"><span>Budget</span><strong>{answers.budget || '—'}</strong></div>
          <div className="wiz-summary-row"><span>Location</span><strong>{answers.location || '—'}</strong></div>
          <div className="wiz-summary-row"><span>Best Time</span><strong>{answers.preferredDay && answers.preferredTime ? `${answers.preferredDay}, ${answers.preferredTime}` : '—'}</strong></div>
        </div>
        <button className="btn-outline" onClick={() => { setAnswers(empty); setStep(1); setSubmitted(false) }}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div className="wizard">

      {/* ── Progress bar with step names ── */}
      <div className="wiz-progress-wrap">
        <div className="wiz-progress">
          {STEP_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              className="wiz-step-item"
              onClick={() => goTo(i + 1)}
              style={{ cursor: i + 1 < step ? 'pointer' : 'default' }}
            >
              <div className={`wiz-step-dot${step > i ? ' done' : ''}${step === i + 1 ? ' active' : ''}`}>
                {step > i ? '✓' : i + 1}
              </div>
              <span className={`wiz-step-name${step === i + 1 ? ' active' : ''}${step > i ? ' done' : ''}`}>
                {label}
              </span>
            </button>
          ))}
          <div className="wiz-progress-bar">
            <div className="wiz-progress-fill" style={{ width: `${((step - 1) / (STEPS - 1)) * 100}%` }} />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* ── Step 1: Session type ── */}
        {step === 1 && (
          <div className="wiz-pane">
            <div className="wiz-q">What are you looking for?</div>
            <div className="wiz-q-sub">Pick the session that fits your need — you can always ask for all three.</div>
            <div className="wiz-cards">
              {[
                { val: '15-Min Discovery Call', icon: '⏱️', desc: "Quick call to see if we're the right fit" },
                { val: 'Basic Plot Planning', icon: '📐', desc: 'Feasibility check on your plot size & location' },
                { val: 'Cost Estimate Sheet', icon: '📊', desc: 'Realistic ₹/sqft breakdown for your budget' },
                { val: 'All Three', icon: '✦', desc: 'Get the full picture — recommended' },
              ].map(o => (
                <button
                  key={o.val} type="button"
                  className={`wiz-card${answers.sessionType === o.val ? ' selected' : ''}`}
                  onClick={() => set('sessionType', o.val)}
                >
                  <span className="wiz-card-icon">{o.icon}</span>
                  <span className="wiz-card-title">{o.val}</span>
                  <span className="wiz-card-desc">{o.desc}</span>
                  {answers.sessionType === o.val && (
                    <span className="wiz-card-check">✓ Selected</span>
                  )}
                </button>
              ))}
            </div>
            <div className="wiz-nav" style={{ justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn-gold"
                onClick={next}
                disabled={!answers.sessionType}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Project details ── */}
        {step === 2 && (
          <div className="wiz-pane">
            <div className="wiz-q">Tell us about your project</div>
            <div className="wiz-q-sub">All fields here are optional — fill what you know.</div>

            <div className="wiz-q-label" style={{ marginTop: '.8rem' }}>Project type</div>
            <div className="wiz-chips">
              {['Residential – House / Villa', 'Residential – Apartment', 'Commercial – Office', 'Commercial – Retail', 'Interior Only', 'Other'].map(t => (
                <button key={t} type="button"
                  className={`wiz-chip${answers.projectType === t ? ' selected' : ''}`}
                  onClick={() => set('projectType', answers.projectType === t ? '' : t)}>
                  {answers.projectType === t ? '✓ ' : ''}{t}
                </button>
              ))}
            </div>

            <div className="wiz-q-label" style={{ marginTop: '1.8rem' }}>Budget range (₹)</div>
            <div className="wiz-chips">
              {['Under ₹25L', '₹25L – ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹2Cr', 'Above ₹2Cr'].map(b => (
                <button key={b} type="button"
                  className={`wiz-chip${answers.budget === b ? ' selected' : ''}`}
                  onClick={() => set('budget', answers.budget === b ? '' : b)}>
                  {answers.budget === b ? '✓ ' : ''}{b}
                </button>
              ))}
            </div>

            <div className="wiz-row" style={{ marginTop: '1.8rem' }}>
              <div className="wiz-field">
                <label className="wiz-q-label">Plot size <span style={{ color: 'var(--stone)', textTransform: 'none', letterSpacing: 0 }}>(approx.)</span></label>
                <input className="wiz-input" type="text" placeholder="e.g. 200 sq yd or 50×80 ft"
                  value={answers.plotSize} onChange={e => set('plotSize', e.target.value)} />
              </div>
              <div className="wiz-field">
                <label className="wiz-q-label">Location / Area</label>
                <input className="wiz-input" type="text" placeholder="Area or locality, city"
                  value={answers.location} onChange={e => set('location', e.target.value)} />
              </div>
            </div>

            <div className="wiz-nav">
              <button type="button" className="btn-outline" onClick={back}>← Back</button>
              <button type="button" className="btn-gold" onClick={next}>Continue →</button>
            </div>
          </div>
        )}

        {/* ── Step 3: Preferred time slot ── */}
        {step === 3 && (
          <div className="wiz-pane">
            <div className="wiz-q">When works best for you?</div>
            <div className="wiz-q-sub">We will schedule the session around your availability.</div>

            <div className="wiz-q-label" style={{ marginTop: '.8rem' }}>Preferred day</div>
            <div className="wiz-slot-grid">
              {[
                { val: 'Monday – Friday', icon: '💼', sub: 'Weekdays' },
                { val: 'Saturday', icon: '🗓️', sub: 'Weekend morning' },
                { val: 'Any day', icon: '✓', sub: 'Flexible' },
              ].map(d => (
                <button key={d.val} type="button"
                  className={`wiz-slot-card${answers.preferredDay === d.val ? ' selected' : ''}`}
                  onClick={() => set('preferredDay', answers.preferredDay === d.val ? '' : d.val)}
                >
                  <span className="wiz-slot-icon">{d.icon}</span>
                  <span className="wiz-slot-title">{d.val}</span>
                  <span className="wiz-slot-sub">{d.sub}</span>
                </button>
              ))}
            </div>

            <div className="wiz-q-label" style={{ marginTop: '1.8rem' }}>Preferred time</div>
            <div className="wiz-slot-grid">
              {[
                { val: 'Morning', icon: '🌅', sub: '9 AM – 12 PM' },
                { val: 'Afternoon', icon: '☀️', sub: '12 PM – 4 PM' },
                { val: 'Evening', icon: '🌆', sub: '4 PM – 7 PM' },
              ].map(t => (
                <button key={t.val} type="button"
                  className={`wiz-slot-card${answers.preferredTime === t.val ? ' selected' : ''}`}
                  onClick={() => set('preferredTime', answers.preferredTime === t.val ? '' : t.val)}
                >
                  <span className="wiz-slot-icon">{t.icon}</span>
                  <span className="wiz-slot-title">{t.val}</span>
                  <span className="wiz-slot-sub">{t.sub}</span>
                </button>
              ))}
            </div>

            {(!answers.preferredDay || !answers.preferredTime) && (
              <p style={{ fontSize: '.78rem', color: 'var(--stone)', marginTop: '.8rem' }}>
                👆 Please select a preferred day and time to continue.
              </p>
            )}

            <div className="wiz-nav">
              <button type="button" className="btn-outline" onClick={back}>← Back</button>
              <button
                type="button"
                className="btn-gold"
                onClick={next}
                disabled={!answers.preferredDay || !answers.preferredTime}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 4: Contact details ── */}
        {step === 4 && (
          <div className="wiz-pane">
            <div className="wiz-q">How do we reach you?</div>
            <div className="wiz-q-sub">We will call or WhatsApp you to confirm the session — no spam, ever.</div>

            <div className="wiz-field" style={{ marginTop: '1.2rem' }}>
              <label className="wiz-q-label">Full Name <span className="req">*</span></label>
              <input className="wiz-input wiz-input-lg" type="text" required
                placeholder="Your full name"
                value={answers.name} onChange={e => set('name', e.target.value)} />
            </div>
            <div className="wiz-field">
              <label className="wiz-q-label">Phone / WhatsApp <span className="req">*</span></label>
              <input className="wiz-input wiz-input-lg" type="tel" required
                placeholder="+91 XXXXX XXXXX"
                value={answers.phone} onChange={e => set('phone', e.target.value)} />
              <span style={{ fontSize: '.72rem', color: 'var(--stone)', marginTop: '.3rem' }}>
                Only used to confirm your consultation slot.
              </span>
            </div>
            <div className="wiz-field">
              <label className="wiz-q-label">Email Address <span style={{ color: 'var(--stone)', textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
              <input className="wiz-input wiz-input-lg" type="email"
                placeholder="Your email address"
                value={answers.email} onChange={e => set('email', e.target.value)} />
            </div>

            <div className="wiz-nav">
              <button type="button" className="btn-outline" onClick={back}>← Back</button>
              <button type="button" className="btn-gold" onClick={next}
                disabled={!answers.name || !answers.phone}>
                Review & Submit →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 5: Review & submit ── */}
        {step === 5 && (
          <div className="wiz-pane">
            <div className="wiz-q">Review &amp; Submit</div>
            <div className="wiz-q-sub">Everything look right? Hit submit and we will confirm within 24 hours.</div>

            <div className="wiz-summary" style={{ marginTop: '1.4rem' }}>
              <div className="wiz-summary-row">
                <span>Session</span>
                <strong>{answers.sessionType}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(1)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Project</span>
                <strong>{answers.projectType || '—'}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(2)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Budget</span>
                <strong>{answers.budget || '—'}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(2)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Location</span>
                <strong>{answers.location || '—'}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(2)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Day</span>
                <strong>{answers.preferredDay || '—'}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(3)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Time</span>
                <strong>{answers.preferredTime || '—'}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(3)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Name</span>
                <strong>{answers.name}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(4)}>Edit</button>
              </div>
              <div className="wiz-summary-row">
                <span>Phone</span>
                <strong>{answers.phone}</strong>
                <button type="button" className="wiz-edit-btn" onClick={() => setStep(4)}>Edit</button>
              </div>
            </div>

            {error && (
              <p style={{ color: '#c0392b', fontSize: '.83rem', marginTop: '.8rem' }}>{error}</p>
            )}
            <div className="wiz-nav">
              <button type="button" className="btn-outline" onClick={back}>← Back</button>
              <button type="submit" className="btn-gold" disabled={loading}>
                {loading ? 'Sending…' : 'Confirm Request ✓'}
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  )
}
