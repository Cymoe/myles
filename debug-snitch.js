// Debug Golden Snitch
// Paste this in browser console to debug

console.log('🔍 Debugging Golden Snitch...');

// Check storage
const caught = localStorage.getItem('golden-snitch-caught');
const appearances = sessionStorage.getItem('snitch-appearances');

console.log('Storage status:', {
  caught: caught || 'Not caught',
  appearances: appearances || '0'
});

// Clear and reload to test
function resetSnitch() {
  console.log('Clearing snitch data...');
  localStorage.removeItem('golden-snitch-caught');
  sessionStorage.removeItem('snitch-appearances');
  console.log('✅ Cleared! Refreshing page...');
  location.reload();
}

// Check if component exists
const checkComponent = () => {
  const snitchElements = document.querySelectorAll('[class*="fixed z-\\[100\\]"]');
  console.log('Snitch elements found:', snitchElements.length);
  return snitchElements;
};

console.log('Commands:');
console.log('- resetSnitch() - Clear all data and refresh');
console.log('- checkComponent() - Check if snitch is in DOM');
console.log('\nThe snitch should appear in 2-3 seconds after page load.');
console.log('Check the console for "Golden Snitch:" logs');