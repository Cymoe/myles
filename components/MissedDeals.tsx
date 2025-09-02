'use client';

import { useState, useEffect } from 'react';

interface Deal {
  id: string;
  businessType: string;
  location: string;
  ebitda: string;
  revenue: string;
  margin: string;
  highlights: string[];
  soldDaysAgo: number;
}

const allDeals: Deal[] = [
  {
    id: '1',
    businessType: 'Towing & Recovery',
    location: 'Midwest',
    ebitda: '$1.1M',
    revenue: '$3.4M',
    margin: '33%',
    highlights: ['11,000 sq ft facility', 'Near two interstates'],
    soldDaysAgo: 3
  },
  {
    id: '2',
    businessType: 'Medical Cleaning',
    location: 'Southeast',
    ebitda: '$1.5M',
    revenue: '$4.2M',
    margin: '36%',
    highlights: ['70% recurring revenue', '2-5 year contracts'],
    soldDaysAgo: 7
  },
  {
    id: '3',
    businessType: 'Manufacturing',
    location: 'Texas',
    ebitda: '$2.7M',
    revenue: '$8.1M',
    margin: '33%',
    highlights: ['50% profit margins', '97% repeat customers'],
    soldDaysAgo: 11
  },
  {
    id: '4',
    businessType: 'Marketing Agency',
    location: 'Remote',
    ebitda: '$700K',
    revenue: '$2.1M',
    margin: '33%',
    highlights: ['86% client retention', 'Niche expertise'],
    soldDaysAgo: 15
  },
  {
    id: '5',
    businessType: 'Landscaping Company',
    location: 'Florida',
    ebitda: '$850K',
    revenue: '$2.8M',
    margin: '30%',
    highlights: ['300+ commercial accounts', 'All equipment included'],
    soldDaysAgo: 5
  },
  {
    id: '6',
    businessType: 'HVAC Services',
    location: 'Arizona',
    ebitda: '$1.3M',
    revenue: '$3.9M',
    margin: '33%',
    highlights: ['24/7 emergency service', '15-year reputation'],
    soldDaysAgo: 9
  },
  {
    id: '7',
    businessType: 'Pool Maintenance',
    location: 'California',
    ebitda: '$620K',
    revenue: '$1.7M',
    margin: '36%',
    highlights: ['400 recurring clients', 'Autopay contracts'],
    soldDaysAgo: 12
  },
  {
    id: '8',
    businessType: 'Commercial Laundry',
    location: 'Northeast',
    ebitda: '$980K',
    revenue: '$2.4M',
    margin: '41%',
    highlights: ['Hotel contracts', 'Semi-absentee owner'],
    soldDaysAgo: 4
  },
  {
    id: '9',
    businessType: 'Pest Control',
    location: 'Georgia',
    ebitda: '$1.1M',
    revenue: '$3.2M',
    margin: '34%',
    highlights: ['Quarterly service plans', 'B2B focused'],
    soldDaysAgo: 8
  },
  {
    id: '10',
    businessType: 'Parking Lot Striping',
    location: 'Texas',
    ebitda: '$540K',
    revenue: '$1.4M',
    margin: '39%',
    highlights: ['Government contracts', 'Minimal competition'],
    soldDaysAgo: 14
  },
  {
    id: '11',
    businessType: 'Janitorial Services',
    location: 'Midwest',
    ebitda: '$1.8M',
    revenue: '$5.2M',
    margin: '35%',
    highlights: ['Fortune 500 clients', '5-year contracts'],
    soldDaysAgo: 6
  },
  {
    id: '12',
    businessType: 'Plumbing Company',
    location: 'Colorado',
    ebitda: '$1.4M',
    revenue: '$4.1M',
    margin: '34%',
    highlights: ['New construction focus', '12 licensed plumbers'],
    soldDaysAgo: 10
  }
];

