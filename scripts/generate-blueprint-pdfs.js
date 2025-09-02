const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Map of HTML files to PDF names
const documents = [
  { 
    html: 'doc-1-acquisition-timeline.html', 
    pdf: 'Blueprint_Doc01_30Day_Timeline.pdf',
    title: 'Document #1: 30-Day Acquisition Timeline'
  },
  { 
    html: 'doc-2-service-business-selector.html', 
    pdf: 'Blueprint_Doc02_Business_Selector.pdf',
    title: 'Document #2: Service Business Selector Matrix'
  },
  { 
    html: 'doc-3-creative-financing-bible.html', 
    pdf: 'Blueprint_Doc03_Creative_Deal_Structures.pdf',
    title: 'Document #3: Creative Deal Structure Bible'
  },
  { 
    html: 'doc-6-direct-owner-templates.html', 
    pdf: 'Blueprint_Doc06_Owner_Contact_Templates.pdf',
    title: 'Document #6: Direct Owner Contact Templates'
  },
  { 
    html: 'doc-7-off-market-deal-funnel.html', 
    pdf: 'Blueprint_Doc07_Off_Market_Deals.pdf',
    title: 'Document #7: Off-Market Deal Funnel System'
  },
  { 
    html: 'doc-8-quick-due-diligence.html', 
    pdf: 'Blueprint_Doc08_Due_Diligence.pdf',
    title: 'Document #8: Quick Due Diligence Checklist'
  },
  { 
    html: 'doc-11-business-valuation-101.html', 
    pdf: 'Blueprint_Doc11_Valuation_Guide.pdf',
    title: 'Document #11: Business Valuation 101'
  },
  { 
    html: 'sample-document.html', 
    pdf: 'Blueprint_Bonus_50M_Formula.pdf',
    title: 'Bonus: The $50M Service Empire Formula'
  }
];

async function generatePDFs() {
  const browser = await puppeteer.launch();
  
  const htmlDir = path.join(__dirname, '../public/downloads/blueprint-starter-pack');
  const pdfDir = path.join(__dirname, '../public/downloads/blueprint-pdfs');
  
  // Create PDF directory if it doesn't exist
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }
  
  for (const doc of documents) {
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
  console.log('\n✅ All PDFs generated successfully!');
  console.log(`📁 PDFs saved to: ${pdfDir}`);
}

// Run the script
generatePDFs().catch(console.error);