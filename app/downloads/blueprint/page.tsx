'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlueprintDownloadsPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const starterPackDocs = [
    { id: 1, title: '30-Day Acquisition Timeline', htmlFile: 'doc-1-acquisition-timeline.html', pdfFile: 'Blueprint_Doc01_30Day_Timeline.pdf' },
    { id: 2, title: 'Service Business Selector', htmlFile: 'doc-2-service-business-selector.html', pdfFile: 'Blueprint_Doc02_Business_Selector.pdf' },
    { id: 3, title: 'Creative Deal Structures', htmlFile: 'doc-3-creative-financing-bible.html', pdfFile: 'Blueprint_Doc03_Creative_Deal_Structures.pdf' },
    { id: 6, title: 'Direct Owner Templates', htmlFile: 'doc-6-direct-owner-templates.html', pdfFile: 'Blueprint_Doc06_Owner_Contact_Templates.pdf' },
    { id: 7, title: 'Off-Market Deal Funnel', htmlFile: 'doc-7-off-market-deal-funnel.html', pdfFile: 'Blueprint_Doc07_Off_Market_Deals.pdf' },
    { id: 8, title: 'Quick Due Diligence', htmlFile: 'doc-8-quick-due-diligence.html', pdfFile: 'Blueprint_Doc08_Due_Diligence.pdf' },
    { id: 11, title: 'Business Valuation 101', htmlFile: 'doc-11-business-valuation-101.html', pdfFile: 'Blueprint_Doc11_Valuation_Guide.pdf' },
  ];

  const findingSourcingDocs = [
    { id: 4, title: 'Multi-Channel Outreach', htmlFile: 'doc-4-multi-channel-outreach.html', pdfFile: 'Blueprint_Doc04_Multi_Channel_Outreach.pdf' },
    { id: 5, title: 'Broker Manipulation Guide', htmlFile: 'doc-5-broker-manipulation-guide.html', pdfFile: 'Blueprint_Doc05_Broker_Manipulation.pdf' },
    { id: 10, title: 'Deal Flow Automation', htmlFile: 'doc-10-deal-flow-automation.html', pdfFile: 'Blueprint_Doc10_Deal_Flow_Automation.pdf' },
    { id: 14, title: 'Hidden Deal Sources', htmlFile: 'doc-14-hidden-deal-sources.html', pdfFile: 'Blueprint_Doc14_Hidden_Deal_Sources.pdf' },
    { id: 16, title: 'Competitive Intelligence', htmlFile: 'doc-16-competitive-intelligence.html', pdfFile: 'Blueprint_Doc16_Competitive_Intelligence.pdf' },
  ];

  const analysisValuationDocs = [
    { id: 9, title: 'Seller Psychology', htmlFile: 'doc-9-seller-psychology.html', pdfFile: 'Blueprint_Doc09_Seller_Psychology.pdf' },
    { id: 15, title: 'Price Justification', htmlFile: 'doc-15-price-justification.html', pdfFile: 'Blueprint_Doc15_Price_Justification.pdf' },
    { id: 21, title: 'Red Flags Checklist', htmlFile: 'doc-21-red-flags-checklist.html', pdfFile: 'Blueprint_Doc21_Red_Flags.pdf' },
    { id: 24, title: 'Industry Playbooks', htmlFile: 'doc-24-industry-playbooks.html', pdfFile: 'Blueprint_Doc24_Industry_Playbooks.pdf' },
  ];

  const negotiationStructureDocs = [
    { id: 12, title: 'LOI Template', htmlFile: 'doc-12-loi-template.html', pdfFile: 'Blueprint_Doc12_LOI_Template.pdf' },
    { id: 13, title: 'Negotiation Power Phrases', htmlFile: 'doc-13-negotiation-power-phrases.html', pdfFile: 'Blueprint_Doc13_Negotiation_Phrases.pdf' },
    { id: 17, title: 'Legal Structure', htmlFile: 'doc-17-legal-structure-optimization.html', pdfFile: 'Blueprint_Doc17_Legal_Structure.pdf' },
    { id: 19, title: 'SBA Loan Hacks', htmlFile: 'doc-19-sba-loan-hacks.html', pdfFile: 'Blueprint_Doc19_SBA_Loan_Hacks.pdf' },
    { id: 20, title: 'Earnout Structures', htmlFile: 'doc-20-earnout-structures.html', pdfFile: 'Blueprint_Doc20_Earnout_Structures.pdf' },
  ];

  const transitionGrowthDocs = [
    { id: 18, title: 'Transition Planning', htmlFile: 'doc-18-transition-planning.html', pdfFile: 'Blueprint_Doc18_Transition_Planning.pdf' },
    { id: 22, title: 'Growth Acceleration', htmlFile: 'doc-22-growth-acceleration.html', pdfFile: 'Blueprint_Doc22_Growth_Acceleration.pdf' },
    { id: 26, title: 'Turnaround Playbook', htmlFile: 'doc-26-turnaround-playbook.html', pdfFile: 'Blueprint_Doc26_Turnaround_Playbook.pdf' },
    { id: 28, title: 'Absentee Owner Model', htmlFile: 'doc-28-absentee-owner-model.html', pdfFile: 'Blueprint_Doc28_Absentee_Owner.pdf' },
    { id: 29, title: 'Automation Playbook', htmlFile: 'doc-29-automation-playbook.html', pdfFile: 'Blueprint_Doc29_Automation.pdf' },
    { id: 31, title: 'Acquisition Financing', htmlFile: 'doc-31-acquisition-financing.html', pdfFile: 'Blueprint_Doc31_Acquisition_Financing.pdf' },
  ];

  const advancedStrategiesDocs = [
    { id: 23, title: 'Exit Planning', htmlFile: 'doc-23-exit-planning.html', pdfFile: 'Blueprint_Doc23_Exit_Planning.pdf' },
    { id: 25, title: 'Roll-Up Strategies', htmlFile: 'doc-25-roll-up-strategies.html', pdfFile: 'Blueprint_Doc25_Roll_Up_Strategies.pdf' },
    { id: 27, title: 'Partner Buyout Guide', htmlFile: 'doc-27-partner-buyout-guide.html', pdfFile: 'Blueprint_Doc27_Partner_Buyout.pdf' },
    { id: 30, title: 'Franchise Conversion', htmlFile: 'doc-30-franchise-conversion.html', pdfFile: 'Blueprint_Doc30_Franchise_Conversion.pdf' },
    { id: 32, title: 'Empire Building', htmlFile: 'doc-32-empire-building.html', pdfFile: 'Blueprint_Doc32_Empire_Building.pdf' },
  ];

  const bonusDoc = { 
    id: 'bonus', 
    title: '$50M Service Empire', 
    htmlFile: 'bonus-50m-formula.html', 
    pdfFile: 'Blueprint_Bonus_50M_Formula.pdf' 
  };

  const downloadAll = async () => {
    setIsDownloading(true);
    // In production, this would trigger a download of the ZIP file
    window.location.href = '/downloads/Blueprint-Complete-System.zip';
    setTimeout(() => setIsDownloading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Complete Blueprint System
          </h1>
          <p className="text-xl text-muted-foreground">
            All 32 Documents from $80M+ in Deals
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <p className="text-green-800 dark:text-green-200 font-semibold text-center">
            ✅ Success! Your documents are ready for download.
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm text-center">
            ⏰ This page expires in 24 hours. Download all documents now and save them locally.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8 text-center">
          <p className="text-blue-800 dark:text-blue-200 mb-2">
            <strong>Note:</strong> You&apos;re receiving the complete Blueprint system - all 32 documents.
          </p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            Nothing held back. This is everything we use in our own acquisitions.
          </p>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={downloadAll}
            disabled={isDownloading}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-semibold rounded-lg disabled:opacity-50"
          >
            <span>📦</span>
            <span>{isDownloading ? 'Preparing Download...' : 'Download All 32 Documents (ZIP)'}</span>
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-6">Download Individual Documents:</h2>
        <p className="text-center text-muted-foreground text-sm mb-8">
          Tip: Click &quot;View&quot; to read online, or &quot;Download&quot; to save the document.
        </p>

        {/* Starter Pack Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Starter Pack Documents</h3>
            </div>
            <span className="text-muted-foreground text-sm">Essential documents to get started</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {starterPackDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finding & Sourcing Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Finding & Sourcing</h3>
            </div>
            <span className="text-muted-foreground text-sm">Discover profitable opportunities</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {findingSourcingDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis & Valuation Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Analysis & Valuation</h3>
            </div>
            <span className="text-muted-foreground text-sm">Evaluate deals accurately</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisValuationDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negotiation & Structure Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Negotiation & Structure</h3>
            </div>
            <span className="text-muted-foreground text-sm">Close deals on your terms</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {negotiationStructureDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition & Growth Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Transition & Growth</h3>
            </div>
            <span className="text-muted-foreground text-sm">Take control and scale</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transitionGrowthDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Strategies Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Advanced Strategies</h3>
            </div>
            <span className="text-muted-foreground text-sm">Build your empire</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedStrategiesDocs.map((doc) => (
              <div key={doc.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-semibold mb-2">DOC #{doc.id}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{doc.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={`/downloads/blueprint-starter-pack/${doc.htmlFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                  >
                    View
                  </a>
                  <a
                    href={`/downloads/blueprint-pdfs/${doc.pdfFile}`}
                    download
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Document Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-500/10 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground">Bonus Document</h3>
            </div>
            <span className="text-muted-foreground text-sm">Special case study</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bonus Document */}
            <div className="bg-card border-2 border-yellow-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-yellow-600 dark:text-yellow-500 font-semibold mb-2">BONUS</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{bonusDoc.title}</h3>
              <div className="flex gap-3">
                <a
                  href={`/downloads/blueprint-starter-pack/${bonusDoc.htmlFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-background border border-border hover:bg-muted transition-colors rounded-md text-sm font-medium"
                >
                  View
                </a>
                <a
                  href={`/downloads/blueprint-pdfs/${bonusDoc.pdfFile}`}
                  download
                  className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Quick Start Guide:</h3>
          <ol className="space-y-3 text-muted-foreground">
            <li>1. Start with Doc #1 - The 30-Day Timeline shows you the exact steps</li>
            <li>2. Use Doc #2 - Pick your business type with the Selector Matrix</li>
            <li>3. Apply Doc #6 - Contact owners using proven templates</li>
            <li>4. Take action within 48 hours - Momentum is everything</li>
          </ol>
          
          <div className="mt-8 p-6 bg-background rounded-lg border border-border">
            <p className="text-foreground font-semibold mb-2">Want the 30-Day Email Course?</p>
            <p className="text-muted-foreground mb-4">
              Join the Acquisition Accelerator to get daily lessons on finding and buying businesses.
            </p>
            <Link
              href="/acquisition-accelerator"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Join the Accelerator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}