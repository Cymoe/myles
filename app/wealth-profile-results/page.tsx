'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { calculateProfile, WealthProfile } from '@/lib/wealthProfileQuiz';

export default function WealthProfileResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<{
    profile: WealthProfile;
    percentages: { capital: number; time: number; location: number };
  } | null>(null);

  useEffect(() => {
    // Get results from localStorage
    const savedResults = localStorage.getItem('wealthProfileResults');
    if (!savedResults) {
      router.push('/wealth-profile-quiz');
      return;
    }

    const { answers } = JSON.parse(savedResults);
    const calculatedResults = calculateProfile(answers);
    setResults({
      profile: calculatedResults.profile,
      percentages: calculatedResults.percentages
    });
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading your results...</div>
      </div>
    );
  }

  const { profile, percentages } = results;

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-muted-foreground hover:text-foreground inline-block mb-8">
            ← Back to Home
          </Link>
          
          <div className="text-6xl mb-4">{profile.icon}</div>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-4">
            You&apos;re {profile.name}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {profile.tagline}
          </p>
        </div>

        {/* Profile Breakdown */}
        <div className="bg-background dark:bg-card p-8 rounded-lg border border-border mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Your Wealth DNA</h2>
          
          {/* Percentage Bars */}
          <div className="space-y-4 mb-8">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">₿ Capital Freedom</span>
                <span className="text-sm text-muted-foreground">{percentages.capital}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-3">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000"
                  style={{ width: `${percentages.capital}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">∞ Time Sovereignty</span>
                <span className="text-sm text-muted-foreground">{percentages.time}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-3">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000"
                  style={{ width: `${percentages.time}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">🗺 Location Independence</span>
                <span className="text-sm text-muted-foreground">{percentages.location}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-3">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000"
                  style={{ width: `${percentages.location}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            {profile.description}
          </p>
        </div>

        {/* Strengths & Blindspots */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Your Strengths</h3>
            <ul className="space-y-2">
              {profile.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Watch Out For</h3>
            <ul className="space-y-2">
              {profile.blindspots.map((blindspot, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2">!</span>
                  <span className="text-muted-foreground">{blindspot}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Famous Examples */}
        <div className="bg-background dark:bg-card p-6 rounded-lg border border-border mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">You&apos;re in Good Company</h3>
          <p className="text-muted-foreground mb-3">
            Other {profile.name}s include:
          </p>
          <div className="flex flex-wrap gap-3">
            {profile.famousExamples.map((example, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                {example}
              </span>
            ))}
          </div>
        </div>

        {/* Your Path Forward */}
        <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Your Recommended Path</h3>
          <p className="text-muted-foreground mb-6">
            {profile.recommendedPath}
          </p>
          
          <h4 className="font-semibold text-foreground mb-3">Next 3 Actions:</h4>
          <ol className="space-y-2">
            {profile.nextActions.map((action, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary font-semibold mr-2">{index + 1}.</span>
                <span className="text-muted-foreground">{action}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Build Your Version of Wealth?
          </h3>
          
          {profile.id === 'capital-titan' || profile.id === 'empire-builder' ? (
            <p className="text-muted-foreground mb-6">
              The Blueprint is perfect for {profile.name}s who want to acquire businesses that compound wealth.
            </p>
          ) : (
            <p className="text-muted-foreground mb-6">
              Remote Ops was designed for {profile.name}s who value flexibility and location independence.
            </p>
          )}
          
          <Link 
            href="/#product-system"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-medium rounded-lg"
          >
            <span>Explore Your Options</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {/* Share Results */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-4">Share your wealth profile:</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  const text = `I'm ${profile.name} - ${profile.tagline} Discover your wealth profile:`;
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin + '/wealth-profile-quiz')}`, '_blank');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 transition-colors rounded"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm">Share on X</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}