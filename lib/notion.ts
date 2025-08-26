import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Types for our content
export interface GoalsContent {
  goals2024: string[];
  goals2025: string[];
  currentFocus: string[];
  tenYearGoals: string[];
  philosophy?: {
    line1: string;
    line2: string;
  };
}

export interface AboutContent {
  tagline: string;
  questions: string[];
  paragraphs: string[];
}

// Fetch goals from Notion database
export async function getGoalsContent(): Promise<GoalsContent | null> {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID not configured');
      return null;
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Select',
        select: {
          equals: 'Goals'
        }
      },
      // No sorting needed - we only have one row
    });

    if (response.results.length === 0) {
      return null;
    }

    // Parse the first result (assuming single goals page)
    const page = response.results[0] as any;
    console.log('Notion page properties:', JSON.stringify(page.properties, null, 2));
    
    // Parse text from Notion's text property format
    const getText = (property: any): string => {
      if (!property) return '';
      if (property.rich_text && property.rich_text.length > 0) {
        return property.rich_text.map((rt: any) => rt.plain_text).join('');
      }
      if (property.title && property.title.length > 0) {
        return property.title.map((t: any) => t.plain_text).join('');
      }
      return '';
    };
    
    // You'll need to adjust these property names based on your Notion database structure
    return {
      goals2024: getText(page.properties['2024 Goals']).split('\n').filter(Boolean),
      goals2025: getText(page.properties['2025 Goals']).split('\n').filter(Boolean),
      currentFocus: getText(page.properties['Current Focus']).split('\n').filter(Boolean),
      tenYearGoals: getText(page.properties['10 Year Goals']).split('\n').filter(Boolean),
      philosophy: {
        line1: getText(page.properties['Philosophy Line 1']) || 'Find fragmented sectors. Buy at 3-5x EBITDA. Consolidate. Exit to PE at 10-15x. Repeat.',
        line2: getText(page.properties['Philosophy Line 2']) || 'No personal money. No personal guarantees. Just OPM, leverage, and execution.'
      }
    };
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return null;
  }
}

// Fetch page content by ID
export async function getPageContent(pageId: string): Promise<any> {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error('Error fetching page from Notion:', error);
    return null;
  }
}

// Fetch blocks (content) from a page
export async function getPageBlocks(pageId: string): Promise<any[]> {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching blocks from Notion:', error);
    return [];
  }
}

// Countries data interface
export interface CountriesData {
  countriesVisited: string[];
  currentLocation?: string;
  totalCountries?: number;
}

// Fetch countries from Notion database
export async function getCountriesData(): Promise<CountriesData | null> {
  try {
    // Use dedicated countries database if available, otherwise fall back to main database
    const databaseId = process.env.NOTION_COUNTRIES_DATABASE_ID || process.env.NOTION_DATABASE_ID;
    
    if (!databaseId) {
      console.error('No Notion database ID configured for countries');
      return null;
    }

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    if (response.results.length === 0) {
      console.log('No entries found in countries database');
      return null;
    }

    // If using dedicated countries database, just get the first entry
    // If using shared database, look for countries-related entry
    let page;
    
    if (process.env.NOTION_COUNTRIES_DATABASE_ID) {
      // Dedicated database - use first entry
      page = response.results[0] as any;
    } else {
      // Shared database - look for countries entry
      page = response.results.find((p: any) => {
        const selectProp = p.properties['Select'];
        if (selectProp?.select?.name === 'Countries') return true;
        
        const title = p.properties['Name']?.title?.[0]?.plain_text || '';
        return title.toLowerCase().includes('countries') || title.toLowerCase().includes('travel');
      });
      
      if (!page) {
        return null;
      }
    }

    return parseCountriesData(page);
    
  } catch (error) {
    console.error('Error fetching countries from Notion:', error);
    return null;
  }
}

function parseCountriesData(page: any): CountriesData {
  // Helper to extract text
  const getText = (property: any): string => {
    if (!property) return '';
    if (property.rich_text && property.rich_text.length > 0) {
      return property.rich_text.map((rt: any) => rt.plain_text).join('');
    }
    if (property.title && property.title.length > 0) {
      return property.title.map((t: any) => t.plain_text).join('');
    }
    return '';
  };

  // Look for countries list in various possible column names
  let countriesList: string[] = [];
  const possibleColumnNames = ['Countries', 'Countries Visited', 'Travel', 'List', 'Country List'];
  
  for (const columnName of possibleColumnNames) {
    if (page.properties[columnName]) {
      const content = getText(page.properties[columnName]);
      if (content) {
        // Split by newline or comma
        countriesList = content.split(/[\n,]/).map((c: string) => c.trim()).filter(Boolean);
        break;
      }
    }
  }

  // Get current location if available
  const currentLocation = getText(page.properties['Current Location']) || 
                          getText(page.properties['Location']) || 
                          'Bali ⇄ Texas';

  return {
    countriesVisited: countriesList.length > 0 ? countriesList : [
      // Fallback list if no data in Notion
      'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina',
      'UK', 'France', 'Spain', 'Italy', 'Germany',
      'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Czech Republic',
      'Poland', 'Greece', 'Turkey', 'UAE', 'India',
      'Thailand', 'Indonesia', 'Singapore', 'Japan', 'Australia',
      'New Zealand'
    ],
    currentLocation,
    totalCountries: countriesList.length || 26
  };
}

// Alternative: Fetch countries where each country is a separate database entry
export async function getCountriesAsRows(): Promise<CountriesData | null> {
  try {
    const databaseId = process.env.NOTION_COUNTRIES_DATABASE_ID;
    
    if (!databaseId) {
      return null;
    }

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    if (response.results.length === 0) {
      return null;
    }

    // Extract country names from each row
    const countriesList: string[] = [];
    let currentLocation = 'Bali ⇄ Texas';
    
    for (const page of response.results) {
      const pageData = page as any;
      
      // Try to get country name from various possible column names
      const countryName = 
        getText(pageData.properties['Country']) ||
        getText(pageData.properties['Name']) ||
        getText(pageData.properties['Title']) ||
        getText(pageData.properties['Place']);
      
      if (countryName) {
        countriesList.push(countryName);
      }
      
      // Check for current location in any row
      const location = getText(pageData.properties['Current Location']) || 
                      getText(pageData.properties['Location']);
      if (location) {
        currentLocation = location;
      }
    }

    return {
      countriesVisited: countriesList,
      currentLocation,
      totalCountries: countriesList.length
    };
    
  } catch (error) {
    console.error('Error fetching countries as rows:', error);
    return null;
  }
  
  // Helper function
  function getText(property: any): string {
    if (!property) return '';
    if (property.rich_text && property.rich_text.length > 0) {
      return property.rich_text.map((rt: any) => rt.plain_text).join('');
    }
    if (property.title && property.title.length > 0) {
      return property.title.map((t: any) => t.plain_text).join('');
    }
    if (property.select) {
      return property.select.name;
    }
    return '';
  }
}