import Link from 'next/link';
import { FileText, Calculator, CheckCircle, TrendingUp } from 'lucide-react';

export default function WelcomePage() {
  const resources = [
    {
      title: "Revenue Tracking Spreadsheet",
      description: "Track monthly revenue, calculate growth rates, and monitor progress to $1M",
      icon: Calculator,
      link: "/tools/revenue-tracker",
      color: "text-green-600"
    },
    {
      title: "5 Boring Businesses That Print Money",
      description: "Detailed breakdown of the best sectors to buy into and why they work",
      icon: TrendingUp,
      link: "/tools/boring-businesses",
      color: "text-blue-600"
    },
    {
      title: "The Boring Business Checklist",
      description: "27 questions to evaluate any acquisition opportunity",
      icon: CheckCircle,
      link: "/tools/business-checklist",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl font-serif mb-4">Welcome to the Inner Circle</h1>
            <p className="text-xl text-muted-foreground">
              Your boring business resources are ready.
            </p>
          </div>

          {/* Quick Message */}
          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <h2 className="text-2xl font-semibold mb-4">Here&apos;s What Happens Next:</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">1. Check Your Email:</strong> I just sent you a welcome message with quick tips
              </li>
              <li>
                <strong className="text-foreground">2. Access Your Resources:</strong> Everything is available below (bookmark this page)
              </li>
              <li>
                <strong className="text-foreground">3. Weekly Insights:</strong> Every Thursday, I&apos;ll share real deals and what I&apos;m seeing in the market
              </li>
            </ol>
          </div>

          {/* Resources Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Your Resources:</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${resource.color} group-hover:scale-110 transition-transform`}>
                      <resource.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mb-12">
            <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Get Each Week:</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Real Deal Analysis:</strong> Actual businesses I&apos;m looking at with numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Market Intelligence:</strong> What sectors are hot, what multiples I&apos;m seeing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Tactical Advice:</strong> Negotiation tactics, financing strategies, operational improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">No Fluff:</strong> Just what&apos;s working in the trenches</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Questions? Hit reply to any of my emails. I read everything.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://twitter.com/myleskameron" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter →
              </a>
              <a 
                href="mailto:hello@myleskameron.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}