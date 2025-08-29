'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlueprintFreePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/blueprint-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'blueprint-starter-pack'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Check Your Email</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your Blueprint Starter Pack is on the way.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
            <h3 className="font-serif text-xl mb-4">What happens next:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. Check your email (including spam) for download link</li>
              <li>2. Download all 20 documents immediately</li>
              <li>3. Start with &ldquo;The $50M Service Empire Formula&rdquo;</li>
              <li>4. Take action within 48 hours (momentum matters)</li>
            </ol>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Email not arriving? Contact hello@myleskameron.com<br/>
            <span className="text-xs">Blueprint buyers get first look at reader-submitted deals</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              Limited Time: 100% Free
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              The Blueprint Starter Pack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              20 battle-tested documents from $80M+ in closed deals.<br />
              <span className="text-foreground font-semibold">No fluff. No courses. Just what works.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl mb-12 text-center">Inside Your Starter Pack:</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="font-semibold text-xl mb-4">Acquisition Foundations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• The $50M Service Empire Formula</li>
                  <li>• Off-Market Deal Funnel System</li>
                  <li>• Creative Deal Structure Bible</li>
                  <li>• Direct Owner Contact Templates</li>
                  <li>• Business Broker Manipulation Guide</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-4">Execution Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Service Business Selector Matrix</li>
                  <li>• Due Diligence Checklist (Starter)</li>
                  <li>• SBA Loan Basics Guide</li>
                  <li>• Valuation Quick Calculator</li>
                  <li>• 30-Day Acquisition Timeline</li>
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-muted/50 p-8 rounded-lg mb-16">
              <p className="text-lg italic mb-4">
                &ldquo;I used just 3 of these documents to find and close my first deal in 67 days. 
                $1.2M revenue business for $380K with seller financing. This stuff is dangerous.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground">
                - Marcus K., First-Time Buyer
              </p>
            </div>

            {/* Email Capture Form */}
            <div className="bg-background border-2 border-primary p-8 md:p-12 rounded-lg text-center">
              <h3 className="font-serif text-2xl mb-4">Get Instant Access</h3>
              <p className="text-muted-foreground mb-8">
                Enter your email to download all 20 documents immediately.
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
                    {isSubmitting ? 'Processing...' : 'Download Free'}
                  </button>
                </div>
                {error && (
                  <p className="mt-4 text-sm text-red-500">{error}</p>
                )}
                <p className="mt-4 text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime. By submitting, you agree to receive emails about business acquisitions.<br/>
                  <span className="font-semibold">P.S. Found a boring business for sale? Hit reply to share.</span>
                </p>
              </form>
            </div>

            {/* What's Next */}
            <div className="mt-16 text-center p-8 bg-muted/30 rounded-lg">
              <h3 className="font-serif text-2xl mb-4">Want All 67 Documents?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                The complete Blueprint system includes 47 additional advanced documents:<br/>
                Aggressive negotiation scripts, no-money-down structures, and the $50M empire formula.
              </p>
              <p className="text-3xl font-semibold text-foreground mb-2">$888</p>
              <p className="text-sm text-muted-foreground">
                Available after you download the starter pack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl mb-6">Why Free?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Because when you use these documents to buy your first business, 
              you&apos;ll want everything else we have. And you&apos;ll happily pay for it.
            </p>
            <p className="text-muted-foreground">
              Plus, we make our real money on deals, not documents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}