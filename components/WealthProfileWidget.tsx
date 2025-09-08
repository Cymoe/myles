'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WealthProfileWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [hasClosedPopup, setHasClosedPopup] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check if user has already closed popup this session
    const closedThisSession = sessionStorage.getItem('wealthWidgetClosed');
    if (closedThisSession) {
      setHasClosedPopup(true);
    }

    // Show widget after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        // On mobile, show popup after a delay (only if not already closed)
        if (window.innerWidth < 768 && !showMobilePopup && !closedThisSession) {
          setTimeout(() => setShowMobilePopup(true), 1000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [showMobilePopup]);

  if (!isVisible) return null;

  const handleCloseMobilePopup = () => {
    setShowMobilePopup(false);
    setHasClosedPopup(true);
    sessionStorage.setItem('wealthWidgetClosed', 'true');
  };

  // Mobile Full Screen Popup and Floating Button
  if (isMobile) {
    // Show floating button if popup was closed
    if (!showMobilePopup && hasClosedPopup) {
      return (
        <button
          onClick={() => setShowMobilePopup(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-40 animate-fade-in hover:scale-110 transition-transform"
          aria-label="Open Wealth Profile Quiz"
        >
          <span className="text-xl animate-pulse">💰</span>
        </button>
      );
    }
    
    // Show popup
    if (!showMobilePopup) return null;
    
    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
          onClick={handleCloseMobilePopup}
        />
        
        {/* Mobile Popup - Slides up from bottom */}
        <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up">
          <div className="bg-background border-t-2 border-x-2 border-primary/20 rounded-t-2xl shadow-2xl overflow-hidden">
            {/* Swipe Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleCloseMobilePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-background/80 border border-border rounded-full flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header */}
            <div className="bg-primary/10 px-6 py-3 border-b border-primary/20">
              <p className="text-xs font-medium text-muted-foreground text-center">SPONSORED CONTENT</p>
            </div>
            
            {/* Content */}
            <div className="p-6 pb-safe">
              <h3 className="font-bold text-xl text-foreground mb-3 text-center">
                What&apos;s Your Wealth Profile?
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Are you a Freedom Architect, Empire Builder, or Impact Investor? Discover your unique path to wealth.
              </p>

              {/* Icons Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-1">🏖️</div>
                  <p className="text-xs text-muted-foreground">Freedom</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🏰</div>
                  <p className="text-xs text-muted-foreground">Empire</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🌍</div>
                  <p className="text-xs text-muted-foreground">Impact</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🛡️</div>
                  <p className="text-xs text-muted-foreground">Security</p>
                </div>
              </div>
              
              <a 
                href="https://www.wealtharchetypes.com/test"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold rounded-lg text-base"
                onClick={handleCloseMobilePopup}
              >
                Take the 2-Min Quiz →
              </a>
              
              <p className="text-xs text-muted-foreground/60 mt-4 text-center pb-2">
                Free personalized roadmap included • No email required
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop Widget (existing behavior)
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
              What&apos;s Your Wealth Profile?
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
            
            <a 
              href="https://www.wealtharchetypes.com/test"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium rounded"
            >
              Take the 2-Min Quiz →
            </a>
            
            <p className="text-xs text-muted-foreground/60 mt-3 text-center">
              Free personalized roadmap included
            </p>
          </div>
        </div>
      )}
    </div>
  );
}