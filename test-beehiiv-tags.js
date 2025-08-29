#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const testBeehiivTags = async () => {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  console.log('Testing Beehiiv Tag Functionality...\n');
  console.log('API Key present:', !!apiKey);
  console.log('Publication ID:', publicationId);
  
  if (!apiKey || !publicationId) {
    console.error('\n❌ Missing Beehiiv credentials in .env.local');
    return;
  }
  
  // Test profile mapping
  const profileMapping = {
    'The Capital Titan': 'capital-titan',
    'The Time Architect': 'time-architect',
    'The Global Nomad': 'global-nomad',
    'The Empire Builder': 'empire-builder',
    'The Freedom Designer': 'freedom-designer',
    'The Remote Mogul': 'remote-mogul',
    'The Wealth Creator': 'wealth-creator'
  };
  
  // Test with each profile
  const testProfile = 'The Capital Titan';
  const mappedTag = profileMapping[testProfile];
  const fullTag = `wealth-profile-${mappedTag}`;
  const testEmail = `tag-test-${Date.now()}@example.com`;
  
  console.log('\nTesting with:');
  console.log('Email:', testEmail);
  console.log('Profile:', testProfile);
  console.log('Mapped Tag:', mappedTag);
  console.log('Full Tag:', fullTag);
  
  try {
    // Test the exact API call structure from subscribe route
    const requestBody = {
      email: testEmail,
      reactivate_existing: true,
      send_welcome_email: false,
      double_opt_override: 'on',
      utm_source: 'website',
      utm_medium: 'Wealth Profile: ' + testProfile,
      referring_site: 'myleskameron.com',
      custom_fields: [
        {
          name: 'wealth_profile',
          value: testProfile
        }
      ],
      // This is the exact structure from the code
      ...(testProfile && profileMapping[testProfile] ? {
        tags: [`wealth-profile-${profileMapping[testProfile]}`]
      } : {})
    };
    
    console.log('\nRequest body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }
    );
    
    console.log('\nResponse Status:', response.status);
    const responseText = await response.text();
    console.log('Response Body:', responseText);
    
    if (response.ok) {
      console.log('\n✅ Success! Check Beehiiv dashboard for:');
      console.log('- Email:', testEmail);
      console.log('- Expected tag:', fullTag);
      console.log('- Custom field wealth_profile:', testProfile);
      
      // Parse response to see what Beehiiv actually created
      try {
        const data = JSON.parse(responseText);
        console.log('\nBeehiiv response data:');
        console.log('- Subscriber ID:', data.data?.id);
        console.log('- Status:', data.data?.status);
        console.log('- Tags:', data.data?.tags || 'No tags returned');
      } catch (e) {
        // Response might not be JSON
      }
    } else {
      console.log('\n❌ Failed to create subscription with tags');
      
      // Try to understand the error
      try {
        const error = JSON.parse(responseText);
        console.log('Error details:', error);
      } catch (e) {
        console.log('Raw error:', responseText);
      }
    }
    
    // Test if tags field is even supported
    console.log('\n\nTesting minimal request with just tags...');
    const minimalTest = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: `minimal-${Date.now()}@example.com`,
          tags: ['test-tag']
        })
      }
    );
    
    console.log('Minimal test status:', minimalTest.status);
    console.log('Minimal test response:', await minimalTest.text());
    
  } catch (error) {
    console.error('\n❌ Failed to call Beehiiv API:', error.message);
  }
};

testBeehiivTags();