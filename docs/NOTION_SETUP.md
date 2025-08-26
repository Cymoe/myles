# Notion CMS Setup Guide

This guide will help you set up Notion as a CMS for your website.

## 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Myles Website")
4. Select your workspace
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

## 2. Create Your Content Database

Create a new Notion database with these properties:

### Database Structure:
- **Type** (Select): Options: "Goals", "About", "Now"
- **2025 Goals** (Text): Your 2025 goals (use bullet points)
- **Current Focus** (Text): Current focus items
- **10 Year Goals** (Text): Long-term goals
- **Philosophy Line 1** (Text): First line of philosophy
- **Philosophy Line 2** (Text): Second line of philosophy

### Example Entry:
```
Type: Goals
2025 Goals: 
• Exit HVAC roll-up to PE (Q2)
• Acquire 10 dental practices
• $50M combined portfolio revenue
• Launch veterinary consolidation
• 1,000 Blueprint students closing deals

Current Focus:
• HVAC: 5 more acquisitions lined up
• Dental: LOIs on 3 practices
• Training portfolio CEOs
• Refining 100% OPM structures

10 Year Goals:
• 100 cash-flowing acquisitions
• $1B portfolio value
• Teaching QLA at scale
• Zero personal capital deployed

Philosophy Line 1: Find fragmented sectors. Buy at 3-5x EBITDA. Consolidate. Exit to PE at 10-15x. Repeat.
Philosophy Line 2: No personal money. No personal guarantees. Just OPM, leverage, and execution.
```

## 3. Share Database with Integration

1. Open your database in Notion
2. Click "Share" in the top right
3. Invite your integration by name
4. Copy the database ID from the URL:
   - URL: `https://www.notion.so/workspace/a8aec43384f447ed84390e8e42c2e089?v=...`
   - Database ID: `a8aec43384f447ed84390e8e42c2e089`

## 4. Update Environment Variables

In your `.env.local` file:
```
NOTION_API_KEY="your_integration_token_here"
NOTION_DATABASE_ID="your_database_id_here"
```

## 5. How to Update Content

1. Open Notion on your phone or computer
2. Navigate to your database
3. Edit the "Goals" entry
4. Changes will appear on your website within 5 minutes

## Tips:
- Use bullet points (•) for list items
- Keep text concise for mobile display
- Test changes in development first
- The API caches for 5 minutes to improve performance