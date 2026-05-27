import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F5F0E8; padding: 0;">

        <!-- Header -->
        <div style="background: #1C1C1A; padding: 28px 36px; border-bottom: 3px solid #8B6914;">
          <h1 style="color: #BFA060; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: 0.1em;">
            MANVIN CONSULTANTS
          </h1>
          <p style="color: rgba(245,240,232,0.5); font-size: 11px; margin: 4px 0 0; letter-spacing: 0.15em; text-transform: uppercase;">
            New Consultation Request
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 36px;">
          <h2 style="font-family: Georgia, serif; font-size: 26px; font-weight: 300; color: #1C1C1A; margin: 0 0 6px;">
            New Request from <span style="color: #8B6914;">${data.name}</span>
          </h2>
          <p style="font-size: 13px; color: #7A7268; margin: 0 0 28px;">
            Submitted on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <!-- Details table -->
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${[
              ['Session Type', data.sessionType],
              ['Project Type', data.projectType || '—'],
              ['Budget Range', data.budget || '—'],
              ['Plot Size', data.plotSize || '—'],
              ['Location', data.location || '—'],
              ['Preferred Day', data.preferredDay || '—'],
              ['Preferred Time', data.preferredTime || '—'],
            ].map(([label, value], i) => `
              <tr style="background: ${i % 2 === 0 ? '#EDE7DA' : '#F5F0E8'};">
                <td style="padding: 11px 16px; color: #7A7268; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; width: 38%;">${label}</td>
                <td style="padding: 11px 16px; color: #1C1C1A; font-weight: 500;">${value}</td>
              </tr>
            `).join('')}
          </table>

          <!-- Contact box -->
          <div style="margin-top: 28px; background: #1C1C1A; padding: 24px 28px; border-left: 3px solid #8B6914;">
            <p style="color: #BFA060; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 12px;">Contact Details</p>
            <p style="color: #F5F0E8; font-size: 18px; font-family: Georgia, serif; font-weight: 300; margin: 0 0 6px;">${data.name}</p>
            <p style="color: rgba(245,240,232,0.7); font-size: 14px; margin: 4px 0;">📞 ${data.phone}</p>
            ${data.email ? `<p style="color: rgba(245,240,232,0.7); font-size: 14px; margin: 4px 0;">✉️ ${data.email}</p>` : ''}
          </div>

          <!-- CTA -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="https://wa.me/919928977014"
               style="display: inline-block; background: #25D366; color: #fff; padding: 12px 28px; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;">
              Reply on WhatsApp →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #EDE7DA; padding: 16px 36px; border-top: 1px solid #C8B896; text-align: center;">
          <p style="font-size: 11px; color: #7A7268; margin: 0; letter-spacing: 0.08em;">
            This email was sent from the consultation form on manvinconsultants.com
          </p>
        </div>

      </div>
    `

    await transporter.sendMail({
      from: `"Manvin Consultants Website" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Consultation Request — ${data.sessionType} — ${data.name}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
