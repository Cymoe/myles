const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateRemainingPDFs() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const docsDir = path.join(__dirname, '../public/downloads/blueprint-starter-pack');
  const pdfDir = path.join(__dirname, '../public/downloads/blueprint-pdfs');
  
  // Ensure PDF directory exists
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }

  // Documents 9, 10, 13, 15-32
  const remainingDocs = [
    { html: 'doc-9-seller-psychology.html', pdf: 'Blueprint_Doc09_Seller_Psychology.pdf' },
    { html: 'doc-10-deal-flow-automation.html', pdf: 'Blueprint_Doc10_Deal_Flow_Automation.pdf' },
    { html: 'doc-13-negotiation-power-phrases.html', pdf: 'Blueprint_Doc13_Negotiation_Phrases.pdf' },
    { html: 'doc-15-price-justification.html', pdf: 'Blueprint_Doc15_Price_Justification.pdf' },
    { html: 'doc-16-competitive-intelligence.html', pdf: 'Blueprint_Doc16_Competitive_Intelligence.pdf' },
    { html: 'doc-17-legal-structure-optimization.html', pdf: 'Blueprint_Doc17_Legal_Structure.pdf' },
    { html: 'doc-18-transition-planning.html', pdf: 'Blueprint_Doc18_Transition_Planning.pdf' },
    { html: 'doc-19-sba-loan-hacks.html', pdf: 'Blueprint_Doc19_SBA_Loan_Hacks.pdf' },
    { html: 'doc-20-earnout-structures.html', pdf: 'Blueprint_Doc20_Earnout_Structures.pdf' },
    { html: 'doc-21-red-flags-checklist.html', pdf: 'Blueprint_Doc21_Red_Flags.pdf' },
    { html: 'doc-22-growth-acceleration.html', pdf: 'Blueprint_Doc22_Growth_Acceleration.pdf' },
    { html: 'doc-23-exit-planning.html', pdf: 'Blueprint_Doc23_Exit_Planning.pdf' },
    { html: 'doc-24-industry-playbooks.html', pdf: 'Blueprint_Doc24_Industry_Playbooks.pdf' },
    { html: 'doc-25-roll-up-strategies.html', pdf: 'Blueprint_Doc25_Roll_Up_Strategies.pdf' },
    { html: 'doc-26-turnaround-playbook.html', pdf: 'Blueprint_Doc26_Turnaround_Playbook.pdf' },
    { html: 'doc-27-partner-buyout-guide.html', pdf: 'Blueprint_Doc27_Partner_Buyout.pdf' },
    { html: 'doc-28-absentee-owner-model.html', pdf: 'Blueprint_Doc28_Absentee_Owner.pdf' },
    { html: 'doc-29-automation-playbook.html', pdf: 'Blueprint_Doc29_Automation.pdf' },
    { html: 'doc-30-franchise-conversion.html', pdf: 'Blueprint_Doc30_Franchise_Conversion.pdf' },
    { html: 'doc-31-acquisition-financing.html', pdf: 'Blueprint_Doc31_Acquisition_Financing.pdf' },
    { html: 'doc-32-empire-building.html', pdf: 'Blueprint_Doc32_Empire_Building.pdf' }
  ];

  try {
    for (const doc of remainingDocs) {
      const page = await browser.newPage();
      const htmlPath = path.join(docsDir, doc.html);
      
      // Check if HTML file exists
      if (!fs.existsSync(htmlPath)) {
        console.log(`Skipping ${doc.html} - file not found`);
        continue;
      }
      
      console.log(`Generating PDF for ${doc.html}...`);
      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
      
      await page.pdf({
        path: path.join(pdfDir, doc.pdf),
        format: 'Letter',
        printBackground: true,
        margin: {
          top: '0.75in',
          right: '0.75in',
          bottom: '0.75in',
          left: '0.75in'
        },
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="font-size: 10px; color: #999; width: 100%; text-align: center; padding: 0 50px;">
            The Blueprint System™
          </div>
        `,
        footerTemplate: `
          <div style="font-size: 10px; color: #999; width: 100%; text-align: center; padding: 0 50px;">
            <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
          </div>
        `
      });
      
      console.log(`✓ Generated ${doc.pdf}`);
      await page.close();
    }
    
    console.log('\n✅ All remaining PDFs generated successfully!');
    console.log(`📁 PDFs saved to: ${pdfDir}`);
  } catch (error) {
    console.error('Error generating PDFs:', error);
  } finally {
    await browser.close();
  }
}

generateRemainingPDFs();