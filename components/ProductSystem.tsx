'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductSystem() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div id="product-system" className="max-w-7xl mx-auto my-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-light text-3xl md:text-4xl text-foreground tracking-wide mb-4">
          The Boring Business System
        </h2>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          Everything you need to go from employee to remote business owner
        </p>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative">
        
        {/* Connection Lines - Desktop Only */}
        <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-primary/30"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="hidden lg:block absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-primary/30"></div>
        <div className="hidden lg:block absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Step 0: Wealth Profile Quiz */}
        <div 
          className="relative group"
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-background dark:bg-card p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col min-h-[480px] relative overflow-hidden">
            {/* Phase Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4 self-start">
              DISCOVER
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
              <Link 
                href="/wealth-profile-quiz" 
                className="block w-full bg-[#EAB308] text-black px-6 py-3.5 text-base font-medium hover:bg-[#D97706] transition-all duration-200 rounded-lg text-center shadow-sm hover:shadow-md"
              >
                Take the Quiz →
              </Link>
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
              The Blueprint
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Buy Your First Cash-Flowing Business
            </p>
            
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Off-market deal sourcing secrets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Creative financing (little money down)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Due diligence & valuation framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>47 documents from $80M+ in closed deals</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-semibold text-foreground">FREE</span>
                  <span className="text-sm text-muted-foreground block mt-1">20 documents</span>
                </div>
              </div>
              <Link 
                href="/blueprint-free" 
                className="block w-full bg-primary text-primary-foreground px-6 py-3.5 text-base font-medium hover:opacity-90 transition-all duration-200 rounded-lg text-center shadow-sm hover:shadow-md"
              >
                Get Started Free →
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
            {/* Phase Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4 self-start">
              SCALE
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Remote Ops
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Run It From Anywhere
            </p>
            
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-grow">
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
                <span>Operations playbooks by industry</span>
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