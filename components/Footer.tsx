// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-card/50 dark:bg-background text-muted-foreground py-8 mt-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
        {/* Personal Signature */}
        <div className="font-light italic text-base text-foreground/80">
          &ldquo;Build boring businesses. Live interesting lives.&rdquo;
        </div>
        
        {/* Stylized Signature */}
        <div className="text-2xl font-serif text-primary/70">
          ~ MK
        </div>
        
        {/* Copyright */}
        <p className="font-light text-sm">© 2025 Myles Kameron. All rights reserved.</p>
      </div>
    </footer>
  );
}
