// Wealth Profile Quiz Data and Types

export type PillarType = 'capital' | 'time' | 'location';

export interface QuizAnswer {
  text: string;
  scores: {
    capital: number;
    time: number;
    location: number;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  scenario?: string;
  answers: QuizAnswer[];
}

export interface WealthProfile {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  strengths: string[];
  blindspots: string[];
  famousExamples: string[];
  recommendedPath: string;
  nextActions: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'You receive a $5M cash offer for your business. What do you do?',
    answers: [
      {
        text: 'Take it and immediately start building the next one',
        scores: { capital: 3, time: 1, location: 1 }
      },
      {
        text: 'Negotiate for ongoing royalties so you never have to work again',
        scores: { capital: 2, time: 3, location: 0 }
      },
      {
        text: 'Keep the business but hire a CEO so you can travel',
        scores: { capital: 1, time: 2, location: 3 }
      },
      {
        text: 'Sell half and keep half for passive income',
        scores: { capital: 2, time: 2, location: 1 }
      }
    ]
  },
  {
    id: 'q2',
    question: 'Your ideal Tuesday at 2pm looks like:',
    answers: [
      {
        text: 'Closing another acquisition deal from your office',
        scores: { capital: 3, time: 0, location: 0 }
      },
      {
        text: 'Whatever you want - your calendar is completely open',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Team call from a beachside cafe in Bali',
        scores: { capital: 1, time: 1, location: 3 }
      },
      {
        text: 'Reviewing portfolios while your kids play nearby',
        scores: { capital: 2, time: 2, location: 0 }
      }
    ]
  },
  {
    id: 'q3',
    question: 'A massive opportunity requires moving to NYC for 2 years. You:',
    answers: [
      {
        text: 'Take it immediately - this could 10x your net worth',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'Pass - no amount of money is worth losing flexibility',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Counter with a remote arrangement or no deal',
        scores: { capital: 1, time: 1, location: 3 }
      },
      {
        text: 'Negotiate for 6 months on-site, then remote',
        scores: { capital: 2, time: 1, location: 2 }
      }
    ]
  },
  {
    id: 'q4',
    question: "You know you've 'made it' when:",
    answers: [
      {
        text: 'Your investments generate more than you can spend',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'You never check your calendar or answer to anyone',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'You can run your empire from anywhere on earth',
        scores: { capital: 1, time: 0, location: 3 }
      },
      {
        text: 'All three - wealth, time, and location freedom',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  },
  {
    id: 'q5',
    question: 'In 10 years, you want to be known as:',
    answers: [
      {
        text: 'The person who built a billion-dollar empire',
        scores: { capital: 3, time: 0, location: 1 }
      },
      {
        text: 'Someone who designed their perfect lifestyle',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'A global citizen with businesses worldwide',
        scores: { capital: 1, time: 0, location: 3 }
      },
      {
        text: 'Living proof that you can have it all',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  },
  {
    id: 'q6',
    question: 'Your business philosophy is:',
    answers: [
      {
        text: 'Build to sell, rinse and repeat',
        scores: { capital: 3, time: 1, location: 0 }
      },
      {
        text: 'Build systems so the business runs without you',
        scores: { capital: 1, time: 3, location: 0 }
      },
      {
        text: 'Build remote-first from day one',
        scores: { capital: 0, time: 1, location: 3 }
      },
      {
        text: 'Build assets that compound forever',
        scores: { capital: 2, time: 2, location: 1 }
      }
    ]
  },
  {
    id: 'q7',
    question: 'The legacy you want to leave:',
    answers: [
      {
        text: 'A financial empire for generations',
        scores: { capital: 3, time: 0, location: 0 }
      },
      {
        text: 'Proof that life is meant to be lived, not worked',
        scores: { capital: 0, time: 3, location: 1 }
      },
      {
        text: 'Inspiring others to break free from location constraints',
        scores: { capital: 0, time: 1, location: 3 }
      },
      {
        text: 'Showing that true wealth includes all forms of freedom',
        scores: { capital: 2, time: 2, location: 2 }
      }
    ]
  }
];

export const wealthProfiles: WealthProfile[] = [
  {
    id: 'capital-titan',
    name: 'The Capital Titan',
    icon: '₿',
    tagline: 'Building generational wealth is your mission',
    description: 'You see money as the ultimate scorecard. While others talk about work-life balance, you\'re focused on building an empire that outlasts you. Time and location are secondary to wealth accumulation.',
    strengths: [
      'Laser focus on ROI and growth',
      'Exceptional at spotting opportunities',
      'Building systems that scale',
      'Long-term thinking'
    ],
    blindspots: [
      'May sacrifice health and relationships',
      'Risk of never feeling "enough"',
      'Missing out on life experiences',
      'Burnout from constant grinding'
    ],
    famousExamples: ['Warren Buffett', 'Elon Musk', 'Sam Zell'],
    recommendedPath: 'Focus on building businesses with strong exit potential. Consider the "Die With Zero" philosophy to avoid hoarding wealth you\'ll never use.',
    nextActions: [
      'Set a specific wealth target and timeline',
      'Build systems to track ROI on everything',
      'Schedule regular "wealth audits" to ensure you\'re on track'
    ]
  },
  {
    id: 'time-architect',
    name: 'The Time Architect',
    icon: '∞',
    tagline: 'Your calendar is your most precious asset',
    description: 'You understand that time is the only true non-renewable resource. You\'d rather have modest wealth with complete autonomy than billions with no freedom. Every decision is filtered through "will this give me more time?"',
    strengths: [
      'Masters of delegation and automation',
      'Clear boundaries and priorities',
      'High quality of life',
      'Present and engaged when it matters'
    ],
    blindspots: [
      'May leave money on the table',
      'Can appear unmotivated to others',
      'Risk of lifestyle inflation',
      'Limited wealth accumulation'
    ],
    famousExamples: ['Tim Ferriss', 'Derek Sivers', 'Mr. Money Mustache'],
    recommendedPath: 'Build businesses with recurring revenue and minimal time requirements. Focus on high-margin, low-touch models.',
    nextActions: [
      'Audit your calendar for time vampires',
      'Hire a virtual assistant this week',
      'Set up one new automation system'
    ]
  },
  {
    id: 'global-nomad',
    name: 'The Global Nomad',
    icon: '🗺',
    tagline: 'The world is your office and playground',
    description: 'Location independence isn\'t just nice to have - it\'s non-negotiable. You\'ve optimized your entire life and business around the ability to work from anywhere. Roots are overrated; experiences are everything.',
    strengths: [
      'Adaptable and resourceful',
      'Global perspective and network',
      'Low overhead lifestyle',
      'Cultural intelligence'
    ],
    blindspots: [
      'Difficulty building deep relationships',
      'Challenges with stability',
      'Tax and legal complications',
      'FOMO on community/roots'
    ],
    famousExamples: ['Pieter Levels', 'Johnny FD', 'Kristin Wilson'],
    recommendedPath: 'Build location-agnostic businesses. Master geo-arbitrage. Create systems for managing teams across time zones.',
    nextActions: [
      'Set up international banking and LLC structure',
      'Join a nomad community or co-living space',
      'Automate one more aspect of your business'
    ]
  },
  {
    id: 'empire-builder',
    name: 'The Empire Builder',
    icon: '₿∞',
    tagline: 'Wealth and time freedom through smart systems',
    description: 'You want serious wealth AND the time to enjoy it. You build businesses that run without you, creating both financial abundance and personal freedom. Work hard, then hardly work.',
    strengths: [
      'Strategic thinking',
      'Excellent at systems and delegation',
      'Balance of ambition and lifestyle',
      'Building sellable assets'
    ],
    blindspots: [
      'Can be impatient with slow growth',
      'May miss opportunities requiring presence',
      'Tendency to over-optimize',
      'Analysis paralysis'
    ],
    famousExamples: ['Naval Ravikant', 'Sam Ovens', 'Ryan Moran'],
    recommendedPath: 'Focus on businesses that scale through systems, not your time. Build to sell from day one.',
    nextActions: [
      'Document all business processes this month',
      'Hire your first key operator',
      'Set 3-year exit strategy for current venture'
    ]
  },
  {
    id: 'freedom-designer',
    name: 'The Freedom Designer',
    icon: '∞🗺',
    tagline: 'Ultimate flexibility in how and where you live',
    description: 'Time and location freedom trump pure wealth accumulation. You\'ve designed a life where you control when and where you work. Money is simply a tool for freedom, not the goal itself.',
    strengths: [
      'Lifestyle optimization experts',
      'High happiness levels',
      'Resilient and adaptable',
      'Strong work-life integration'
    ],
    blindspots: [
      'May plateau financially',
      'Can seem unambitious',
      'Risk of complacency',
      'Limited scale potential'
    ],
    famousExamples: ['Pat Flynn', 'Courtney Carver', 'Leo Babauta'],
    recommendedPath: 'Build multiple small income streams that are location-independent and largely passive.',
    nextActions: [
      'Launch one new passive income stream',
      'Reduce fixed costs by 20%',
      'Plan a 1-month working vacation'
    ]
  },
  {
    id: 'remote-mogul',
    name: 'The Remote Mogul',
    icon: '₿🗺',
    tagline: 'Building wealth from anywhere in the world',
    description: 'You\'re building serious wealth without geographic constraints. Your businesses run from Bali as smoothly as from Boston. You\'ve cracked the code on remote team management and global opportunities.',
    strengths: [
      'Global business perspective',
      'Expert at remote operations',
      'Geo-arbitrage mastery',
      'Network effects across borders'
    ],
    blindspots: [
      'Can neglect personal time',
      'Complexity in operations',
      'Time zone juggling',
      'Regulatory challenges'
    ],
    famousExamples: ['Matt Mullenweg', 'Brian Chesky', 'Daniel Vassallo'],
    recommendedPath: 'Build businesses that leverage global talent and markets. Master asynchronous communication.',
    nextActions: [
      'Hire your first international team member',
      'Set up operations in a tax-friendly jurisdiction',
      'Join a high-level remote entrepreneur mastermind'
    ]
  },
  {
    id: 'wealth-creator',
    name: 'The Wealth Creator',
    icon: '₿∞🗺',
    tagline: 'You\'ve achieved the holy trinity of wealth',
    description: 'You refuse to compromise. Through careful planning and execution, you\'ve built systems that generate wealth, preserve time, and allow location flexibility. You\'re living proof that you can have it all.',
    strengths: [
      'Holistic thinking',
      'Excellent prioritization',
      'Systems mastery',
      'Inspiring to others'
    ],
    blindspots: [
      'Can be overwhelming to maintain',
      'High complexity in life/business',
      'Perfectionist tendencies',
      'Difficulty relating to others'
    ],
    famousExamples: ['Richard Branson', 'Jesse Itzler', 'Ramit Sethi'],
    recommendedPath: 'Continue optimizing all three pillars. Focus on teaching others and building your legacy.',
    nextActions: [
      'Document your systems for others',
      'Start mentoring someone earlier in journey',
      'Plan your "enough is enough" number'
    ]
  }
];

export function calculateProfile(answers: Record<string, number>): {
  profile: WealthProfile;
  scores: { capital: number; time: number; location: number };
  percentages: { capital: number; time: number; location: number };
} {
  // Calculate total scores
  const scores = { capital: 0, time: 0, location: 0 };
  
  // Properly iterate through answers
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (question && question.answers[answerIndex]) {
      const answer = question.answers[answerIndex];
      scores.capital += answer.scores.capital;
      scores.time += answer.scores.time;
      scores.location += answer.scores.location;
    }
  });

  // Calculate percentages
  const total = scores.capital + scores.time + scores.location;
  const percentages = {
    capital: Math.round((scores.capital / total) * 100),
    time: Math.round((scores.time / total) * 100),
    location: Math.round((scores.location / total) * 100)
  };

  // Determine profile based on scores
  let profileId = 'wealth-creator'; // default
  
  // Check for balanced profile (all within 15% of each other)
  const values = Object.values(percentages);
  const max = Math.max(...values);
  const min = Math.min(...values);
  
  if (max - min <= 15) {
    profileId = 'wealth-creator';
  } else {
    // Find the highest scoring pillar(s)
    const maxScore = Math.max(percentages.capital, percentages.time, percentages.location);
    
    // Check if it's a pure type (one pillar clearly dominates - at least 50%)
    if (maxScore >= 50) {
      if (percentages.capital === maxScore) {
        profileId = 'capital-titan';
      } else if (percentages.time === maxScore) {
        profileId = 'time-architect';
      } else if (percentages.location === maxScore) {
        profileId = 'global-nomad';
      }
    } else {
      // It's a hybrid type - find the two highest pillars
      const sorted = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1]);
      
      const top1 = sorted[0][0];
      const top2 = sorted[1][0];
      
      if ((top1 === 'capital' && top2 === 'time') || (top1 === 'time' && top2 === 'capital')) {
        profileId = 'empire-builder';
      } else if ((top1 === 'time' && top2 === 'location') || (top1 === 'location' && top2 === 'time')) {
        profileId = 'freedom-designer';
      } else if ((top1 === 'capital' && top2 === 'location') || (top1 === 'location' && top2 === 'capital')) {
        profileId = 'remote-mogul';
      }
    }
  }

  const profile = wealthProfiles.find(p => p.id === profileId)!;
  
  return { profile, scores, percentages };
}