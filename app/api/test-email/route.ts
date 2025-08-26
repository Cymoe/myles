import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getWelcomeEmailHtml } from '@/emails/welcome-email-html';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: ['delivered@resend.dev'], // Test email address
      subject: 'Test: Your boring business resources are ready 🎯',
      html: getWelcomeEmailHtml('test@example.com', 'test'),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error 
    }, { status: 500 });
  }
}