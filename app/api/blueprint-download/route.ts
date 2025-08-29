import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In production, these would be actual download links
const BLUEPRINT_DOWNLOAD_URL = process.env.BLUEPRINT_DOWNLOAD_URL || 'https://example.com/blueprint-starter-pack';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add to Beehiiv with blueprint tag
    try {
      const beehiivResponse = await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            reactivate_existing: true,
            send_welcome_email: false,
            tags: ['blueprint-starter-pack']
          }),
        }
      );

      if (!beehiivResponse.ok) {
        console.error('Beehiiv subscription failed:', await beehiivResponse.text());
      }
    } catch (error) {
      console.error('Beehiiv error:', error);
      // Continue anyway - don't block download for API issues
    }

    // Send download email via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'Myles Webb <myles@mylescharleswebb.com>',
      to: email,
      subject: 'Your Blueprint Starter Pack is here',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="font-size: 28px; margin-bottom: 24px; font-weight: 300;">Your Blueprint Starter Pack</h1>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              You're about to access the same documents used in $80M+ of service business acquisitions.
            </p>

            <p style="font-size: 16px; margin-bottom: 20px;">
              <strong>First, a warning:</strong> This information is dangerous. Used correctly, these documents will show you exactly how to buy cash-flowing businesses with little to no money down.
            </p>

            <div style="margin: 40px 0;">
              <a href="${BLUEPRINT_DOWNLOAD_URL}" style="display: inline-block; background-color: #000; color: #fff; padding: 16px 40px; text-decoration: none; font-size: 16px; font-weight: 500;">
                Download Your 20 Documents →
              </a>
            </div>

            <div style="background-color: #f5f5f5; padding: 24px; margin: 32px 0;">
              <h3 style="font-size: 18px; margin-top: 0;">Start With These 3:</h3>
              <ol style="margin: 16px 0; padding-left: 20px;">
                <li><strong>The $50M Service Empire Formula</strong> - See what's possible</li>
                <li><strong>Off-Market Deal Funnel</strong> - Find deals nobody else sees</li>
                <li><strong>Creative Deal Structure Bible</strong> - Buy with no money down</li>
              </ol>
            </div>

            <p style="font-size: 16px; margin-bottom: 20px;">
              <strong>What happens next:</strong>
            </p>
            
            <ol style="margin: 16px 0; padding-left: 20px;">
              <li>Download all 20 documents (save locally)</li>
              <li>Read the first 3 listed above</li>
              <li>Take ONE action within 48 hours</li>
              <li>Watch for my emails (actual deal breakdowns coming)</li>
            </ol>

            <p style="font-size: 16px; margin: 32px 0;">
              Most people download and do nothing. Don't be most people.
            </p>

            <p style="font-size: 16px; margin-bottom: 20px;">
              Ready to buy your first business?<br>
              Let's fucking go.
            </p>

            <p style="font-size: 16px; margin-bottom: 8px;">
              -Myles
            </p>
            <p style="font-size: 14px; color: #666; margin-top: 8px;">
              P.S. - When you're ready for all 67 documents + deal flow, reply to this email. Blueprint Pro members get first look at every deal.
            </p>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
            
            <p style="font-size: 12px; color: #666; text-align: center;">
              You're receiving this because you requested The Blueprint Starter Pack.<br>
              <a href="#" style="color: #666;">Unsubscribe</a> | 
              <a href="https://mylescharleswebb.com" style="color: #666;">mylescharleswebb.com</a>
            </p>
          </div>
        </body>
        </html>
      `
    });

    if (emailError) {
      console.error('Email send error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send download email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Check your email for download link'
    });

  } catch (error) {
    console.error('Blueprint download error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}