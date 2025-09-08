'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function EffortlessAbundanceContent() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const caughtSnitch = searchParams?.get('source') === 'golden-snitch';

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when success changes - with multiple fallbacks
  useEffect(() => {
    if (isSuccess) {
      // Immediate scroll
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Fallback with requestAnimationFrame for after DOM update
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      
      // Final fallback with setTimeout
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      console.log('Submitting form with email:', email);
      console.log('Source:', caughtSnitch ? 'golden-snitch-wealth-codes' : 'effortless-abundance-page');
      
      const response = await fetch('/api/effortless-abundance', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: caughtSnitch ? 'golden-snitch-wealth-codes' : 'effortless-abundance-page'
        }),
      });

      console.log('Response status:', response.status);

      // Check if response has content
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request');
      }

      // Scroll to top immediately before state change
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setIsSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      if (err instanceof TypeError && err.message.includes('NetworkError')) {
        setError('Network error - please check your connection and try again');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {caughtSnitch ? '🏆 Wealth Codes Activated!' : 'Your Guide is On Its Way!'}
            </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Check your email for {caughtSnitch ? 'The Effortless Abundance Guide + Wealth Codes' : 'The Effortless Abundance Guide'}.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
            <h3 className="font-serif text-xl mb-4">What happens next:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. <strong>Now:</strong> Your {caughtSnitch && 'enhanced Wealth Codes'} guide is being delivered to your inbox</li>
              <li>2. <strong>Today:</strong> Start with Chapter 1 - The Wealth Identity Shift</li>
              {caughtSnitch && (
                <li>3. <strong>The Key:</strong> Discover the &quot;Golden Mind Wealth Codes&quot; - your pathway to abundance!</li>
              )}
              <li>{caughtSnitch ? '4' : '3'}. <strong>This Week:</strong> Implement the daily abundance practices</li>
              <li>{caughtSnitch ? '5' : '4'}. <strong>30 Days:</strong> Experience a complete mindset transformation</li>
            </ol>
          </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Email not arriving? Check your spam folder or contact hello@myleskameron.com<br/>
              <span className="text-xs">Your journey to effortless abundance begins now</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
              Transform Your Wealth Consciousness
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-light">
              The Effortless Abundance Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              How to Cultivate an Ultra-Wealthy Mind<br />
              <span className="text-foreground font-semibold">Master the mental models of the world&apos;s most successful people</span>
            </p>
          </div>
        </div>
      </section>

      {/* Caught Snitch Trophy */}
      {caughtSnitch && (
        <section className="py-6 animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block relative">
                {/* Trophy case effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/20 to-yellow-400/20 blur-2xl" />
                
                {/* Defeated Snitch */}
                <div className="relative">
                  {/* Golden Snitch - caught and still */}
                  <div className="inline-flex items-center justify-center p-8">
                    <div className="relative animate-float">
                      {/* Main ball */}
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-2xl shadow-yellow-500/50 relative">
                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
                        
                        {/* Highlight */}
                        <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80" />
                        
                        {/* X eyes to show it's defeated */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3">
                          <span className="text-yellow-600 font-bold text-xl">×</span>
                          <span className="text-yellow-600 font-bold text-xl">×</span>
                        </div>
                      </div>

                      {/* Wings - drooping down */}
                      <div className="absolute top-1/2 -translate-y-1/2">
                        {/* Left Wing - drooping */}
                        <div className="absolute -left-8 top-2 w-8 h-5 bg-gradient-to-r from-white/60 to-white/30 rounded-full origin-right rotate-12"
                             style={{ clipPath: 'ellipse(100% 50% at 100% 50%)' }} />
                        
                        {/* Right Wing - drooping */}
                        <div className="absolute -right-8 top-2 w-8 h-5 bg-gradient-to-l from-white/60 to-white/30 rounded-full origin-left -rotate-12"
                             style={{ clipPath: 'ellipse(100% 50% at 0% 50%)' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Trophy text */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      🏆 Wealth Codes Unlocked!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You caught the Golden Snitch! The Wealth Codes await below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What You Get Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">What&apos;s Inside The Guide</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5 Thought Patterns for Effortless Abundance</li>
                  <li>• Mental Frameworks of High-Agency Individuals</li>
                  <li>• The &quot;Abundance Ignition&quot; Morning Routine</li>
                  <li>• Daily Rituals & Environmental Design</li>
                  <li>• Business Decision-Making Playbook</li>
                  <li>• Problem-to-Opportunity Framework</li>
                  <li>• Strategic Partnership Evaluation Checklist</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Transform Your Mindset</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Shift from scarcity to abundance thinking</li>
                  <li>• Develop high-agency behaviors & self-efficacy</li>
                  <li>• Master opportunity-focused problem solving</li>
                  <li>• Build assets instead of maximizing income</li>
                  <li>• Think in decades, not days</li>
                  <li>• Create supportive environments & relationships</li>
                  <li>• Make decisions through an ROI lens</li>
                </ul>
              </div>
            </div>

            {/* Testimonial/Social Proof */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12 text-center">
              <p className="text-lg italic mb-4">
                &quot;This guide contains the exact mental frameworks I used to build multiple successful businesses. 
                These principles transformed my relationship with wealth forever.&quot;
              </p>
              <p className="font-semibold">- Myles Kameron</p>
            </div>

            {/* Email Capture Form */}
            <div className="bg-card border rounded-lg p-8">
              <h2 className="font-serif text-2xl text-center mb-6">
                {caughtSnitch ? 'Access Your Wealth Codes' : 'Get Your Free Guide Instantly'}
              </h2>
              {caughtSnitch && (
                <p className="text-center text-sm text-purple-600 dark:text-purple-400 mb-4">
                  ✨ Contains the &quot;Golden Mind Wealth Codes&quot; - the only path to effortless abundance!
                </p>
              )}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me The Guide'}
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>

            {/* Urgency/Final CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Start your wealth transformation journey today
              </p>
              <p className="text-sm text-muted-foreground">
                This guide shares principles typically taught in $5,000+ wealth programs.<br/>
                Get it free today because everyone deserves access to abundance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function EffortlessAbundancePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <EffortlessAbundanceContent />
    </Suspense>
  );
}