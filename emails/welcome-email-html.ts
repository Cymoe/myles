export const getWelcomeEmailHtml = (userEmail: string, leadMagnet?: string, quizResult?: string, profileData?: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com';
  
  // If this is a quiz result email
  if (quizResult && profileData) {
    return getQuizResultEmailHtml(userEmail, quizResult, profileData, baseUrl);
  }
  
  // If this is from the exit intent popup
  if (leadMagnet === 'Exit Intent Deal Alerts' || leadMagnet === '5 Boring Businesses That Print Money') {
    return getExitIntentEmailHtml(userEmail, baseUrl);
  }
  
  // Otherwise, send the regular welcome email
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your boring business resources are ready</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="${baseUrl}/images/myles_hero.JPG" alt="Myles Kameron" style="width: 80px; height: 80px; border-radius: 50%;">
    </div>
    
    <h1 style="font-size: 28px; font-weight: 700; color: #333; text-align: center; margin-bottom: 30px;">
      Welcome to the Boring Business Club
    </h1>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      Hey there,
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Thanks for joining. Your ${leadMagnet || 'resources'} are ready:
    </p>
    
    <div style="text-align: center; margin: 32px 0;">
      <a href="${baseUrl}/welcome" style="background-color: #786254; color: #fff; text-decoration: none; padding: 12px 32px; font-size: 16px; font-weight: 600; border-radius: 4px; display: inline-block;">
        Access Your Resources →
      </a>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      Inside you'll find:
    </p>
    
    <ul style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px; padding-left: 20px;">
      <li>Revenue Tracking Spreadsheet</li>
      <li>5 Boring Businesses That Print Money</li>
      <li>The Business Acquisition Checklist</li>
    </ul>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      Every Thursday, I'll send you real deals I'm looking at, what's working in my portfolio, and tactical insights from the trenches.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 32px;">
      No theory. Just what's working.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 8px;">
      – Myles
    </p>
    
    <hr style="border: none; border-top: 1px solid #e6ebf1; margin: 32px 0;">
    
    <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center; margin-bottom: 8px;">
      P.S. Hit reply anytime. I read everything.
    </p>
    
    <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center; margin-bottom: 8px;">
      P.P.S. Found a boring business for sale? Reply with details. We're tracking all deals for future opportunities.
    </p>
    
    <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center;">
      <a href="${baseUrl}/unsubscribe" style="color: #786254; text-decoration: underline;">Unsubscribe</a>
      •
      <a href="${baseUrl}" style="color: #786254; text-decoration: underline;">myleskameron.com</a>
    </p>
  </div>
</body>
</html>
  `;
};

const getQuizResultEmailHtml = (userEmail: string, profileName: string, profileData: any, baseUrl: string) => {
  const profileEmojis: Record<string, string> = {
    'The Capital Titan': '₿',
    'The Time Architect': '∞',
    'The Global Nomad': '🗺',
    'The Empire Builder': '₿∞',
    'The Freedom Designer': '∞🗺',
    'The Remote Mogul': '₿🗺',
    'The Wealth Creator': '₿∞🗺'
  };

  const profileKey = profileData?.profile?.id || '';
  const emoji = profileEmojis[profileName] || '💰';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your ${profileName} Wealth Profile</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="font-size: 60px; margin-bottom: 20px;">${emoji}</div>
      <h1 style="font-size: 32px; font-weight: 700; color: #333; margin: 0;">
        You're ${profileName}
      </h1>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Hey there,
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Based on your quiz results, you're <strong>${profileName}</strong>. This means you value ${
        profileKey === 'capital-titan' ? 'building generational wealth above all else' :
        profileKey === 'time-architect' ? 'time freedom as your most precious asset' :
        profileKey === 'global-nomad' ? 'location independence and global experiences' :
        profileKey === 'empire-builder' ? 'wealth and time freedom through smart systems' :
        profileKey === 'freedom-designer' ? 'ultimate flexibility in how and where you live' :
        profileKey === 'remote-mogul' ? 'building wealth from anywhere in the world' :
        profileKey === 'wealth-creator' ? 'achieving the holy trinity of wealth, time, and location freedom' :
        'creating a balanced approach to wealth building'
      }.
    </p>

    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <h2 style="font-size: 18px; font-weight: 600; color: #333; margin-top: 0;">Your Wealth Building Path:</h2>
      <ul style="color: #404040; font-size: 16px; line-height: 26px; margin: 0; padding-left: 20px;">
        ${profileKey === 'capital-titan' ? `
          <li>Focus on businesses with strong exit potential</li>
          <li>Build systems that scale without your time</li>
          <li>Track ROI on everything you do</li>
          <li>Consider the "Die With Zero" philosophy</li>
        ` : profileKey === 'time-architect' ? `
          <li>Build businesses with recurring revenue</li>
          <li>Master delegation and automation</li>
          <li>Focus on high-margin, low-touch models</li>
          <li>Hire a virtual assistant this week</li>
        ` : profileKey === 'global-nomad' ? `
          <li>Build location-agnostic businesses</li>
          <li>Master geo-arbitrage strategies</li>
          <li>Create systems for managing remote teams</li>
          <li>Set up international banking structure</li>
        ` : profileKey === 'empire-builder' ? `
          <li>Focus on businesses that scale through systems</li>
          <li>Build to sell from day one</li>
          <li>Document all business processes</li>
          <li>Hire key operators early</li>
        ` : profileKey === 'freedom-designer' ? `
          <li>Build multiple passive income streams</li>
          <li>Optimize for lifestyle over pure wealth</li>
          <li>Reduce fixed costs by 20%</li>
          <li>Plan working vacations regularly</li>
        ` : profileKey === 'remote-mogul' ? `
          <li>Leverage global talent and markets</li>
          <li>Master asynchronous communication</li>
          <li>Set up tax-friendly operations</li>
          <li>Join remote entrepreneur masterminds</li>
        ` : profileKey === 'wealth-creator' ? `
          <li>Continue optimizing all three pillars</li>
          <li>Document your systems for others</li>
          <li>Start mentoring others on the journey</li>
          <li>Define your "enough is enough" number</li>
        ` : `
          <li>Take a more focused approach</li>
          <li>Choose your primary wealth pillar</li>
          <li>Build systems around that priority</li>
          <li>Expand to other pillars over time</li>
        `}
      </ul>
    </div>

    <div style="text-align: center; margin: 32px 0;">
      <a href="${baseUrl}/welcome?quiz=wealth-profile" style="background-color: #786254; color: #fff; text-decoration: none; padding: 12px 32px; font-size: 16px; font-weight: 600; border-radius: 4px; display: inline-block;">
        Access Your Full Profile & Resources →
      </a>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Over the next few weeks, I'll share specific strategies for ${profileName}s like you. You'll learn:
    </p>
    
    <ul style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px; padding-left: 20px;">
      <li>Business models that align with your profile</li>
      <li>Common pitfalls to avoid</li>
      <li>Real examples from successful ${profileName}s</li>
      <li>Tactical advice for your wealth journey</li>
    </ul>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 32px;">
      Ready to build wealth your way?
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 8px;">
      – Myles
    </p>
    
    <hr style="border: none; border-top: 1px solid #e6ebf1; margin: 32px 0;">
    
    <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center; margin-bottom: 16px;">
      P.S. Your profile breakdown: ${profileData?.percentages?.[0]?.percentage || 0}% ${profileName}
    </p>
    
    <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center;">
      <a href="${baseUrl}/unsubscribe" style="color: #786254; text-decoration: underline;">Unsubscribe</a>
      •
      <a href="${baseUrl}" style="color: #786254; text-decoration: underline;">myleskameron.com</a>
    </p>
  </div>
</body>
</html>
  `;
};

