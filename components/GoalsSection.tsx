'use client';

import { useEffect, useState } from 'react';

interface GoalsData {
  goals2024?: string[];
  goals2025: string[];
  currentFocus: string[];
  tenYearGoals: string[];
  philosophy: {
    line1: string;
    line2: string;
  };
}

export default function GoalsSection() {
  const [goals, setGoals] = useState<GoalsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGoals() {
      try {
        const response = await fetch('/api/notion/goals');
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGoals();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto my-24 p-12 bg-gray-50 border-l-4 border-l-primary border-t border-b border-r border-gray-200">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!goals) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto my-24 p-12 bg-gray-50 border-l-4 border-l-primary border-t border-b border-r border-gray-200">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-light text-3xl text-gray-900 tracking-wide mb-2">Public Goals</h2>
          <p className="text-gray-600 font-light">Roll-ups in progress. Zero personal capital.</p>
        </div>
        
        {/* 2024 Goals - Optional */}
        {goals.goals2024 && goals.goals2024.length > 0 && (
          <div>
            <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">2024 (Completed)</h3>
            <div className="space-y-2 text-gray-600 font-light">
              {goals.goals2024.map((goal, index) => (
                <p key={index} dangerouslySetInnerHTML={{ 
                  __html: goal.startsWith('•') ? goal : `• ${goal}` 
                }} />
              ))}
            </div>
          </div>
        )}

        {/* 2025 Goals */}
        <div>
          <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">2025</h3>
          <div className="space-y-2 text-gray-600 font-light">
            {goals.goals2025.map((goal, index) => (
              <p key={index} dangerouslySetInnerHTML={{ 
                __html: goal.startsWith('•') ? goal : `• ${goal}` 
              }} />
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">Current Focus</h3>
          <div className="space-y-2 text-gray-600 font-light">
            {goals.currentFocus.map((focus, index) => (
              <p key={index}>{focus.startsWith('•') ? focus : `• ${focus}`}</p>
            ))}
          </div>
        </div>

        {/* Long Term */}
        <div>
          <h3 className="font-light text-xl text-gray-900 mb-4 tracking-wide">10 Years</h3>
          <div className="space-y-2 text-gray-600 font-light">
            {goals.tenYearGoals.map((goal, index) => (
              <p key={index}>{goal.startsWith('•') ? goal : `• ${goal}`}</p>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-gray-600 font-light leading-relaxed">
            {goals.philosophy.line1}
          </p>
          <p className="text-gray-600 font-light leading-relaxed mt-3">
            {goals.philosophy.line2}
          </p>
        </div>
      </div>
    </div>
  );
}