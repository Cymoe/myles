import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating MK Logo - appears on all pages */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="block">
          <span className="text-2xl font-serif tracking-wider text-primary hover:text-primary/80 transition-colors">MK</span>
        </Link>
      </div>
      
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}
