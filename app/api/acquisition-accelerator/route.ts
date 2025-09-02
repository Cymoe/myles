import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    console.log('Attempting to send email to:', email);
    console.log('Environment check:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasBeehiveKey: !!process.env.BEEHIIV_API_KEY,
      hasBeehivePubId: !!process.env.BEEHIIV_PUBLICATION_ID
    });
    
    // Send welcome email with document links
    const { error: emailError } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: email,
      subject: 'Your Acquisition Accelerator Access',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to the Acquisition Accelerator!</h2>
          
          <p>Here's everything you need to get started:</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>📄 Your Complete 32-Document Blueprint System (Download Now)</h3>
            <p><a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com'}/downloads/blueprint-starter-pack/all-documents" style="color: #0066cc;">Click here to access all documents</a></p>
            
            <p style="margin-top: 15px;"><strong>What's included:</strong></p>
            <ul style="margin: 10px 0;">
              <li>Complete 32-document acquisition system</li>
              <li>From finding deals to closing them</li>
              <li>Creative financing strategies</li>
              <li>Due diligence checklists</li>
              <li>Negotiation scripts and templates</li>
              <li>SBA loan guidance</li>
              <li>Plus advanced strategies for scaling</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>📧 Your 30-Day Course Starts Tomorrow</h3>
            <p>You'll receive one actionable lesson each day for the next 30 days.</p>
            <p><strong>Day 1 Preview:</strong> "The Hidden Business Economy" - Where to find businesses that aren't publicly listed.</p>
          </div>
          
          <p><strong>Pro tip:</strong> Download the documents now and review "The 30-Day Acquisition Timeline" first. It's your roadmap for everything that follows.</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
          <em>Note: You're receiving the complete Blueprint system - all 32 documents we use in our own acquisitions. Nothing held back.</em>
          </p>
          
          <p>If you have any questions, just reply to this email.</p>
          
          <p>Here's to your first acquisition,<br>
          Myles Kameron</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
          P.S. Add hello@myleskameron.com to your contacts to ensure you receive all 30 lessons.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Email send error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    // Add to Beehive with acquisition-accelerator tag
    const beehiveResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: source || 'acquisition-accelerator',
          utm_medium: 'website',
          utm_campaign: 'free-accelerator',
          referring_site: 'myleskameron.com/acquisition-accelerator',
          custom_fields: [
            {
              name: 'Lead Type',
              value: 'Acquisition Accelerator'
            }
          ]
        }),
      }
    );

    if (!beehiveResponse.ok) {
      const errorData = await beehiveResponse.json();
      console.error('Beehiive subscription error:', errorData);
    } else {
      // Tag subscriber for both blueprint and course
      const subscriptionData = await beehiveResponse.json();
      const subscriptionId = subscriptionData.data.id;

      await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriptionId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            tags: ['smb-challenge']
          }),
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Acquisition Accelerator signup error:', error);
    
    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('JSON')) {
        return NextResponse.json(
          { error: 'Invalid request format' },
          { status: 400 }
        );
      }
      
      if (error.message.includes('RESEND')) {
        return NextResponse.json(
          { error: 'Email service temporarily unavailable' },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}