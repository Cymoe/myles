'use client';

import { useState } from 'react';

const profiles = [
  {
    name: 'Capital Titan',
    description: 'Focus on wealth accumulation above all',
    answers: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0 },
    defaultEmail: 'capital.titan'
  },
  {
    name: 'Time Architect',
    description: 'Optimize for time freedom',
    answers: { q1: 1, q2: 1, q3: 1, q4: 1, q5: 1, q6: 1, q7: 1 },
    defaultEmail: 'time.architect'
  },
  {
    name: 'Global Nomad',
    description: 'Location independence is key',
    answers: { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2, q6: 2, q7: 2 },
    defaultEmail: 'global.nomad'
  },
  {
    name: 'Empire Builder',
    description: 'Balance of capital and time',
    answers: { q1: 0, q2: 1, q3: 0, q4: 1, q5: 0, q6: 1, q7: 0 },
    defaultEmail: 'empire.builder'
  },
  {
    name: 'Freedom Designer',
    description: 'Balance of time and location',
    answers: { q1: 2, q2: 1, q3: 2, q4: 1, q5: 1, q6: 2, q7: 2 },
    defaultEmail: 'freedom.designer'
  },
  {
    name: 'Remote Mogul',
    description: 'Balance of capital and location',
    answers: { q1: 0, q2: 2, q3: 2, q4: 0, q5: 2, q6: 2, q7: 0 },
    defaultEmail: 'remote.mogul'
  },
  {
    name: 'Wealth Creator',
    description: 'Perfect balance of all three',
    answers: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 3, q6: 3, q7: 3 },
    defaultEmail: 'wealth.creator'
  }
];

export default function TestQuizPage() {
  const baseEmail = '2mylescameron@gmail.com';
  const [emails, setEmails] = useState<Record<number, string>>(
    Object.fromEntries(profiles.map((p, i) => [i, `${baseEmail.split('@')[0]}+${p.defaultEmail}@${baseEmail.split('@')[1]}`]))
  );
  const [statuses, setStatuses] = useState<Record<number, { type: 'success' | 'error' | 'loading' | null; message: string }>>(
    Object.fromEntries(profiles.map((_, i) => [i, { type: null, message: '' }]))
  );

  const submitQuiz = async (index: number) => {
    const profile = profiles[index];
    const email = emails[index];
    
    if (!email) {
      setStatuses(prev => ({ ...prev, [index]: { type: 'error', message: 'Please enter an email address' } }));
      return;
    }
    
    setStatuses(prev => ({ ...prev, [index]: { type: 'loading', message: 'Submitting...' } }));
    
    try {
      // First calculate the profile
      const calcResponse = await fetch('/api/calculate-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: profile.answers })
      });
      
      if (!calcResponse.ok) {
        throw new Error(`Failed to calculate profile: ${calcResponse.status}`);
      }
      
      const { profile: calculatedProfile, percentages } = await calcResponse.json();
      
      // Subscribe with quiz result (this adds to Beehiiv with tags)
      const subscribeResponse = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          leadMagnet: `Wealth Profile: ${calculatedProfile.name}`,
          quizResult: calculatedProfile.name,
          profileData: { profile: calculatedProfile, percentages }
        })
      });
      
      if (!subscribeResponse.ok) {
        throw new Error(`Subscribe failed: ${subscribeResponse.status}`);
      }
      
      // Send wealth profile email
      const emailResponse = await fetch('/api/send-wealth-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          profile: calculatedProfile,
          percentages: percentages
        })
      });
      
      if (!emailResponse.ok) {
        console.error('Email send failed:', emailResponse.status);
      }
      
      setStatuses(prev => ({ 
        ...prev, 
        [index]: { 
          type: 'success', 
          message: `✅ Success! Profile: ${calculatedProfile.name}. Check Beehiiv for tag: wealth-profile-${calculatedProfile.id}` 
        } 
      }));
      
    } catch (error) {
      setStatuses(prev => ({ 
        ...prev, 
        [index]: { 
          type: 'error', 
          message: `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}` 
        } 
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Wealth Profile Quiz Tester</h1>
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Enter a unique test email for each profile (or use the defaults)</li>
            <li>Click &quot;Submit Quiz&quot; to simulate taking the quiz with that profile&apos;s answers</li>
            <li>Check Beehiiv to verify the subscriber was tagged correctly</li>
            <li>Expected tags format: wealth-profile-[profile-id]</li>
          </ol>
        </div>
        
        <div className="space-y-6">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{profile.name}</h3>
              <p className="text-muted-foreground mb-4">{profile.description}</p>
              
              <input
                type="email"
                value={emails[index]}
                onChange={(e) => setEmails(prev => ({ ...prev, [index]: e.target.value }))}
                placeholder={`test.${profile.defaultEmail}@example.com`}
                className="w-full px-4 py-2 border border-border rounded-lg mb-4 bg-background text-foreground"
              />
              
              <button
                onClick={() => submitQuiz(index)}
                disabled={statuses[index]?.type === 'loading'}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {statuses[index]?.type === 'loading' ? 'Submitting...' : `Submit Quiz as ${profile.name}`}
              </button>
              
              {statuses[index]?.type && (
                <div className={`mt-4 p-3 rounded-lg ${
                  statuses[index].type === 'success' ? 'bg-green-100 text-green-800' :
                  statuses[index].type === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {statuses[index].message}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}