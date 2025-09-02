const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

async function createBlueprintZip() {
  const pdfDir = path.join(__dirname, '../public/downloads/blueprint-pdfs');
  const outputPath = path.join(__dirname, '../public/downloads/Blueprint-Complete-System.zip');
  
  // Create a file to stream archive data to
  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
  });

  // Listen for all archive data to be written
  output.on('close', function() {
    console.log(`✅ Blueprint Complete System ZIP created successfully!`);
    console.log(`📦 Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📁 Location: ${outputPath}`);
    console.log(`\n🎉 Ready to upload to Gumroad!`);
  });

  // Good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.warn('Warning:', err);
    } else {
      throw err;
    }
  });

  // Good practice to catch this error explicitly
  archive.on('error', function(err) {
    throw err;
  });

  // Pipe archive data to the file
  archive.pipe(output);

  // Add all PDFs to the archive
  const files = fs.readdirSync(pdfDir);
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));
  
  console.log(`📄 Adding ${pdfFiles.length} PDF documents to ZIP...`);
  
  pdfFiles.forEach(file => {
    const filePath = path.join(pdfDir, file);
    archive.file(filePath, { name: file });
    console.log(`  ✓ Added ${file}`);
  });

  // Also create a README file
  const readmeContent = `# The Blueprint System™ - Complete System

Congratulations on your purchase of The Blueprint System™!

This ZIP file contains all 32 documents in the complete system:

## Starter Pack Documents (1-8)
- Document #1: 30-Day Acquisition Timeline
- Document #2: Service Business Selector Matrix
- Document #3: Creative Deal Structure Bible
- Document #6: Direct Owner Contact Templates
- Document #7: Off-Market Deal Funnel System
- Document #8: Quick Due Diligence Checklist
- Document #11: Business Valuation 101
- Bonus: The $50M Service Empire Formula

## Advanced Documents (9-32)
- Document #4: Multi-Channel Outreach System
- Document #5: Business Broker Manipulation Guide
- Document #9: Seller Psychology Manipulation
- Document #10: Deal Flow Automation Setup
- Document #12: Letter of Intent Template
- Document #13: Power Negotiation Phrases
- Document #14: Hidden Deal Sources
- Document #15: Price Justification Formulas
- Document #16: Competitive Intelligence Gathering
- Document #17: Legal Structure Optimization
- Document #18: 100-Day Transition Planning
- Document #19: SBA Loan Hacks & Strategies
- Document #20: Earnout Structures That Work
- Document #21: Red Flags Checklist
- Document #22: Post-Purchase Growth Acceleration
- Document #23: Exit Planning From Day One
- Document #24: Industry-Specific Playbooks
- Document #25: Roll-Up Strategy Guide
- Document #26: Turnaround & Distressed Playbook
- Document #27: Partner Buyout Guide
- Document #28: Absentee Owner Model
- Document #29: Service Business Automation
- Document #30: Franchise Conversion Guide
- Document #31: Advanced Acquisition Financing
- Document #32: Building Your Business Empire

## How to Use These Documents

1. Start with Document #1 (30-Day Timeline) to understand the acquisition process
2. Use Document #2 (Business Selector) to choose your target industry
3. Work through the documents in order as you progress through your acquisition journey
4. Reference specific documents as needed for particular situations

## Support

If you have any questions about implementing these strategies, feel free to reach out.

Remember: The only difference between those who dream and those who build empires is ACTION.

Make it happen!

---
© The Blueprint System™
`;

  // Add README to archive
  archive.append(readmeContent, { name: 'README.txt' });
  console.log('  ✓ Added README.txt');

  // Finalize the archive (ie we are done appending files but streams have to finish yet)
  archive.finalize();
}

// Check if archiver is installed
try {
  require.resolve('archiver');
  createBlueprintZip();
} catch(e) {
  console.log('📦 Installing archiver package...');
  const { execSync } = require('child_process');
  execSync('npm install archiver', { stdio: 'inherit' });
  console.log('✅ Archiver installed. Creating ZIP file...\n');
  createBlueprintZip();
}