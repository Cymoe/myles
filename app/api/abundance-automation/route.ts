import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates for the 7-day Wealth Codes sequence
const emailTemplates = {
  1: {
    subject: "The Wealth Frequency You Were Born With 🎯",
    dayDelay: 0, // Immediate
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          Welcome to Your Wealth Consciousness Journey
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          You have an innate wealth frequency that's been waiting to be activated.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Most people spend their lives operating at a fraction of their wealth potential, 
          not because they lack ability, but because they've forgotten their natural abundance frequency.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">Today's Activation: The Gratitude Amplifier</h3>
          <p>Before you check your phone, before the world rushes in, spend 3 minutes in pure gratitude.</p>
          <ol style="line-height: 1.8;">
            <li>Write down 3 things you're grateful for (be specific)</li>
            <li>Feel the emotion of each one for 20 seconds</li>
            <li>End with: "I am open to receiving more abundance today"</li>
          </ol>
          <p style="font-style: italic; color: #666; margin-top: 20px;">
            This simple practice rewires your Reticular Activating System to notice opportunities everywhere.
          </p>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            <strong>🏆 Wealth Codes Bonus:</strong> You caught the golden snitch! 
            Watch for exclusive Golden Mind codes throughout this journey.
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          Tomorrow, I'll share why millionaires think in reverse and how you can too.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          To your infinite abundance,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          You're receiving this because you downloaded the Effortless Abundance Guide. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  2: {
    subject: "The Backwards Secret of Abundance 🔄",
    dayDelay: 3,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          Why Everything You Know About Wealth is Backwards
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          Most people follow this formula:<br>
          <strong>Work → Money → Freedom</strong>
        </p>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          But wealth consciousness operates in reverse:<br>
          <strong>Freedom Mindset → Aligned Action → Abundance</strong>
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">Today's Practice: Future Self Dialogue</h3>
          
          <p>Close your eyes and imagine meeting yourself 10 years from now—the version who has everything you desire.</p>
          
          <p><strong>Ask your future self:</strong></p>
          <ul style="line-height: 1.8;">
            <li>What did you stop tolerating?</li>
            <li>What became non-negotiable?</li>
            <li>What surprised you about the journey?</li>
          </ul>
          
          <p style="margin-top: 20px;">Write down their answers. This isn't fantasy—it's quantum possibility collapsing into probability.</p>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #d97706; margin: 0 0 10px 0;">🔑 Golden Mind Code #1:</h4>
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            "The wealthy create their reality first in consciousness, then in the physical. 
            They live FROM their vision, not TOWARD it."
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          When you operate FROM abundance rather than FOR abundance, everything shifts.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          Living in the frequency,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Part of the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  3: {
    subject: "The Invisible Wealth You Already Possess 👁️",
    dayDelay: 7,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          You're Richer Than You Think
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          Your brain's Reticular Activating System (RAS) is constantly filtering reality. 
          Right now, it might be programmed to notice lack, problems, and scarcity.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Today, we're reprogramming it to see the abundance that already surrounds you.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">The Abundance Evidence Journal</h3>
          
          <p>For the next 7 days, document evidence of abundance in your life:</p>
          
          <ul style="line-height: 1.8;">
            <li><strong>Relationships:</strong> Who enriches your life?</li>
            <li><strong>Skills:</strong> What comes naturally to you?</li>
            <li><strong>Resources:</strong> What do you have access to?</li>
            <li><strong>Opportunities:</strong> What doors are cracked open?</li>
            <li><strong>Synchronicities:</strong> What "coincidences" appeared?</li>
          </ul>
          
          <p style="background: #fff; padding: 15px; border-left: 4px solid #9333ea; margin-top: 20px;">
            <strong>True story:</strong> One person doing this exercise discovered they had 
            $50,000 worth of "hidden assets" - unused skills, dormant connections, and 
            overlooked opportunities. The wealth was always there, invisible until acknowledged.
          </p>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #d97706; margin: 0 0 10px 0;">🔑 Golden Mind Code #2:</h4>
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            "Abundance isn't attracted - it's recognized. The wealthy see opportunity 
            where others see obstacles because they've trained their perception."
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          When you see abundance everywhere, it comes to you from everywhere.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          Expanding your vision,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Part of the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  4: {
    subject: "Why Rich People Say No 🚫 (The Sacred Boundaries Code)",
    dayDelay: 10,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          The Power of Sacred Boundaries
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          Poverty consciousness says yes from fear.<br>
          Wealth consciousness says no from power.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Every time you say yes to something that doesn't align with your highest vision, 
          you're saying no to something that does.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">This Week's Challenge: The Aligned No</h3>
          
          <p>Identify and decline 3 things that don't serve your wealth consciousness:</p>
          
          <ol style="line-height: 1.8;">
            <li>An energy-draining commitment</li>
            <li>A relationship that keeps you small</li>
            <li>A habit that reinforces scarcity</li>
          </ol>
          
          <p style="margin-top: 20px; font-style: italic;">
            Remember: Your energy is your true bank account. Every "no" to misalignment 
            is a "yes" to abundance.
          </p>
          
          <div style="background: #fff; padding: 15px; border-left: 4px solid #9333ea; margin-top: 20px;">
            <p style="margin: 0;">
              <strong>High-Agency Principle:</strong> The wealthy protect their energy 
              like they protect their assets—because energy IS their primary asset.
            </p>
          </div>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #d97706; margin: 0 0 10px 0;">🔑 Golden Mind Code #3:</h4>
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            "Boundaries aren't walls—they're wealth multipliers. Every aligned 'no' 
            creates space for a higher-value 'yes' to appear."
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          Watch how abundance flows when you stop leaking energy to misaligned commitments.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          Protecting your frequency,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Part of the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  5: {
    subject: "The Environment Alchemy Code 🏛️",
    dayDelay: 14,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          Your Space is Programming Your Wealth
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          Every object, every relationship, every daily interaction is either programming 
          you for abundance or scarcity.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          The wealthy understand: Environment isn't just influence—it's destiny.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">Environmental Wealth Shifts</h3>
          
          <p><strong>Physical Space:</strong></p>
          <ul style="line-height: 1.8;">
            <li>Clear clutter (stagnant energy = stagnant wealth)</li>
            <li>Add one beautiful object that makes you feel abundant</li>
            <li>Create a "wealth corner" for visualization</li>
          </ul>
          
          <p style="margin-top: 20px;"><strong>Digital Environment:</strong></p>
          <ul style="line-height: 1.8;">
            <li>Unfollow accounts that trigger comparison</li>
            <li>Subscribe to abundance-minded content</li>
            <li>Set your phone wallpaper to your vision</li>
          </ul>
          
          <p style="margin-top: 20px;"><strong>Relationship Architecture:</strong></p>
          <ul style="line-height: 1.8;">
            <li>Spend more time with those who see your potential</li>
            <li>Limit exposure to scarcity conversations</li>
            <li>Find one person living your desired reality</li>
          </ul>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #d97706; margin: 0 0 10px 0;">🔑 Golden Mind Code #4:</h4>
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            "You don't rise to your goals—you fall to your environment. Design your 
            surroundings as if you're already wealthy, and wealth becomes inevitable."
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          You become your environment's average. Choose wisely.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          Designing for abundance,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Part of the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  6: {
    subject: "The Compound Effect of Small Wealth Rituals 📈",
    dayDelay: 18,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 28px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px;">
          1% Daily Shifts = Exponential Results
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444;">
          You're not trying to change everything overnight. You're installing tiny rituals 
          that compound into massive transformation.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">The Wealth Stack: 3-Minute Morning</h3>
          
          <p>Stack these micro-rituals for macro results:</p>
          
          <div style="background: #fff; padding: 20px; border-radius: 5px; margin: 15px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Minute 1: Gratitude Scan</strong></p>
            <p style="margin: 0; font-size: 14px;">Feel 3 specific appreciations deeply</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 5px; margin: 15px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Minute 2: Vision Activation</strong></p>
            <p style="margin: 0; font-size: 14px;">See yourself living your wealthy life TODAY</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 5px; margin: 15px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Minute 3: Aligned Action</strong></p>
            <p style="margin: 0; font-size: 14px;">Identify one high-value action for today</p>
          </div>
          
          <p style="margin-top: 20px; font-style: italic;">
            Do this for 30 days and watch your entire frequency shift.
          </p>
        </div>
        
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0;">🎯 Check-In Moment</h4>
          <p style="margin: 0;">
            Take a moment to notice: How has your relationship with wealth shifted 
            over these past 18 days? What feels different? What's becoming possible?
          </p>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: #fff9e6; border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #d97706; margin: 0 0 10px 0;">🔑 Golden Mind Code #5:</h4>
          <p style="font-size: 14px; color: #d97706; margin: 0;">
            "Wealth isn't built in grand gestures—it's cultivated in daily micro-moments 
            of aligned consciousness. Stack your rituals, stack your wealth."
          </p>
        </div>
        ` : ''}
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          The final initiation awaits...
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666;">
          Honoring your journey,<br>
          Myles
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Part of the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  },
  
  7: {
    subject: "Your Wealth Codes Initiation 🎓✨",
    dayDelay: 21,
    getHtml: (email: string, isWealthCodes: boolean) => `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 32px; font-weight: normal; color: #1a1a1a; margin-bottom: 20px; text-align: center;">
          You've Completed Your Wealth Consciousness Journey
        </h1>
        
        <p style="font-size: 18px; line-height: 1.8; color: #444; text-align: center;">
          21 days. 7 wealth codes. One transformed relationship with abundance.
        </p>
        
        <div style="background: #f9f7f4; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0;">What You've Activated:</h3>
          
          <ul style="line-height: 1.8;">
            <li>✓ The Gratitude Amplifier - Rewired your RAS for abundance</li>
            <li>✓ Reverse Thinking - Living FROM your vision</li>
            <li>✓ Abundance Recognition - Seeing wealth everywhere</li>
            <li>✓ Sacred Boundaries - Protecting your energy</li>
            <li>✓ Environment Alchemy - Designing for wealth</li>
            <li>✓ Compound Rituals - Daily wealth habits</li>
            <li>✓ Integrated Practice - A new way of being</li>
          </ul>
        </div>
        
        ${isWealthCodes ? `
        <div style="background: linear-gradient(135deg, #fff9e6 0%, #fef3c7 100%); border: 2px solid #fbbf24; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #d97706; margin: 0 0 15px 0; text-align: center;">
            🏆 The Final Golden Mind Code 🏆
          </h3>
          <p style="font-size: 16px; color: #92400e; margin: 0; text-align: center; font-weight: bold;">
            "Wealth consciousness isn't a destination—it's a frequency you maintain. 
            You don't 'arrive' at wealth; you vibrate there consistently until 
            your external reality has no choice but to match."
          </p>
        </div>
        ` : ''}
        
        <div style="background: #e8f5e9; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <h3 style="font-size: 20px; margin-top: 0; text-align: center;">Your Three Paths Forward</h3>
          
          <div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 5px;">
            <h4 style="margin: 0 0 10px 0;">Path 1: Integration</h4>
            <p style="margin: 0;">Continue solo with quarterly check-ins to reinforce your practice.</p>
          </div>
          
          <div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 5px;">
            <h4 style="margin: 0 0 10px 0;">Path 2: Mastery</h4>
            <p style="margin: 0;">Receive monthly deep-dives into advanced wealth consciousness principles.</p>
          </div>
          
          <div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 5px;">
            <h4 style="margin: 0 0 10px 0;">Path 3: Acceleration</h4>
            <p style="margin: 0;">Weekly consciousness elevators plus practical wealth-building opportunities.</p>
          </div>
          
          <p style="text-align: center; margin-top: 30px;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/wealth-consciousness-paths?email=${email}" 
               style="display: inline-block; padding: 15px 30px; background: #9333ea; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Choose Your Path
            </a>
          </p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6; text-align: center; margin-top: 30px;">
          Whatever path you choose, remember: You now carry the Wealth Codes. 
          Use them wisely. Share them generously. Live them daily.
        </p>
        
        <p style="font-size: 16px; font-style: italic; color: #666; text-align: center;">
          To your infinite abundance,<br>
          Myles
        </p>
        
        <div style="text-align: center; margin: 40px 0;">
          <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
            P.S. Want a beautiful certificate celebrating your journey? 
          </p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/wealth-codes-certificate?email=${email}" 
             style="color: #9333ea; text-decoration: underline;">
            Download Your Wealth Codes Certificate
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          Thank you for joining the Wealth Consciousness Journey. 
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?email=${email}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `
  }
};

// This endpoint will be called by a cron job or webhook
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, dayInSequence, isWealthCodes } = body;

    // Validate inputs
    if (!email || !dayInSequence) {
      return NextResponse.json(
        { error: 'Email and dayInSequence are required' },
        { status: 400 }
      );
    }

    const template = emailTemplates[dayInSequence as keyof typeof emailTemplates];
    
    if (!template) {
      return NextResponse.json(
        { error: 'Invalid day in sequence' },
        { status: 400 }
      );
    }

    // Send the email
    const { error } = await resend.emails.send({
      from: 'Myles Kameron <hello@myleskameron.com>',
      to: email,
      subject: template.subject,
      html: template.getHtml(email, isWealthCodes || false),
    });

    if (error) {
      console.error('Failed to send automation email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: `Email ${dayInSequence} sent successfully to ${email}`
    });

  } catch (error) {
    console.error('Automation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check automation status
export async function GET() {
  return NextResponse.json({
    status: 'Wealth Codes Automation Active',
    sequences: Object.entries(emailTemplates).map(([day, template]) => ({
      day: parseInt(day),
      subject: template.subject,
      delay: template.dayDelay
    }))
  });
}