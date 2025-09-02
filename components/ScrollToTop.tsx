'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on route change
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Re-enable smooth scrolling after scroll
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 5);
  }, [pathname]);

  return null;
}
