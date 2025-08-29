'use client';

import Link from 'next/link';

export default function BlueprintPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              The Blueprint
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              67 battle-tested documents from $80M+ in service business deals
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-semibold animate-fade-in animation-delay-400">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              SOLD OUT
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="luxury-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Free vs Paid */}
            <div className="mb-20">
              <div className="bg-primary/5 border-2 border-primary p-8 rounded-lg text-center mb-12">
                <h2 className="font-serif text-2xl mb-4">Start Free, Scale Fast</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get 20 core documents free. Prove they work. Upgrade when ready.
                </p>
                <Link 
                  href="/blueprint-free" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Get Starter Pack Free →
                </Link>
              </div>
              
              <h2 className="font-serif text-2xl md:text-3xl mb-8">The Full Arsenal: 67 Documents</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Find Hidden Deals</h3>
                  <p>Off-market strategies that bypass brokers. Direct owner outreach templates. Distressed seller triggers. 10 deals per week on autopilot. The exact system behind $80M in closed transactions.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Buy With No Money Down</h3>
                  <p>47 creative financing structures. SBA loan hacks for 90% financing. Seller finance domination scripts. Revenue share seduction. Make sellers pay YOU to take their business.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Aggressive Due Diligence</h3>
                  <p>200-point inspection that saves millions. Forensic financial analysis. Hidden liability scanner. Cut asking price by 50%. Find the bodies before you buy.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">The Operator System</h3>
                  <p>Hire GMs who run everything. Performance-based comp. Training checklists. Weekly reporting. Clone yourself at 1/10th the cost.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Exit Strategy</h3>
                  <p>Build to sell from day one. Financial packaging. Finding buyers. 3-8x EBITDA exits. Roll-up strategies. Every template included.</p>
                </div>
              </div>
            </div>

            {/* Documents Included */}
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">67 Acquisition Weapons Including:</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• The $50M Service Empire Formula</p>
                <p>• Off-Market Deal Funnel (23% response rate)</p>
                <p>• Shock & Awe Negotiation Scripts</p>
                <p>• Deal Killer Checklist (200 points)</p>
                <p>• Creative Deal Structure Bible</p>
                <p>• No-Money-Down Playbook</p>
                <p>• Velocity Acquisition Model</p>
                <p>• Exit-on-Entry System (5x in 18 months)</p>
                <p>• Service Business Mafia Builder</p>
                <p>• Market Domination Blueprints</p>
                <p>• Plus 57 more...</p>
              </div>
            </div>

            {/* No Bullshit */}
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">Why This Crushes $10K Courses:</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• SMB Deal Hunter shows deals. We show HOW to steal them.</p>
                <p>• Acquira charges $12,500 for hand-holding. We give you the playbook.</p>
                <p>• QLA screams at you for thousands. We give you the tactics.</p>
                <p>• No fluff. No community drama. Just documents that close deals.</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="border-t border-border/20 pt-20">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-3xl mb-8">Investment</h2>
                
                <div className="p-8 bg-red-500/5 border-2 border-red-500/20 rounded-lg mb-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    The complete Blueprint system
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl line-through text-muted-foreground">$1,497</span>
                    <span className="text-4xl font-serif text-foreground">$888</span>
                  </div>
                  <p className="text-red-600 font-semibold mb-6">
                    Currently Sold Out
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re updating the documents with new strategies from recent deals.<br/>
                    Join the newsletter to be notified when we reopen.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Want to see what&apos;s inside first?
                  </p>
                  <Link 
                    href="/blueprint-free"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                  >
                    Get 20 Free Documents →
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    No credit card required. Download instantly.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="border-t border-border/20 pt-20 mt-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-12">Common Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Why is it sold out?</h3>
                  <p className="text-muted-foreground">
                    We periodically close enrollment to update documents with new deal strategies and ensure quality. Plus, scarcity is real - too many people using the same tactics dilutes effectiveness.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How is this different from expensive courses?</h3>
                  <p className="text-muted-foreground">
                    No videos, no calls, no community drama. Just 67 documents you can use immediately. Think of it as buying the answer key instead of taking the class.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is this for beginners?</h3>
                  <p className="text-muted-foreground">
                    Yes. The documents assume zero experience. Start with the Quick Start section, follow the 30-day roadmap, and you&apos;ll be analyzing deals within a week.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">What if I can&apos;t afford $888?</h3>
                  <p className="text-muted-foreground">
                    Start with the free 20-document Starter Pack. Use it to find and analyze deals. The knowledge alone is worth thousands. Upgrade when you&apos;re ready.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Questions? Email hello@myleskameron.com<br/>
                  I personally read and respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}