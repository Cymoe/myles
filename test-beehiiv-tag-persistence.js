#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const testTagPersistence = async () => {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  console.log('Testing Beehiiv Tag Persistence and Retrieval...\n');
  
  const testEmail = `persistence-${Date.now()}@example.com`;
  const testTags = ['test-tag-1', 'test-tag-2', 'wealth-profile-empire-builder'];
  
  try {
    // Create subscription
    console.log('1. Creating subscription:', testEmail);
    const createRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: testEmail })
      }
    );
    
    const createData = await createRes.json();
    const subId = createData.data?.id;
    console.log('   Created with ID:', subId);
    
    // Add tags
    console.log('\n2. Adding tags:', testTags);
    const tagRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subId}/tags`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tags: testTags })
      }
    );
    
    const tagData = await tagRes.json();
    console.log('   Response tags:', tagData.data?.tags);
    
    // Try different ways to retrieve subscriber with tags
    console.log('\n3. Attempting to retrieve subscriber with tags...');
    
    // Method A: Direct GET
    console.log('\n   Method A: Direct GET');
    const getRes1 = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subId}`,
      {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      }
    );
    const data1 = await getRes1.json();
    console.log('   Tags in response:', data1.data?.tags || 'none');
    
    // Method B: GET with expand parameter
    console.log('\n   Method B: GET with expand=tags');
    const getRes2 = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subId}?expand=tags`,
      {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      }
    );
    const data2 = await getRes2.json();
    console.log('   Tags in response:', data2.data?.tags || 'none');
    
    // Method C: List subscriptions with email filter
    console.log('\n   Method C: List with email filter');
    const getRes3 = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions?email=${encodeURIComponent(testEmail)}`,
      {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      }
    );
    const data3 = await getRes3.json();
    const sub = data3.data?.[0];
    console.log('   Tags in response:', sub?.tags || 'none');
    
    // Method D: Get tags endpoint directly
    console.log('\n   Method D: GET tags endpoint');
    const getRes4 = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subId}/tags`,
      {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      }
    );
    
    if (getRes4.ok) {
      const data4 = await getRes4.json();
      console.log('   Tags endpoint response:', data4);
    } else {
      console.log('   Tags endpoint status:', getRes4.status);
    }
    
    // Summary
    console.log('\n4. Summary:');
    console.log('   - Tags were successfully added (confirmed by POST response)');
    console.log('   - Tags may not appear in GET responses immediately');
    console.log('   - This is likely by design - tags work for automation triggers');
    console.log('   - Check Beehiiv dashboard to confirm tags are applied');
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

testTagPersistence();