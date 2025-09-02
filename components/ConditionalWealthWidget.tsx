'use client';

import { usePathname } from 'next/navigation';
import WealthProfileWidget from './WealthProfileWidget';

export default function ConditionalWealthWidget() {
  const pathname = usePathname();
  
  // Don't show widget on these pages
  const excludedPages = [
    '/blueprint-special',  // Special pricing page
    '/blueprint-free',     // Email capture page
    '/wealth-profile-quiz', // Quiz page itself
    '/wealth-profile-results', // Results page
    '/downloads/blueprint', // Downloads page - users already converted
    '/acquisition-accelerator', // Users already engaged with paid content
    '/welcome', // Welcome page after signup
    '/advisory' // Advisory services page
  ];
  
  // Also exclude any downloads or checkout pages (pattern matching)
  const isDownloadPage = pathname.startsWith('/downloads/');
  const isCheckoutPage = pathname.includes('checkout') || pathname.includes('success');
  
  if (excludedPages.includes(pathname) || isDownloadPage || isCheckoutPage) {
    return null;
  }

  return <WealthProfileWidget />;
}