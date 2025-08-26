'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WealthProfileWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show widget after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed right-4 bottom-20 z-40 transition-all duration-300 ${
      isMinimized ? 'w-12' : 'w-56'
    }`}>
      {/* Minimize Toggle */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute -top-2 -left-2 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
      >
        <svg 
          className={`w-4 h-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isMinimized ? (
        // Minimized State
        <div className="bg-primary text-primary-foreground p-3 rounded-lg shadow-xl cursor-pointer" onClick={() => setIsMinimized(false)}>
          <div className="text-2xl text-center">₿</div>
        </div>
      ) : (
        // Expanded State
        <div className="bg-background dark:bg-card border-2 border-primary/20 rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary/10 px-4 py-2 border-b border-primary/20">
            <p className="text-xs font-medium text-muted-foreground">SPONSORED CONTENT</p>
          </div>
          
          {/* Content */}
          <div className="p-3">
            <h3 className="font-semibold text-sm text-foreground mb-2">
              What's Your Wealth Profile?
            </h3>
            
            <p className="text-xs text-muted-foreground mb-3">
              Are you a Freedom Architect, Empire Builder, or Impact Investor? 
            </p>

            {/* Mini Icons */}
            <div className="flex justify-center gap-2 mb-3">
              <div className="text-xl">🏖️</div>
              <div className="text-xl">🏰</div>
              <div className="text-xl">🌍</div>
              <div className="text-xl">🛡️</div>
            </div>
            
            <Link 
              href="/wealth-profile-quiz"
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium rounded"
            >
              Take the 2-Min Quiz →
            </Link>
            
            <p className="text-xs text-muted-foreground/60 mt-3 text-center">
              Free personalized roadmap included
            </p>
          </div>
        </div>
      )}
    </div>
  );
}