#!/usr/bin/env node

/**
 * Test script for all 7 wealth profiles
 * Run with: node test-all-profiles.js
 */

const testProfiles = [
  {
    name: 'Capital Titan',
    email: 'test.capital.titan@example.com',
    answers: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0 },
    expectedProfile: 'The Capital Titan'
  },
  {
    name: 'Time Architect',
    email: 'test.time.architect@example.com',
    answers: { q1: 1, q2: 1, q3: 1, q4: 1, q5: 1, q6: 1, q7: 1 },
    expectedProfile: 'The Time Architect'
  },
  {
    name: 'Global Nomad',
    email: 'test.global.nomad@example.com',
    answers: { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2, q6: 2, q7: 2 },
    expectedProfile: 'The Global Nomad'
  },
  {
    name: 'Empire Builder',
    email: 'test.empire.builder@example.com',
    answers: { q1: 0, q2: 1, q3: 0, q4: 1, q5: 0, q6: 1, q7: 0 },
    expectedProfile: 'The Empire Builder'
  },
  {
    name: 'Freedom Designer',
    email: 'test.freedom.designer@example.com',
    answers: { q1: 2, q2: 1, q3: 2, q4: 1, q5: 1, q6: 2, q7: 2 },
    expectedProfile: 'The Freedom Designer'
  },
  {
    name: 'Remote Mogul',
    email: 'test.remote.mogul@example.com',
    answers: { q1: 0, q2: 2, q3: 2, q4: 0, q5: 2, q6: 2, q7: 0 },
    expectedProfile: 'The Remote Mogul'
  },
  {
    name: 'Wealth Creator',
    email: 'test.wealth.creator@example.com',
    answers: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 3, q6: 3, q7: 3 },
    expectedProfile: 'The Wealth Creator'
  }
];

// Base URL - update this to match your deployment
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

async function submitQuizResults(testCase) {
  console.log(`\nTesting ${testCase.name}...`);
  
  try {
    // First, calculate the profile to ensure it matches
    const response = await fetch(`${BASE_URL}/api/test-profiles`, {
      method: 'GET'
    });
    
    const data = await response.json();
    const matchingTest = data.testResults.find(r => r.testName === testCase.name);
    
    if (matchingTest && !matchingTest.passed) {
      console.error(`❌ Profile calculation mismatch for ${testCase.name}`);
      console.error(`   Expected: ${testCase.expectedProfile}`);
      console.error(`   Got: ${matchingTest.actualName}`);
      return;
    }
    
    // Now submit the quiz results with email
    const submitResponse = await fetch(`${BASE_URL}/api/send-wealth-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: testCase.email,
        answers: testCase.answers
      })
    });
    
    if (!submitResponse.ok) {
      throw new Error(`HTTP error! status: ${submitResponse.status}`);
    }
    
    const result = await submitResponse.json();
    console.log(`✅ ${testCase.name} - Email sent to ${testCase.email}`);
    console.log(`   Profile: ${result.profile || testCase.expectedProfile}`);
    
  } catch (error) {
    console.error(`❌ Error testing ${testCase.name}:`, error.message);
  }
}

async function runAllTests() {
  console.log('Starting Wealth Profile Tests');
  console.log('=============================');
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Time: ${new Date().toISOString()}\n`);
  
  // Run tests sequentially to avoid rate limiting
  for (const testCase of testProfiles) {
    await submitQuizResults(testCase);
    
    // Wait 2 seconds between submissions to avoid rate limits
    if (testCase !== testProfiles[testProfiles.length - 1]) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('\n=============================');
  console.log('Testing complete!');
  console.log('\nNext steps:');
  console.log('1. Check Beehiiv dashboard for 7 new subscribers');
  console.log('2. Verify each has the correct wealth-profile tag');
  console.log('3. Confirm automations triggered for each profile');
  console.log('4. Monitor email delivery over the next 7 days');
}

// Run the tests
runAllTests().catch(console.error);