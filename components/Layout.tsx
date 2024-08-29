import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-5xl min-h-[calc(100vh-theme(spacing.32))]">
      {children}
    </div>
  );
}
