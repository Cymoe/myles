# Exit Intent Beehiiv Setup Guide

## Overview
This guide walks through setting up the automated email sequence for exit intent popup subscribers who download the "5 Boring Businesses That Print Money" guide.

## Step 1: Create the Automation

1. Go to Beehiiv > Automations
2. Click "Create Automation"
3. Name it: "Exit Intent - 5 Boring Businesses Sequence"
4. Set trigger: "Subscriber has tag" → `exit-intent-guide`

## Step 2: Upload the Guide

1. Upload the PDF guide to your preferred hosting:
   - Option 1: Beehiiv's file hosting
   - Option 2: Your website at `/downloads/five-boring-businesses-guide.pdf`
   - Option 3: Google Drive (make sure it's publicly accessible)

2. Get the download link for use in emails

## Step 3: Create Email Templates

### Email 1 (Immediate):
- Subject: Your 5 boring businesses guide is here (open NOW)
- Add download link prominently
- Include preview of businesses
- Set to send: Immediately

### Email 2 (+1 day):
- Subject: The $50K mistake everyone makes
- Focus: How to find deals directly
- Include link to Blueprint free
- Set to send: 1 day after trigger

### Email 3 (+2 days):
- Subject: How I cut $400K off the asking price
- Focus: Negotiation tactics
- Include Blueprint link
- Set to send: 2 days after trigger

### Email 4 (+3 days):
- Subject: Buying a $2M business with $0
- Focus: Creative financing
- Include Blueprint link
- Set to send: 3 days after trigger

### Email 5 (+4 days):
- Subject: Everything I used to buy 17 businesses
- Focus: Complete system pitch
- Strong CTA for Blueprint
- Set to send: 4 days after trigger

### Email 6 (+7 days):
- Subject: Jessica bought a painting biz (using doc #6)
- Focus: Success stories
- Include Blueprint link
- Set to send: 7 days after trigger

### Email 7 (+10 days):
- Subject: Still thinking about it?
- Focus: Final push
- Last chance messaging
- Set to send: 10 days after trigger

## Step 4: Add UTM Parameters

Add to all Blueprint links:
```
https://myleskameron.com/blueprint-free?utm_source=email&utm_medium=exit-intent&utm_campaign=5-boring-businesses
```

## Step 5: Set Up Tags

1. Ensure the `exit-intent-guide` tag exists in Beehiiv
2. Create additional tags for tracking:
   - `exit-intent-engaged` (clicked any link)
   - `exit-intent-blueprint-interested` (clicked Blueprint link)

## Step 6: Create Segments

1. **Engaged Exit Intent**: Has tag `exit-intent-guide` AND clicked any link
2. **Blueprint Prospects**: Has tag `exit-intent-guide` AND clicked Blueprint link
3. **Cold Exit Intent**: Has tag `exit-intent-guide` AND no clicks after 7 days

## Step 7: Testing

1. Create test email account
2. Trigger exit popup on your site
3. Submit email
4. Verify:
   - Tag is applied in Beehiiv
   - Automation triggers
   - Emails send on schedule
   - Links work correctly

## Step 8: Monitoring

Track these metrics:
- Open rate per email (target: 40%+)
- Click rate per email (target: 15%+)
- Blueprint conversion rate (target: 10%)
- Unsubscribe rate (keep under 2%)

## Integration with Main Newsletter

After the 10-day sequence:
1. Add to main newsletter list
2. Remove from automation
3. Continue regular weekly content
4. Occasionally mention Blueprint in regular emails

## Notes

- The exit intent popup already sends: `leadMagnet: '5 Boring Businesses That Print Money'`
- This triggers the `exit-intent-guide` tag automatically
- Keep this separate from the Blueprint free sequence for better tracking
- Consider A/B testing subject lines after 100 subscribers