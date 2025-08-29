import { NextResponse } from 'next/server';
import { calculateProfile } from '@/lib/wealthProfileQuiz';

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json(
        { error: 'No answers provided' },
        { status: 400 }
      );
    }

    // Calculate the profile based on answers
    const result = calculateProfile(answers);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Calculate profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}