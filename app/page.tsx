import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="flex items-center justify-center relative bg-white pt-32">
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Clean Typography */}
            <div className="space-y-6 text-center">
              <h1 className="font-light text-5xl md:text-6xl lg:text-7xl tracking-wide text-gray-900">
                Myles Kameron
              </h1>
              <div className="w-16 h-px bg-primary mx-auto"></div>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                I buy and operate boring businesses from a distance
              </p>
            </div>
            
            {/* Public Goals Section - Now First */}
            <div className="max-w-4xl mx-auto my-24 p-12 bg-gray-50 border-l-4 border-l-primary border-t border-b border-r border-gray-200">
              <div className="space-y-12">
                {/* Section Header */}
                <div className="text-center">
                  <h2 className="font-light text-3xl text-gray-900 tracking-wide mb-2">Public Goals</h2>
                  <p className="text-gray-600 font-light">Roll-ups in progress. Zero personal capital.</p>
                </div>
                
                {/* 2025 Goals */}
                <div>
                  <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">2025</h3>
                  <div className="space-y-2 text-gray-600 font-light">
                    <p>• Exit HVAC roll-up to PE (Q2)</p>
                    <p>• Acquire 10 dental practices</p>
                    <p>• $50M combined portfolio revenue</p>
                    <p>• Launch veterinary consolidation</p>
                    <p>• 1,000 Blueprint students closing deals</p>
                  </div>
                </div>

                {/* Current Focus */}
                <div>
                  <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">Current Focus</h3>
                  <div className="space-y-2 text-gray-600 font-light">
                    <p>• HVAC: 5 more acquisitions lined up</p>
                    <p>• Dental: LOIs on 3 practices</p>
                    <p>• Training portfolio CEOs</p>
                    <p>• Refining 100% OPM structures</p>
                  </div>
                </div>

                {/* Long Term */}
                <div>
                  <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">10 Years</h3>
                  <div className="space-y-2 text-gray-600 font-light">
                    <p>• 100 cash-flowing acquisitions</p>
                    <p>• $1B portfolio value</p>
                    <p>• Teaching QLA at scale</p>
                    <p>• Zero personal capital deployed</p>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 font-light leading-relaxed">
                    Find fragmented sectors. Buy at 3-5x EBITDA. 
                    Consolidate. Exit to PE at 10-15x. Repeat.
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed mt-3">
                    No personal money. No personal guarantees. 
                    Just OPM, leverage, and execution.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Editorial Content Section - Sorelle Style Layout */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Left Column - Text Content */}
                <div className="lg:col-span-2 space-y-3">
                  <p className="text-gray-700 font-light leading-snug text-lg">
                    What does it mean to build wealth in a system designed to keep you busy?
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    We&apos;re told success is about achievement. Status. Hustle. Obedience. But what if none of that actually makes us free?
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    I don&apos;t have all the answers. I only have questions—good ones. Questions that gnaw at the edges of modern life, the kind that keep you up at night once you let them in. Like:
                  </p>
                  
                  <div className="space-y-0.5 text-gray-600 font-light text-sm pl-4 mb-3 border-l-2 border-primary">
                    <p className="pl-4">• Why do we need to earn rest?</p>
                    <p className="pl-4">• Who profits from your confusion, your disconnection, your despair?</p>
                    <p className="pl-4">• Can contentment exist without stagnation?</p>
                    <p className="pl-4">• What&apos;s the point of wealth if you&apos;re still a prisoner inside your own mind?</p>
                    <p className="pl-4">• Why does freedom scare us more than servitude?</p>
                  </div>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    I&apos;m Myles.
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    I became financially free at 33, escaped the performance treadmill, and now spend my days asking the questions most people are too busy—or too afraid—to ask.
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    I live between worlds: investor and philosopher, creator and recluse, nature and internet, rebellion and ritual.
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    Through boring businesses, systematic thinking, and experimental living, I&apos;m exploring how to <span className="italic">opt out</span> of the default life script and choose a path that&apos;s both sovereign and sincere.
                  </p>
                  
                  <p className="text-gray-600 font-light leading-snug">
                    This isn&apos;t about aesthetic minimalism or vanlife porn. It&apos;s about taking your freedom seriously—<span className="italic">internally and structurally</span>. Not just talking about a better world. <span className="italic">Becoming it</span>.
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
            
            {/* Primary CTA */}
            <div className="mb-16 animate-fade-in animation-delay-800 text-center">
              <Link 
                href="/blueprint" 
                className="inline-block"
              >
                <div className="border-2 border-primary px-12 py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-serif">The Blueprint: $888</span>
                </div>
              </Link>
            </div>
            
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
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
              <h2 className="text-2xl font-light text-gray-900 tracking-wide">Explore</h2>
            </div>
            
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              <Link href="/now" className="group flex-1">
                <div className="bg-white p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                  <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">Now</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Current location & focus
                  </p>
                  <div className="mt-4 text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-sm tracking-wide">VIEW →</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/archive" className="group flex-1">
                <div className="bg-white p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                  <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">Archive</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
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
            <h3 className="font-serif text-3xl mb-6">Stay Updated</h3>
            <p className="text-muted-foreground mb-8">
              Monthly coordinates. No fluff.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

    </>
  );
}