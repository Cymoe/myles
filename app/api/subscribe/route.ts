import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getWelcomeEmailHtml } from '@/emails/welcome-email-html';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, leadMagnet, quizResult, profileData } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send welcome email
    const emailSubject = quizResult 
      ? `Your ${quizResult} Wealth Profile is ready 🎯`
      : 'Your boring business resources are ready 🎯';
      
    const { data, error } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: [email],
      subject: emailSubject,
      html: getWelcomeEmailHtml(email, leadMagnet || 'resources', quizResult, profileData),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Add subscriber to Beehiiv
    if (process.env.BEEHIIV_API_KEY && process.env.BEEHIIV_PUBLICATION_ID) {
      try {
        const beehiivResponse = await fetch(
          `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              reactivate_existing: true,
              send_welcome_email: false, // We already sent one via Resend
              utm_source: 'website',
              utm_medium: leadMagnet || 'organic',
              referring_site: 'myleskameron.com',
              custom_fields: quizResult ? [
                {
                  name: 'wealth_profile',
                  value: quizResult
                }
              ] : undefined
            })
          }
        );

        if (!beehiivResponse.ok) {
          console.error('Beehiiv sync error:', await beehiivResponse.text());
        } else {
          console.log('Successfully added to Beehiiv:', email);
        }
      } catch (beehiivError) {
        // Don't fail the whole request if Beehiiv sync fails
        console.error('Beehiiv sync failed:', beehiivError);
      }
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { success: true, message: 'Welcome email sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}