import type { Metadata } from "next";
import React from 'react';
import Footer from '../components/Footer';
import Providers from './providers';
import ConditionalLayout from '@/components/ConditionalLayout';
import ConditionalFooter from '@/components/ConditionalFooter';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import StickyHeaderBar from '@/components/StickyHeaderBar';
import ConditionalWealthWidget from '@/components/ConditionalWealthWidget';
import ScrollToTop from '@/components/ScrollToTop';

import "./globals.css";

export const metadata: Metadata = {
  title: "Myles Kameron | Remote Contractor CEO",
  description: "Transform your contracting business into a location-independent empire. Learn the systems and strategies I used to build a 7-figure remote contracting company.",
  keywords: "remote contracting, home service business, lifestyle design, location independence, contractor CEO",
  authors: [{ name: "Myles Kameron" }],
  openGraph: {
    title: "Myles Kameron | Remote Contractor CEO",
    description: "Transform your contracting business into a location-independent empire.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <Providers>
          <ScrollToTop />
          <StickyHeaderBar />
          <ConditionalLayout>
            <main className="min-h-screen">{children}</main>
          </ConditionalLayout>
          <ConditionalFooter />
          <ExitIntentPopup />
          <ConditionalWealthWidget />
        </Providers>
      </body>
    </html>
  );
}



