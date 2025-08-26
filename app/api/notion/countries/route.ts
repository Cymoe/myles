import { NextResponse } from 'next/server';
import { getCountriesData, getCountriesAsRows } from '@/lib/notion';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    let data = null;
    
    // If using a dedicated countries database, try both formats
    if (process.env.NOTION_COUNTRIES_DATABASE_ID) {
      // First try getting countries as individual rows
      data = await getCountriesAsRows();
      
      // If no rows or only one row, try the list format
      if (!data || data.countriesVisited.length <= 1) {
        data = await getCountriesData();
      }
    } else {
      // Using shared database, use regular method
      data = await getCountriesData();
    }
    
    if (!data) {
      // Return default data if Notion fetch fails
      return NextResponse.json({
        countriesVisited: [
          'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina',
          'UK', 'France', 'Spain', 'Italy', 'Germany',
          'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Czech Republic',
          'Poland', 'Greece', 'Turkey', 'UAE', 'India',
          'Thailand', 'Indonesia', 'Singapore', 'Japan', 'Australia',
          'New Zealand'
        ],
        currentLocation: 'Bali ⇄ Texas',
        totalCountries: 26
      });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in countries API:', error);
    
    // Return default data on error
    return NextResponse.json({
      countriesVisited: [
        'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina',
        'UK', 'France', 'Spain', 'Italy', 'Germany',
        'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Czech Republic',
        'Poland', 'Greece', 'Turkey', 'UAE', 'India',
        'Thailand', 'Indonesia', 'Singapore', 'Japan', 'Australia',
        'New Zealand'
      ],
      currentLocation: 'Bali ⇄ Texas',
      totalCountries: 26
    });
  }
}
