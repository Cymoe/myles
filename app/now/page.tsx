import Link from 'next/link';

export default function NowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Now
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
              December 2024. Vienna, Austria.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="luxury-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Location */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Location</h2>
              <p className="text-lg text-muted-foreground">
                Month 3 in Vienna. Perfect for closing deals remotely. 
                Banks here love American acquisitions.
              </p>
            </div>

            {/* Business */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Business</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>• HVAC roll-up: 8 companies, $12M revenue</p>
                <p>• Dental: LOI on 3 practices in Texas</p>
                <p>• Blueprint: 237 students executing QLA</p>
                <p>• New sector: Analyzing vet clinic fragmentation</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Daily</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>5:00 - Gym</p>
                <p>7:00 - Deal sourcing</p>
                <p>11:00 - Coffee + bank calls</p>
                <p>14:00 - Due diligence reviews</p>
                <p>16:00 - Portfolio CEO check-ins</p>
              </div>
            </div>

            {/* Next */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Next</h2>
              <p className="text-lg text-muted-foreground">
                Prague → Budapest → Belgrade<br />
                Following the Danube east.
              </p>
            </div>

            {/* Link to Archive */}
            <div className="text-center pt-16 border-t border-border/20">
              <Link 
                href="/archive" 
                className="text-lg text-muted-foreground hover:text-foreground transition-colors link-luxury"
              >
                View previous →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}