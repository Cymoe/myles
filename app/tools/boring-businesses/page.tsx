export default function BoringBusinessesPage() {
  const businesses = [
    {
      name: "HVAC Services",
      avgRevenue: "$2-5M",
      multiple: "3-5x EBITDA",
      why: [
        "Recurring maintenance contracts",
        "High-ticket emergency repairs", 
        "Fragmented market (mom & pop shops)",
        "Baby boomer owners retiring"
      ],
      howToFind: "Search '[city] HVAC' on Google Maps. Look for 10-30 year old businesses."
    },
    {
      name: "Dental Practices",
      avgRevenue: "$1-3M",
      multiple: "4-6x EBITDA",
      why: [
        "Stable patient base",
        "Insurance-backed revenue",
        "High margins (60-70%)",
        "Consolidation opportunities"
      ],
      howToFind: "Contact dental practice brokers. Target solo practitioners near retirement."
    },
    {
      name: "Plumbing Companies",
      avgRevenue: "$1-4M",
      multiple: "3-4x EBITDA",
      why: [
        "Essential service (recession-proof)",
        "Mix of residential and commercial",
        "Service agreements create predictability",
        "Low technology risk"
      ],
      howToFind: "Local business brokers. Check state contractor license databases."
    },
    {
      name: "Property Management",
      avgRevenue: "$500K-2M",
      multiple: "2-4x EBITDA",
      why: [
        "100% recurring revenue",
        "Scalable with systems",
        "Low capital requirements",
        "Geographic expansion potential"
      ],
      howToFind: "Real estate investor meetups. Property management associations."
    },
    {
      name: "Commercial Cleaning",
      avgRevenue: "$500K-3M", 
      multiple: "2-3x EBITDA",
      why: [
        "Long-term contracts",
        "Low barrier to entry",
        "Simple operations",
        "Easy to systematize"
      ],
      howToFind: "Business-for-sale websites. Cold call owners of 10+ year old companies."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">5 Boring Businesses That Print Money</h1>
            <p className="text-muted-foreground text-lg">
              Real businesses you can buy for 3-5x earnings and sell for 10-15x to PE
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-gray max-w-none mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Why Boring Businesses?</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Predictable Cash Flow:</strong> These businesses have been around for decades</li>
                <li>• <strong>No Tech Risk:</strong> Plumbing won&apos;t be disrupted by an app</li>
                <li>• <strong>Seller Financing:</strong> Owners often carry 20-50% of purchase price</li>
                <li>• <strong>Bank Friendly:</strong> SBA loves businesses with 3+ years history</li>
                <li>• <strong>PE Roll-Up Targets:</strong> Exit at 3x what you paid</li>
              </ul>
            </div>
          </div>

          {/* Business Profiles */}
          <div className="space-y-8">
            {businesses.map((business, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{index + 1}. {business.name}</h3>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <span>Avg Revenue: <strong className="text-foreground">{business.avgRevenue}</strong></span>
                      <span>Multiple: <strong className="text-foreground">{business.multiple}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Why It Prints Money:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {business.why.map((reason, i) => (
                        <li key={i}>• {reason}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">How to Find Deals:</h4>
                    <p className="text-sm text-muted-foreground">{business.howToFind}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The Formula */}
          <div className="mt-12 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-6 text-center">The Boring Business Formula</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Buy</div>
                <p className="text-sm text-muted-foreground">3-5x EBITDA<br />from retiring owners</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Improve</div>
                <p className="text-sm text-muted-foreground">Add 2-3 acquisitions<br />Optimize operations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Sell</div>
                <p className="text-sm text-muted-foreground">10-15x EBITDA<br />to private equity</p>
              </div>
            </div>
          </div>

          {/* Action Steps */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-6">Your Next Steps:</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong>1. Pick Your Sector:</strong> Choose based on your location and interests</li>
              <li><strong>2. Study 20 Businesses:</strong> Look at listings, understand valuations</li>
              <li><strong>3. Talk to 5 Owners:</strong> Practice the retirement conversation</li>
              <li><strong>4. Get Pre-Approved:</strong> SBA lender or local bank relationship</li>
              <li><strong>5. Make 10 Offers:</strong> Expect 1-2 to turn into real negotiations</li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want the complete acquisition system with 30 days of deal-making insights?
            </p>
            <a 
              href="/acquisition-accelerator" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md font-semibold"
            >
              Start the Accelerator →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}