'use client';

import { useState } from 'react';

const emailPreviews = [
  {
    number: 1,
    subject: "The Wealth Frequency You Were Born With 🎯",
    day: "Day 0 (Immediate)",
    preview: "You have an innate wealth frequency that's been waiting to be activated...",
    keyContent: [
      "Welcome to wealth consciousness journey",
      "The Gratitude Amplifier practice",
      "Rewiring your RAS for opportunities",
      "Golden snitch bonus for catchers"
    ]
  },
  {
    number: 2,
    subject: "The Backwards Secret of Abundance 🔄",
    day: "Day 3",
    preview: "Most people think: Work → Money → Freedom. But wealth operates in reverse...",
    keyContent: [
      "Freedom Mindset → Aligned Action → Abundance",
      "Future Self Dialogue exercise",
      "10-year vision thinking",
      "Golden Mind Code #1 (for snitch catchers)"
    ]
  },
  {
    number: 3,
    subject: "The Invisible Wealth You Already Possess 👁️",
    day: "Day 7",
    preview: "Your brain's RAS is constantly filtering reality. Today we reprogram it...",
    keyContent: [
      "Abundance Evidence Journal practice",
      "Finding $50K in hidden assets",
      "Recognizing vs attracting abundance",
      "Golden Mind Code #2"
    ]
  },
  {
    number: 4,
    subject: "Why Rich People Say No 🚫 (The Sacred Boundaries Code)",
    day: "Day 10",
    preview: "Poverty consciousness says yes from fear. Wealth consciousness says no from power...",
    keyContent: [
      "Energy as your true bank account",
      "The Aligned No challenge",
      "High-Agency principle",
      "Golden Mind Code #3"
    ]
  },
  {
    number: 5,
    subject: "The Environment Alchemy Code 🏛️",
    day: "Day 14",
    preview: "Every object, every relationship is programming you for abundance or scarcity...",
    keyContent: [
      "Physical space wealth shifts",
      "Digital environment curation",
      "Relationship architecture",
      "Golden Mind Code #4"
    ]
  },
  {
    number: 6,
    subject: "The Compound Effect of Small Wealth Rituals 📈",
    day: "Day 18",
    preview: "1% daily shifts create exponential results. Stack your micro-rituals...",
    keyContent: [
      "The 3-Minute Wealth Stack",
      "Progress check-in moment",
      "Habit compounding",
      "Golden Mind Code #5"
    ]
  },
  {
    number: 7,
    subject: "Your Wealth Codes Initiation 🎓✨",
    day: "Day 21",
    preview: "21 days. 7 wealth codes. One transformed relationship with abundance...",
    keyContent: [
      "Celebration of transformation",
      "Three paths forward",
      "Final Golden Mind Code",
      "Wealth Codes Certificate"
    ]
  }
];

export default function PreviewAbundanceEmails() {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [showWealthCodes, setShowWealthCodes] = useState(false);

  const getFullEmail = async (emailNumber: number) => {
    try {
      const response = await fetch('/api/abundance-automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'preview@example.com',
          dayInSequence: emailNumber,
          isWealthCodes: showWealthCodes,
        }),
      });
      // Note: This will actually send an email, so we're just showing the preview data instead
    } catch (error) {
      console.error('Preview error:', error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Effortless Abundance Email Sequence</h1>
        <p className="text-lg text-muted-foreground mb-8">
          7-email wealth consciousness journey sent over 21 days
        </p>

        <div className="mb-6 flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showWealthCodes}
              onChange={(e) => setShowWealthCodes(e.target.checked)}
              className="rounded"
            />
            <span>Show Golden Snitch / Wealth Codes Version</span>
          </label>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailPreviews.map((email) => (
            <div
              key={email.number}
              className="bg-card border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors"
              onClick={() => setSelectedEmail(email.number)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl font-bold text-primary">#{email.number}</span>
                <span className="text-sm text-muted-foreground">{email.day}</span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{email.subject}</h3>
              
              <p className="text-sm text-muted-foreground mb-4">{email.preview}</p>
              
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase text-muted-foreground">Key Content:</p>
                <ul className="text-sm space-y-1">
                  {email.keyContent.map((content, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      • {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {selectedEmail && (
          <div className="mt-8 p-6 bg-card border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Email #{selectedEmail} - Full Details
            </h3>
            <div className="prose max-w-none">
              <p className="text-muted-foreground">
                To see the full HTML email, you can:
              </p>
              <ol className="text-muted-foreground">
                <li>Visit <code>/test-abundance-automation</code> to send a test email</li>
                <li>Check the source code at <code>/app/api/abundance-automation/route.ts</code></li>
                <li>Each email includes beautiful formatting, exercises, and special golden content for snitch catchers</li>
              </ol>
            </div>
          </div>
        )}

        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Email Philosophy</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Universal principles</strong> - No specific business talk, pure consciousness work</li>
            <li>• <strong>Practical exercises</strong> - Each email has an actionable practice</li>
            <li>• <strong>Progressive journey</strong> - Builds from awareness to integration</li>
            <li>• <strong>Golden Mind Codes</strong> - Special wisdom for golden snitch catchers</li>
            <li>• <strong>Elegant design</strong> - Georgia serif font, warm colors, spacious layout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}