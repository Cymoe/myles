'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Quiz } from '@/components/wealth-profile-quiz/Quiz';
import { wealthProfiles } from '@/components/wealth-profile-quiz/quizData';

export default function WealthProfileQuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (quizStarted) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto">
          {/* Quiz Header */}
          <div className="text-center mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground inline-block mb-4">
              ← Exit Quiz
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Discover Your Wealth Profile
            </h1>
          </div>
          
          {/* Quiz Component */}
          <Quiz />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Back
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-6">
            Your Wealth Profile Awaits
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Discover which of the 4 wealth personalities drives your decisions and how to use it to build true freedom.
          </p>
        </div>

        {/* The 4 Types Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(wealthProfiles).map(([key, profile]) => (
            <div key={key} className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl mb-2">{profile.emoji}</div>
              <p className="text-sm font-medium">{profile.name.replace('The ', '')}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-background dark:bg-card p-8 md:p-12 rounded-lg border-2 border-primary/20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Discover Your Type?
            </h2>
            <p className="text-muted-foreground mb-8">
              12 quick questions. Get your personalized wealth roadmap instantly.
            </p>
            <button
              onClick={() => setQuizStarted(true)}
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
          <p>Based on research from 1,000+ entrepreneurs who achieved financial, time, and location freedom</p>
        </div>
      </div>
    </div>
  );
}