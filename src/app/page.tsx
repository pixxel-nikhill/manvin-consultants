import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manvin Consultants – Architecture & Interior Design, Jaipur',
  description:
    'Architectural, interior & construction consultancy rooted in Rajasthan. 200+ projects delivered. From Ghar Ka Naksha to full-site supervision — one team, start to finish.',
}

export default function HomePage() {
  return (
    <div className="page">

      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-tag">Jaipur · Est. 2009 · 15+ Years</div>
          <h1 className="hero-h1">
            We design<br />
            spaces that<br />
            <em>inspire</em> &amp;<br />
            endure.
          </h1>
          <p className="hero-desc">
            Architectural, interior &amp; construction consultancy rooted in Rajasthan.
            From Ghar Ka Naksha to full-site supervision — one team, start to finish.
          </p>
          <div className="hero-btns">
            <Link href="/consultation" className="btn-gold">Start Your Project</Link>
            <Link href="/portfolio" className="btn-outline">View Portfolio →</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">200+</div>
              <div className="stat-lbl">Projects Delivered</div>
            </div>
            <div>
              <div className="stat-num">15+</div>
              <div className="stat-lbl">Years of Practice</div>
            </div>
            <div>
              <div className="stat-num">360°</div>
              <div className="stat-lbl">Design to Handover</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="mosaic">
            <div className="mosaic-main">
              <Image
                src="/construction.png"
                alt="Construction project by Manvin Consultants"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="mosaic-overlay"></div>
            </div>
            <div className="mosaic-b1">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=95"
                alt="Architectural concrete detail"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 50vw, 25vw"
              />
            </div>
            <div className="mosaic-b2">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=95"
                alt="Modern architecture exterior"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 50vw, 25vw"
              />
              <div className="mosaic-badge">
                <div className="mosaic-badge-n">200+</div>
                <div className="mosaic-badge-t">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span>Architectural Design <em>✦</em></span>
          <span>Interior Planning <em>✦</em></span>
          <span>Turn Key Projects <em>✦</em></span>
          <span>Site Analysis <em>✦</em></span>
          <span>3D Visualization <em>✦</em></span>
          <span>Residential &amp; Commercial <em>✦</em></span>
          <span>Jaipur, Rajasthan <em>✦</em></span>
          <span>Architectural Design <em>✦</em></span>
          <span>Interior Planning <em>✦</em></span>
          <span>Turn Key Projects <em>✦</em></span>
          <span>Site Analysis <em>✦</em></span>
          <span>3D Visualization <em>✦</em></span>
          <span>Residential &amp; Commercial <em>✦</em></span>
          <span>Jaipur, Rajasthan <em>✦</em></span>
        </div>
      </div>

      {/* ── About ── */}
      <div className="about-split" style={{ minHeight: 'auto' }}>
        <div className="about-img-col">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85"
            alt="Manvin Consultants architecture studio"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="about-img-overlay"></div>
        </div>
        <div className="about-text-col">
          <div>
            <div className="tag rv">Our Story</div>
            <h2 className="h2 rv">
              Architecture that speaks to <em>who you are</em>
            </h2>
            <p className="sub rv" style={{ marginTop: '.8rem' }}>
              Founded in Jaipur with a passion for spaces that breathe and belong,
              Manvin Consultants has spent over 15 years shaping homes, offices, and
              facilities across Rajasthan.
            </p>
            <div className="about-quote rv">
              &quot;Every plot holds a story. Our job is to help you tell it beautifully —
              through design that respects the land, the culture, and the people who
              live in it.&quot;
            </div>
            <p className="sub rv">
              We believe great architecture isn&apos;t just construction — it&apos;s a
              conversation between structure, climate, and the people who live inside it.
            </p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/consultation" className="btn-gold rv">Start Your Project →</Link>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div className="team-strip">
        <div className="tag rv">Our Team</div>
        <h2 className="h2 rv">Meet our <em>core members</em></h2>
        <div className="team-grid team-grid-2">

          <div className="team-card rv">
            <div className="team-photo">
              <Image
                src="/project-management-consultant.jpeg"
                alt="Navin Sharma – Project Management Consultant"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <div className="team-info">
              <div className="team-name">Navin Sharma</div>
              <div className="team-role">Project Management Consultant</div>
              <p className="team-bio">
                25+ years guiding architectural and construction projects from concept
                to completion. Leads client relationships, project timelines, and ensures
                every delivery meets the highest standard.
              </p>
            </div>
          </div>

          <div className="team-card rv rv1">
            <div className="team-photo">
              <Image
                src="/interior-designer.jpeg"
                alt="Akshita Kumawat – Interior Designer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <div className="team-info">
              <div className="team-name">Akshita Kumawat</div>
              <div className="team-role">Interior Designer</div>
              <p className="team-bio">
                Experienced interior designer creating personalised, functional spaces
                through thoughtful material selection, space planning, and lighting
                design — turning each space into something uniquely yours.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Services Strip ── */}
      <div className="home-services">
        <div className="home-services-head">
          <div>
            <div className="tag rv">What We Do</div>
            <h2 className="h2 rv">Our <em>Services</em></h2>
          </div>
          <Link href="/services" className="btn-outline rv">All Services →</Link>
        </div>
        <div className="service-strip">
          <Link href="/services" className="svc rv">
            <div className="svc-n">01</div>
            <div className="svc-icon">◈</div>
            <div className="svc-title">Architectural Design</div>
            <p className="svc-desc">
              Residential &amp; commercial design with site planning, feasibility,
              approval drawings, and conceptual layouts for any plot size.
            </p>
            <div className="svc-arr">Learn more →</div>
          </Link>
          <Link href="/services" className="svc rv rv1">
            <div className="svc-n">02</div>
            <div className="svc-icon">◉</div>
            <div className="svc-title">Interior Design</div>
            <p className="svc-desc">
              Curated finishes, lighting strategy, space optimization and modular
              joinery — interiors that feel personal.
            </p>
            <div className="svc-arr">Learn more →</div>
          </Link>
          <Link href="/services" className="svc rv rv2">
            <div className="svc-n">03</div>
            <div className="svc-icon">◧</div>
            <div className="svc-title">Turn Key Projects</div>
            <p className="svc-desc">
              Complete project delivery — design, supervision, vendor coordination,
              and handover. One team, zero gaps.
            </p>
            <div className="svc-arr">Learn more →</div>
          </Link>
        </div>
      </div>

      {/* ── Featured Projects ── */}
      <div className="home-projects">
        <div className="home-proj-head rv">
          <div>
            <div className="tag">Selected Work</div>
            <h2 className="h2">Featured <em>Projects</em></h2>
          </div>
          <Link href="/portfolio" className="btn-outline">Full Portfolio →</Link>
        </div>
        <div className="proj-grid">
          <div className="proj-card tall rv">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85"
              alt="Modern Villa, Jaipur"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 50vw, 40vw"
            />
            <div className="proj-info">
              <div className="proj-cat">Residential · Jaipur</div>
              <div className="proj-name">Modern Family Villa</div>
            </div>
          </div>
          <div className="proj-card rv rv1">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
              alt="Corporate Office"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
            <div className="proj-info">
              <div className="proj-cat">Commercial · Jaipur</div>
              <div className="proj-name">Corporate Headquarters</div>
            </div>
          </div>
          <div className="proj-card rv rv1">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
              alt="Luxury Bungalow"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
            <div className="proj-info">
              <div className="proj-cat">Residential · Jaipur</div>
              <div className="proj-name">Luxury Bungalow</div>
            </div>
          </div>
          <div className="proj-card rv rv2">
            <Image
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80"
              alt="Interior"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
            <div className="proj-info">
              <div className="proj-cat">Interior · Jaipur</div>
              <div className="proj-name">Premium Living Room</div>
            </div>
          </div>
          <div className="proj-card rv rv2">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
              alt="Commercial Complex"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
            <div className="proj-info">
              <div className="proj-cat">Commercial · Jaipur</div>
              <div className="proj-name">Retail Complex</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div className="free-hook">
        <div className="tag rv" style={{ justifyContent: 'center' }}>Start With Confidence</div>
        <h2 className="h2 rv">Ready to build your <em>vision</em>?</h2>
        <p className="sub rv" style={{ margin: '0 auto' }}>
          Get a free consultation — no commitment, no pressure.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link href="/consultation" className="btn-gold rv">Claim Free Consultation →</Link>
          <Link href="/contact" className="btn-outline rv">Get in Touch</Link>
        </div>
      </div>

    </div>
  )
}
