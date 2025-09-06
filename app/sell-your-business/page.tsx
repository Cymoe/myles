'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Clock, Building2, DollarSign, MapPin, User } from 'lucide-react';

export default function SellYourBusinessPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    timeline: '',
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

  const totalSteps = 5;

  // Load saved form data on mount and scroll to top
  useEffect(() => {
    // Always scroll to top on initial page load
    window.scrollTo(0, 0);
    
    const savedData = localStorage.getItem('sellBusinessForm');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(f => parsed.formData || f);
      setCurrentStep(parsed.currentStep || 1);
    }
  }, []);

  // Save form data on changes
  useEffect(() => {
    localStorage.setItem('sellBusinessForm', JSON.stringify({ formData, currentStep }));
  }, [formData, currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
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
      // Clear saved form data on success
      localStorage.removeItem('sellBusinessForm');
      // Scroll to top when showing thank you page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return !!formData.timeline;
      case 2: return !!formData.businessType;
      case 3: return !!formData.revenue;
      case 4: return !!formData.location;
      case 5: return !!formData.email && !!formData.name;
      default: return false;
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We&apos;ve received your information and will review it for potential buyer matches.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
            <h3 className="font-serif text-xl mb-4">What happens next:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. We&apos;ll review your business details</li>
              <li>2. Search for qualified buyers who fit your business</li>
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
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 font-bold text-center">
              Sell Your Business Without Broker Fees
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8">
              We connect business sellers with qualified buyers. Free for sellers.
            </p>
            
            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">$0</div>
                <div className="text-sm text-muted-foreground">Cost to Sellers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">Direct</div>
                <div className="text-sm text-muted-foreground">Buyer Connections</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">No Contracts</div>
                <div className="text-sm text-muted-foreground">Full Control</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  const formSection = document.querySelector('#seller-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started →
              </button>
              <p className="text-xs text-muted-foreground mt-2">No credit card required • 100% confidential</p>
            </div>
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
      <section className="py-12 border-t border-border/20" id="seller-form">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Tell Us About Your Business
              </h2>
              <p className="text-muted-foreground mb-6">
                We&apos;ll search for qualified buyers who match
              </p>
            </div>
            
            <div className="bg-background border-2 border-primary p-6 md:p-8 rounded-lg shadow-xl">
              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Quick Assessment</h3>
                  <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Step Icons */}
                <div className="flex justify-center mb-6">
                  {currentStep === 1 && <Clock className="w-12 h-12 text-primary" />}
                  {currentStep === 2 && <Building2 className="w-12 h-12 text-primary" />}
                  {currentStep === 3 && <DollarSign className="w-12 h-12 text-primary" />}
                  {currentStep === 4 && <MapPin className="w-12 h-12 text-primary" />}
                  {currentStep === 5 && <User className="w-12 h-12 text-primary" />}
                </div>
                
                {/* Step 1: Timeline */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2 text-center">When do you want to cash out?</h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">We match urgency with buyer readiness</p>
                    <div className="space-y-3">
                      {['ASAP', 'Within the next 3-6 months', 'Within the next 6-12 months', '12+ months from now'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({...formData, timeline: option});
                            setTimeout(() => handleNext(), 200); // Small delay for visual feedback
                          }}
                          className={`w-full text-left px-6 py-4 border rounded-lg transition-all ${
                            formData.timeline === option 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Business Type */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      What type of cash-flowing business do you own?
                    </h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">We have buyers for all industries</p>
                    <input
                      type="text"
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      placeholder="e.g., Plumbing, HVAC, Manufacturing, etc."
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                      autoFocus
                    />
                  </div>
                )}

                {/* Step 3: Revenue */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2 text-center">How much revenue does your business generate?</h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">This helps us match you with qualified buyers</p>
                    <div className="space-y-3">
                      {[
                        'Under $500K', 
                        '$500K - $1M', 
                        '$1M - $2.5M', 
                        '$2.5M - $5M', 
                        '$5M - $10M', 
                        'Over $10M'
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({...formData, revenue: option});
                            setTimeout(() => handleNext(), 200); // Small delay for visual feedback
                          }}
                          className={`w-full text-left px-6 py-4 border rounded-lg transition-all ${
                            formData.revenue === option 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Location */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      Where is your goldmine located?
                    </h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">Many buyers prefer specific regions</p>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="City, State"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                      autoFocus
                    />
                  </div>
                )}

                {/* Step 5: Contact Info */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      Perfect! Where should we send your buyer matches?
                    </h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      We&apos;ll have qualified buyers ready within 48 hours
                    </p>
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
                        autoFocus
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
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number (optional)
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
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium ${
                      currentStep === 1 
                        ? 'invisible' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 transform hover:scale-105 min-h-[56px]"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !isStepValid()}
                      className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 transform hover:scale-105 min-h-[56px]"
                    >
                      {isSubmitting ? 'Finding Your Buyers...' : 'Get My Buyer Matches →'}
                    </button>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center mt-4">{error}</p>
                )}

                <p className="text-xs text-muted-foreground text-center mt-6">
                  100% Free. No obligations. Your information is kept strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Risk Reversal / Guarantee Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our 90-Day Buyer Guarantee</h3>
              <p className="text-lg mb-6">
                If we can&apos;t find you at least 3 qualified buyers within 90 days, we&apos;ll personally help you list your business elsewhere at no charge.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="font-semibold">No upfront costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="font-semibold">No exclusivity required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="font-semibold">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Common Questions from Sellers
            </h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg mb-2">How do you find buyers without charging me?</h3>
                <p className="text-muted-foreground">
                  We charge buyers a success fee (2-3%) only when they successfully purchase a business. You pay nothing - ever.
                </p>
              </div>
              
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg mb-2">Will my employees or competitors find out?</h3>
                <p className="text-muted-foreground">
                  Absolutely not. We use NDAs with all buyers and never publicly list your business details. All introductions are made privately with your approval.
                </p>
              </div>
              
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg mb-2">What if I&apos;m not ready to sell immediately?</h3>
                <p className="text-muted-foreground">
                  Perfect! Many sellers start the process 6-12 months early. We&apos;ll help you prepare and connect you with buyers when you&apos;re ready.
                </p>
              </div>
              
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg mb-2">Do I need financial statements ready?</h3>
                <p className="text-muted-foreground">
                  Not to get started. We&apos;ll guide you on what buyers will need to see. Most sellers just need their last 3 years of tax returns and current P&L.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Sell?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don&apos;t wait another year paying for a business you&apos;re ready to sell
            </p>
            <button
              onClick={() => {
                const formSection = document.querySelector('#seller-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started →
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Connect with qualified buyers today
            </p>
          </div>
        </div>
      </section>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg md:hidden z-40">
        <button
          onClick={() => {
            const formSection = document.querySelector('#seller-form');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg text-lg"
        >
          Get Started Free →
        </button>
      </div>
    </div>
  );
}