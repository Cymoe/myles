// Test script to verify Beehiiv tagging functionality

const testProfiles = [
  'The Capital Titan',
  'The Time Architect',
  'The Global Nomad',
  'The Empire Builder',
  'The Freedom Designer',
  'The Remote Mogul',
  'The Wealth Creator'
];

const profileMapping: Record<string, string> = {
  'The Capital Titan': 'capital-titan',
  'The Time Architect': 'time-architect',
  'The Global Nomad': 'global-nomad',
  'The Empire Builder': 'empire-builder',
  'The Freedom Designer': 'freedom-designer',
  'The Remote Mogul': 'remote-mogul',
  'The Wealth Creator': 'wealth-creator'
};

console.log('Testing Beehiiv tag mapping:\n');

testProfiles.forEach(profile => {
  const tag = profileMapping[profile];
  console.log(`Profile: "${profile}"`);
  console.log(`Tag: "wealth-profile-${tag}"`);
  console.log('---');
});

// Example API payload
const examplePayload = {
  email: 'test@example.com',
  reactivate_existing: true,
  send_welcome_email: false,
  utm_source: 'website',
  utm_medium: 'Wealth Profile: The Capital Titan',
  referring_site: 'myleskameron.com',
  custom_fields: [
    {
      name: 'wealth_profile',
      value: 'The Capital Titan'
    }
  ],
  tags: ['wealth-profile-capital-titan']
};

console.log('\nExample Beehiiv API payload:');
console.log(JSON.stringify(examplePayload, null, 2));