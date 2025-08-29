#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const testBeehiivAPI = async () => {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  console.log('Testing Beehiiv API directly...\n');
  console.log('API Key present:', !!apiKey);
  console.log('Publication ID present:', !!publicationId);
  console.log('Publication ID:', publicationId);
  
  if (!apiKey || !publicationId) {
    console.error('\n❌ Missing Beehiiv credentials in .env.local');
    return;
  }
  
  const testEmail = `beehiiv-test-${Date.now()}@example.com`;
  console.log('\nTesting with email:', testEmail);
  
  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: testEmail,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: 'direct-test',
          utm_medium: 'api-test',
          referring_site: 'myleskameron.com'
        })
      }
    );
    
    console.log('\nResponse Status:', response.status);
    console.log('Response Status Text:', response.statusText);
    
    const responseText = await response.text();
    console.log('\nResponse Body:', responseText);
    
    if (response.ok) {
      console.log('\n✅ Beehiiv API is working!');
      console.log('Check your Beehiiv dashboard for:', testEmail);
    } else {
      console.log('\n❌ Beehiiv API error');
      console.log('This might indicate:');
      console.log('- Invalid API key');
      console.log('- Invalid publication ID');
      console.log('- API permissions issue');
    }
    
  } catch (error) {
    console.error('\n❌ Failed to call Beehiiv API:', error.message);
  }
};

testBeehiivAPI();