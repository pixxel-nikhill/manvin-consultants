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
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F0F4F8; padding: 0;">

        <!-- Header — slate blue, distinct from consultation (charcoal) and contact (green) -->
        <div style="background: #1A2744; padding: 28px 36px; border-bottom: 3px solid #4A72B0;">
          <h1 style="color: #A8C0E0; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: 0.1em;">
            MANVIN CONSULTANTS
          </h1>
          <p style="color: rgba(168,192,224,0.6); font-size: 11px; margin: 4px 0 0; letter-spacing: 0.15em; text-transform: uppercase;">
            🤝 Partner / Network Application
          </p>
        </div>

        <!-- Type badge -->
        <div style="background: #4A72B0; padding: 10px 36px;">
          <span style="color: #fff; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600;">
            NEW PARTNER APPLICATION
          </span>
        </div>

        <!-- Body -->
        <div style="padding: 36px; background: #F0F4F8;">
          <h2 style="font-family: Georgia, serif; font-size: 26px; font-weight: 300; color: #1A2030; margin: 0 0 6px;">
            Application from <span style="color: #2E52A0;">${data.name}</span>
          </h2>
          <p style="font-size: 13px; color: #5A6880; margin: 0 0 28px;">
            Submitted on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <!-- Details table -->
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${[
              ['Profession', data.profession || '—'],
              ['City', data.city || '—'],
              ['Experience', data.experience || '—'],
              ['Phone', data.phone || '—'],
            ].map(([label, value], i) => `
              <tr style="background: ${i % 2 === 0 ? '#DDE6F0' : '#F0F4F8'};">
                <td style="padding: 11px 16px; color: #5A6880; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; width: 38%;">${label}</td>
                <td style="padding: 11px 16px; color: #1A2030; font-weight: 500;">${value}</td>
              </tr>
            `).join('')}
          </table>

          ${data.note ? `
          <!-- Note -->
          <div style="margin-top: 24px; background: #DDE6F0; padding: 20px 24px; border-left: 3px solid #4A72B0;">
            <p style="color: #5A6880; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 10px;">About Their Work</p>
            <p style="color: #1A2030; font-size: 14px; line-height: 1.7; margin: 0;">${data.note.replace(/\n/g, '<br/>')}</p>
          </div>
          ` : ''}

          <!-- Contact box -->
          <div style="margin-top: 28px; background: #1A2744; padding: 24px 28px; border-left: 3px solid #4A72B0;">
            <p style="color: #A8C0E0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 12px;">Contact Details</p>
            <p style="color: #F0F4F8; font-size: 18px; font-family: Georgia, serif; font-weight: 300; margin: 0 0 6px;">${data.name}</p>
            <p style="color: rgba(240,244,248,0.75); font-size: 14px; margin: 4px 0;">📞 ${data.phone}</p>
            <p style="color: rgba(240,244,248,0.75); font-size: 14px; margin: 4px 0;">🏙️ ${data.city || '—'}</p>
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
        <div style="background: #D0DCF0; padding: 16px 36px; border-top: 1px solid #A8C0E0; text-align: center;">
          <p style="font-size: 11px; color: #5A6880; margin: 0; letter-spacing: 0.08em;">
            This email was sent from the <strong>Clients / Network Page</strong> on manvinconsultants.com
          </p>
        </div>

      </div>
    `

    await transporter.sendMail({
      from: `"Manvin Consultants Website" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Partner Application — ${data.profession || 'Professional'} — ${data.name}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
