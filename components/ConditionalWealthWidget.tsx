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
    '/wealth-profile-results' // Results page
  ];
  
  if (excludedPages.includes(pathname)) {
    return null;
  }

  return <WealthProfileWidget />;
}