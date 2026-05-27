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
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F4F7F4; padding: 0;">

        <!-- Header — deep green, distinct from consultation (dark charcoal) -->
        <div style="background: #1A3A2E; padding: 28px 36px; border-bottom: 3px solid #4A9B6F;">
          <h1 style="color: #A8D5B8; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: 0.1em;">
            MANVIN CONSULTANTS
          </h1>
          <p style="color: rgba(168,213,184,0.6); font-size: 11px; margin: 4px 0 0; letter-spacing: 0.15em; text-transform: uppercase;">
            📬 Project Enquiry — Contact Form
          </p>
        </div>

        <!-- Type badge -->
        <div style="background: #4A9B6F; padding: 10px 36px;">
          <span style="color: #fff; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600;">
            NEW PROJECT ENQUIRY
          </span>
        </div>

        <!-- Body -->
        <div style="padding: 36px; background: #F4F7F4;">
          <h2 style="font-family: Georgia, serif; font-size: 26px; font-weight: 300; color: #1A2E1A; margin: 0 0 6px;">
            Enquiry from <span style="color: #2E7D52;">${data.name}</span>
          </h2>
          <p style="font-size: 13px; color: #5A7268; margin: 0 0 28px;">
            Submitted on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <!-- Details table -->
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${[
              ['Project Type', data.projectType || '—'],
              ['Budget Range', data.budget || '—'],
              ['Plot Size', data.plotSize || '—'],
              ['Location', data.location || '—'],
            ].map(([label, value], i) => `
              <tr style="background: ${i % 2 === 0 ? '#E4EDE6' : '#F4F7F4'};">
                <td style="padding: 11px 16px; color: #5A7268; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; width: 38%;">${label}</td>
                <td style="padding: 11px 16px; color: #1A2E1A; font-weight: 500;">${value}</td>
              </tr>
            `).join('')}
          </table>

          ${data.message ? `
          <!-- Message -->
          <div style="margin-top: 24px; background: #E4EDE6; padding: 20px 24px; border-left: 3px solid #4A9B6F;">
            <p style="color: #5A7268; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 10px;">Client Message</p>
            <p style="color: #1A2E1A; font-size: 14px; line-height: 1.7; margin: 0;">${data.message.replace(/\n/g, '<br/>')}</p>
          </div>
          ` : ''}

          <!-- Contact box -->
          <div style="margin-top: 28px; background: #1A3A2E; padding: 24px 28px; border-left: 3px solid #4A9B6F;">
            <p style="color: #A8D5B8; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 12px;">Contact Details</p>
            <p style="color: #F0F7F2; font-size: 18px; font-family: Georgia, serif; font-weight: 300; margin: 0 0 6px;">${data.name}</p>
            <p style="color: rgba(240,247,242,0.75); font-size: 14px; margin: 4px 0;">📞 ${data.phone}</p>
            ${data.email ? `<p style="color: rgba(240,247,242,0.75); font-size: 14px; margin: 4px 0;">✉️ ${data.email}</p>` : ''}
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
        <div style="background: #D8E8DC; padding: 16px 36px; border-top: 1px solid #B0CDB8; text-align: center;">
          <p style="font-size: 11px; color: #5A7268; margin: 0; letter-spacing: 0.08em;">
            This email was sent from the <strong>Contact Page</strong> on manvinconsultants.com
          </p>
        </div>

      </div>
    `

    await transporter.sendMail({
      from: `"Manvin Consultants Website" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Project Enquiry — ${data.projectType || 'General'} — ${data.name}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
