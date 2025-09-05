'use client';

import { useState } from 'react';
import { Download, TrendingUp, Users, DollarSign, Clock, MapPin, Building } from 'lucide-react';

export default function FiftyBoringBusinessesPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Trigger download
    const link = document.createElement('a');
    link.href = '/downloads/50-Boring-Businesses-Guide.pdf';
    link.download = '50-Boring-Businesses-Guide.pdf';
    link.click();
    
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const categories = [
    {
      title: "Essential Service Businesses",
      icon: Building,
      count: 8,
      examples: ["HVAC Services", "Plumbing", "Electrical", "Pest Control"],
      color: "blue"
    },
    {
      title: "Automotive & Equipment",
      icon: MapPin,
      count: 6,
      examples: ["Auto Repair", "Mobile RV Repair", "Car Washes", "Equipment Rental"],
      color: "green"
    },
    {
      title: "Home Services",
      icon: Users,
      count: 6,
      examples: ["Roofing", "Window Replacement", "Garage Doors", "Flooring"],
      color: "purple"
    },
    {
      title: "Transportation & Logistics",
      icon: TrendingUp,
      count: 6,
      examples: ["Trucking", "Moving Companies", "Delivery Routes", "Medical Transport"],
      color: "orange"
    },
    {
      title: "Professional Services",
      icon: DollarSign,
      count: 5,
      examples: ["Accounting Firms", "Insurance Agencies", "Property Management", "Funeral Homes"],
      color: "red"
    },
    {
      title: "Specialty & Industrial",
      icon: Clock,
      count: 8,
      examples: ["Machine Shops", "Sign Manufacturing", "Commercial Hood Cleaning", "Parking Lot Striping"],
      color: "indigo"
    }
  ];

  const stats = [
    { label: "Boomer Businesses", value: "12M", subtext: "changing hands" },
    { label: "Total Value", value: "$14T", subtext: "transferring" },
    { label: "Are Profitable", value: "78%", subtext: "of boomer businesses" },
    { label: "No Exit Plan", value: "60%", subtext: "need buyers" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              50 Boring Businesses That Print Money
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The complete guide to businesses Baby Boomers are desperate to sell
            </p>
            
            {/* Download CTA */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-semibold rounded-lg disabled:opacity-50 mb-6"
            >
              <Download className="w-5 h-5" />
              <span>{isDownloading ? 'Downloading...' : 'Download the Complete PDF Guide'}</span>
            </button>
            
            <p className="text-sm text-muted-foreground">
              No email required • Instant download • 15-page guide
            </p>
          </div>
        </div>
      </section>

      {/* Silver Tsunami Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">The Silver Tsunami Opportunity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">What&apos;s Inside the Guide</h2>
              <p className="text-lg text-muted-foreground">
                50 businesses organized into 6 categories, each with acquisition strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color}-500/10 rounded-lg mb-4`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.count} business types
                  </p>
                  
                  <div className="space-y-1">
                    {category.examples.map((example, i) => (
                      <div key={i} className="text-sm text-muted-foreground">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* What You'll Learn */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">What You&apos;ll Learn</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Which businesses sell most frequently (with data)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Typical valuation multiples for each type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to find motivated sellers before listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Why these businesses are SBA-friendly</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Top 10 picks for first-time buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>The &quot;Boring Business Success Formula&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>30-day action plan to find deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Direct outreach templates that work</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Top 10 Preview */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Preview: Top 10 for First-Time Buyers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <div>
                      <span className="font-medium">Laundromats</span>
                      <p className="text-sm text-muted-foreground">Semi-passive, simple operations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <div>
                      <span className="font-medium">Car Washes</span>
                      <p className="text-sm text-muted-foreground">Membership models, appreciating assets</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <div>
                      <span className="font-medium">Self-Storage</span>
                      <p className="text-sm text-muted-foreground">90%+ occupancy, minimal labor</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">4.</span>
                    <div>
                      <span className="font-medium">Vending Routes</span>
                      <p className="text-sm text-muted-foreground">Part-time possible, scale slowly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">5.</span>
                    <div>
                      <span className="font-medium">Commercial Cleaning</span>
                      <p className="text-sm text-muted-foreground">Contracted revenue, night work</p>
                    </div>
                  </li>
                </ol>
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-2">+45 More</p>
                    <p className="text-sm text-muted-foreground">Get all 50 in the guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Find Your Boring Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While you&apos;re reading this, another Boomer just decided to retire. The opportunity won&apos;t last forever.
            </p>
            
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-semibold rounded-lg disabled:opacity-50 mb-6"
            >
              <Download className="w-5 h-5" />
              <span>{isDownloading ? 'Downloading...' : 'Get the 50 Businesses Guide (PDF)'}</span>
            </button>
            
            <div className="mt-8 p-6 bg-background rounded-lg border border-border">
              <p className="font-semibold mb-2">Want the complete acquisition system?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Get all 32 Blueprint documents, creative financing strategies, and a 30-day email course.
              </p>
              <a 
                href="/acquisition-accelerator"
                className="text-primary hover:underline font-medium"
              >
                Join the Acquisition Accelerator (Free) →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}