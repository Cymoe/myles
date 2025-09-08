// Simple in-memory storage for development
// In production, you'd use a proper database like PostgreSQL or Supabase

interface AbundanceSubscriber {
  email: string;
  isWealthCodes: boolean;
  signupDate: string;
  lastEmailSent: number;
  isActive: boolean;
  tags: string[];
}

// In production, this would be a database table
const subscribers = new Map<string, AbundanceSubscriber>();

export function addSubscriber(email: string, isWealthCodes: boolean = false) {
  subscribers.set(email, {
    email,
    isWealthCodes,
    signupDate: new Date().toISOString(),
    lastEmailSent: 0,
    isActive: true,
    tags: isWealthCodes ? ['effortless-abundance', 'wealth-codes'] : ['effortless-abundance']
  });
}

export function getSubscriber(email: string): AbundanceSubscriber | undefined {
  return subscribers.get(email);
}

export function updateSubscriber(email: string, updates: Partial<AbundanceSubscriber>) {
  const subscriber = subscribers.get(email);
  if (subscriber) {
    subscribers.set(email, { ...subscriber, ...updates });
  }
}

export function getSubscribersForDay(dayNumber: number): AbundanceSubscriber[] {
  const subscribersArray: AbundanceSubscriber[] = [];
  const now = new Date();
  
  subscribers.forEach(subscriber => {
    if (!subscriber.isActive) return;
    
    const signupDate = new Date(subscriber.signupDate);
    const daysSinceSignup = Math.floor((now.getTime() - signupDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Email schedule: Day 0, 3, 7, 10, 14, 18, 21
    const emailDays = [0, 3, 7, 10, 14, 18, 21];
    const emailIndex = emailDays.indexOf(daysSinceSignup);
    
    if (emailIndex !== -1 && subscriber.lastEmailSent < emailIndex + 1) {
      subscribersArray.push(subscriber);
    }
  });
  
  return subscribersArray;
}

export function unsubscribe(email: string) {
  const subscriber = subscribers.get(email);
  if (subscriber) {
    subscriber.isActive = false;
    subscribers.set(email, subscriber);
  }
}

// Helper to determine which email in sequence to send
export function getNextEmailNumber(subscriber: AbundanceSubscriber): number | null {
  const now = new Date();
  const signupDate = new Date(subscriber.signupDate);
  const daysSinceSignup = Math.floor((now.getTime() - signupDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const emailSchedule = {
    0: 1,   // Day 0: Email 1
    3: 2,   // Day 3: Email 2
    7: 3,   // Day 7: Email 3
    10: 4,  // Day 10: Email 4
    14: 5,  // Day 14: Email 5
    18: 6,  // Day 18: Email 6
    21: 7   // Day 21: Email 7
  };
  
  const emailNumber = emailSchedule[daysSinceSignup as keyof typeof emailSchedule];
  
  // Check if we should send this email
  if (emailNumber && emailNumber > subscriber.lastEmailSent) {
    return emailNumber;
  }
  
  return null;
}