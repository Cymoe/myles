'use client';

import { useState } from 'react';

export default function TestAbundanceAutomation() {
  const [email, setEmail] = useState('');
  const [emailNumber, setEmailNumber] = useState(1);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendTestEmail = async () => {
    setIsLoading(true);
    setStatus('Sending...');

    try {
      const response = await fetch('/api/abundance-automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          dayInSequence: emailNumber,
          isWealthCodes: false,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus(`✅ Email ${emailNumber} sent successfully to ${email}`);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const checkSequence = async () => {
    try {
      const response = await fetch('/api/abundance-automation');
      const data = await response.json();
      console.log('Sequence info:', data);
      setStatus(`ℹ️ Sequence has ${data.sequences.length} emails configured`);
    } catch (error) {
      setStatus(`❌ Error checking sequence: ${error}`);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test Abundance Email Automation</h1>
        
        <div className="bg-card border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Send Test Email</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="test@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Number (1-7)</label>
              <select
                value={emailNumber}
                onChange={(e) => setEmailNumber(parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-md bg-background"
              >
                <option value={1}>1 - The Wealth Frequency You Were Born With</option>
                <option value={2}>2 - The Backwards Secret of Abundance</option>
                <option value={3}>3 - The Invisible Wealth You Already Possess</option>
                <option value={4}>4 - Why Rich People Say No</option>
                <option value={5}>5 - The Environment Alchemy Code</option>
                <option value={6}>6 - The Compound Effect of Small Wealth Rituals</option>
                <option value={7}>7 - Your Wealth Codes Initiation</option>
              </select>
            </div>
            
            <button
              onClick={sendTestEmail}
              disabled={!email || isLoading}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Test Email'}
            </button>
          </div>
        </div>
        
        <div className="bg-card border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Automation Info</h2>
          <button
            onClick={checkSequence}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Check Email Sequence
          </button>
        </div>
        
        {status && (
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Status:</h3>
            <p className="whitespace-pre-wrap">{status}</p>
          </div>
        )}
        
        <div className="mt-8 text-sm text-muted-foreground">
          <h3 className="font-semibold mb-2">Email Schedule:</h3>
          <ul className="space-y-1">
            <li>• Email 1: Immediately after signup</li>
            <li>• Email 2: Day 3</li>
            <li>• Email 3: Day 7</li>
            <li>• Email 4: Day 10</li>
            <li>• Email 5: Day 14</li>
            <li>• Email 6: Day 18</li>
            <li>• Email 7: Day 21</li>
          </ul>
        </div>
      </div>
    </div>
  );
}