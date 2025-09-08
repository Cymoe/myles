// Reset Golden Snitch - Run this in browser console

console.log('🧹 Resetting Golden Snitch...');

// Clear the caught flag
localStorage.removeItem('golden-snitch-caught');
console.log('✅ Cleared caught status');

// Clear appearance count
sessionStorage.removeItem('snitch-appearances');
console.log('✅ Reset appearance count');

// Show current status
console.log('\nCurrent status:');
console.log('- Caught:', localStorage.getItem('golden-snitch-caught') || 'No');
console.log('- Appearances:', sessionStorage.getItem('snitch-appearances') || '0');

console.log('\n🔄 Refresh the page to see the snitch!');
console.log('It should appear in 2-3 seconds.');