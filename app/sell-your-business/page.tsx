'use client';

import { useState } from 'react';

export default function SellYourBusinessPage() {
  const [formData, setFormData] = useState({
    businessType: '',
    revenue: '',
    location: '',
    email: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/sell-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
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
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We&apos;ve received your information and will be in touch within 48 hours.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
            <h3 className="font-serif text-xl mb-4">What happens next:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. We&apos;ll review your business details</li>
              <li>2. Match you with pre-qualified buyers from our network</li>
              <li>3. Make introductions only with your approval</li>
              <li>4. You negotiate directly with interested buyers</li>
            </ol>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Questions? Email hello@myleskameron.com<br/>
            <span className="text-xs">Remember: This is 100% free for you. Buyers pay us only if they close.</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-light text-center">
              Direct Buyer Introductions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8">
              Connect with Cash-Ready Buyers Without the Middleman
            </p>
            <p className="text-lg text-center text-muted-foreground">
              Free introductions to serious buyers who actually close deals
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 border-t border-b border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">
              Why Pay Commission When You Don&apos;t Have To?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-center">Our Approach</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Zero cost buyer matching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Sell on your timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Direct buyer communication</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-4 text-center">Traditional Route</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Heavy commission fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Long-term contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Hidden costs everywhere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Matches */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-light mb-6 text-center">
              Recent Successful Connections This Month:
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-12">
              <li>✓ Home Services Company in the Midwest: $4.2M revenue</li>
              <li>✓ Commercial Cleaning Business in the South: $850K revenue</li>
              <li>✓ HVAC Service Business on the West Coast: $12M revenue</li>
              <li>✓ Transportation Company in Texas: $2.1M revenue</li>
              <li>✓ Manufacturing Business in the Southwest: $1.8M revenue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Get Paid Section */}
      <section className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light mb-6">How We Get Paid</h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
              <p className="text-lg mb-4">
                <span className="font-semibold">Sellers:</span> 100% free. No fees, no obligations, no contracts.
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">Buyers:</span> Pay 2-3% success fee only when they close on your business.
              </p>
              <p className="text-muted-foreground">
                This model ensures everyone&apos;s interests are aligned. We only make money when deals actually close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-background border-2 border-primary p-8 md:p-12 rounded-lg">
              <h3 className="font-serif text-2xl mb-6 text-center">Get Started - It&apos;s Free</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                    Type of Business *
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    placeholder="e.g., Plumbing, HVAC, Landscaping"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                    Annual Revenue *
                  </label>
                  <input
                    type="text"
                    id="revenue"
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    placeholder="e.g., $2.5M"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, State"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Business →'}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  100% Free. No obligations. Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}