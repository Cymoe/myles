import { NextResponse } from 'next/server';
import { getSubscribersForDay, getNextEmailNumber, updateSubscriber } from '@/lib/abundance-automation';

// This endpoint should be called daily by a cron job (e.g., Vercel Cron or external service)
export async function GET(request: Request) {
  try {
    // In production, you'd verify this is being called by your cron service
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const processedEmails: string[] = [];
    const errors: string[] = [];

    // Get all subscribers who need emails today
    for (let day = 0; day <= 21; day++) {
      const subscribers = getSubscribersForDay(day);
      
      for (const subscriber of subscribers) {
        const emailNumber = getNextEmailNumber(subscriber);
        
        if (emailNumber) {
          try {
            // Call the automation endpoint to send the email
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/abundance-automation`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: subscriber.email,
                dayInSequence: emailNumber,
                isWealthCodes: subscriber.isWealthCodes,
              }),
            });

            if (response.ok) {
              // Update subscriber's last email sent
              updateSubscriber(subscriber.email, { lastEmailSent: emailNumber });
              processedEmails.push(`${subscriber.email} - Email ${emailNumber}`);
            } else {
              errors.push(`Failed to send email ${emailNumber} to ${subscriber.email}`);
            }
          } catch (error) {
            errors.push(`Error sending to ${subscriber.email}: ${error}`);
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      processed: processedEmails.length,
      processedEmails,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Automation processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process automation' },
      { status: 500 }
    );
  }
}

// Manual trigger for testing
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, forceEmailNumber } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // This allows manual testing of specific emails
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/abundance-automation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        dayInSequence: forceEmailNumber || 1,
        isWealthCodes: false,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Test email sent' });
    } else {
      return NextResponse.json({ error: 'Failed to send test email' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Test failed' }, { status: 500 });
  }
}