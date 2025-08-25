import type { Metadata } from "next";
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';

import Footer from '../components/Footer';
import Providers from './providers';
import Layout from '@/components/Layout';
import ConditionalFooter from '@/components/ConditionalFooter';

import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Providers>
          <Layout>
            <main className="min-h-screen">{children}</main>
          </Layout>
          <ConditionalFooter />
        </Providers>
      </body>
    </html>
  );
}



