import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { businessType, revenue, location, email, name, phone } = await request.json();

    // Validate required fields
    if (!businessType || !revenue || !location || !email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification email to you
    await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: 'hello@myleskameron.com',
      subject: `New Business For Sale: ${businessType} - ${revenue}`,
      html: `
        <h2>New Business Seller Inquiry</h2>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Annual Revenue:</strong> ${revenue}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Owner Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      `,
    });

    // Send confirmation email to the seller
    await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: email,
      subject: 'We Received Your Business Information',
      html: `
        <h1>Thank you, ${name}</h1>
        <p>We've received your information about selling your ${businessType} business.</p>
        
        <h3>What happens next:</h3>
        <ol>
          <li>We'll review your business details within 24-48 hours</li>
          <li>We'll search our network of 100,000+ buyers for matches</li>
          <li>We'll reach out only if we find qualified buyers interested in your type of business</li>
          <li>All introductions are made with your approval</li>
        </ol>
        
        <h3>Your Business Details:</h3>
        <p><strong>Type:</strong> ${businessType}</p>
        <p><strong>Revenue:</strong> ${revenue}</p>
        <p><strong>Location:</strong> ${location}</p>
        
        <p>Remember: This service is 100% free for you as a seller. We only get paid if and when a buyer we introduce successfully purchases your business (buyers pay us a success fee at closing).</p>
        
        <p>If you have any questions, just reply to this email.</p>
        
        <p>Best,<br>Myles Kameron</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing sell business form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}