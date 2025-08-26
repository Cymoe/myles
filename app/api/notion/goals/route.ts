import { NextResponse } from 'next/server';
import { getGoalsContent } from '@/lib/notion';

export async function GET() {
  try {
    const goals = await getGoalsContent();
    
    if (!goals) {
      // Return default content if Notion is not configured or fails
      return NextResponse.json({
        goals2024: [
          'Previous year goals here'
        ],
        goals2025: [
          'Operate contracting company fully remote ✅',
          'Take 3 months off ✅',
          'Six Figures w/ Home Service Reputation Management Agency ⭕',
          'Work ONLY from phone (no desktops) ⭕',
          'Launch new service offering ⭕',
        
        
        ],
        currentFocus: [
          'HVAC: 5 more acquisitions lined up',
          'Dental: LOIs on 3 practices',
          'Refining 100% OPM structures',
          'Acquire 10 dental practices',
        ],
        tenYearGoals: [
          '$50M combined portfolio revenue',
          '$50M combined portfolio revenue',
        ],
        philosophy: {
          line1: 'Find fragmented sectors. Buy at 3-5x EBITDA. Consolidate. Exit to PE at 10-15x. Repeat.',
          line2: 'No personal money. No personal guarantees. Just OPM, leverage, and execution.'
        }
      });
    }
    
    return NextResponse.json(goals);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch goals' }, { status: 500 });
  }
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 300; // Revalidate every 5 minutes