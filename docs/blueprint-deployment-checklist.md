# Blueprint Production Deployment Checklist

## Pre-Deployment

- [ ] Test email flow locally one more time
- [ ] Verify all 4 sample documents load correctly
- [ ] Update `BLUEPRINT_DOWNLOAD_URL` in production env
- [ ] Commit all changes to git

## Beehiiv Setup (5 minutes)

- [ ] Log into Beehiiv
- [ ] Create tag: `blueprint-starter-pack`
- [ ] Create automation: "Blueprint Starter Pack Nurture"
- [ ] Add all 5 emails with correct delays
- [ ] Activate automation
- [ ] Test with your own email

## Production Deploy

- [ ] Deploy to production (Vercel, etc.)
- [ ] Wait for deployment to complete
- [ ] Run: `./scripts/test-production-blueprint.sh`
- [ ] Verify all endpoints return 200

## Production Testing

- [ ] Visit https://yourdomain.com/blueprint-free
- [ ] Submit with a real email address
- [ ] Verify:
  - [ ] Success message appears
  - [ ] Email arrives within 2 minutes
  - [ ] Download link works
  - [ ] Subscriber appears in Beehiiv with tag
  - [ ] Automation starts

## Document Hosting Options

### Option 1: Keep HTML (Easiest)
- Documents are already accessible
- Can convert to PDF later
- Good enough for MVP

### Option 2: Convert to PDF
1. Open each HTML in browser
2. Print to PDF
3. Upload to:
   - Dropbox with view-only links
   - Google Drive with restricted access
   - AWS S3 with presigned URLs

### Option 3: Use Gumroad (Future)
- Create free product
- Upload all PDFs
- Use Gumroad's secure delivery

## Monitoring (First 48 Hours)

- [ ] Check email delivery rate
- [ ] Monitor Beehiiv for new subscribers
- [ ] Watch for replies/questions
- [ ] Track page views on /blueprint-free
- [ ] Note any errors or issues

## Success Metrics

- Day 1: 10+ downloads
- Week 1: 50+ subscribers with tag
- Week 2: 5%+ clicking upgrade links
- Month 1: First paid Blueprint sale

## Troubleshooting

**Emails not sending:**
- Check Resend API key
- Verify from domain is verified
- Check Resend dashboard for errors

**Beehiiv not tagging:**
- Verify API key is correct
- Check publication ID has 'pub_' prefix
- Look at Beehiiv API logs

**Downloads not working:**
- Check BLUEPRINT_DOWNLOAD_URL env var
- Verify files exist in public folder
- Test direct URLs

## Launch Announcement

Once tested, announce in:
- Newsletter
- Twitter/X
- LinkedIn
- Email signature
- Slack communities

"Just launched: 20 free documents from $80M in business deals. No opt-in walls, just value: [link]"