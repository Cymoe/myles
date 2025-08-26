export interface QuizOption {
  text: string;
  value: string;
  profiles: {
    freedomArchitect: number;
    empireBuilder: number;
    impactInvestor: number;
    securityStrategist: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: 'priorities' | 'mindset' | 'lifestyle' | 'risk' | 'goals';
  options: QuizOption[];
}

export const wealthProfiles = {
  freedomArchitect: {
    name: 'The Freedom Architect',
    emoji: '🏖️',
    tagline: 'Time & Location Freedom Over Everything',
    description: 'You prioritize lifestyle flexibility and autonomy above pure wealth accumulation. Success means having control over your time and the freedom to work from anywhere.',
    traits: [
      'Values experiences over possessions',
      'Seeks passive income streams',
      'Prioritizes work-life balance',
      'Location independent mindset'
    ],
    strategies: [
      'Build automated income systems',
      'Focus on high-margin, low-maintenance businesses',
      'Develop remote work capabilities',
      'Create multiple revenue streams for security'
    ],
    challenges: [
      'May sacrifice growth for comfort',
      'Can miss opportunities requiring full commitment',
      'Might undervalue long-term wealth building'
    ]
  },
  empireBuilder: {
    name: 'The Empire Builder',
    emoji: '🏰',
    tagline: 'Building Generational Wealth & Legacy',
    description: 'You\'re driven by ambitious financial goals and building something significant. Wealth isn\'t just about money—it\'s about creating lasting impact and opportunities.',
    traits: [
      'Highly ambitious and goal-oriented',
      'Comfortable with calculated risks',
      'Long-term strategic thinking',
      'Driven by legacy and impact'
    ],
    strategies: [
      'Focus on scalable business models',
      'Reinvest profits for compound growth',
      'Build strong teams and systems',
      'Pursue strategic acquisitions'
    ],
    challenges: [
      'Can neglect personal relationships',
      'Risk of burnout from intense focus',
      'May delay gratification too long'
    ]
  },
  impactInvestor: {
    name: 'The Impact Investor',
    emoji: '🌍',
    tagline: 'Profit With Purpose & Positive Change',
    description: 'You see wealth as a tool for positive change. Success means building profitable ventures that also create meaningful impact in the world.',
    traits: [
      'Values-driven decision making',
      'Seeks win-win opportunities',
      'Community and cause-oriented',
      'Balances profit with purpose'
    ],
    strategies: [
      'Invest in sustainable businesses',
      'Build brands with strong missions',
      'Create value for all stakeholders',
      'Measure success beyond financials'
    ],
    challenges: [
      'May sacrifice returns for values',
      'Can face slower initial growth',
      'Balancing idealism with pragmatism'
    ]
  },
  securityStrategist: {
    name: 'The Security Strategist',
    emoji: '🛡️',
    tagline: 'Steady Growth & Financial Peace of Mind',
    description: 'You prioritize financial stability and predictable growth. Success means having security, minimal risk, and a clear path to your goals.',
    traits: [
      'Risk-averse but methodical',
      'Values stability and predictability',
      'Long-term planning focused',
      'Conservative wealth building'
    ],
    strategies: [
      'Diversify income sources',
      'Build substantial emergency funds',
      'Focus on proven business models',
      'Prioritize consistent cash flow'
    ],
    challenges: [
      'May miss high-growth opportunities',
      'Can be overly cautious',
      'Slower wealth accumulation'
    ]
  }
};

export const quizQuestions: QuizQuestion[] = [
  // Priorities Questions
  {
    id: 1,
    question: "What does your ideal Monday morning look like in 5 years?",
    category: 'priorities',
    options: [
      {
        text: "Working from a beachside cafe in Bali, managing my businesses remotely",
        value: "location_freedom",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "In my corner office, leading a team meeting for my growing empire",
        value: "empire_growth",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Visiting a project site where my investment is creating jobs and positive change",
        value: "impact_work",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "Reviewing my portfolio of stable investments from my home office",
        value: "stable_growth",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 2,
    question: "You have $100K to invest. What's your first move?",
    category: 'mindset',
    options: [
      {
        text: "Buy rental properties or dividend stocks for passive income",
        value: "passive_income",
        profiles: { freedomArchitect: 5, empireBuilder: 2, impactInvestor: 2, securityStrategist: 3 }
      },
      {
        text: "Reinvest it all into scaling my business aggressively",
        value: "scale_business",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Fund a social enterprise or sustainable business venture",
        value: "social_venture",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "Diversify across index funds, bonds, and keep a cash reserve",
        value: "diversify_safe",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your biggest fear when it comes to wealth?",
    category: 'mindset',
    options: [
      {
        text: "Being tied to one location or losing control of my time",
        value: "losing_freedom",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Missing out on a massive opportunity or not reaching my potential",
        value: "missing_opportunity",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Building wealth in a way that compromises my values",
        value: "compromising_values",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Losing what I've built or taking unnecessary risks",
        value: "losing_security",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to spend your evenings?",
    category: 'lifestyle',
    options: [
      {
        text: "Exploring new places, trying new experiences, complete flexibility",
        value: "exploring_freedom",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 3, securityStrategist: 1 }
      },
      {
        text: "Networking events, strategy sessions, or working on the next big deal",
        value: "building_network",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Community events, volunteering, or working on meaningful projects",
        value: "community_impact",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Quality time with family, reading, or planning for the future",
        value: "stable_routine",
        profiles: { freedomArchitect: 3, empireBuilder: 1, impactInvestor: 2, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 5,
    question: "A new business opportunity requires 80-hour weeks for 2 years. Your reaction?",
    category: 'priorities',
    options: [
      {
        text: "No thanks—I'd rather have less money and more life",
        value: "reject_grind",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 3 }
      },
      {
        text: "Absolutely—that's the price of building something great",
        value: "embrace_grind",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Only if it aligns with my values and creates positive impact",
        value: "values_first",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "I'd need to see proven returns and minimize the risk first",
        value: "analyze_risk",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 6,
    question: "What type of business model appeals to you most?",
    category: 'mindset',
    options: [
      {
        text: "Automated online business that runs without me",
        value: "automated_passive",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 3 }
      },
      {
        text: "High-growth startup with massive scaling potential",
        value: "high_growth",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Sustainable business that solves real problems",
        value: "sustainable_impact",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Proven franchise or established business model",
        value: "proven_model",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 7,
    question: "How do you define 'making it' financially?",
    category: 'goals',
    options: [
      {
        text: "When I can live anywhere and never check my bank balance",
        value: "location_independence",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "When I'm in the top 1% and building generational wealth",
        value: "top_wealth",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 1, securityStrategist: 2 }
      },
      {
        text: "When my wealth creates opportunities for others",
        value: "wealth_for_good",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "When I have enough saved to never worry about money",
        value: "financial_security",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 8,
    question: "Your friend pitches you a risky but potentially lucrative investment. You think:",
    category: 'risk',
    options: [
      {
        text: "Will this give me more freedom or tie me down?",
        value: "freedom_filter",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "What's the upside potential? I'm interested if it's big enough",
        value: "upside_focus",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Does this align with my values and help people?",
        value: "values_check",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Show me the data, track record, and worst-case scenario",
        value: "risk_analysis",
        profiles: { freedomArchitect: 1, empireBuilder: 2, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 9,
    question: "What would make you proudest in 20 years?",
    category: 'goals',
    options: [
      {
        text: "Having traveled the world while my investments fund my lifestyle",
        value: "lifestyle_achievement",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Building a business empire that changed an industry",
        value: "empire_legacy",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Knowing my work made a real difference in people's lives",
        value: "impact_legacy",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "Achieving complete financial security for my family",
        value: "family_security",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 10,
    question: "How do you feel about debt and leverage?",
    category: 'risk',
    options: [
      {
        text: "Avoid it—debt limits freedom and flexibility",
        value: "avoid_debt",
        profiles: { freedomArchitect: 4, empireBuilder: 1, impactInvestor: 2, securityStrategist: 4 }
      },
      {
        text: "Love it—smart leverage accelerates wealth building",
        value: "embrace_leverage",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 3, securityStrategist: 1 }
      },
      {
        text: "Only for investments that create positive impact",
        value: "ethical_debt",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Very carefully—only low-risk, asset-backed debt",
        value: "conservative_debt",
        profiles: { freedomArchitect: 2, empireBuilder: 2, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 11,
    question: "What's your ideal work schedule?",
    category: 'lifestyle',
    options: [
      {
        text: "4-hour workweek from anywhere in the world",
        value: "minimal_hours",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Whatever it takes—60, 80, 100 hours if needed",
        value: "unlimited_hours",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 2, securityStrategist: 1 }
      },
      {
        text: "Flexible schedule that allows time for causes I care about",
        value: "purpose_schedule",
        profiles: { freedomArchitect: 3, empireBuilder: 1, impactInvestor: 5, securityStrategist: 2 }
      },
      {
        text: "Consistent 40-50 hours with clear boundaries",
        value: "balanced_schedule",
        profiles: { freedomArchitect: 3, empireBuilder: 1, impactInvestor: 2, securityStrategist: 5 }
      }
    ]
  },
  {
    id: 12,
    question: "You just made $1M. What's your first thought?",
    category: 'mindset',
    options: [
      {
        text: "Time to design my perfect lifestyle and automate income",
        value: "lifestyle_design",
        profiles: { freedomArchitect: 5, empireBuilder: 1, impactInvestor: 2, securityStrategist: 2 }
      },
      {
        text: "Great start—now let's turn it into $10M",
        value: "scale_more",
        profiles: { freedomArchitect: 1, empireBuilder: 5, impactInvestor: 1, securityStrategist: 1 }
      },
      {
        text: "How can I use this to create the most positive impact?",
        value: "maximize_impact",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 5, securityStrategist: 1 }
      },
      {
        text: "Let me secure this properly and plan for the long term",
        value: "secure_wealth",
        profiles: { freedomArchitect: 2, empireBuilder: 1, impactInvestor: 1, securityStrategist: 5 }
      }
    ]
  }
];