// Test script for Golden Snitch feature
// Run this in browser console to test different scenarios

// Test 1: Clear storage and trigger snitch immediately
function testImmediateSnitch() {
  console.log('🧪 Test 1: Clearing storage and triggering snitch...');
  localStorage.removeItem('golden-snitch-caught');
  sessionStorage.removeItem('snitch-appearances');
  
  // Dispatch a custom event to trigger the snitch (would need to be implemented)
  console.log('✅ Storage cleared. Refresh page to see snitch after 45 seconds.');
}

// Test 2: Check current snitch status
function checkSnitchStatus() {
  console.log('🧪 Test 2: Checking snitch status...');
  const caught = localStorage.getItem('golden-snitch-caught');
  const appearances = sessionStorage.getItem('snitch-appearances') || '0';
  
  console.log('Status:', {
    caught: caught ? 'Yes' : 'No',
    appearances: appearances,
    canAppearAgain: !caught && parseInt(appearances) < 3
  });
}

// Test 3: Simulate catching snitch
function simulateCatch() {
  console.log('🧪 Test 3: Simulating snitch catch...');
  localStorage.setItem('golden-snitch-caught', 'true');
  console.log('✅ Snitch marked as caught. It won\'t appear again until storage is cleared.');
}

// Test 4: Reset for new session
function resetSession() {
  console.log('🧪 Test 4: Resetting session...');
  sessionStorage.removeItem('snitch-appearances');
  console.log('✅ Session reset. Snitch can appear up to 3 times again.');
}

// Run tests
console.log('🏆 Golden Snitch Test Suite');
console.log('Available commands:');
console.log('- testImmediateSnitch(): Clear all data and prepare for snitch');
console.log('- checkSnitchStatus(): See current snitch status');
console.log('- simulateCatch(): Mark snitch as caught');
console.log('- resetSession(): Reset session appearance count');
console.log('\nTiming info:');
console.log('- First appearance: 2-3 seconds (INSTANT!)');
console.log('- Auto re-appears: Every 10-15 seconds if missed');
console.log('- Max appearances per session: 10 (lots of chances!)');
console.log('- Flight duration: 4 seconds (catch it quick!)');
console.log('- Size: Bigger on mobile for easier catching');
console.log('\nNEW Appearance patterns:');
console.log('- First 2 times: Random from left, right, top, or bottom');
console.log('- After 2nd time: 50% chance to appear from BOTTOM!');
console.log('- Bottom snitch: Does a special loop-de-loop flight path');
console.log('- Totally unpredictable - keeps users guessing!');