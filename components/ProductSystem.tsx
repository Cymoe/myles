'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductSystem() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div id="product-system" className="max-w-7xl mx-auto my-24 px-4 scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-light text-3xl md:text-4xl text-foreground tracking-wide mb-4">
          The Boring Business System
        </h2>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          Your complete journey from employee to remote business owner
        </p>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative">

        {/* Step 0: Wealth Profile Quiz */}
        <div 
          className="relative group"
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-background dark:bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col min-h-[480px] relative overflow-hidden">
            {/* Sponsored Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                DISCOVER
              </div>
              <div className="text-xs text-muted-foreground/70 italic">
                by WealthArchetypes
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Wealth Profile Quiz
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Discover Your Path to Freedom
            </p>
            
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Find your wealth DNA</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Get personalized roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>See which products fit YOU</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>2 minutes to clarity</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-semibold text-foreground">FREE</span>
                  <span className="text-sm text-muted-foreground block mt-1">Start here</span>
                </div>
              </div>
              <a 
                href="https://www.wealtharchetypes.com/test"
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full bg-[#EAB308] text-black px-6 py-3.5 text-base font-medium hover:bg-[#D97706] transition-all duration-200 rounded-lg text-center shadow-sm hover:shadow-md"
              >
                Take the Quiz →
              </a>
            </div>
          </div>
        </div>


        {/* Step 1: The Blueprint */}
        <div 
          className="relative group"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-background dark:bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col min-h-[480px] relative overflow-hidden">
            {/* Phase Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4 self-start">
              ACQUIRE
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              The Acquisition Accelerator
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Your Complete Business Buying System
            </p>
            
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>8 essential documents (instant download)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>30-day email course (starts tomorrow)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Deal sourcing to closing strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Creative financing blueprints</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-semibold text-foreground">FREE</span>
                  <span className="text-sm text-muted-foreground block mt-1">Complete package</span>
                </div>
              </div>
              <Link 
                href="/acquisition-accelerator" 
                className="block w-full bg-primary text-primary-foreground px-6 py-3.5 text-base font-medium hover:opacity-90 transition-all duration-200 rounded-lg text-center shadow-sm hover:shadow-md"
              >
                Start Accelerator →
              </Link>
            </div>
          </div>
        </div>

        {/* Step 2: Remote Ops */}
        <div 
          className="relative group"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-background dark:bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col min-h-[480px] relative overflow-hidden">
            {/* Freedom Badge - Replacing the old SCALE badge */}
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 self-start">
              <span className="text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                SCALE TO FREEDOM
              </span>
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Remote Ops
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Stop Trading Time for Money
            </p>
            
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Build a business that runs without you</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Remote management systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hiring & training frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tech stack & automation tools</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-semibold text-foreground">$5,998</span>
                  <span className="text-sm text-muted-foreground block mt-1">Limited spots</span>
                </div>
              </div>
              <Link 
                href="https://www.remoteops.ai/"
                target="_blank"
                className="block w-full bg-white text-black px-6 py-3.5 text-base font-medium hover:bg-gray-100 transition-all duration-200 rounded-lg text-center shadow-sm hover:shadow-md"
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center mt-12 space-y-2">
        <p className="text-muted-foreground font-light italic">
          Battle-tested systems from actually running remote service businesses – not theory
        </p>
        <p className="text-muted-foreground/70 font-light text-sm">
          Specialized knowledge engineered for location independence
        </p>
      </div>
    </div>
  );
}