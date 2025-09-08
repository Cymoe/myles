// Test script for Effortless Abundance Guide API
async function testEffortlessAbundance() {
  const testEmail = 'test@example.com'; // Replace with your test email
  
  try {
    console.log('Testing Effortless Abundance Guide endpoint...');
    
    const response = await fetch('http://localhost:3000/api/effortless-abundance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testEmail,
        source: 'test'
      })
    });

    const data = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response data:', data);
    
    if (response.ok) {
      console.log('✅ Success! Check your email for the Effortless Abundance Guide.');
    } else {
      console.log('❌ Error:', data.error);
    }
  } catch (error) {
    console.error('❌ Request failed:', error);
  }
}

// Run the test
testEffortlessAbundance();