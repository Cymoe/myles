#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const testBeehiivUpdateTags = async () => {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  console.log('Testing Beehiiv Update/Tag Endpoints...\n');
  
  if (!apiKey || !publicationId) {
    console.error('❌ Missing Beehiiv credentials');
    return;
  }
  
  // First, create a subscriber
  const testEmail = `update-test-${Date.now()}@example.com`;
  console.log('Creating test subscriber:', testEmail);
  
  try {
    const createResponse = await fetch(
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
          send_welcome_email: false
        })
      }
    );
    
    const createData = await createResponse.json();
    console.log('Created subscriber:', createData.data?.id);
    
    if (!createData.data?.id) {
      console.error('Failed to create subscriber');
      return;
    }
    
    const subscriberId = createData.data.id;
    
    // Test different endpoints for updating/tagging
    console.log('\n1. Testing PATCH to update subscriber...');
    const updateResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subscriberId}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tags: ['wealth-profile-capital-titan']
        })
      }
    );
    
    console.log('Update response status:', updateResponse.status);
    if (updateResponse.status !== 404) {
      console.log('Update response:', await updateResponse.text());
    }
    
    // Test tag-specific endpoints
    console.log('\n2. Testing POST to add tags...');
    const tagResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subscriberId}/tags`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tags: ['wealth-profile-capital-titan']
        })
      }
    );
    
    console.log('Tag response status:', tagResponse.status);
    if (tagResponse.status !== 404) {
      console.log('Tag response:', await tagResponse.text());
    }
    
    // Try automation endpoints
    console.log('\n3. Checking for automation endpoints...');
    const automationResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/automations`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      }
    );
    
    console.log('Automation list status:', automationResponse.status);
    if (automationResponse.ok) {
      const automations = await automationResponse.json();
      console.log('Available automations:', automations.data?.length || 0);
    }
    
    // Get subscriber details to see all fields
    console.log('\n4. Getting subscriber details...');
    const getResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subscriberId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      }
    );
    
    console.log('Get subscriber status:', getResponse.status);
    if (getResponse.ok) {
      const subData = await getResponse.json();
      console.log('Subscriber data fields:', Object.keys(subData.data || {}));
      console.log('Full data:', JSON.stringify(subData.data, null, 2));
    }
    
  } catch (error) {
    console.error('API Error:', error.message);
  }
};

testBeehiivUpdateTags();