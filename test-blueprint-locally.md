# Testing Blueprint System Locally

## Complete User Journey Test

### 1. Start at Homepage
- Open: http://localhost:3001
- Look for: "Get 20 Business Acquisition Documents Free" box
- Click: "Send Me The Starter Pack →"

### 2. Email Capture Page
- URL should be: http://localhost:3001/blueprint-free
- Enter email: your-test@email.com
- Click: "Download Free"
- Should see: "Check Your Email" success message

### 3. Check Email (Simulated)
- Email subject: "Your Blueprint Starter Pack is here"
- Contains download button
- Links to: http://localhost:3001/downloads/blueprint-starter-pack/

### 4. Download Portal
- Shows all 20 documents listed
- Has 4 buttons for sample documents:
  - Doc #1: $50M Formula
  - Doc #6: Email Templates  
  - Doc #7: Deal Funnel
  - Doc #11: Valuation 101

### 5. View Documents
- Each document opens in new tab
- Professional formatting
- Contains actual valuable content
- Footer promotes full Blueprint

### 6. Check Blueprint Sales Page
- Visit: http://localhost:3001/blueprint
- Shows as "SOLD OUT" 
- Directs to free starter pack

## Backend Verification

### Check API Response
```bash
curl -X POST http://localhost:3001/api/blueprint-download \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "source": "blueprint-starter-pack"}'
```

### Expected Response
```json
{
  "success": true,
  "message": "Check your email for download link"
}
```

## What Happens Behind the Scenes

1. **Email Capture**
   - Saves to Beehiiv with tag `blueprint-starter-pack`
   - Sends welcome email via Resend
   - Triggers 5-email nurture sequence

2. **Document Delivery**
   - Email contains link to download portal
   - Portal hosted at `/downloads/blueprint-starter-pack/`
   - Documents are HTML (convert to PDF later)

3. **Follow-up**
   - Day 1: "Did you start with document #7?"
   - Day 3: "The $1.2M painting business story"
   - Day 5: "Why document #15 pisses people off"  
   - Day 10: "The #1 mistake"
   - Day 14: "Get all 67 documents"

## Quick Checks

✅ Homepage CTA visible
✅ /blueprint-free captures email
✅ Email sends successfully
✅ Documents accessible
✅ Beehiiv tag applied
✅ Sales page shows sold out

## Test Commands

```bash
# Test everything
node test-blueprint-flow.js

# Test specific document
curl http://localhost:3001/downloads/blueprint-starter-pack/doc-7-off-market-deal-funnel.html

# Check server
curl -I http://localhost:3001
```