#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const verifyTagFix = async () => {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  console.log('🔍 Verifying Beehiiv Tag Fix...\n');
  
  if (!apiKey || !publicationId) {
    console.error('❌ Missing Beehiiv credentials');
    return;
  }
  
  // Test profile
  const testEmail = `tag-verify-${Date.now()}@example.com`;
  const testProfile = 'The Capital Titan';
  const expectedTag = 'wealth-profile-capital-titan';
  
  console.log('📧 Test Email:', testEmail);
  console.log('🎯 Test Profile:', testProfile);
  console.log('🏷️  Expected Tag:', expectedTag);
  console.log('\n--- Step 1: Create Subscription ---');
  
  try {
    // Step 1: Create subscription
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
          send_welcome_email: false,
          utm_source: 'website',
          utm_medium: `Wealth Profile: ${testProfile}`,
          custom_fields: [
            {
              name: 'wealth_profile',
              value: testProfile
            }
          ]
        })
      }
    );
    
    const createData = await createResponse.json();
    const subscriberId = createData.data?.id;
    
    console.log('✅ Subscription created');
    console.log('   ID:', subscriberId);
    console.log('   Status:', createData.data?.status);
    
    if (!subscriberId) {
      console.error('❌ No subscriber ID returned');
      return;
    }
    
    console.log('\n--- Step 2: Add Tags ---');
    
    // Step 2: Add tags
    const tagResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subscriberId}/tags`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tags: [expectedTag]
        })
      }
    );
    
    const tagData = await tagResponse.json();
    
    if (tagResponse.ok) {
      console.log('✅ Tags added successfully');
      console.log('   Tags:', tagData.data?.tags);
    } else {
      console.log('❌ Failed to add tags');
      console.log('   Error:', tagData);
    }
    
    console.log('\n--- Step 3: Verify Subscriber ---');
    
    // Small delay to ensure data propagation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 3: Get subscriber details
    const getResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${subscriberId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    
    const subData = await getResponse.json();
    
    console.log('📋 Final Subscriber Data:');
    console.log('   Email:', subData.data?.email);
    console.log('   Tags:', subData.data?.tags || 'No tags');
    console.log('   Custom Fields:', subData.data?.custom_fields || 'No custom fields');
    console.log('   UTM Medium:', subData.data?.utm_medium);
    
    // Verify tag was applied
    const hasTags = subData.data?.tags && subData.data.tags.includes(expectedTag);
    
    console.log('\n========== VERIFICATION RESULT ==========');
    if (hasTags) {
      console.log('✅ SUCCESS: Tag was properly applied!');
      console.log('   The two-step process is working correctly.');
    } else {
      console.log('❌ FAILED: Tag was not found on subscriber');
      console.log('   Expected:', expectedTag);
      console.log('   Found:', subData.data?.tags || 'none');
    }
    console.log('=========================================\n');
    
    // Additional info
    console.log('💡 Next Steps:');
    console.log('1. Check Beehiiv dashboard for subscriber:', testEmail);
    console.log('2. Verify the tag appears in the UI');
    console.log('3. Check if automation was triggered');
    console.log('4. Test with actual quiz completion flow\n');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  }
};

// Run verification
verifyTagFix();