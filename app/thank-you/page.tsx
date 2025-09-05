'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Script from 'next/script'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const source = searchParams.get('source')

  useEffect(() => {
    // Track Google Analytics conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sign_up', {
        'method': 'newsletter',
        'source': source || 'direct'
      });
    }

    // Track Facebook Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        'content_name': 'Newsletter Signup',
        'content_category': source || 'direct'
      });
    }
  }, [source]);

  return (
    <>
      {/* Google Analytics - Replace G-XXXXXXXXXX with your actual ID */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      {/* Facebook Pixel - Replace YOUR_PIXEL_ID with your actual ID */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to Deal Flow!
          </h1>
          <p className="text-lg text-gray-600">
            Hey – Myles here. Thanks for joining.
          </p>
        </div>

        {/* Profile Image */}
        <div className="text-center mb-8">
          <Image
            src="/images/myles_hero.JPG"
            alt="Myles Kameron"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Next Steps */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Here&apos;s what to do next:
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-800">
                  <strong>Check your inbox</strong> for my welcome email. Then move it to your primary inbox (or you may miss the deals I send!).
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-800">
                  <strong>Reply &quot;YES&quot;</strong> to the email and I&apos;ll send you 2 bonuses:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• My list of 50+ best business types for first-time buyers</li>
                  <li>• Deal analysis spreadsheet I use for every acquisition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Here&apos;s what you can expect:
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-black mr-2">✓</span>
              Real deals with actual numbers every Tuesday and Thursday
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">✓</span>
              My honest take on each opportunity (the good and the bad)
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">✓</span>
              Market insights from my own acquisition journey
            </li>
          </ul>
        </div>

        {/* Quick Start Resources */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get started immediately:
          </h2>
          
          <div className="space-y-6">
            {/* Free Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1) Download these free resources:
              </h3>
              <div className="space-y-2">
                <a href="/downloads/blueprint" className="block text-[#786254] hover:underline">
                  → 32 Business Acquisition Blueprints
                </a>
                <a href="/tools/fifty-boring-businesses" className="block text-[#786254] hover:underline">
                  → 50 Boring Businesses That Print Money
                </a>
                <a href="/tools/revenue-tracker" className="block text-[#786254] hover:underline">
                  → Business Acquisition Checklist
                </a>
              </div>
            </div>

            {/* Work With Me */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2) Ready to buy in the next 6-12 months?
              </h3>
              <p className="text-gray-700 mb-4">
                If you have $50K+ to invest and want help finding, analyzing, and closing a deal, let&apos;s talk.
              </p>
              <a 
                href="/advisory" 
                className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Schedule a Strategy Call →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-600">
          <p className="mb-2">
            Questions? Just reply to any of my emails.
          </p>
          <p className="text-sm">
            I read everything and usually respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}