'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WealthProfileQuizPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external WealthArchetypes.com quiz
    window.location.href = 'https://www.wealtharchetypes.com/test';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Redirecting to Wealth Archetypes Quiz...</h1>
        <p className="text-muted-foreground">If you are not redirected, <a href="https://www.wealtharchetypes.com/test" className="text-primary underline">click here</a>.</p>
      </div>
    </div>
  );
}