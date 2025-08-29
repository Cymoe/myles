// Email sequences for each wealth profile type

export interface EmailSequence {
  profileId: string;
  emails: {
    dayDelay: number;
    subject: string;
    previewText: string;
    content: string;
  }[];
}

export const wealthProfileSequences: EmailSequence[] = [
  {
    profileId: 'capital-titan',
    emails: [
      {
        dayDelay: 1,
        subject: "The $50M secret most Capital Titans miss",
        previewText: "Why building to sell beats building to hold...",
        content: `
          <p>As a Capital Titan, you're wired to accumulate.</p>
          <p>But here's what separates the 8-figure titans from the 9-figure ones:</p>
          <p>They build every business with an exit in mind from day one.</p>
          <p>Tomorrow, I'll share the 3-step framework for building sellable service businesses.</p>
        `
      },
      {
        dayDelay: 3,
        subject: "Your biggest blindspot (and how to fix it)",
        previewText: "This is costing you millions...",
        content: `
          <p>Most Capital Titans sacrifice everything for net worth.</p>
          <p>But what's the point of $10M if you're too burned out to enjoy it?</p>
          <p>Here's how to build wealth without losing yourself...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "The Blueprint: Built for Capital Titans like you",
        previewText: "Ready to accelerate your wealth building?",
        content: `
          <p>You scored highest on Capital Freedom in your wealth profile.</p>
          <p>That's exactly why I created The Blueprint - 47 documents showing how to build or buy boring service businesses that print money.</p>
          <p>Inside: Start from $500 or acquire existing. Both paths to $50k+/month. Templates, scripts, systems. Everything.</p>
        `
      }
    ]
  },
  {
    profileId: 'time-architect',
    emails: [
      {
        dayDelay: 1,
        subject: "The 4-hour workweek is BS (here's what actually works)",
        previewText: "Time freedom isn't about working less...",
        content: `
          <p>Hey Time Architect,</p>
          <p>Everyone talks about passive income. But you know the truth:</p>
          <p>Real time freedom comes from systems, not shortcuts.</p>
          <p>Tomorrow: The 3 systems that buy back 20+ hours per week.</p>
        `
      },
      {
        dayDelay: 3,
        subject: "Why most Time Architects stay broke",
        previewText: "The uncomfortable truth about valuing time over money...",
        content: `
          <p>You optimize for time freedom. Smart.</p>
          <p>But here's the trap: Without enough capital, you're always one crisis away from losing that freedom.</p>
          <p>The solution? High-margin, low-touch business models...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "Remote Ops: Designed for Time Architects",
        previewText: "Build businesses that run without you",
        content: `
          <p>Your wealth profile shows you value time sovereignty above all.</p>
          <p>That's why Remote Ops is perfect for you - it's the system for building businesses that run without your daily input.</p>
          <p>No more trading time for money. Build once, profit forever.</p>
        `
      }
    ]
  },
  {
    profileId: 'global-nomad',
    emails: [
      {
        dayDelay: 1,
        subject: "The truth about running a business from Bali",
        previewText: "It's not what Instagram shows you...",
        content: `
          <p>Fellow Global Nomad,</p>
          <p>I've run businesses from 26 countries. Here's what nobody tells you:</p>
          <p>Location independence isn't about the beaches. It's about the systems.</p>
          <p>Tomorrow: My tech stack for managing teams across 12 time zones.</p>
        `
      },
      {
        dayDelay: 3,
        subject: "Your superpower (that you're probably wasting)",
        previewText: "Global Nomads have one massive advantage...",
        content: `
          <p>You see opportunities others miss.</p>
          <p>Labor arbitrage. Market gaps. Cultural insights.</p>
          <p>But most nomads never monetize this superpower. Here's how to change that...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "Remote Ops: Built by a nomad, for nomads",
        previewText: "The playbook for location-independent wealth",
        content: `
          <p>Your wealth profile peaked on Location Independence.</p>
          <p>Remote Ops was literally built for people like us - the system for running profitable service businesses from anywhere on earth.</p>
          <p>WiFi + laptop + these systems = true freedom.</p>
        `
      }
    ]
  },
  {
    profileId: 'empire-builder',
    emails: [
      {
        dayDelay: 1,
        subject: "The Empire Builder's Dilemma",
        previewText: "You want it all. Here's how to get it...",
        content: `
          <p>Empire Builder,</p>
          <p>You refuse to choose between wealth and freedom. Good.</p>
          <p>The secret? Build to sell from day one, but never actually sell.</p>
          <p>This creates optionality - the ultimate form of freedom.</p>
        `
      },
      {
        dayDelay: 3,
        subject: "Systems: Your path to having it all",
        previewText: "How to scale wealth while reclaiming time...",
        content: `
          <p>Most entrepreneurs build themselves a job.</p>
          <p>Empire Builders build machines.</p>
          <p>Here are the 5 systems every Empire Builder needs...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "Your two-step path to empire",
        previewText: "Blueprint → Remote Ops",
        content: `
          <p>Your profile shows equal focus on Capital and Time freedom.</p>
          <p>Perfect. Start with The Blueprint to build or buy your first businesses.</p>
          <p>Then use Remote Ops to systematize them for true freedom.</p>
          <p>This is how empires are built in 2025.</p>
        `
      }
    ]
  },
  {
    profileId: 'freedom-designer',
    emails: [
      {
        dayDelay: 1,
        subject: "Money is just a tool (you get this)",
        previewText: "Why Freedom Designers win at life...",
        content: `
          <p>Freedom Designer,</p>
          <p>While others chase millions, you've figured out the secret:</p>
          <p>$50k with complete freedom beats $500k in golden handcuffs.</p>
          <p>But what if you could have both?</p>
        `
      },
      {
        dayDelay: 3,
        subject: "The Freedom Designer's Revenue Stack",
        previewText: "Multiple streams, minimal time...",
        content: `
          <p>You optimize for flexibility over scale. Smart.</p>
          <p>Here's how to build 5-10 income streams that each require <5 hours/month...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "Remote Ops: Freedom by design",
        previewText: "The systems for location and time independence",
        content: `
          <p>Your profile shows you value Time and Location freedom above pure wealth.</p>
          <p>Remote Ops teaches exactly that - how to build profitable businesses that don't own you.</p>
          <p>Design your perfect life, then build businesses to fund it.</p>
        `
      }
    ]
  },
  {
    profileId: 'remote-mogul',
    emails: [
      {
        dayDelay: 1,
        subject: "Building empires from anywhere",
        previewText: "The Remote Mogul advantage...",
        content: `
          <p>Remote Mogul,</p>
          <p>You've cracked the code: serious wealth + location freedom.</p>
          <p>While others think small, you're building global businesses from your laptop.</p>
          <p>Tomorrow: How to leverage timezone arbitrage for 24/7 operations.</p>
        `
      },
      {
        dayDelay: 3,
        subject: "Your unfair advantage",
        previewText: "Why Remote Moguls will dominate the next decade...",
        content: `
          <p>You combine the ambition of a Capital Titan with the flexibility of a Global Nomad.</p>
          <p>This hybrid approach is the future of business.</p>
          <p>Here's how to maximize both sides of your profile...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "The Remote Mogul Playbook",
        previewText: "Scale wealth from anywhere",
        content: `
          <p>Your profile perfectly balances Capital and Location freedom.</p>
          <p>Start with The Blueprint to build or buy cash-flowing businesses.</p>
          <p>Then implement Remote Ops to run them from anywhere.</p>
          <p>This is how you build an empire without borders.</p>
        `
      }
    ]
  },
  {
    profileId: 'wealth-creator',
    emails: [
      {
        dayDelay: 1,
        subject: "The holy grail of wealth",
        previewText: "You've achieved what most only dream of...",
        content: `
          <p>Wealth Creator,</p>
          <p>You refuse to compromise. All three pillars. No exceptions.</p>
          <p>This makes you rare - less than 1% achieve true wealth in all dimensions.</p>
          <p>Here's how to optimize all three without losing your mind...</p>
        `
      },
      {
        dayDelay: 3,
        subject: "The Wealth Creator's biggest risk",
        previewText: "With great power comes great complexity...",
        content: `
          <p>Balancing all three pillars is powerful but dangerous.</p>
          <p>The complexity can become overwhelming.</p>
          <p>The solution? Radical simplification. Here's how...</p>
        `
      },
      {
        dayDelay: 7,
        subject: "Your complete wealth-building system",
        previewText: "The full stack for Wealth Creators",
        content: `
          <p>You scored high on all three pillars - Capital, Time, and Location freedom.</p>
          <p>You need both The Blueprint (build or buy the business) and Remote Ops (run it from anywhere).</p>
          <p>Together, they're the complete system for building wealth on your terms.</p>
          <p>Ready to take it to the next level?</p>
        `
      }
    ]
  }
];