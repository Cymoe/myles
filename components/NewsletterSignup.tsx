"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Add your newsletter signup logic here
    console.log('Coordinates signup:', email);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Confirmed. Monthly updates only.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-3">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 whitespace-nowrap disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      <p className="text-xs text-muted-foreground/70 mt-2 text-center">
        No spam. Just coordinates and insights.
      </p>
    </form>
  );
}