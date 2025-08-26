import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Dynamic content type - accepts any properties
export interface DynamicGoalsContent {
  [key: string]: string | string[] | any;
}

// Fetch goals dynamically - no hardcoded column names!
export async function getDynamicGoalsContent(): Promise<DynamicGoalsContent | null> {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID not configured');
      return null;
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    if (response.results.length === 0) {
      return null;
    }

    // Get all entries with "Goals" tag
    const goalsEntries = response.results.filter((page: any) => {
      const selectProp = page.properties['Select'];
      return selectProp?.select?.name === 'Goals';
    });

    if (goalsEntries.length === 0) {
      return null;
    }

    const page = goalsEntries[0] as any;
    const result: DynamicGoalsContent = {};

    // Dynamically process ALL properties
    for (const [propertyName, propertyValue] of Object.entries(page.properties)) {
      // Skip the Select column and Name column
      if (propertyName === 'Select' || propertyName === 'Name') continue;

      // Extract text from any property type
      let content = '';
      
      if ((propertyValue as any).type === 'rich_text' && (propertyValue as any).rich_text.length > 0) {
        // Convert Notion rich text to HTML
        content = (propertyValue as any).rich_text.map((rt: any) => {
          let text = rt.plain_text;
          
          // Apply Notion formatting to HTML
          if (rt.annotations.bold) text = `<strong>${text}</strong>`;
          if (rt.annotations.italic) text = `<em>${text}</em>`;
          if (rt.annotations.strikethrough) text = `<s>${text}</s>`;
          if (rt.annotations.underline) text = `<u>${text}</u>`;
          if (rt.annotations.code) text = `<code>${text}</code>`;
          
          // Handle links
          if (rt.href) text = `<a href="${rt.href}" target="_blank" class="text-primary hover:underline">${text}</a>`;
          
          return text;
        }).join('');
      } else if ((propertyValue as any).type === 'title' && (propertyValue as any).title.length > 0) {
        content = (propertyValue as any).title.map((t: any) => t.plain_text).join('');
      } else if ((propertyValue as any).type === 'number') {
        content = (propertyValue as any).number?.toString() || '';
      } else if ((propertyValue as any).type === 'checkbox') {
        content = (propertyValue as any).checkbox ? '✓' : '✗';
      } else if ((propertyValue as any).type === 'url') {
        content = (propertyValue as any).url || '';
      }

      // If content has line breaks, split into array
      if (content.includes('\n')) {
        result[propertyName] = content.split('\n').filter(Boolean);
      } else if (content) {
        result[propertyName] = content;
      }
    }

    console.log('Dynamic Notion data:', result);
    return result;
    
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return null;
  }
}