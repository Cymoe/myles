'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only show popup on homepage
    if (pathname !== '/') return;
    
    // Test mode - uncomment the line below to see popup immediately
    // setShowPopup(true);
    
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

    // Only activate on desktop (exit intent doesn't work well on mobile)
    if (window.innerWidth > 768) {
      document.addEventListener('mouseout', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
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
          leadMagnet: '5 Boring Businesses That Print Money',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setShowPopup(false);
          router.push('/welcome');
        }, 1000);
      } else {
        console.error('Subscription error:', data.error);
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('idle');
      alert('Network error. Please try again.');
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
      <div className="relative bg-background dark:bg-card border border-border rounded-lg shadow-2xl max-w-md w-full p-8 animate-scale-in">
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
            <h3 className="text-xl font-semibold text-foreground mb-2">Success!</h3>
            <p className="text-muted-foreground">
              Check your email for the guide.
            </p>
          </div>
        ) : (
          <>
            {/* Profile Image */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <Image
                  src="/images/myles_hero.JPG"
                  alt="Myles Kameron"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Wait! Before You Go...
              </h2>
              <p className="text-lg text-muted-foreground mb-1">
                Get my free guide:
              </p>
              <p className="text-xl font-semibold text-primary">
                &ldquo;5 Boring Businesses That Print Money&rdquo;
              </p>
            </div>
            
            {/* Benefits */}
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Real businesses generating $1M+ annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Why they&apos;re undervalued (3-5x EBITDA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>How to find motivated sellers</span>
              </li>
            </ul>
            
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
                {status === 'loading' ? 'Sending...' : 'Send Me The Guide'}
              </button>
              <p className="text-xs text-muted-foreground/70 mt-3 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}