#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const testCompleteQuizFlow = async () => {
  console.log('Testing Complete Quiz Flow with Tag Application...\n');
  
  // Test each wealth profile
  const profiles = [
    'The Capital Titan',
    'The Time Architect',
    'The Global Nomad',
    'The Empire Builder',
    'The Freedom Designer',
    'The Remote Mogul',
    'The Wealth Creator'
  ];
  
  const profileMapping = {
    'The Capital Titan': 'capital-titan',
    'The Time Architect': 'time-architect',
    'The Global Nomad': 'global-nomad',
    'The Empire Builder': 'empire-builder',
    'The Freedom Designer': 'freedom-designer',
    'The Remote Mogul': 'remote-mogul',
    'The Wealth Creator': 'wealth-creator'
  };
  
  // Pick a random profile to test
  const testProfile = profiles[Math.floor(Math.random() * profiles.length)];
  const testEmail = `quiz-test-${Date.now()}@example.com`;
  
  console.log('Testing with profile:', testProfile);
  console.log('Expected tag:', `wealth-profile-${profileMapping[testProfile]}`);
  console.log('Email:', testEmail);
  console.log('\nCalling /api/subscribe endpoint...');
  
  try {
    // Simulate the exact call from the quiz
    const response = await fetch('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: testEmail,
        leadMagnet: `Wealth Profile: ${testProfile}`,
        quizResult: testProfile,
        profileData: {
          profile: {
            id: profileMapping[testProfile],
            name: testProfile
          },
          percentages: {
            capital: 33,
            time: 33,
            location: 34
          }
        }
      })
    });
    
    console.log('Response status:', response.status);
    const responseData = await response.json();
    console.log('Response:', responseData);
    
    if (response.ok) {
      console.log('\n✅ Subscribe endpoint succeeded!');
      console.log('\nNow check Beehiiv dashboard for:');
      console.log('1. Subscriber:', testEmail);
      console.log('2. Custom field wealth_profile:', testProfile);
      console.log('3. Tag:', `wealth-profile-${profileMapping[testProfile]}`);
      
      // Wait a moment then verify the subscriber was created with tags
      console.log('\nWaiting 2 seconds before verification...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Verify directly with Beehiiv API
      console.log('\nVerifying with Beehiiv API...');
      const verifyResponse = await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions?email=${encodeURIComponent(testEmail)}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`
          }
        }
      );
      
      if (verifyResponse.ok) {
        const verifyData = await verifyResponse.json();
        const subscriber = verifyData.data?.[0];
        
        if (subscriber) {
          console.log('\nSubscriber found in Beehiiv!');
          console.log('- ID:', subscriber.id);
          console.log('- Status:', subscriber.status);
          console.log('- Tags:', subscriber.tags || 'No tags shown');
          console.log('- Custom fields:', subscriber.custom_fields || 'No custom fields shown');
          
          // The initial GET might not show tags, so let's fetch the specific subscriber
          const subResponse = await fetch(
            `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriber.id}`,
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`
              }
            }
          );
          
          if (subResponse.ok) {
            const subData = await subResponse.json();
            console.log('\nDetailed subscriber data:');
            console.log(JSON.stringify(subData.data, null, 2));
          }
        }
      }
    } else {
      console.log('\n❌ Subscribe endpoint failed');
    }
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.log('\nMake sure the development server is running on localhost:3000');
  }
};

// Run the test
testCompleteQuizFlow();