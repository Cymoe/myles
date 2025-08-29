// Test Blueprint email flow
// Run with: node test-blueprint-flow.js

const testEmail = `test-blueprint-${Date.now()}@example.com`;

console.log('Testing Blueprint Starter Pack flow...');
console.log('Test email:', testEmail);

async function testBlueprintFlow() {
  try {
    // Test the blueprint-download endpoint
    console.log('\n1. Testing /api/blueprint-download endpoint...');
    const response = await fetch('http://localhost:3001/api/blueprint-download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testEmail,
        source: 'blueprint-starter-pack'
      }),
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);

    if (response.ok) {
      console.log('\n✅ SUCCESS: Email capture and send working!');
      console.log('\nNext steps:');
      console.log('1. Check Beehiiv for new subscriber with tag "blueprint-starter-pack"');
      console.log('2. Check test email inbox for download link');
      console.log('3. Verify email content and formatting');
    } else {
      console.log('\n❌ ERROR:', data.error || 'Unknown error');
    }

    // Test the regular subscribe endpoint too
    console.log('\n2. Testing /api/subscribe endpoint with Blueprint lead magnet...');
    const subscribeResponse = await fetch('http://localhost:3001/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `test-subscribe-${Date.now()}@example.com`,
        leadMagnet: 'Blueprint Starter Pack'
      }),
    });

    const subscribeData = await subscribeResponse.json();
    console.log('Subscribe response:', subscribeResponse.status, subscribeData);

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  }
}

// Run the test
testBlueprintFlow();

console.log('\n📄 Note: Since we don\'t have the actual PDFs yet, the download URL will be a placeholder.');
console.log('Once you have the PDFs hosted somewhere, update BLUEPRINT_DOWNLOAD_URL in .env.local');