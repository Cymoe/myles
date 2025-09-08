'use client';

import { useState, useEffect, useRef } from 'react';

export default function QuickStats() {
  const [currentLocation, setCurrentLocation] = useState('Bali ⇄ Texas ⇄ Zurich');
  const [totalCountries, setTotalCountries] = useState(26);
  const [countriesThisMonth, setCountriesThisMonth] = useState(3);
  const [activeProjects, setActiveProjects] = useState(2);
  const [espressoCount, setEspressoCount] = useState(1);
  const [showCountries, setShowCountries] = useState(false);
  const [countriesVisited, setCountriesVisited] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [snitchLaunched, setSnitchLaunched] = useState(false);
  const snitchLaunchTimer = useRef<NodeJS.Timeout>();

  // Fetch countries data from Notion
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch('/api/notion/countries');
        if (response.ok) {
          const data = await response.json();
          setCountriesVisited(data.countriesVisited || []);
          setCurrentLocation(data.currentLocation || 'Bali ⇄ Texas ⇄ Zurich');
          setTotalCountries(data.totalCountries || data.countriesVisited?.length || 26);
        }
      } catch (error) {
        console.error('Error fetching countries data:', error);
        // Use fallback data
        setCountriesVisited([
          'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina',
          'UK', 'France', 'Spain', 'Italy', 'Germany',
          'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Czech Republic',
          'Poland', 'Greece', 'Turkey', 'UAE', 'India',
          'Thailand', 'Indonesia', 'Singapore', 'Japan', 'Australia',
          'New Zealand'
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountriesData();
    
    // Set other data
    setCountriesThisMonth(3);
    setActiveProjects(2);
    
    // Espresso counter - one for every day of the year
    const daysIntoYear = Math.floor((Date.now() - new Date('2025-01-01').getTime()) / (1000 * 60 * 60 * 24)) + 1;
    setEspressoCount(daysIntoYear); // 1 espresso per day
  }, []);

  // Set up golden snitch launch timer
  useEffect(() => {
    // Check if already caught
    const hasCaught = localStorage.getItem('golden-snitch-caught');
    if (hasCaught || snitchLaunched) {
      return;
    }

    // Random delay between 2-4 seconds
    const delay = 2000 + Math.random() * 2000;
    console.log('Stats Snitch: Will launch in', delay / 1000, 'seconds');

    snitchLaunchTimer.current = setTimeout(() => {
      console.log('Stats Snitch: Launching!');
      setSnitchLaunched(true);
      
      // Trigger the main golden snitch launch
      if ((window as any).__launchGoldenSnitch) {
        (window as any).__launchGoldenSnitch();
      }
    }, delay);

    return () => {
      if (snitchLaunchTimer.current) {
        clearTimeout(snitchLaunchTimer.current);
      }
    };
  }, [snitchLaunched]);

  const stats = [
    { icon: '📍', label: currentLocation },
    { icon: 'snitch', label: `${totalCountries} Countries Visited`, hasTooltip: true },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm md:text-base text-muted-foreground font-light">
      {stats.map((stat, index) => (
        <div key={index} className="relative flex items-center gap-1.5">
          {stat.icon === 'snitch' ? (
            <div 
              className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0" 
              data-stats-snitch
              style={{
                opacity: snitchLaunched ? 0 : 1,
                transform: snitchLaunched ? 'scale(0)' : 'scale(1)',
                transition: 'all 0.3s ease-out'
              }}
            >
              {/* Mini Golden Snitch */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full animate-pulse shadow-sm shadow-yellow-400/50">
                {/* Inner glow */}
                <div className="absolute inset-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
                {/* Highlight */}
                <div className="absolute top-[2px] left-[2px] w-1 h-1 bg-white rounded-full opacity-80" />
              </div>
              {/* Tiny wings */}
              <div className="absolute top-1/2 -translate-y-1/2">
                <div className="absolute -left-[6px] w-[6px] h-[3px] bg-white/60 rounded-full" />
                <div className="absolute -right-[6px] w-[6px] h-[3px] bg-white/60 rounded-full" />
              </div>
            </div>
          ) : (
            <span className="text-base md:text-lg">{stat.icon}</span>
          )}
          <span 
            className={stat.hasTooltip ? "cursor-help relative" : ""}
            onMouseEnter={() => stat.hasTooltip && setShowCountries(true)}
            onMouseLeave={() => stat.hasTooltip && setShowCountries(false)}
          >
            {stat.label}
            {stat.hasTooltip && showCountries && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-card border border-border rounded-lg shadow-xl z-50">
                <div className="text-xs font-normal text-foreground">
                  <div className="font-semibold mb-2 text-sm">Countries Visited:</div>
                  {isLoading ? (
                    <div className="text-muted-foreground animate-pulse">Loading countries...</div>
                  ) : countriesVisited.length > 0 ? (
                    <div className="grid grid-cols-3 gap-1">
                      {countriesVisited.map((country, idx) => (
                        <div key={idx} className="text-muted-foreground hover:text-foreground transition-colors">
                          {country}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-muted-foreground">No countries data available</div>
                  )}
                </div>
              </div>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
