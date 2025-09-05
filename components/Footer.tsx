// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card/50 dark:bg-background text-muted-foreground py-8 mt-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-6">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/acquisition-accelerator" className="hover:text-primary transition-colors">
            Free Accelerator
          </Link>
          <span className="text-muted-foreground/50">•</span>
          <Link href="/advisory" className="hover:text-primary transition-colors">
            Advisory Services
          </Link>
          <span className="text-muted-foreground/50">•</span>
          <a href="https://smbdealsheet.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Newsletter
          </a>
        </div>
        
        {/* Personal Signature */}
        <div className="font-light italic text-base text-foreground/80 text-center">
          &ldquo;Boring business. Interesting life.&rdquo;
        </div>
        
        {/* Stylized Signature */}
        <div className="text-2xl font-serif text-primary/70 text-center">
          ~ MK
        </div>
        
        {/* Copyright */}
        <p className="font-light text-sm text-center">© 2025 Myles Kameron. All rights reserved.</p>
      </div>
    </footer>
  );
}
