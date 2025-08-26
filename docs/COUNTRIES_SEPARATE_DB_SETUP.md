# Setting Up a Separate Notion Database for Countries

This guide walks you through creating a dedicated Notion database for your travel/countries data.

## 📋 Step-by-Step Setup

### Step 1: Create a New Database in Notion

1. **Open Notion** and go to the page where you want to add your countries database
2. Type `/database` and select **"Database - Full page"** or **"Database - Inline"**
3. Choose **"Table"** view (default)
4. Name your database **"Countries Visited"** (or any name you prefer)

### Step 2: Set Up Your Database Properties

Your new database will have a default "Name" column. Let's add the columns we need:

1. **Keep or rename the default "Name" column** to **"Country"**
   - Click on the column header → "Edit property"
   - Change type to "Title"
   - This will be where you list each country

2. **Add a "Visit Year" column** (Optional)
   - Click **"+"** to add a new property
   - Name it **"Visit Year"**
   - Set type to **"Number"** or **"Select"**

3. **Add a "Current Location" column** (Optional)
   - Click **"+"** to add a new property  
   - Name it **"Current Location"**
   - Set type to **"Text"**
   - You can put your current location here (e.g., "Bali ⇄ Texas")

4. **Add a "Notes" column** (Optional)
   - Click **"+"** to add a new property
   - Name it **"Notes"**
   - Set type to **"Text"**
   - For any travel memories or notes

### Step 3: Add Your Countries

Now add each country as a separate row:

1. Click **"+ New"** to add a new row
2. Enter the country name in the "Country" column
3. Optionally add visit year, notes, etc.
4. Repeat for each country you've visited

**Example entries:**
```
Country         | Visit Year | Notes
----------------|------------|------------------
USA             | 2023       | Home country
Indonesia       | 2024       | Bali digital nomad
Thailand        | 2024       | Bangkok & islands
Japan           | 2023       | Tokyo & Kyoto
France          | 2022       | Paris & Nice
... etc
```

### Step 4: Get Your Database ID

1. Open your new Countries database in Notion
2. Look at the URL in your browser. It will look like:
   ```
   https://www.notion.so/yourworkspace/Countries-Visited-abc123xyz456...
   ```
3. Copy the ID portion (32 characters after the database name and before the "?"):
   - Format: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (32 chars)
   - Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Step 5: Share with Your Integration

1. In your Countries database, click the **"..."** menu in the top-right
2. Go to **"Connections"** or **"Add connections"**
3. Search for your integration name (the one you created earlier)
4. Click to add it
5. Confirm the integration has access

### Step 6: Add Database ID to Your Environment Variables

1. Open your `.env.local` file
2. Add this new line:
   ```env
   NOTION_COUNTRIES_DATABASE_ID=your_database_id_here
   ```
3. Your `.env.local` should now have:
   ```env
   NOTION_API_KEY=your_notion_integration_token
   NOTION_DATABASE_ID=your_original_database_id
   NOTION_COUNTRIES_DATABASE_ID=your_new_countries_database_id
   ```

### Step 7: Restart Your Development Server

1. Stop your development server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Visit your website and hover over "X Countries Visited" to see your data!

## 🎯 Alternative: Simple List Format

If you prefer a simpler setup, you can create a database with just one entry containing all countries:

1. Create database with these columns:
   - **Name**: "My Travel List" (or any title)
   - **Countries**: Text field with all countries (one per line)
   - **Current Location**: Your current location

2. Add single entry with all your countries:
   ```
   Name: My Travel List
   Countries: 
   USA
   Canada
   Mexico
   France
   Germany
   Japan
   Thailand
   Indonesia
   (etc...)
   Current Location: Bali ⇄ Texas
   ```

## ✅ Benefits of Separate Database

- **Clean Organization**: Countries data separate from other content
- **Easier Management**: Add/remove countries without affecting other data
- **More Flexibility**: Add columns like visit year, city, rating, etc.
- **Better Scaling**: Can add more travel-related features later

## 🔧 Troubleshooting

**Not seeing your countries?**
1. Check browser console (F12) for errors
2. Verify database ID is correct (32 characters)
3. Ensure integration has access to the database
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Getting "No entries found"?**
- Make sure you have at least one row in your database
- Check that your integration is connected to the database

## 📝 Example Database Structures

### Option 1: Detailed (One Country Per Row)
Best for: Tracking visit dates, cities, notes
```
| Country    | Visit Year | Cities Visited        | Rating |
|------------|------------|-----------------------|--------|
| Japan      | 2023       | Tokyo, Kyoto, Osaka   | ⭐⭐⭐⭐⭐ |
| Thailand   | 2024       | Bangkok, Phuket       | ⭐⭐⭐⭐  |
| Indonesia  | 2024       | Bali, Jakarta         | ⭐⭐⭐⭐⭐ |
```

### Option 2: Simple List (Single Entry)
Best for: Quick setup, just the list
```
| Name           | Countries (Text)     | Current Location |
|----------------|---------------------|------------------|
| Travel List    | USA                 | Bali ⇄ Texas     |
|                | Canada              |                  |
|                | Mexico              |                  |
|                | (all countries      |                  |
|                | listed here)        |                  |
```

Choose whichever structure works best for you! The code will automatically detect and parse your data correctly.
