# Effortless Abundance Email Automation

This system sends a 7-email wealth consciousness sequence to users who download the Effortless Abundance Guide.

## How It Works

1. **User Downloads Guide**: When someone submits the form on `/effortless-abundance`, they:
   - Receive the PDF guide immediately via Resend
   - Get added to Beehiiv with tag "effortless-abundance"
   - Get added to our automation system

2. **Email Schedule**:
   - Email 1: Immediately - "The Wealth Frequency You Were Born With"
   - Email 2: Day 3 - "The Backwards Secret of Abundance"
   - Email 3: Day 7 - "The Invisible Wealth You Already Possess"
   - Email 4: Day 10 - "Why Rich People Say No"
   - Email 5: Day 14 - "The Environment Alchemy Code"
   - Email 6: Day 18 - "The Compound Effect of Small Wealth Rituals"
   - Email 7: Day 21 - "Your Wealth Codes Initiation"

3. **Golden Snitch Bonus**: Users who caught the golden snitch get special "Wealth Codes" content in their emails.

## Setup

### Environment Variables

Add to your `.env.local`:

```
CRON_SECRET=your-secret-key-here
```

### Testing

Visit `/test-abundance-automation` to send test emails.

### Production Setup

#### Option 1: Vercel Cron (Recommended)

The `vercel.json` file is already configured to run the automation daily at 9 AM UTC:

```json
{
  "crons": [{
    "path": "/api/abundance-automation/process",
    "schedule": "0 9 * * *"
  }]
}
```

#### Option 2: External Cron Service

Use a service like:
- Upstash
- Cron-job.org
- EasyCron

Set them to call:
```
GET https://yourdomain.com/api/abundance-automation/process
Headers: Authorization: Bearer YOUR_CRON_SECRET
```

## Database

Currently using in-memory storage for development. For production, migrate to:
- Supabase
- PostgreSQL
- MongoDB
- Redis

## Monitoring

Check automation status:
- `/api/abundance-automation` - View email templates
- `/api/abundance-automation/process` - Process pending emails

## Future Enhancements

1. **Persistence**: Move from in-memory to proper database
2. **Analytics**: Track open rates, click rates
3. **Segmentation**: Different sequences for different user types
4. **A/B Testing**: Test different email content
5. **Behavioral Triggers**: Send based on user actions, not just time