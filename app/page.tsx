import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import DynamicGoalsSection from '@/components/DynamicGoalsSection';
import RevenueTrackerV2 from '@/components/RevenueTrackerV2';
import QuickStats from '@/components/QuickStats';
import InlineLeadCapture from '@/components/InlineLeadCapture';
import ProductSystem from '@/components/ProductSystem';
import WealthProfileCTA from '@/components/WealthProfileCTA';

export default function Home() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="flex items-center justify-center relative bg-background pt-12">
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
            
            {/* Revenue Tracker - Dynamic from Notion */}
            <RevenueTrackerV2 />
            
            {/* Remote Ops Contextual CTA */}
            <div className="text-center my-8 p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                Want to learn how I manage these businesses remotely?
              </p>
              <Link href="https://www.remoteops.ai/" target="_blank" className="text-primary hover:underline text-sm font-semibold">
                Check out Remote Ops →
              </Link>
            </div>
            
            {/* Revenue Tracking Lead Capture */}
            <InlineLeadCapture 
              title="Want My Revenue Tracking Template?"
              description="The exact spreadsheet I use to track monthly revenue, growth rates, and progress to $1M. Includes automated calculations and goal tracking."
              buttonText="Get the Free Template"
              leadMagnet="Revenue Tracking Template"
              className="my-12"
            />
            
            {/* Product System Section */}
            <ProductSystem />
            
            {/* Public Goals Section - Dynamic from Notion */}
            <DynamicGoalsSection />
            
            {/* Editorial Content Section - Sorelle Style Layout */}
            <div className="max-w-7xl mx-auto mb-20">
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

      {/* Newsletter Section */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-6">The Boring Business Bulletin</h3>
            <p className="text-muted-foreground mb-8">
              Weekly deal flow, acquisition strategies, and revenue insights from someone actually doing it.
              <br />
              <span className="text-sm">Real deals. Real numbers. No fluff.</span>
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

    </>
  );
}