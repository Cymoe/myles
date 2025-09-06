'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only show popup on homepage
    if (pathname !== '/') return;
    
    // Check if user has already seen popup this session
    const hasSeenPopup = sessionStorage.getItem('exitIntentShown');
    if (hasSeenPopup) return;

    let timeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving viewport from the top
      if (e.clientY <= 0) {
        // Delay slightly to avoid accidental triggers
        timeout = setTimeout(() => {
          setShowPopup(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      // Cancel popup if mouse re-enters
      if (timeout) clearTimeout(timeout);
    };

    // Desktop: Use exit intent
    if (window.innerWidth > 768) {
      document.addEventListener('mouseout', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    } else {
      // Mobile: Show after 30 seconds
      timeout = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }, 30000); // 30 seconds
    }

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeout) clearTimeout(timeout);
    };
  }, [pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          leadMagnet: '50 Boring Businesses That Print Money',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Don't redirect - let them see the success message
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      } else {
        console.error('Subscription error:', data.error);
        setStatus('idle');
        alert(`Error: ${data.error || response.statusText || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('idle');
      alert(`Network error: ${error instanceof Error ? error.message : 'Please check if the server is running'}`);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-background dark:bg-card border border-border rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Ocean Background - Subtle */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero_2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <div className="relative z-10 p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>
        
        {status === 'success' ? (
          <div className="text-center py-4">
            <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">You&apos;re all set!</h3>
            <p className="text-muted-foreground">
              Deal alerts will hit your inbox weekly.
            </p>
          </div>
        ) : (
          <>
            {/* Deal Alert Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-medium text-foreground mb-3">
                Hold up - there&apos;s a $2.1M EBITDA deal hitting tomorrow
              </h2>
              <p className="text-base text-muted-foreground">
                Get first access to off-market deals
              </p>
            </div>
            
            {/* Recent Deals */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-medium text-foreground">Recent deals sent:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between p-3 bg-background dark:bg-background/50 rounded-lg border border-border">
                  <span className="text-foreground">Texas roofing company</span>
                  <span className="text-muted-foreground">$1.8M EBITDA at 3x</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-background dark:bg-background/50 rounded-lg border border-border">
                  <span className="text-foreground">Southeast medical cleaning</span>
                  <span className="text-muted-foreground">$1.5M EBITDA</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-background dark:bg-background/50 rounded-lg border border-border">
                  <span className="text-foreground">Midwest towing business</span>
                  <span className="text-muted-foreground">$1.1M EBITDA</span>
                </li>
              </ul>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mb-3 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                disabled={status === 'loading'}
                autoFocus
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-md font-medium disabled:opacity-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Alert me about deals'}
              </button>
              <p className="text-xs text-muted-foreground/70 mt-3 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
        </div>
      </div>
    </div>
  );
}