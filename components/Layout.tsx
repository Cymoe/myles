import React from 'react';
import Link from 'next/link';
import Header from './page-header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use the Header component which includes the theme toggle */}
      <Header />
      
      <div className="flex-grow pt-20 sm:pt-24">
        {children}
      </div>
    </div>
  );
}