// Exit Intent Email Template
const getExitIntentEmailHtml = (userEmail: string, baseUrl: string) => {
  return `
<\!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the deal list</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    <h1 style="font-size: 28px; font-weight: 700; color: #333; margin-bottom: 20px;">
      You're now getting first access to off-market deals
    </h1>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      Hey,
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Perfect timing. I just got word of a $2.1M EBITDA manufacturing deal that's about to hit the market.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      You'll get the details tomorrow morning before it goes public.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px; font-weight: 600;">
      Here's what you can expect:
    </p>
    
    <ul style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px; padding-left: 20px;">
      <li>First look at businesses before they hit the market</li>
      <li>Owner contact info when available</li>
      <li>My take on valuation and deal structure</li>
      <li>Red flags I spot</li>
    </ul>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px; font-weight: 600;">
      Recent deals I've sent:
    </p>
    
    <div style="background-color: #f6f9fc; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 12px;">
        <strong>Texas Roofing Company</strong><br>
        • $1.8M EBITDA at 3x multiple<br>
        • Owner retiring, seller financing available<br>
        • Sold in 45 days
      </p>
      
      <p style="color: #404040; font-size: 16px; line-height: 26px; margin: 0;">
        <strong>Southeast Medical Cleaning</strong><br>
        • $1.5M EBITDA, recession-proof<br>
        • 5-year contracts with hospitals<br>
        • Currently under LOI
      </p>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Not every deal is a fit, but when the right one comes along, you'll be ready.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 32px;">
      BTW - if you're serious about buying, grab the free acquisition toolkit. It has everything you need to evaluate and close deals.
    </p>
    
    <div style="text-align: center; margin: 32px 0;">
      <a href="${baseUrl}/acquisition-accelerator" style="background-color: #786254; color: #fff; text-decoration: none; padding: 16px 40px; font-size: 18px; font-weight: 600; border-radius: 4px; display: inline-block;">
        Get the Free Acquisition Toolkit →
      </a>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 8px; font-weight: 600;">
      Have a specific type of business in mind? Reply and let me know.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 32px;">
      -Myles
    </p>
    
    <p style="color: #666; font-size: 14px; line-height: 22px; margin-bottom: 32px;">
      P.S. Tomorrow I'll show you exactly how to find these deals (before they hit the market).
    </p>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0;">
    
    <p style="color: #999; font-size: 14px; text-align: center;">
      <a href="${baseUrl}/unsubscribe" style="color: #786254; text-decoration: underline;">Unsubscribe</a>
      •
      <a href="${baseUrl}" style="color: #786254; text-decoration: underline;">myleskameron.com</a>
    </p>
  </div>
</body>
</html>
  `;
};


