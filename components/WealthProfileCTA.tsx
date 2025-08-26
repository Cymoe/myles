'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WealthProfileCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-4xl mx-auto my-16">
      {/* Three Pillars Section */}
      <div className="text-center mb-12">
        <h2 className="font-light text-3xl text-foreground tracking-wide mb-6">
          What is Wealth?
        </h2>
        
        <p className="text-lg text-muted-foreground font-light mb-4">
          Most chase one. Few achieve all three.
        </p>
        
        <p className="text-base text-muted-foreground/80 font-light mb-12 max-w-2xl mx-auto">
          Money without time is poverty. Time without freedom is prison.<br />
          Only all three create a life worth living.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Capital Freedom */}
          <div className="text-center">
            <div className="text-4xl mb-4">₿</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Capital Freedom</h3>
            <p className="text-sm text-muted-foreground">
              Beyond income. Build systems that generate wealth after you're dead.
            </p>
          </div>
          
          {/* Time Sovereignty */}
          <div className="text-center">
            <div className="text-4xl mb-4">∞</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Time Sovereignty</h3>
            <p className="text-sm text-muted-foreground">
              Own your calendar. Let systems and teams execute your vision.
            </p>
          </div>
          
          {/* Location Independence */}
          <div className="text-center">
            <div className="text-4xl mb-4">🗺</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Location Independence</h3>
            <p className="text-sm text-muted-foreground">
              Run your empire from Bali, Dubai, or your hometown. True freedom.
            </p>
          </div>
        </div>
        
        <p className="text-sm text-primary font-semibold tracking-wide uppercase">
          WEALTH CREATORS ACHIEVE ALL THREE
        </p>
      </div>

      {/* CTA Box */}
      <div 
        className="bg-background dark:bg-card p-8 rounded-lg border-2 border-primary/20 hover:border-primary transition-all duration-300 text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Which Type Are You?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Take the 2-minute Wealth Profile quiz to discover your natural path to all three types of freedom
        </p>
        
        <Link 
          href="/wealth-profile-quiz"
          className={`inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-medium ${
            isHovered ? 'transform scale-105' : ''
          }`}
        >
          <span>Discover Your Wealth Profile</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <p className="text-xs text-muted-foreground/70 mt-4">
          Free quiz. No BS. Takes 2 minutes.
        </p>
      </div>
    </div>
  );
}