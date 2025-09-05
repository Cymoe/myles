import Link from 'next/link';

export default function GoalsPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Goals
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
              Put it out into the ether and watch it return. <br/> Zero personal capital.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="luxury-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* 2025 Goals */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">2025</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• Exit HVAC roll-up to PE (Q2)</p>
                <p>• Acquire 10 dental practices</p>
                <p>• $50M combined portfolio revenue</p>
                <p>• Launch veterinary consolidation</p>
                <p>• 1,000 Blueprint students closing deals</p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Current Focus</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• HVAC: 5 more acquisitions lined up</p>
                <p>• Dental: LOIs on 3 practices</p>
                <p>• Training portfolio CEOs</p>
                <p>• Refining 100% OPM structures</p>
              </div>
            </div>

            {/* Long Term */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">10 Years</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• 100 cash-flowing acquisitions</p>
                <p>• $1B portfolio value</p>
                <p>• Teaching QLA at scale</p>
                <p>• Zero personal capital deployed</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                Find fragmented sectors. Buy at 3-5x EBITDA. 
                Consolidate. Exit to PE at 10-15x. Repeat.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                No personal money. No personal guarantees. 
                Just OPM, leverage, and execution.
              </p>
            </div>

            {/* Link to Now */}
            <div className="text-center pt-16 border-t border-border/20">
              <Link 
                href="/now" 
                className="text-lg text-muted-foreground hover:text-foreground transition-colors link-luxury"
              >
                See what I&apos;m doing now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}