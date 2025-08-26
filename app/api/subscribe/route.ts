import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getWelcomeEmailHtml } from '@/emails/welcome-email-html';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, leadMagnet } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: [email],
      subject: 'Your boring business resources are ready 🎯',
      html: getWelcomeEmailHtml(email, leadMagnet || 'resources'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optionally, you could also add the email to a database or CRM here
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