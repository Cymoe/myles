'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Pages that should not have the header navigation
  const noHeaderPages = [
    '/thank-you',
    '/welcome'
  ];
  
  // If current page should not have header, return children without Layout wrapper
  if (noHeaderPages.includes(pathname)) {
    return <>{children}</>;
  }
  
  // Otherwise, return with Layout wrapper (which includes header)
  return <Layout>{children}</Layout>;
}