export default function ArchivePage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-20" />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Archive
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
              26 months. 26 locations. Still counting.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <section className="luxury-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* 2024 */}
            <div className="mb-20">
              <h2 className="font-serif text-3xl mb-8">2024</h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">November</p>
                    <p className="text-muted-foreground">Vienna, Austria</p>
                  </div>
                  <div className="text-muted-foreground">
                    Closed Series A consulting deal. $180k MRR.
                  </div>
                  <div className="text-muted-foreground">
                    Blueprint launch. 142 sales first week.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">October</p>
                    <p className="text-muted-foreground">Budapest, Hungary</p>
                  </div>
                  <div className="text-muted-foreground">
                    HVAC expansion approved. State #2.
                  </div>
                  <div className="text-muted-foreground">
                    Thermal baths and deal structuring.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">September</p>
                    <p className="text-muted-foreground">Belgrade, Serbia</p>
                  </div>
                  <div className="text-muted-foreground">
                    First acquisition LOI signed.
                  </div>
                  <div className="text-muted-foreground">
                    Best internet speeds in Europe.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">August</p>
                    <p className="text-muted-foreground">Istanbul, Turkey</p>
                  </div>
                  <div className="text-muted-foreground">
                    Consulting firm hits $2M ARR.
                  </div>
                  <div className="text-muted-foreground">
                    Bosphorus views. 4am work sessions.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">July</p>
                    <p className="text-muted-foreground">Athens, Greece</p>
                  </div>
                  <div className="text-muted-foreground">
                    Hired COO for HVAC business.
                  </div>
                  <div className="text-muted-foreground">
                    Finally removed from operations.
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="mb-20">
              <h2 className="font-serif text-3xl mb-8">2023</h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">December</p>
                    <p className="text-muted-foreground">Dubai, UAE</p>
                  </div>
                  <div className="text-muted-foreground">
                    First seven-figure year combined.
                  </div>
                  <div className="text-muted-foreground">
                    Tax optimization implemented.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">June</p>
                    <p className="text-muted-foreground">Lisbon, Portugal</p>
                  </div>
                  <div className="text-muted-foreground">
                    Launched digital consulting arm.
                  </div>
                  <div className="text-muted-foreground">
                    Best work-life integration found.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-border/20">
                  <div>
                    <p className="text-primary font-medium">January</p>
                    <p className="text-muted-foreground">Mexico City, Mexico</p>
                  </div>
                  <div className="text-muted-foreground">
                    First month fully remote. It worked.
                  </div>
                  <div className="text-muted-foreground">
                    Revenue up 23% vs being on-site.
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-card/30 rounded-lg p-8 mb-16">
              <h3 className="font-serif text-2xl mb-8 text-center">The Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-3xl font-serif text-primary">26</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-primary">52</p>
                  <p className="text-sm text-muted-foreground">Cities</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-primary">$4.2M</p>
                  <p className="text-sm text-muted-foreground">Revenue Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Days in Office</p>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Still building. Still moving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}