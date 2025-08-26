# Countries Data Notion Setup Guide

This guide will help you set up your Notion database to manage your countries visited data that will be displayed on your website.

## Setup Instructions

### 1. Create a New Entry in Your Notion Database

In your existing Notion database (the one used for Goals), create a new entry with:

#### Option A: Using Select Tag (Recommended)
- **Name/Title**: "Travel Countries" (or any name you prefer)
- **Select**: Set to "Countries"
- **Countries Column**: Create a new text column called "Countries" or "Countries Visited"
  - Enter each country on a new line, OR
  - Enter countries separated by commas

#### Option B: Without Select Tag
- **Name/Title**: Must include "countries" or "travel" in the title (case-insensitive)
- **Countries Column**: Create a text column with one of these names:
  - "Countries"
  - "Countries Visited" 
  - "Travel"
  - "List"
  - "Country List"

### 2. Optional Fields

You can also add these optional columns for additional features:
- **Current Location**: Your current location (e.g., "Bali ⇄ Texas")
- **Location**: Alternative column name for current location

### 3. Example Notion Database Structure

```
| Name           | Select    | Countries Visited        | Current Location |
|----------------|-----------|-------------------------|------------------|
| Travel Countries | Countries | USA                     | Bali ⇄ Texas     |
|                |           | Canada                  |                  |
|                |           | Mexico                  |                  |
|                |           | Brazil                  |                  |
|                |           | ...                     |                  |
```

### 4. Countries List Format

You can format your countries list in either of these ways:

**Option 1: One country per line**
```
USA
Canada
Mexico
Brazil
Argentina
```

**Option 2: Comma-separated**
```
USA, Canada, Mexico, Brazil, Argentina, UK, France, Spain
```

## How It Works

1. The app fetches data from your Notion database via the API
2. It looks for an entry tagged with "Countries" in the Select column
3. If not found, it searches for any entry with "countries" or "travel" in the title
4. The countries list is parsed and displayed in the hover tooltip
5. The total count is automatically calculated from the list
6. If Notion is unavailable, it falls back to the default list

## Updating Your Countries

Simply update the countries list in your Notion database, and the changes will be reflected on your website. The data is fetched dynamically each time the page loads.

## Troubleshooting

If your countries aren't showing up:
1. Check that your NOTION_API_KEY and NOTION_DATABASE_ID are correctly set in your .env.local file
2. Ensure the Notion integration has access to your database
3. Verify the column names match one of the expected names listed above
4. Check the browser console for any error messages

## Default Fallback

If the Notion API is unavailable or misconfigured, the app will display a default list of 26 countries as a fallback to ensure your site continues working smoothly.
