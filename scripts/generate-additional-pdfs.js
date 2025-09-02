const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Additional documents to convert to PDF
const additionalDocuments = [
  { 
    html: 'doc-5-broker-manipulation-guide.html', 
    pdf: 'Blueprint_Doc05_Broker_Manipulation.pdf',
    title: 'Document #5: Business Broker Manipulation Guide'
  },
  { 
    html: 'doc-12-loi-template.html', 
    pdf: 'Blueprint_Doc12_LOI_Template.pdf',
    title: 'Document #12: Letter of Intent Template'
  },
  { 
    html: 'doc-14-hidden-deal-sources.html', 
    pdf: 'Blueprint_Doc14_Hidden_Deal_Sources.pdf',
    title: 'Document #14: Hidden Deal Sources Nobody Checks'
  }
];

async function generateAdditionalPDFs() {
  const browser = await puppeteer.launch();
  
  const htmlDir = path.join(__dirname, '../public/downloads/blueprint-starter-pack');
  const pdfDir = path.join(__dirname, '../public/downloads/blueprint-pdfs');
  
  // Ensure PDF directory exists
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }
  
  for (const doc of additionalDocuments) {
    try {
      console.log(`Generating PDF for ${doc.title}...`);
      
      const page = await browser.newPage();
      
      // Load the HTML file
      const htmlPath = path.join(htmlDir, doc.html);
      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
      
      // Generate PDF with professional settings
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
          <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
            <span>The Blueprint System™</span>
          </div>
        `,
        footerTemplate: `
          <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
            <span class="pageNumber"></span> of <span class="totalPages"></span>
          </div>
        `
      });
      
      await page.close();
      console.log(`✓ Generated ${doc.pdf}`);
      
    } catch (error) {
      console.error(`Error generating PDF for ${doc.html}:`, error);
    }
  }
  
  await browser.close();
  console.log('\n✅ Additional PDFs generated successfully!');
  console.log(`📁 PDFs saved to: ${pdfDir}`);
}

// Run the script
generateAdditionalPDFs().catch(console.error);