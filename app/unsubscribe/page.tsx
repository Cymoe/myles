'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // In a real implementation, you'd call your unsubscribe API here
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email hello@myleskameron.com');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-6">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-light text-foreground mb-4">
            You&apos;ve been unsubscribed
          </h1>
          
          <p className="text-muted-foreground mb-8">
            No more emails. But the deals keep coming if you change your mind.
          </p>
          
          <Link 
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-foreground mb-2">
            Unsubscribe
          </h1>
          <p className="text-muted-foreground">
            No hard feelings. Enter your email to stop receiving deals.
          </p>
        </div>

        <form onSubmit={handleUnsubscribe} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary disabled:opacity-50"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 bg-muted text-muted-foreground hover:bg-muted/80 transition-colors rounded-lg disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : 'Unsubscribe'}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Having issues? Email{' '}
            <a href="mailto:hello@myleskameron.com?subject=Unsubscribe Request" className="underline">
              hello@myleskameron.com
            </a>
          </p>
        </form>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Rather than leaving completely, you could:
          </p>
          <div className="space-y-2 text-center">
            <a 
              href="https://smbdealsheet.com/preferences"
              className="block text-sm text-primary hover:underline"
            >
              Update email preferences →
            </a>
            <Link 
              href="/"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}