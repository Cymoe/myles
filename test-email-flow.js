#!/usr/bin/env node

const testEmailFlow = async () => {
  const testEmail = `test+${Date.now()}@example.com`;
  const apiUrl = 'http://localhost:3000/api/subscribe';
  
  console.log('Testing email flow with:', testEmail);
  console.log('-----------------------------------\n');
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testEmail,
        leadMagnet: 'test-flow'
      })
    });
    
    const data = await response.json();
    
    console.log('Response Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('\n✅ Email flow test successful!');
      console.log('- Resend welcome email should be sent to:', testEmail);
      console.log('- Beehiiv subscription should be created');
      console.log('\nCheck your Resend dashboard for email details');
      console.log('Check your Beehiiv dashboard for new subscriber');
    } else {
      console.log('\n❌ Email flow test failed');
      console.log('Error:', data.error);
    }
  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
  }
};

// Run the test
testEmailFlow();