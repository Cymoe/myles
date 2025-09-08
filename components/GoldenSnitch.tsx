'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function GoldenSnitch() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [appearanceCount, setAppearanceCount] = useState(0);
  const [launchFromStats, setLaunchFromStats] = useState(false);
  const snitchRef = useRef<HTMLDivElement>(null);

  // Set up global launch request handler
  useEffect(() => {
    (window as any).__launchGoldenSnitch = () => {
      console.log('Golden Snitch: Launch requested from stats!');
      setLaunchFromStats(true);
    };
    
    return () => {
      if ((window as any).__launchGoldenSnitch) {
        delete (window as any).__launchGoldenSnitch;
      }
    };
  }, []);

  useEffect(() => {
    // Check if user has already caught it
    const hasCaught = localStorage.getItem('golden-snitch-caught');
    if (hasCaught) {
      console.log('Golden Snitch: User already caught it');
      return;
    }

    // Get appearance count from session
    const count = parseInt(sessionStorage.getItem('snitch-appearances') || '0');
    setAppearanceCount(count);
    console.log('Golden Snitch: Current appearance count:', count);

    // Don't show more than 10 times per session
    if (count >= 10) {
      console.log('Golden Snitch: Max appearances reached');
      return;
    }

    // Set up appearance timer - INSTANT gratification!
    const firstAppearance = count === 0 ? 1500 : 15000; // 1.5s first time, 15s after
    const delay = firstAppearance + Math.random() * 1000;
    console.log('Golden Snitch: Will appear in', delay / 1000, 'seconds');
    
    const timer = setTimeout(() => {
      triggerSnitch();
    }, delay);

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle launch from stats
  useEffect(() => {
    if (launchFromStats && !isVisible && !localStorage.getItem('golden-snitch-caught')) {
      // Small delay to ensure stats snitch disappears first
      setTimeout(() => {
        triggerSnitch(true);
      }, 300); // Wait for stats snitch scale animation to complete
    }
  }, [launchFromStats]); // eslint-disable-line react-hooks/exhaustive-deps

  const triggerSnitch = (fromStats = false) => {
    console.log('Golden Snitch: Triggering appearance!', fromStats ? 'from stats' : 'normal');
    
    // Make sure we're in the browser
    if (typeof window === 'undefined') {
      console.log('Golden Snitch: Window not available');
      return;
    }
    
    if (fromStats) {
      // Get stats snitch position
      const statsSnitch = document.querySelector('[data-stats-snitch]');
      if (statsSnitch) {
        const rect = statsSnitch.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        console.log('Golden Snitch: Launching from stats position', { x: startX, y: startY });
        setPosition({ x: startX, y: startY });
      } else {
        // Fallback to center if can't find stats snitch
        setPosition({ x: window.innerWidth / 2, y: 100 });
      }
    } else {
      // For first 2 appearances, use left/right/top. After that, favor bottom!
      const currentCount = parseInt(sessionStorage.getItem('snitch-appearances') || '0');
      const favorBottom = currentCount >= 2;
      const randomValue = Math.random();
      
      let side;
      if (favorBottom && randomValue < 0.5) {
        // 50% chance of bottom after 2nd appearance
        side = 3;
      } else {
        // Otherwise random from all 4 sides
        side = Math.floor(Math.random() * 4);
      }
      
      const startPositions = [
        { x: -100, y: window.innerHeight * 0.3 }, // Left
        { x: window.innerWidth + 100, y: window.innerHeight * 0.3 }, // Right
        { x: window.innerWidth * 0.5, y: -100 }, // Top
        { x: window.innerWidth * 0.4 + Math.random() * window.innerWidth * 0.2, y: window.innerHeight + 100 }, // Bottom (varies position)
      ];
      
      console.log('Golden Snitch: Starting from side', side, 'at position', startPositions[side]);
      setPosition(startPositions[side]);
    }
    
    setIsVisible(true);
    
    // Update appearance count
    const currentCount = parseInt(sessionStorage.getItem('snitch-appearances') || '0');
    const newCount = currentCount + 1;
    sessionStorage.setItem('snitch-appearances', newCount.toString());
    setAppearanceCount(newCount);
    console.log('Golden Snitch: Updated count to', newCount);

    // Auto-hide after 4 seconds if not caught (super quick!)
    setTimeout(() => {
      if (!isCaught) {
        console.log('Golden Snitch: Auto-hiding');
        setIsVisible(false);
        setLaunchFromStats(false);
        
        // Trigger next appearance automatically after a short break
        if (newCount < 10) {
          const nextDelay = 5000 + Math.random() * 3000;
          console.log('Golden Snitch: Next appearance in', nextDelay / 1000, 'seconds');
          setTimeout(() => {
            triggerSnitch();
          }, nextDelay); // 5-8s until next one
        }
      }
    }, 4000);
  };

  const handleCatch = () => {
    setIsCaught(true);
    localStorage.setItem('golden-snitch-caught', 'true');
    
    // Show reward after a brief delay
    setTimeout(() => {
      setShowReward(true);
    }, 500);
  };

  const flightPath = useMemo(() => {
    // Default safe values for SSR
    if (typeof window === 'undefined') {
      return {
        hidden: { x: 0, y: 0, opacity: 0, scale: 0.5 },
        visible: { x: 0, y: 0, opacity: 1, scale: 1 },
        caught: { scale: [1, 1.5, 0], opacity: [1, 1, 0] },
      };
    }

    return {
      hidden: { 
        x: position.x,
        y: position.y,
        opacity: launchFromStats ? 0 : 0,
        scale: launchFromStats ? 0.3 : 0.5,
      },
      visible: {
        x: launchFromStats ?
          // Launch from stats - dramatic arc across screen
          [position.x, window.innerWidth * 0.8, window.innerWidth * 0.3, window.innerWidth + 100] :
          position.y > window.innerHeight ? 
          // Coming from bottom - do a fun loop-de-loop path!
          [position.x, position.x - 100, position.x + 200, -100] :
          // Normal path for other directions
          [position.x, window.innerWidth * 0.7, window.innerWidth * 0.3, window.innerWidth + 100],
        y: launchFromStats ?
          // Launch from stats - swooping flight path
          [position.y, position.y - 100, window.innerHeight * 0.2, window.innerHeight * 0.4] :
          position.y > window.innerHeight ?
          // Coming from bottom - fly up in an arc
          [position.y, window.innerHeight * 0.3, window.innerHeight * 0.1, window.innerHeight * 0.2] :
          // Normal path for other directions
          [position.y, window.innerHeight * 0.5, window.innerHeight * 0.2, window.innerHeight * 0.4],
        opacity: 1,
        scale: launchFromStats ? [1, 1.2, 1.1, 1] : 1,
        transition: {
          x: {
            duration: launchFromStats ? 3.5 : 4, // Slightly faster from stats
            ease: [0.45, 0.05, 0.55, 0.95],
            times: [0, 0.3, 0.7, 1],
          },
          y: {
            duration: launchFromStats ? 3.5 : 4,
            ease: [0.45, 0.05, 0.55, 0.95],
            times: [0, 0.4, 0.6, 1],
          },
          opacity: {
            duration: 0.5,
          },
          scale: {
            duration: launchFromStats ? 3.5 : 0.5,
            times: launchFromStats ? [0, 0.2, 0.5, 1] : undefined,
          },
        },
      },
      caught: {
        scale: [1, 1.5, 0],
        opacity: [1, 1, 0],
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
  }, [position.x, position.y, launchFromStats]);

  return (
    <>
      <AnimatePresence>
        {isVisible && !showReward && (
          <motion.div
            ref={snitchRef}
            className="fixed z-[100] cursor-pointer"
            variants={flightPath}
            initial="hidden"
            animate={isCaught ? "caught" : "visible"}
            exit="hidden"
            onClick={handleCatch}
            whileHover={{ scale: 1.2 }}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Golden Snitch Body */}
            <div className="relative">
              {/* Main ball - bigger for easier catching! */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full animate-sparkle shadow-lg shadow-yellow-500/50">
                {/* Inner glow */}
                <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-pulse" />
                
                {/* Highlight */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-80" />
              </div>

              {/* Wings */}
              <div className="absolute top-1/2 -translate-y-1/2">
                {/* Left Wing */}
                <div className="absolute -left-6 w-6 h-4 bg-gradient-to-r from-white/80 to-white/40 rounded-full animate-flutter origin-right"
                     style={{ clipPath: 'ellipse(100% 50% at 100% 50%)' }} />
                
                {/* Right Wing */}
                <div className="absolute -right-6 w-6 h-4 bg-gradient-to-l from-white/80 to-white/40 rounded-full animate-flutter origin-left"
                     style={{ clipPath: 'ellipse(100% 50% at 0% 50%)' }} />
              </div>

              {/* Sparkle trail effect */}
              <div className="absolute inset-0 animate-ping">
                <div className="w-full h-full bg-yellow-400 rounded-full opacity-20" />
              </div>
              
              {/* Additional sparkles */}
              <div className="absolute -top-2 -left-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-sparkle animation-delay-200" />
              </div>
              <div className="absolute -bottom-2 -right-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-sparkle animation-delay-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward Modal */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowReward(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Confetti background effect */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full animate-float" />
                <div className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-200" />
                <div className="absolute bottom-10 left-10 w-5 h-5 bg-pink-400 rounded-full animate-float animation-delay-500" />
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  ✨ You caught the Golden Snitch!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Unlock the Hidden Wealth Codes...
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    The Effortless Abundance Guide
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Wealth Codes Edition:</span> Contains the &quot;Golden Mind Wealth Codes&quot; - the essential blueprint for abundance!
                  </p>
                  <ul className="text-sm text-left text-muted-foreground space-y-1 mb-4">
                    <li>• 7 Core Principles of Ultra-Wealthy Thinking</li>
                    <li>• The Abundance Activation Morning Routine</li>
                    <li>• THE KEY: Golden Mind Wealth Codes</li>
                  </ul>
                </div>

                <Link
                  href="/effortless-abundance?source=golden-snitch"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Unlock the Wealth Codes
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <button
                  onClick={() => setShowReward(false)}
                  className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}