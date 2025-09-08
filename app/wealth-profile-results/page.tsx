'use client';

import { useEffect } from 'react';

export default function WealthProfileResultsPage() {
  useEffect(() => {
    // Redirect to external WealthArchetypes.com
    window.location.href = 'https://www.wealtharchetypes.com';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Redirecting to Wealth Archetypes...</h1>
        <p className="text-muted-foreground">If you are not redirected, <a href="https://www.wealtharchetypes.com" className="text-primary underline">click here</a>.</p>
      </div>
    </div>
  );
}