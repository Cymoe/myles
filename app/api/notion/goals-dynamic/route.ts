import { NextResponse } from 'next/server';
import { getDynamicGoalsContent } from '@/lib/notion-dynamic';

export async function GET() {
  try {
    const goals = await getDynamicGoalsContent();
    
    if (!goals) {
      // Return default content if Notion is not configured or fails
      return NextResponse.json({
        "2024 Goals": [
          'Previous goals here ✅'
        ],
        "2025 Goals": [
          'Operate contracting company fully remote ✅',
          'Take 3 months off ✅',
          'Six Figures w/ Home Service Reputation Management Agency ⭕',
          'Work ONLY from phone (no desktops) ⭕',
        ],
        "Current Focus": [
          'Building reputation management systems',
          'Optimizing remote operations',
          'Creating scalable processes'
        ],
        "10 Year Goals": [
          '$50M portfolio value',
          'Complete location independence'
        ]
      });
    }
    
    return NextResponse.json(goals);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch goals' }, { status: 500 });
  }
}

export const revalidate = 300; // Revalidate every 5 minutes