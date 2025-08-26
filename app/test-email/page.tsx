'use client';

import { useState } from 'react';

export default function TestEmailPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testSubscribe = async () => {
    setLoading(true);
    setStatus('Sending...');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: 'test' }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('✅ Email sent successfully! Check your inbox.');
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    setLoading(false);
  };

  const testEndpoint = async () => {
    setLoading(true);
    setStatus('Testing...');
    
    try {
      const response = await fetch('/api/test-email');
      const data = await response.json();
      
      if (response.ok) {
        setStatus('✅ Test email sent to delivered@resend.dev');
      } else {
        setStatus(`❌ Error: ${JSON.stringify(data.error)}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8" style={{ paddingTop: '100px' }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test Email System</h1>
        
        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4">Test Welcome Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border rounded mb-4 text-black"
              style={{ fontSize: '16px' }}
            />
            <button
              onClick={testSubscribe}
              disabled={loading || !email}
              className="px-4 py-2 bg-[#786254] text-white rounded hover:bg-[#5a4a3f] disabled:opacity-50 cursor-pointer"
              style={{ position: 'relative', zIndex: 10 }}
            >
              Send Welcome Email
            </button>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4">Test Endpoint</h2>
            <p className="mb-4 text-sm text-gray-600">
              Sends test email to delivered@resend.dev
            </p>
            <button
              onClick={testEndpoint}
              disabled={loading}
              className="px-4 py-2 bg-[#786254] text-white rounded hover:bg-[#5a4a3f] disabled:opacity-50 cursor-pointer"
              style={{ position: 'relative', zIndex: 10 }}
            >
              Test Email System
            </button>
          </div>

          {status && (
            <div className="p-4 bg-gray-100 rounded">
              <pre className="whitespace-pre-wrap text-black">{status}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}