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
import GoldenSnitch from '@/components/GoldenSnitch';

export default function Home() {
  return (
    <>
      {/* Golden Snitch - Magical Easter Egg */}
      <GoldenSnitch />
      
      {/* Hero Section - Editorial Style */}
      <section className="flex items-center justify-center relative bg-background">
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
              
              {/* Intro Paragraph */}
              <div className="max-w-2xl mx-auto mt-8 px-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  I&apos;ve spent the last decade running and acquiring service businesses that most people overlook—plumbing, 
                  painting, turf, roofing, etc. The unsexy stuff that prints cash. Now I share the best deals I find 
                  with a small group of serious buyers. No hype, no courses to sell. Just real opportunities 
                  with actual numbers.
                </p>
              </div>
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
            
            {/* Effortless Abundance Guide - Secondary Offer */}
            <div className="my-16 max-w-4xl mx-auto animate-fade-in">
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800/50">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <span className="inline-block px-3 py-1 bg-slate-700 text-white text-xs font-semibold rounded-full">NEW GUIDE</span>
                      {/* Tiny golden snitch hint */}
                      <div className="relative w-5 h-5 opacity-70 animate-pulse" title="Catch the golden snitch for a special edition...">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-sm shadow-yellow-400/50">
                          <div className="absolute inset-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
                          <div className="absolute top-[1px] left-[1px] w-1 h-1 bg-white rounded-full opacity-80" />
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2">
                          <div className="absolute -left-[4px] w-[4px] h-[2px] bg-white/60 rounded-full" />
                          <div className="absolute -right-[4px] w-[4px] h-[2px] bg-white/60 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground">
                      Effortless Abundance Guide
                    </h3>
                    <p className="text-muted-foreground">
                      How to cultivate an ultra-wealthy mind. Master the thought patterns and daily rituals of high-net-worth individuals.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-slate-600 dark:text-slate-400 mr-2">✓</span>
                        5 thought patterns for effortless abundance
                      </li>
                      <li className="flex items-center">
                        <span className="text-slate-600 dark:text-slate-400 mr-2">✓</span>
                        The &quot;Abundance Ignition&quot; morning routine
                      </li>
                      <li className="flex items-center">
                        <span className="text-slate-600 dark:text-slate-400 mr-2">✓</span>
                        Business decision-making templates
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground/60 italic mt-3">
                      💫 Psst... seekers who catch the golden snitch unlock hidden wealth codes
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <Link 
                      href="/effortless-abundance" 
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl"
                    >
                      Get Your Free Guide
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Instant download • No spam
                    </p>
                  </div>
                </div>
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
            
            {/* Public Goals Section - Dynamic from Notion */}
            <div className="my-16">
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Below you&apos;ll find my personal and business goals, shared publicly because I believe in 
                  the power of public accountability. When you declare your intentions to the world, 
                  you&apos;re more likely to follow through.
                </p>
                
                {/* Mindset Connection */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-950/10 rounded-lg inline-block">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Pro tip:</span> Goals without the right mindset are just wishes. 
                    <Link href="/effortless-abundance" className="text-slate-600 dark:text-slate-400 underline hover:no-underline ml-1">
                      Learn the mental frameworks I use →
                    </Link>
                  </p>
                </div>
              </div>
              <DynamicGoalsSection />
            </div>
            
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
                    Hit financial freedom at 33. Now I run everything <Link href="/now" className="hover:text-primary hover:underline transition-colors">remotely</Link>. No office. No commute.
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
                    <a href="mailto:hello@myleskameron.com?subject=Business Acquisition Advisory Inquiry" className="text-primary hover:underline">Email me →</a>
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


      {/* Deal Flow Section */}
      <section id="newsletter" className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              Don&apos;t miss your next deal
            </h3>
            <NewsletterSignup />
            
            {/* Alternative Offer */}
            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Want mindset work instead of deals?
              </p>
              <Link 
                href="/effortless-abundance" 
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
              >
                Get The Effortless Abundance Guide
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Image Section */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/images/ocean.png"
          alt="Ocean cliff view"
          fill
          className="object-cover opacity-60"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

    </>
  );
}