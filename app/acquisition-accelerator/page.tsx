'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AcquisitionAcceleratorPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Scroll to top on mount and when success changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo(0, 0);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/acquisition-accelerator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'acquisition-accelerator'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request');
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Welcome to the Acquisition Accelerator!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Check your email for instant access to your documents.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
            <h3 className="font-serif text-xl mb-4">Here&apos;s what you&apos;re getting:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. <strong>Instant:</strong> 32 acquisition blueprints in your inbox</li>
              <li>2. <strong>Tomorrow:</strong> Your first deal breakdown arrives</li>
              <li>3. <strong>30 Days:</strong> Daily insights on finding and closing deals</li>
              <li>4. <strong>Lifetime:</strong> Access to all materials and updates</li>
            </ol>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Email not arriving? Contact hello@myleskameron.com<br/>
            <span className="text-xs">Your 30-day journey to business ownership starts now</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
              The Complete Business Buying System
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-light">
              The Acquisition Accelerator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              32 acquisition blueprints + 30 days of deal insights.<br />
              <span className="text-foreground font-semibold">Everything you need to find and close deals.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">What You&apos;ll Get:</h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto mb-16">
              <div>
                <h3 className="font-semibold text-xl mb-6">Instant Access</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>Revenue tracking spreadsheet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>5 Boring Businesses guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>27-point deal checklist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>32 total acquisition blueprints</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-6">30 Days of Insights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>Real deal breakdowns weekly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>Negotiation tactics that work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>Due diligence shortcuts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span>Direct access to reply and ask questions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email Capture Form */}
            <div className="bg-background border-2 border-primary p-8 md:p-12 rounded-lg text-center">
              <h3 className="font-serif text-2xl mb-4">Start Your 30-Day Journey</h3>
              <p className="text-muted-foreground mb-8">
                Join the accelerator and get instant access to everything.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Get Started Free'}
                  </button>
                </div>
                {error && (
                  <p className="mt-4 text-sm text-red-500">{error}</p>
                )}
                <p className="mt-4 text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.<br/>
                  <span className="font-semibold">Questions? Reply to any email and I&apos;ll personally respond.</span>
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl mb-6">Why Free?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I make money when you close deals, not from selling courses.
            </p>
            <p className="text-muted-foreground">
              If you find a great business, I can help you close it for 2-3% of the deal value.<br/>
              <a href="mailto:hello@myleskameron.com?subject=Business Acquisition Advisory Inquiry" className="text-primary hover:underline">Email me about advisory services →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}