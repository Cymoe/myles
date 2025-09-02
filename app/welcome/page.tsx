import Link from 'next/link';
import { Calculator, CheckCircle, TrendingUp } from 'lucide-react';

export default function WelcomePage() {
  const resources = [
    {
      title: "Revenue Tracker",
      subtitle: "Track your way to $1M",
      description: "Monthly revenue tracking with automated growth calculations",
      icon: Calculator,
      link: "/tools/revenue-tracker",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 to-green-600/10",
      iconBg: "bg-emerald-500/10",
      number: "01"
    },
    {
      title: "5 Boring Businesses",
      subtitle: "That absolutely print",
      description: "Detailed breakdowns of the best sectors to acquire",
      icon: TrendingUp,
      link: "/tools/boring-businesses",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      iconBg: "bg-blue-500/10",
      number: "02"
    },
    {
      title: "Deal Checklist",
      subtitle: "27 must-ask questions",
      description: "Complete evaluation framework for any acquisition",
      icon: CheckCircle,
      link: "/tools/business-checklist",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      iconBg: "bg-purple-500/10",
      number: "03"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <span className="text-4xl">🤝</span>
            </div>
            
            <h1 className="text-4xl font-light mb-4">You're in</h1>
            <p className="text-xl text-muted-foreground">
              Deal flow starts now.
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
          <div id="resources" className="mb-12 scroll-mt-24">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Join and get instant access to:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group relative overflow-hidden"
                >
                  {/* Card Container */}
                  <div className="relative h-full bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                    
                    {/* Content */}
                    <div className="relative space-y-4">
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 text-4xl font-bold text-muted-foreground/10">
                        {resource.number}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${resource.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <resource.icon className={`w-6 h-6 bg-gradient-to-r ${resource.gradient} bg-clip-text text-transparent`} />
                      </div>
                      
                      {/* Title and Subtitle */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.subtitle}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="mr-1">Access now</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
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