'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target, Shield, DollarSign, Users, Zap, Trophy } from 'lucide-react';

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary mb-6 tracking-wide uppercase">
              Success-Based Advisory
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              Found a Business to Buy?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Expert guidance through every step of your acquisition.<br />
              I only get paid when you successfully close.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-md text-lg font-medium"
              onClick={() => {
                window.location.href = 'mailto:hello@myleskameron.com?subject=SMB Acquisition Advisory Inquiry';
              }}
            >
              Let&apos;s Discuss Your Deal <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            How Buy-Side Advisory Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-6">01</div>
              <h3 className="text-xl font-medium mb-4">Initial Consultation</h3>
              <p className="text-muted-foreground">
                We review your target business, financial situation, and acquisition goals. 
                I&apos;ll give you honest feedback on the deal&apos;s potential.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-6">02</div>
              <h3 className="text-xl font-medium mb-4">Deal Structuring</h3>
              <p className="text-muted-foreground">
                Together we craft an offer that works for both you and the seller. 
                Creative financing, earnouts, and risk mitigation included.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-6">03</div>
              <h3 className="text-xl font-medium mb-4">Close & Celebrate</h3>
              <p className="text-muted-foreground">
                I guide you through due diligence, financing, and closing. 
                Success fee due only when you take ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            What&apos;s Included
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-6">Deal Analysis & Strategy</h3>
              <ul className="space-y-3 text-left inline-block">
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Business valuation and financial analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Identification of risks and opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Negotiation strategy and positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Deal structure optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-6">Financing Assistance</h3>
              <ul className="space-y-3 text-left inline-block">
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">SBA loan application support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Bank package preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Alternative financing sources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Seller financing negotiation</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-6">Due Diligence Support</h3>
              <ul className="space-y-3 text-left inline-block">
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Due diligence checklist and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Financial statement analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Red flag identification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Third-party advisor coordination</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-6">Closing & Transition</h3>
              <ul className="space-y-3 text-left inline-block">
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Purchase agreement review</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Closing checklist management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">First 100 days planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Post-closing support (90 days)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            Success-Based Pricing
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-medium mb-8 text-center">My Fee Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Deal Size</span>
                  <span className="font-medium">Success Fee</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Under $1M</span>
                  <span>3% of purchase price</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">$1M - $5M</span>
                  <span>2.5% of purchase price</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Over $5M</span>
                  <span>2% of purchase price</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-center font-medium text-primary">
                  No upfront fees. No hourly charges. I only get paid when you close.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-2">
                Example: Buy a $2M business = $50K advisory fee
              </p>
              <p className="text-muted-foreground">
                Paid at closing from transaction proceeds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <Shield className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-medium text-xl mb-3">Risk Mitigation</h3>
              <p className="text-muted-foreground">
                I&apos;ve seen hundreds of deals. I know what can go wrong and how to protect you.
              </p>
            </div>
            
            <div className="text-center">
              <DollarSign className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-medium text-xl mb-3">Better Terms</h3>
              <p className="text-muted-foreground">
                My experience helps structure deals with less cash down and better protections.
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-medium text-xl mb-3">Speed & Confidence</h3>
              <p className="text-muted-foreground">
                Navigate complex situations quickly. Close in 45-60 days instead of dragging on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            Typical Acquisition Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-2xl font-light text-primary mr-6 flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Week 1-2: Initial Analysis & LOI</h3>
                  <p className="text-muted-foreground">
                    Analyze the business, structure the deal, submit Letter of Intent
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-2xl font-light text-primary mr-6 flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Week 3-4: Due Diligence</h3>
                  <p className="text-muted-foreground">
                    Deep dive into financials, operations, and legal matters
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-2xl font-light text-primary mr-6 flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Week 5-6: Financing & Legal</h3>
                  <p className="text-muted-foreground">
                    Secure financing, negotiate purchase agreement, finalize terms
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-2xl font-light text-primary mr-6 flex-shrink-0">
                  04
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Week 7-8: Closing</h3>
                  <p className="text-muted-foreground">
                    Final preparations, sign documents, transfer ownership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-3">
                What types of businesses do you work with?
              </h3>
              <p className="text-muted-foreground">
                I work with all types of SMBs: service businesses, manufacturing, distribution, 
                B2B services, and more. Typically $500K-$10M in value.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">
                What if the deal falls through?
              </h3>
              <p className="text-muted-foreground">
                You owe nothing. I only get paid on successful closings. If we identify 
                deal-breakers during diligence, we walk away and you pay zero.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">
                Do you help find businesses too?
              </h3>
              <p className="text-muted-foreground">
                Yes, I offer deal sourcing services for buyers who want help finding the right 
                business. This is a separate service with different pricing.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">
                Can you help with partnership deals?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. I&apos;ve structured many deals with multiple buyers, equity partners, 
                and investor groups. The fee is split proportionally.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">
                When should I contact you?
              </h3>
              <p className="text-muted-foreground">
                As soon as you&apos;ve identified a target business. Even before making an offer, 
                I can help evaluate if it&apos;s worth pursuing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Buy Your First Business?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              Let&apos;s discuss your target and how I can help you close successfully.
            </p>
            <div className="space-y-4">
              <button 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-md text-lg font-medium"
                onClick={() => {
                  window.location.href = 'mailto:hello@myleskameron.com?subject=SMB Acquisition Advisory Inquiry';
                }}
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-muted-foreground">
                Or email directly: hello@myleskameron.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}