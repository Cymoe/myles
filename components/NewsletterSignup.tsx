"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface NewsletterSignupProps {
  placeholder?: string;
  buttonText?: string;
  source?: string;
  tags?: string[];
  showButton?: boolean;
}

export default function NewsletterSignup({ 
  placeholder = "Email address",
  buttonText = "Unlock private dealflow",
  source = "newsletter-signup",
  tags = [],
  showButton = true
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [showForm, setShowForm] = useState(!showButton);
  const router = useRouter();

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
          leadMagnet: 'Free Tools Bundle',
          source,
          tags,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Redirect to thank you page with tracking
        window.location.href = `/thank-you?email=${encodeURIComponent(email)}&source=${source}`;
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
      <div className="text-center" id="lead-capture">
        <div className="inline-flex items-center gap-2 text-primary mb-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Success!</span>
        </div>
        <p className="text-muted-foreground">Check your email for confirmation.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto" id="lead-capture">
      {!showForm ? (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-md"
          >
            <span className="text-lg font-medium">{buttonText}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-sm text-muted-foreground mt-3">
            It&apos;s free. Unsubscribe anytime.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <div className="flex gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
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
              {status === 'loading' ? 'Joining...' : 'Join Free'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}