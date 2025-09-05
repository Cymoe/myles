import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import DynamicGoalsSection from '@/components/DynamicGoalsSection';
import RevenueTrackerV2 from '@/components/RevenueTrackerV2';
import MissedDeals from '@/components/MissedDeals';
import QuickStats from '@/components/QuickStats';
import InlineLeadCapture from '@/components/InlineLeadCapture';
import ProductSystem from '@/components/ProductSystem';
import WealthProfileCTA from '@/components/WealthProfileCTA';

export default function Home() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="flex items-center justify-center relative bg-background pt-20 sm:pt-24">
        <div className="container mx-auto px-8 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Clean Typography */}
            <div className="space-y-6 text-center">
              <h1 className="font-light text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
                Myles Kameron
              </h1>
              <div className="w-16 h-px bg-primary mx-auto"></div>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mx-auto px-4 text-center">
                <span className="block md:inline">I buy, sell, and operate boring businesses</span>
              </p>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="mt-8 mb-12 animate-fade-in">
              <QuickStats />
            </div>
            
            {/* Deal Flow Email Capture */}
            <div id="newsletter" className="text-center my-12 animate-fade-in scroll-mt-20">
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Get weekly deal flow
              </h3>
              <NewsletterSignup />
            </div>
            
            {/* Missed Deals Section - Creates FOMO */}
            <MissedDeals />
            
            {/* Email Preview Section */}
            <div className="my-16 max-w-3xl mx-auto animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-foreground">
                  Deals like this land in your inbox every week
                </h3>
              </div>
              
              {/* Email Preview Container */}
              <div className="bg-white dark:bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                {/* Email Header */}
                <div className="border-b border-border p-4 bg-gray-50 dark:bg-background/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">From: Myles Kameron</p>
                      <p className="text-sm text-muted-foreground">Subject: 🔥 Hot deal: $1.8M EBITDA roofing company (Texas)</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Thursday, 9:00 AM</p>
                  </div>
                </div>
                
                {/* Email Body */}
                <div className="p-6 space-y-4">
                  <p className="text-base">Hey,</p>
                  
                  <p className="text-base">Found this roofing company in Dallas. Numbers are insane:</p>
                  
                  <div className="bg-gray-50 dark:bg-background/50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Revenue:</span>
                      <span className="font-medium">$5.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">EBITDA:</span>
                      <span className="font-medium">$1.8M (35% margins)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Asking:</span>
                      <span className="font-medium">$5.4M (3x multiple)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-base font-medium">Why I like it:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• 80% commercial contracts (stable revenue)</li>
                      <li>• Owner retiring, kids don&apos;t want the business</li>
                      <li>• Could easily add residential for 30% growth</li>
                      <li>• SBA pre-qualified at 90% LTV</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Want the broker contact? Reply &quot;SEND IT&quot; and I&apos;ll intro you.</p>
                  </div>
                  
                  <p className="text-base">-Myles</p>
                  
                  {/* Reply/Send Button - Bottom Right */}
                  <div className="flex justify-end mt-6">
                    <a 
                      href="#newsletter"
                      className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                    >
                      <span>Get deals like this</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      
                      {/* Hover Tooltip */}
                      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Join the list →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Email Capture - Primary Offer */}
            <div className="text-center my-16 max-w-xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                Don&apos;t miss your next deal
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get my complete acquisition system free
              </p>
              <div className="space-y-4">
                <Link 
                  href="/acquisition-accelerator" 
                  className="block w-full px-6 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-all text-lg"
                >
                  Start the Accelerator →
                </Link>
                <p className="text-sm text-muted-foreground">
                  It&apos;s free. Unsubscribe anytime.
                </p>
              </div>
            </div>
            
            {/* SMB Challenge CTA - Now in Product System */}
            
            {/* Revenue Tracking Lead Capture - Hidden for now */}
            {/* <InlineLeadCapture 
              title="Want My Revenue Tracking Template?"
              description="The exact spreadsheet I use to track monthly revenue, growth rates, and progress to $1M. Includes automated calculations and goal tracking."
              buttonText="Get the Free Template"
              leadMagnet="Revenue Tracking Template"
              className="my-12"
            /> */}
            
            {/* Product System Section */}
            <ProductSystem />
            
            {/* Editorial Content Section - Sorelle Style Layout */}
            <div className="max-w-7xl mx-auto mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Left Column - Text Content */}
                <div className="lg:col-span-2 space-y-3">
                  <p className="text-foreground font-light leading-snug text-lg">
                    Most people die at 25 and aren&apos;t buried until 75.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    They trade their life for a paycheck. Clock in. Clock out. Retire broke. Die with regrets.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    Not me.
                  </p>
                  
                  <div>
                    <p className="text-muted-foreground font-light leading-snug">
                      I&apos;m Myles. I buy boring service businesses that print money. ADUs. Turf. Painting.
                    </p>
                    <p className="text-muted-foreground font-light leading-snug">
                      The stuff nobody talks about at parties but everyone needs.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    Hit financial freedom at 33. Now I run everything remotely. No office. No commute.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    While everyone&apos;s chasing the next shiny tech startup, I&apos;m quietly rolling up service companies at 3-5x earnings. Boring? Yes. Profitable? Extremely.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    This site documents the playbook. The deals. The numbers. Everything.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug">
                    If you want inspiration, go watch a TED talk. If you want to get rich buying unglamorous businesses that actually make money, stick around.
                  </p>
                  
                  <p className="text-muted-foreground font-light leading-snug mt-4">
                    <span className="text-foreground">Found a deal?</span> I help serious buyers close their first acquisition. 
                    <Link href="/advisory" className="text-primary hover:underline">Learn more →</Link>
                  </p>
                </div>
                
                {/* Right Column - Portrait Image */}
                <div className="relative">
                  <div className="w-full h-[500px] relative rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/images/myles_hero.JPG"
                      alt="Myles Kameron Portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Public Goals Section - Dynamic from Notion */}
            <DynamicGoalsSection />
            
            {/* Wealth Profile CTA */}
            <WealthProfileCTA />
            
            
            {/* Social Links */}
            <div className="animate-fade-in animation-delay-1000">
              <div className="flex justify-center gap-6">
                <Link 
                  href="https://twitter.com/myleskameron" 
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>

                <Link 
                  href="mailto:hello@myleskameron.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Editorial Style */}
      <section className="py-32 bg-card dark:bg-card/50">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
              <h2 className="text-2xl font-light text-foreground tracking-wide">Explore</h2>
            </div>
            
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              <Link href="/now" className="group flex-1">
                <div className="bg-background dark:bg-card p-8 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-border text-center">
                  <h3 className="text-xl font-light text-foreground mb-3 tracking-wide">Now</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Current location & focus
                  </p>
                  <div className="mt-4 text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-sm tracking-wide">VIEW →</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/archive" className="group flex-1">
                <div className="bg-background dark:bg-card p-8 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-border text-center">
                  <h3 className="text-xl font-light text-foreground mb-3 tracking-wide">Archive</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Essays & deeper thoughts
                  </p>
                  <div className="mt-4 text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-sm tracking-wide">EXPLORE →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Flow Section */}
      <section id="newsletter" className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              Don&apos;t miss your next deal
            </h3>
            <NewsletterSignup />
          </div>
        </div>
      </section>

    </>
  );
}