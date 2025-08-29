# Beehiiv Blueprint Setup - Quick Guide

## 5-Minute Setup Process

### Step 1: Log into Beehiiv
Go to app.beehiiv.com and login

### Step 2: Create Tag (30 seconds)
1. Click **Audience** in left sidebar
2. Click **Tags** 
3. Click **Create Tag**
4. Name: `blueprint-starter-pack`
5. Color: Choose any
6. Click **Create**

### Step 3: Create Automation (2 minutes)
1. Click **Automations** in left sidebar
2. Click **Create Automation**
3. Name: "Blueprint Starter Pack Nurture"
4. Trigger: 
   - Choose "Subscriber tagged"
   - Select tag: `blueprint-starter-pack`
5. Click **Create Automation**

### Step 4: Add Email #1 (2 minutes)
1. Click **Add Step**
2. Choose **Send Email**
3. Subject: "Did you start with document #7?"
4. Copy content from `/emails/blueprint-nurture-sequence.md` (Email 1)
5. Schedule: Send immediately
6. Save

### Step 5: Add Remaining Emails
Repeat for emails 2-5 with proper delays:
- Email 2: Wait 3 days
- Email 3: Wait 2 more days (5 total)
- Email 4: Wait 5 more days (10 total)  
- Email 5: Wait 4 more days (14 total)

### Step 6: Activate
1. Review automation flow
2. Click **Activate Automation**

### Step 7: Test
1. Go to **Audience** → **Subscribers**
2. Find a test subscriber
3. Click their email
4. Add tag: `blueprint-starter-pack`
5. Verify they enter automation

## Tracking Setup

### Create Segments
1. **Blueprint Interested**: Clicked any upgrade link
2. **Blueprint Purchased**: Has tag `blueprint-pro-purchased`
3. **High Engagement**: Opened 4+ emails

### Weekly Checks
- Open rates per email
- Click rates on upgrade CTAs
- Unsubscribe rate
- Replies asking about deals

## Quick Links
- Email content: `/emails/blueprint-nurture-sequence.md`
- Test locally: `node test-blueprint-flow.js`
- Production test: Use a real email address

## Notes
- Our system already adds the tag automatically
- Beehiiv will handle all timing
- Stop automation if user purchases (manual for now)