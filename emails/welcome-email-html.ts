export const getWelcomeEmailHtml = (userEmail: string, leadMagnet?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com';
  
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