export default function MissedDeals() {
  const [mounted, setMounted] = useState(false);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading delay for skeleton
    setTimeout(() => {
      // Randomly select 4 deals from the pool
      const shuffled = [...allDeals].sort(() => 0.5 - Math.random());
      setDeals(shuffled.slice(0, 4));
      setIsLoading(false);
    }, 500);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="py-16">
        <div className="text-center mb-12">
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-8 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-[280px]" style={{ marginTop: '140px' }}>
              <div className="absolute w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16" style={{ overflow: 'visible' }}>
      <div className="text-center mb-12">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
          DEALS
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
          You&apos;ve already missed these opportunities...
        </h2>
      </div>

      {/* Grid with stacked cards behind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8" style={{ overflow: 'visible' }}>
        {deals.map((deal, index) => {
          // Different background deals for each stack - hardcoded based on index
          const getBackgroundDeals = (idx: number) => {
            switch(idx) {
              case 0:
                return {
                  back: { name: 'Landscaping Co.', location: 'FLORIDA', ebitda: '$890K', revenue: '$2.8M' },
                  middle: { name: 'Pool Service', location: 'ARIZONA', ebitda: '$1.2M', revenue: '$3.5M' }
                };
              case 1:
                return {
                  back: { name: 'Parking Lot Maint.', location: 'NEVADA', ebitda: '$750K', revenue: '$2.1M' },
                  middle: { name: 'Waste Management', location: 'OHIO', ebitda: '$980K', revenue: '$4.1M' }
                };
              case 2:
                return {
                  back: { name: 'Snow Removal', location: 'MICHIGAN', ebitda: '$1.3M', revenue: '$3.8M' },
                  middle: { name: 'Gutter Cleaning', location: 'OREGON', ebitda: '$650K', revenue: '$1.9M' }
                };
              case 3:
              default:
                return {
                  back: { name: 'Power Washing', location: 'TEXAS', ebitda: '$820K', revenue: '$2.4M' },
                  middle: { name: 'Window Cleaning', location: 'COLORADO', ebitda: '$1.1M', revenue: '$3.2M' }
                };
            }
          };

          const bgDeals = getBackgroundDeals(index);

          const backDeal = index === 0 ? 
            { name: 'Landscaping Co.', location: 'FLORIDA', ebitda: '$890K', revenue: '$2.8M' } :
            index === 1 ?
            { name: 'Parking Lot Maint.', location: 'NEVADA', ebitda: '$750K', revenue: '$2.1M' } :
            index === 2 ?
            { name: 'Snow Removal', location: 'MICHIGAN', ebitda: '$1.3M', revenue: '$3.8M' } :
            { name: 'Power Washing', location: 'TEXAS', ebitda: '$820K', revenue: '$2.4M' };
          
          const middleDeal = index === 0 ?
            { name: 'Pool Service', location: 'ARIZONA', ebitda: '$1.2M', revenue: '$3.5M' } :
            index === 1 ?
            { name: 'Waste Management', location: 'OHIO', ebitda: '$980K', revenue: '$4.1M' } :
            index === 2 ?
            { name: 'Gutter Cleaning', location: 'OREGON', ebitda: '$650K', revenue: '$1.9M' } :
            { name: 'Window Cleaning', location: 'COLORADO', ebitda: '$1.1M', revenue: '$3.2M' };

          return (
          <div key={deal.id} className="relative group" style={{ 
            height: isMobile ? '240px' : '280px',
            marginTop: isMobile ? '60px' : '80px'
          }}>
            {/* Back card - reduced offset for better visibility */}
            <div 
              className="absolute w-full h-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-500 animate-fade-in"
              style={{ 
                transform: `translateX(0) translateY(${isMobile ? -60 : -80}px)`,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                opacity: 0.85,
                animationDelay: `${index * 100}ms`
              }}>
              <div className="w-full bg-gray-400 dark:bg-gray-600 text-white text-center py-0.5 text-xs font-semibold tracking-wide">
                SOLD
              </div>
              <div className="px-4 py-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 truncate flex-1">{backDeal.name}</h3>
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{backDeal.ebitda}</p>
                </div>
              </div>
            </div>
            
            {/* Middle card - reduced offset for better visibility */}
            <div 
              className="absolute w-full h-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-lg overflow-hidden transition-all duration-500 animate-fade-in"
              style={{ 
                transform: `translateX(0) translateY(${isMobile ? -30 : -40}px)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                opacity: 0.92,
                animationDelay: `${index * 100 + 50}ms`
              }}>
              <div className="w-full bg-yellow-400/70 text-black text-center py-0.5 text-xs font-semibold tracking-wide">
                SOLD
              </div>
              <div className="px-4 py-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate flex-1">{middleDeal.name}</h3>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{middleDeal.ebitda}</p>
                </div>
              </div>
            </div>
            
            {/* Main card - with pulse animation */}
            <div 
              className="absolute w-full h-full bg-card border border-border rounded-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl animate-fade-in"
            style={{
                animationDelay: `${index * 100 + 100}ms`,
                transform: 'translateX(0) translateY(0) scale(1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
                animation: `fadeIn 0.8s ease-out ${index * 100 + 100}ms backwards, subtlePulse 3s ease-in-out ${index * 100 + 1500}ms 1`
            }}
          >
            {/* Sold Tag - Minimal */}
            <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-0.5 rounded-sm text-xs font-bold">
              Sold
            </div>

            {/* Deal Content */}
            <div className="p-5">
              {/* Business Type & Location */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-foreground mb-1 pr-12">
                {deal.businessType}
              </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {deal.location}
                </p>
                </div>

              {/* EBITDA & Revenue - Clean Layout */}
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">EBITDA</p>
                  <p className="text-xl font-semibold text-foreground">{deal.ebitda}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Revenue</p>
                  <p className="text-sm text-foreground">{deal.revenue}</p>
                </div>
              </div>

              {/* Key Points - Clean bullets */}
              <ul className="space-y-1 mb-4">
                {deal.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground">
                    • {highlight}
                    </li>
                  ))}
                </ul>

              {/* Days Ago - Bottom */}
              <div className="text-xs text-muted-foreground/50">
                Sold {deal.soldDaysAgo} days ago
              </div>
            </div>
            
            {/* See More Link - appears on hover */}
            <div className="absolute bottom-3 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href="#newsletter" 
                className="text-xs text-primary hover:underline font-medium flex items-center gap-1"
              >
                See similar deals
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          </div>
          );
        })}
      </div>

      {/* CTA Below Cards */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Don&apos;t let the next one slip away
        </p>
        <a 
          href="#newsletter" 
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium group"
        >
          Get instant deal alerts
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}