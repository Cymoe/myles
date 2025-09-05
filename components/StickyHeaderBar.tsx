'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function StickyHeaderBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {

    // Check if user has dismissed the bar this session
    const hasDismissed = sessionStorage.getItem('stickyHeaderDismissed');
    if (hasDismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show bar after scrolling 100px (easier to test)
      setIsVisible(window.scrollY > 100);
      console.log('Scroll position:', window.scrollY, 'Visible:', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('stickyHeaderDismissed', 'true');
  };

  const handleClick = () => {
    // Scroll to newsletter section or show popup
    const newsletterSection = document.querySelector('#lead-capture');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Automatically click the button to show the form
      setTimeout(() => {
        const button = newsletterSection.querySelector('button');
        if (button) {
          button.click();
        }
      }, 500);
    }
  };

  // Don't render on post-conversion pages or tool pages
  const excludedPaths = [
    '/welcome',
    '/thank-you',  // Thank you page after newsletter signup
    '/tools/',
    '/downloads/',  // Downloads page - users already have access
    '/acquisition-accelerator',  // Paid content
    '/advisory',  // Advisory services
    '/wealth-profile-quiz',  // Quiz pages
    '/wealth-profile-results',
    '/blueprint-special',
    '/blueprint-free',
    '/sell-your-business'  // Sell your business page
  ];
  
  const shouldExclude = excludedPaths.some(path => pathname.startsWith(path));
  
  // Also exclude checkout/success pages
  const isCheckoutPage = pathname.includes('checkout') || pathname.includes('success');
  
  if (shouldExclude || isCheckoutPage) {
    return null;
  }

  if (isDismissed || !isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground shadow-lg transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-sm font-medium hidden sm:inline">
              Free Guide:
            </span>
            <button
              onClick={handleClick}
              className="text-sm sm:text-base font-semibold hover:underline"
            >
              27 Questions Before You Buy →
            </button>
          </div>
          
          <button
            onClick={handleDismiss}
            className="ml-4 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}