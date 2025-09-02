const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

async function createStarterPackZip() {
  const pdfDir = path.join(__dirname, '../public/downloads/blueprint-pdfs');
  const outputPath = path.join(__dirname, '../public/downloads/Blueprint-Starter-Pack.zip');
  
  // Create a file to stream archive data to
  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
  });

  // Listen for all archive data to be written
  output.on('close', function() {
    console.log(`✅ Blueprint Starter Pack ZIP created successfully!`);
    console.log(`📦 Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📁 Location: ${outputPath}`);
  });

  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.warn('Warning:', err);
    } else {
      throw err;
    }
  });

  archive.on('error', function(err) {
    throw err;
  });

  // Pipe archive data to the file
  archive.pipe(output);

  // Starter Pack documents only
  const starterPackFiles = [
    'Blueprint_Doc01_30Day_Timeline.pdf',
    'Blueprint_Doc02_Business_Selector.pdf',
    'Blueprint_Doc03_Creative_Deal_Structures.pdf',
    'Blueprint_Doc06_Owner_Contact_Templates.pdf',
    'Blueprint_Doc07_Off_Market_Deals.pdf',
    'Blueprint_Doc08_Due_Diligence.pdf',
    'Blueprint_Doc11_Valuation_Guide.pdf',
    'Blueprint_Bonus_50M_Formula.pdf'
  ];
  
  console.log(`📄 Adding ${starterPackFiles.length} Starter Pack documents to ZIP...`);
  
  starterPackFiles.forEach(file => {
    const filePath = path.join(pdfDir, file);
    if (fs.existsSync(filePath)) {
      archive.file(filePath, { name: file });
      console.log(`  ✓ Added ${file}`);
    } else {
      console.log(`  ⚠️  Skipping ${file} - not found`);
    }
  });

  // Add README for Starter Pack
  const readmeContent = `# The Blueprint System™ - Starter Pack

Welcome to The Blueprint System™ Starter Pack!

This pack contains 8 essential documents to get you started:

1. 30-Day Acquisition Timeline - Your roadmap from search to closing
2. Service Business Selector Matrix - Choose the perfect business type
3. Creative Deal Structure Bible - Finance deals with little money down
6. Direct Owner Contact Templates - Scripts that get responses
7. Off-Market Deal Funnel System - Find deals nobody else sees
8. Quick Due Diligence Checklist - Don't miss critical issues
11. Business Valuation 101 - Know what businesses are really worth
Bonus: The $50M Service Empire Formula - Scale to generational wealth

## Ready for More?

Upgrade to the Complete Blueprint System (32 documents total) at:
https://myleskameron.com/blueprint-special

Get an additional 24 advanced documents covering:
- Seller psychology and negotiation mastery
- Industry-specific acquisition playbooks
- Roll-up and consolidation strategies
- Exit planning from day one
- And much more...

---
© The Blueprint System™
`;

  archive.append(readmeContent, { name: 'README.txt' });
  console.log('  ✓ Added README.txt');

  // Finalize the archive
  archive.finalize();
}

createStarterPackZip();