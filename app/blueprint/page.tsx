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
              The exact QLA acquisition playbook. No theory. Just deals.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="luxury-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* What You Get */}
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">What&apos;s Inside:</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">The Sectors</h3>
                  <p>HVAC, plumbing, dental practices, vet clinics. Why these print money. How to spot fragmented markets. The 100+ operator rule.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">The Acquisition Process</h3>
                  <p>Finding motivated sellers. The retirement pitch. Due diligence checklist. Negotiation scripts. 3-5x EBITDA entry framework.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">The Financing</h3>
                  <p>100% OPM deals. Bank pitch decks. Asset-based lending. No personal guarantees. The exact scripts that got me $2.7M.</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">The Roll-Up</h3>
                  <p>Consolidation playbook. Back-office synergies. 5-10 acquisition timeline. Exit to PE at 10-15x. Every template included.</p>
                </div>
              </div>
            </div>

            {/* Format */}
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">Format:</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• 47 acquisition documents. Instant download.</p>
                <p>• Live deal examples from my portfolio.</p>
                <p>• Updated with every exit I complete.</p>
                <p>• Cold-call scripts that actually work.</p>
              </div>
            </div>

            {/* No Bullshit */}
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">What This Isn&apos;t:</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• Not Dan Pena theory. Actual executed deals.</p>
                <p>• Not a mastermind. Do the work yourself.</p>
                <p>• Not for wannabes. You need $50k minimum.</p>
                <p>• Not magic. Just proven acquisition tactics.</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-center border-t border-border/20 pt-20">
              <p className="text-4xl font-serif text-primary mb-8">$888</p>
              <p className="text-lg text-muted-foreground mb-12">
                The complete QLA playbook.<br />
                Execute or stay broke.
              </p>
              
              <a 
                href="https://buy.stripe.com/your-link-here" 
                className="inline-block btn-luxury px-16 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg"
              >
                Buy Now
              </a>
              
              <p className="mt-8 text-sm text-muted-foreground">
                Instant access. No refunds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}