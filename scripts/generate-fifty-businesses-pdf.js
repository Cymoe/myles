const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Starting PDF generation for 50 Boring Businesses guide...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({
    width: 1200,
    height: 1600,
    deviceScaleFactor: 2
  });
  
  try {
    // Navigate to the HTML file
    const htmlPath = path.join(__dirname, '../public/downloads/fifty-boring-businesses-guide.html');
    const fileUrl = `file://${htmlPath}`;
    
    console.log('Loading HTML from:', fileUrl);
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait a bit for any fonts to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate PDF
    const pdfPath = path.join(__dirname, '../public/downloads/50-Boring-Businesses-Guide.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0.75in',
        right: '0.75in',
        bottom: '0.75in',
        left: '0.75in'
      },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
        <div style="font-size: 10px; color: #666; text-align: center; width: 100%; margin-top: 20px;">
          <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>
      `
    });
    
    console.log('✅ PDF generated successfully at:', pdfPath);
    
    // Get file size
    const stats = fs.statSync(pdfPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📄 File size: ${fileSizeInMB} MB`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

// Run the generator
generatePDF().catch(console.error);