// Test script to verify golden snitch launch from stats
console.log('🧹 Testing Golden Snitch launch...');

// First reset the snitch
localStorage.removeItem('golden-snitch-caught');
sessionStorage.removeItem('snitch-appearances');
console.log('✅ Cleared snitch data');

console.log('\n📊 Stats Snitch Behavior:');
console.log('1. The mini golden snitch next to "26 Countries Visited" will pulse');
console.log('2. After 3-8 seconds, it will disappear and launch into the full flying animation');
console.log('3. The flying snitch will appear from the stats position and fly across the screen');

console.log('\n🔄 Refresh the page to see it in action!');
console.log('Watch the stats bar for the mini snitch to launch.');