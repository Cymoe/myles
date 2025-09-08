import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    const { email, source } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    console.log('Attempting to send Effortless Abundance Guide to:', email);
    console.log('Environment check:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasBeehiveKey: !!process.env.BEEHIIV_API_KEY,
      hasBeehivePubId: !!process.env.BEEHIIV_PUBLICATION_ID
    });
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      // In development, we can skip sending the actual email
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Skipping email send');
        return NextResponse.json({ 
          success: true, 
          message: 'Development mode - email skipped' 
        });
      }
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }
    
    // Send email with the Effortless Abundance Guide
    const isWealthCodesEdition = source === 'golden-snitch-wealth-codes';
    
    const { error: emailError } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: email,
      subject: isWealthCodesEdition 
        ? '🏆 Your Wealth Codes Edition: Effortless Abundance Guide'
        : 'Your Effortless Abundance Guide: Cultivate an Ultra-Wealthy Mind',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>${isWealthCodesEdition 
            ? '🏆 Congratulations! You Caught the Golden Snitch!' 
            : 'Your Effortless Abundance Guide is Here!'
          }</h2>
          
          <p>${isWealthCodesEdition
            ? 'You\'ve unlocked the exclusive Wealth Codes Edition of the Effortless Abundance Guide!'
            : 'Thank you for your interest in mastering the Ultra-Wealthy mindset.'
          }</p>
          
          <div style="background: ${isWealthCodesEdition ? '#fffbeb' : '#f5f5f5'}; padding: 20px; border-radius: 8px; margin: 20px 0; ${isWealthCodesEdition ? 'border: 2px solid #fbbf24;' : ''}">
            <h3>📚 The Effortless Abundance Guide ${isWealthCodesEdition ? '- Wealth Codes Edition' : ''}</h3>
            <p><strong>How to Cultivate an Ultra-Wealthy Mind</strong></p>
            ${isWealthCodesEdition ? '<p style="color: #d97706; font-weight: bold;">✨ Contains the exclusive "Golden Mind Wealth Codes" - the essential blueprint for abundance!</p>' : ''}
            
            <p style="margin: 15px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://myleskameron.com')}/downloads/Effortless-Abundance-Guide.pdf" 
                 style="background: ${isWealthCodesEdition ? '#f59e0b' : '#0066cc'}; color: ${isWealthCodesEdition ? '#000' : 'white'}; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                ${isWealthCodesEdition ? '🏆 Download Your Wealth Codes Guide (PDF)' : 'Download Your Guide Now (PDF)'}
              </a>
            </p>
            
            <p><strong>What you'll discover inside:</strong></p>
            <ul style="margin: 10px 0;">
              <li>5 Key Thought Patterns for Effortless Abundance</li>
              <li>Mental Frameworks for High-Agency Individuals</li>
              <li>The "Abundance Ignition" Morning Routine (5:00 AM start)</li>
              ${isWealthCodesEdition ? '<li style="color: #d97706; font-weight: bold;">🔑 The Golden Mind Wealth Codes - Your pathway to effortless abundance!</li>' : ''}
              <li>Daily Rituals & Triggers to Reinforce Your Mindset</li>
              <li>Environment & Relationship Optimization Strategies</li>
              <li>Business Decision-Making Playbook with Templates</li>
              <li>Practical Examples & Checklists You Can Use Today</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>🎯 Start Your Transformation Today</h3>
            <p>This guide contains the exact mental frameworks I used to build multiple successful businesses and create lasting wealth.</p>
            <p><strong>Quick Start:</strong> Begin with Section 1 - "Mindset & Moment-to-Moment Habits". Focus on the 5 thought patterns for effortless abundance.</p>
          </div>
          
          <p><strong>Pro tip:</strong> Implement the "Abundance Ignition" morning routine starting at 5:00 AM. The gratitude journaling practice alone can transform your relationship with wealth.</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
          <em>Note: This guide shares principles typically taught in $5,000+ wealth mindset programs. You're getting it free because I believe everyone deserves access to these transformational concepts.</em>
          </p>
          
          <p>If you have any questions or breakthroughs while reading, just reply to this email - I'd love to hear about your journey.</p>
          
          <p>To your abundant future,<br>
          Myles Kameron</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
          P.S. Join thousands of entrepreneurs receiving weekly insights on wealth creation. Add myles@mail.smbdealsheet.com to your contacts to ensure you never miss an update.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Email send error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send guide email' },
        { status: 500 }
      );
    }

    // Add to Beehive with effortless-abundance tag
    console.log('Attempting to add to Beehiiv with tag: effortless-abundance');
    
    // Skip Beehiiv if credentials not configured
    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      console.log('Beehiiv credentials not configured, skipping newsletter signup');
      return NextResponse.json({ success: true });
    }
    
    try {
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
            utm_source: source || 'effortless-abundance',
            utm_medium: 'website',
            utm_campaign: 'free-guide',
            referring_site: 'myleskameron.com/effortless-abundance',
            tags: ['effortless-abundance'],
            custom_fields: [
              {
                name: 'Lead Type',
                value: 'Effortless Abundance Guide'
              }
            ]
          }),
        }
      );

      if (!beehiveResponse.ok) {
        const errorText = await beehiveResponse.text();
        console.error('Beehiiv subscription failed:', {
          status: beehiveResponse.status,
          statusText: beehiveResponse.statusText,
          error: errorText
        });
        // Don't fail the whole request - user still gets the guide email
      } else {
        const subscriptionData = await beehiveResponse.json();
        const subscriptionId = subscriptionData.data?.id;
        console.log('Successfully added to Beehiiv:', email, 'ID:', subscriptionId);
        
        // Add the tag separately
        if (subscriptionId) {
          const tagResponse = await fetch(
            `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriptionId}/tags`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                tags: ['effortless-abundance']
              })
            }
          );
          
          if (!tagResponse.ok) {
            const errorText = await tagResponse.text();
            console.error('Failed to add tags:', {
              status: tagResponse.status,
              error: errorText
            });
          } else {
            console.log('Successfully added tag: effortless-abundance');
          }
        }
      }
    } catch (beehiivError) {
      console.error('Beehiiv API error:', beehiivError);
      // Don't fail the whole request - user still gets their guide email
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Effortless Abundance Guide signup error:', error);
    
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