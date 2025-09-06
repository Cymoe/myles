'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import WealthProfileQuiz from '@/components/WealthProfileQuiz';

export default function WealthProfileQuizPage() {
  const [showQuiz, setShowQuiz] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (showQuiz) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Exit Quiz
          </Link>
          <WealthProfileQuiz />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 px-4 flex items-center">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Back
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-6">
            Your Wealth Profile Awaits
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Discover which of the 7 wealth personalities drives your decisions and how to use it to achieve all three forms of freedom.
          </p>
        </div>

        {/* The 7 Types Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div className="text-center p-3 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-1">₿</div>
            <p className="text-xs font-medium">Capital Titan</p>
          </div>
          <div className="text-center p-3 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-1">∞</div>
            <p className="text-xs font-medium">Time Architect</p>
          </div>
          <div className="text-center p-3 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-1">🗺</div>
            <p className="text-xs font-medium">Global Nomad</p>
          </div>
          <div className="text-center p-3 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-1">⚖️</div>
            <p className="text-xs font-medium">Wealth Creator</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-background dark:bg-card p-8 md:p-12 rounded-lg border-2 border-primary/20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Discover Your Type?
            </h2>
            <p className="text-muted-foreground mb-8">
              7 questions. 2 minutes. Personalized roadmap to wealth on your terms.
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-medium rounded-lg"
            >
              <span>Start the Quiz</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Based on analyzing 100+ successful remote business owners</p>
        </div>
      </div>
    </div>
  );
}