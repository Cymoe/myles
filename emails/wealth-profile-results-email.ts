import { WealthProfile } from '@/lib/wealthProfileQuiz';

export const getWealthProfileResultsEmailHtml = (
  userEmail: string, 
  profile: WealthProfile,
  percentages: { capital: number; time: number; location: number }
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com';
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Wealth Profile Results: ${profile.name}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="font-size: 48px; margin-bottom: 20px;">${profile.icon}</div>
      <h1 style="font-size: 32px; font-weight: 700; color: #333; margin-bottom: 10px;">
        You're ${profile.name}
      </h1>
      <p style="color: #666; font-size: 18px; margin: 0;">
        ${profile.tagline}
      </p>
    </div>
    
    <!-- Your Wealth DNA -->
    <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
      <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">Your Wealth DNA</h2>
      
      <!-- Percentage Bars -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 14px; color: #666;">₿ Capital Freedom</span>
          <span style="font-size: 14px; color: #999;">${percentages.capital}%</span>
        </div>
        <div style="background-color: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background-color: #786254; height: 100%; width: ${percentages.capital}%; border-radius: 4px;"></div>
        </div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 14px; color: #666;">∞ Time Sovereignty</span>
          <span style="font-size: 14px; color: #999;">${percentages.time}%</span>
        </div>
        <div style="background-color: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background-color: #786254; height: 100%; width: ${percentages.time}%; border-radius: 4px;"></div>
        </div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 14px; color: #666;">🗺 Location Independence</span>
          <span style="font-size: 14px; color: #999;">${percentages.location}%</span>
        </div>
        <div style="background-color: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background-color: #786254; height: 100%; width: ${percentages.location}%; border-radius: 4px;"></div>
        </div>
      </div>
      
      <p style="color: #666; font-size: 16px; line-height: 26px; margin: 0;">
        ${profile.description}
      </p>
    </div>
    
    <!-- Your Recommended Path -->
    <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
      <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">Your Path Forward</h2>
      <p style="color: #666; font-size: 16px; line-height: 26px; margin-bottom: 20px;">
        ${profile.recommendedPath}
      </p>
      
      <h3 style="font-size: 18px; color: #333; margin-bottom: 15px;">Your Next 3 Actions:</h3>
      <ol style="margin: 0; padding-left: 20px;">
        ${profile.nextActions.map((action, index) => 
          `<li style="color: #666; font-size: 16px; line-height: 26px; margin-bottom: 10px;">${action}</li>`
        ).join('')}
      </ol>
    </div>
    
    <!-- CTA -->
    <div style="text-align: center; margin: 40px 0;">
      <a href="${baseUrl}/wealth-profile-results" style="background-color: #786254; color: #fff; text-decoration: none; padding: 14px 32px; font-size: 16px; font-weight: 600; border-radius: 4px; display: inline-block;">
        View Your Full Profile →
      </a>
    </div>
    
    <!-- What's Next -->
    <div style="border-top: 1px solid #e6ebf1; padding-top: 30px; margin-top: 40px;">
      <h3 style="font-size: 20px; color: #333; margin-bottom: 15px;">What happens next?</h3>
      <p style="color: #666; font-size: 16px; line-height: 26px; margin-bottom: 15px;">
        Over the next few days, I'll send you specific strategies tailored to ${profile.name}s like you.
      </p>
      <p style="color: #666; font-size: 16px; line-height: 26px;">
        Each email will focus on one aspect of building wealth your way - not the cookie-cutter approach everyone else teaches.
      </p>
    </div>
    
    <!-- Footer -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e6ebf1;">
      <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center; margin-bottom: 10px;">
        Questions? Just hit reply. I read everything.
      </p>
      <p style="color: #8898aa; font-size: 14px; line-height: 20px; text-align: center;">
        – Myles
      </p>
    </div>
    
    <p style="color: #8898aa; font-size: 12px; line-height: 18px; text-align: center; margin-top: 30px;">
      <a href="${baseUrl}/unsubscribe" style="color: #786254; text-decoration: underline;">Unsubscribe</a>
      •
      <a href="${baseUrl}" style="color: #786254; text-decoration: underline;">myleskameron.com</a>
    </p>
  </div>
</body>
</html>
  `;
};