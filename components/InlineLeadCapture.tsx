'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface InlineLeadCaptureProps {
  title: string;
  description: string;
  buttonText: string;
  leadMagnet: string;
  className?: string;
}

export default function InlineLeadCapture({ 
  title, 
  description, 
  buttonText, 
  leadMagnet,
  className = ''
}: InlineLeadCaptureProps) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const router = useRouter();

  const handleInitialClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          leadMagnet,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // No redirect - stay on page
      } else {
        console.error('Subscription error:', data.error);
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('idle');
      alert('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg text-center ${className}`}>
        <div className="max-w-md mx-auto">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-foreground mb-2">Check Your Email!</h3>
          <p className="text-muted-foreground">
            Your {leadMagnet} is on its way. Look for an email from hello@myleskameron.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-8 bg-card dark:bg-card/50 border border-border rounded-lg ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        {!showForm ? (
          <button
            onClick={handleInitialClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-md font-medium"
          >
            <span>{buttonText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fade-in">
            <div className="flex gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                disabled={status === 'loading'}
                autoFocus
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 whitespace-nowrap rounded-md disabled:opacity-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Get It Free'}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/70 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}