import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getWealthProfileResultsEmailHtml } from '@/emails/wealth-profile-results-email';
import { WealthProfile } from '@/lib/wealthProfileQuiz';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, profile, percentages } = await request.json();

    if (!email || !profile || !percentages) {
      return NextResponse.json(
        { error: 'Missing required data' },
        { status: 400 }
      );
    }

    // Send wealth profile results email
    const { data, error } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: [email],
      subject: `Your Wealth Profile: ${profile.name} 🎯`,
      html: getWealthProfileResultsEmailHtml(email, profile as WealthProfile, percentages),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send results email' },
        { status: 500 }
      );
    }

    console.log('Wealth profile results sent successfully:', data);

    return NextResponse.json(
      { success: true, message: 'Results sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Send wealth profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}