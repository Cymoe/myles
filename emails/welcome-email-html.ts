export const getWelcomeEmailHtml = (userEmail: string, leadMagnet?: string, quizResult?: string, profileData?: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com';
  
  // If this is a quiz result email
  if (quizResult && profileData) {
    return getQuizResultEmailHtml(userEmail, quizResult, profileData, baseUrl);
  }
  
  // If this is from the exit intent popup
  if (leadMagnet === '5 Boring Businesses That Print Money') {
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
    'The Freedom Architect': '🏖️',
    'The Empire Builder': '🏰',
    'The Impact Investor': '🌍',
    'The Security Strategist': '🛡️'
  };

  const profileKey = profileData?.profile || '';
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
        profileKey === 'freedomArchitect' ? 'time and location freedom above pure wealth accumulation' :
        profileKey === 'empireBuilder' ? 'building something significant and creating lasting impact' :
        profileKey === 'impactInvestor' ? 'using wealth as a tool for positive change in the world' :
        'financial stability and predictable growth above risky ventures'
      }.
    </p>

    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <h2 style="font-size: 18px; font-weight: 600; color: #333; margin-top: 0;">Your Wealth Building Path:</h2>
      <ul style="color: #404040; font-size: 16px; line-height: 26px; margin: 0; padding-left: 20px;">
        ${profileKey === 'freedomArchitect' ? `
          <li>Build automated income systems</li>
          <li>Focus on high-margin, low-maintenance businesses</li>
          <li>Develop remote work capabilities</li>
          <li>Create multiple revenue streams for security</li>
        ` : profileKey === 'empireBuilder' ? `
          <li>Focus on scalable business models</li>
          <li>Reinvest profits for compound growth</li>
          <li>Build strong teams and systems</li>
          <li>Pursue strategic acquisitions</li>
        ` : profileKey === 'impactInvestor' ? `
          <li>Invest in sustainable businesses</li>
          <li>Build brands with strong missions</li>
          <li>Create value for all stakeholders</li>
          <li>Measure success beyond financials</li>
        ` : `
          <li>Diversify income sources</li>
          <li>Build substantial emergency funds</li>
          <li>Focus on proven business models</li>
          <li>Prioritize consistent cash flow</li>
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
  <title>Your 5 boring businesses guide is here</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    <h1 style="font-size: 28px; font-weight: 700; color: #333; margin-bottom: 20px;">
      Your 5 boring businesses guide is here (open NOW)
    </h1>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      Hey,
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Here's your guide:
    </p>
    
    <div style="text-align: center; margin: 32px 0;">
      <a href="${baseUrl}/downloads/five-boring-businesses-guide.pdf" style="background-color: #786254; color: #fff; text-decoration: none; padding: 16px 40px; font-size: 18px; font-weight: 600; border-radius: 4px; display: inline-block;">
        Download Your Guide →
      </a>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      These 5 businesses are boring as hell.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px;">
      But they're also:
    </p>
    
    <ul style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px; padding-left: 20px;">
      <li>Generating $1M+ annually</li>
      <li>Selling for 3-5x EBITDA (not the 10x tech nonsense)</li>
      <li>Run by regular people (not MBAs)</li>
    </ul>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 16px; font-weight: 600;">
      Quick preview:
    </p>
    
    <div style="background-color: #f6f9fc; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 12px;">
        <strong>Business #1: Mobile RV Repair</strong><br>
        • Zero real estate costs<br>
        • $300-500 per service call<br>
        • One guy in Phoenix does $1.2M/year
      </p>
      
      <p style="color: #404040; font-size: 16px; line-height: 26px; margin: 0;">
        <strong>Business #2: Commercial Hood Cleaning</strong><br>
        • Recurring revenue (restaurants need it monthly)<br>
        • $800-2,000 per job<br>
        • Work nights = zero competition
      </p>
    </div>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 24px;">
      Check the guide for the other 3.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 32px;">
      The craziest part? I bought one of these for $0 down.
    </p>
    
    <p style="color: #404040; font-size: 16px; line-height: 26px; margin-bottom: 8px; font-weight: 600;">
      Reply and tell me which one interests you most.
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


