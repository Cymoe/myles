# Beehiiv Wealth Profile Automation Setup

## Step 1: Create Custom Fields in Beehiiv

1. Go to **Audience → Custom Fields**
2. Create a new field:
   - Name: `wealth_profile`
   - Type: Text
   - Description: "User's wealth profile from quiz"

## Step 2: Create Tags for Each Profile

In Beehiiv, go to **Audience → Tags** and create:

- `wealth-profile-capital-titan`
- `wealth-profile-time-architect`
- `wealth-profile-global-nomad`
- `wealth-profile-empire-builder`
- `wealth-profile-freedom-designer`
- `wealth-profile-remote-mogul`
- `wealth-profile-wealth-creator`

## Step 3: Update API Integration

The code already sends the wealth profile to Beehiiv. Now we need to add proper tagging:

```javascript
// In app/api/subscribe/route.ts
const profileMapping = {
  'The Capital Titan': 'capital-titan',
  'The Time Architect': 'time-architect',
  'The Global Nomad': 'global-nomad',
  'The Empire Builder': 'empire-builder',
  'The Freedom Designer': 'freedom-designer',
  'The Remote Mogul': 'remote-mogul',
  'The Wealth Creator': 'wealth-creator'
};
```

## Step 4: Create Email Sequences in Beehiiv

For each wealth profile, create an automation sequence:

### Capital Titan Sequence
1. **Day 1 Email**: "The $50M secret most Capital Titans miss"
2. **Day 3 Email**: "Your biggest blindspot (and how to fix it)"
3. **Day 7 Email**: "The Blueprint: Built for Capital Titans like you"

### Time Architect Sequence
1. **Day 1 Email**: "The 4-hour workweek is BS (here's what actually works)"
2. **Day 3 Email**: "Why most Time Architects stay broke"
3. **Day 7 Email**: "Remote Ops: Designed for Time Architects"

### Global Nomad Sequence
1. **Day 1 Email**: "The truth about running a business from Bali"
2. **Day 3 Email**: "Your superpower (that you're probably wasting)"
3. **Day 7 Email**: "Remote Ops: Built by a nomad, for nomads"

### Empire Builder Sequence
1. **Day 1 Email**: "The Empire Builder's Dilemma"
2. **Day 3 Email**: "Systems: Your path to having it all"
3. **Day 7 Email**: "Your two-step path to empire"

### Freedom Designer Sequence
1. **Day 1 Email**: "Money is just a tool (you get this)"
2. **Day 3 Email**: "The Freedom Designer's Revenue Stack"
3. **Day 7 Email**: "Remote Ops: Freedom by design"

### Remote Mogul Sequence
1. **Day 1 Email**: "Building empires from anywhere"
2. **Day 3 Email**: "Your unfair advantage"
3. **Day 7 Email**: "The Remote Mogul Playbook"

### Wealth Creator Sequence
1. **Day 1 Email**: "The holy grail of wealth"
2. **Day 3 Email**: "The Wealth Creator's biggest risk"
3. **Day 7 Email**: "Your complete wealth-building system"

## Step 5: Set Up Automation Rules

In Beehiiv, create automation rules:

1. Go to **Automation → Create New Automation**
2. Set trigger: "When subscriber is tagged with `wealth-profile-capital-titan`"
3. Add action: "Add to Capital Titan email sequence"
4. Repeat for each profile tag

## Step 6: Create Segments for Reporting

Create segments based on wealth profiles:
- Segment: "Capital Focused" (includes Capital Titan, Empire Builder, Remote Mogul)
- Segment: "Freedom Focused" (includes Time Architect, Freedom Designer, Global Nomad)
- Segment: "Balanced" (includes Wealth Creator)

## Step 7: Product Recommendations

Set up automation to recommend products based on profile:

**Blueprint Recommendations** (Capital-focused profiles):
- Capital Titan
- Empire Builder
- Remote Mogul (secondary)

**Remote Ops Recommendations** (Freedom-focused profiles):
- Time Architect
- Global Nomad
- Freedom Designer
- Remote Mogul (primary)

**Both Products** (Balanced profiles):
- Wealth Creator
- Empire Builder (eventually)

## Step 8: Testing

1. Take the quiz with a test email
2. Verify the subscriber appears in Beehiiv with correct tag
3. Check that automation sequence triggers
4. Monitor email delivery

## API Endpoints to Update

Make sure these endpoints properly tag subscribers:
- `/api/subscribe` - Already handles wealth profile
- `/api/send-wealth-profile` - Sends immediate results
- `/api/schedule-wealth-emails` - Future automation trigger

## Future Enhancements

1. **Dynamic Content**: Use Beehiiv's dynamic content to personalize emails based on wealth_profile field
2. **Re-engagement**: Create campaigns for subscribers who haven't purchased after 30 days
3. **Profile Evolution**: Allow users to retake quiz and update their profile
4. **Behavioral Triggers**: Tag based on email engagement (opens, clicks)

## Metrics to Track

- Quiz completion rate
- Email open rates by profile
- Click rates by profile  
- Conversion rates by profile
- Which profiles buy which products

This will give you a complete picture of how different wealth profiles engage with your content and products!