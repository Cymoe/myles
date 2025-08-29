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
              Buy cash-flowing businesses without your own money. 67 battle-tested documents.
            </p>
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

            {/* Pricing Tiers */}
            <div className="border-t border-border/20 pt-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-12 text-center">Choose Your Path</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Starter Pack */}
                <div className="border border-border p-8 rounded-lg text-center">
                  <h3 className="font-serif text-xl mb-4">Starter Pack</h3>
                  <p className="text-4xl font-serif text-primary mb-4">Free</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                    <li>• 20 core documents</li>
                    <li>• $50M Empire Formula</li>
                    <li>• Deal finding templates</li>
                    <li>• Basic valuation tools</li>
                  </ul>
                  <Link 
                    href="/blueprint-free"
                    className="block w-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
                  >
                    Start Free
                  </Link>
                </div>
                
                {/* Blueprint Pro */}
                <div className="border-2 border-primary p-8 rounded-lg text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background px-4">
                    <span className="text-xs font-semibold text-primary uppercase">Most Popular</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4">Blueprint Pro</h3>
                  <p className="text-4xl font-serif text-primary mb-4">$497</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                    <li>• All 67 documents</li>
                    <li>• Advanced strategies</li>
                    <li>• Monthly updates</li>
                    <li>• Bonus: Deal analyzer</li>
                  </ul>
                  <button 
                    className="block w-full bg-muted text-muted-foreground px-6 py-3 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </button>
                </div>
                
                {/* Blueprint Elite */}
                <div className="border border-border p-8 rounded-lg text-center">
                  <h3 className="font-serif text-xl mb-4">Blueprint Elite</h3>
                  <p className="text-4xl font-serif text-primary mb-4">$2,997</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                    <li>• Everything in Pro</li>
                    <li>• Weekly deal flow</li>
                    <li>• Live deal analysis</li>
                    <li>• Co-investment opps</li>
                  </ul>
                  <button 
                    className="block w-full bg-muted text-muted-foreground px-6 py-3 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
              
              {/* Deal Club */}
              <div className="bg-muted/50 p-8 rounded-lg text-center max-w-2xl mx-auto">
                <h3 className="font-serif text-xl mb-4">Deal Club Membership</h3>
                <p className="text-3xl font-serif text-primary mb-2">$297/month</p>
                <p className="text-muted-foreground mb-6">
                  10 curated deals weekly with our analysis + financing connections
                </p>
                <button 
                  className="inline-block px-8 py-3 bg-muted text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  Launching Q1 2025
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}