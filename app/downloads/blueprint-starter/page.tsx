'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlueprintStarterPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Limited selection of documents for newsletter subscribers
  const starterDocs = [
    { id: 1, title: '30-Day Acquisition Timeline', htmlFile: 'doc-1-acquisition-timeline.html', pdfFile: 'Blueprint_Doc01_30Day_Timeline.pdf' },
    { id: 2, title: 'Service Business Selector', htmlFile: 'doc-2-service-business-selector.html', pdfFile: 'Blueprint_Doc02_Business_Selector.pdf' },
    { id: 6, title: 'Direct Owner Templates', htmlFile: 'doc-6-direct-owner-templates.html', pdfFile: 'Blueprint_Doc06_Owner_Contact_Templates.pdf' },
    { id: 8, title: 'Quick Due Diligence', htmlFile: 'doc-8-quick-due-diligence.html', pdfFile: 'Blueprint_Doc08_Due_Diligence.pdf' },
    { id: 11, title: 'Business Valuation 101', htmlFile: 'doc-11-business-valuation-101.html', pdfFile: 'Blueprint_Doc11_Valuation_Guide.pdf' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Blueprint Starter Pack
          </h1>
          <p className="text-xl text-muted-foreground">
            5 Essential Documents to Start Your Acquisition Journey
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <p className="text-green-800 dark:text-green-200 font-semibold text-center">
            ✅ Success! Your starter documents are ready.
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-8">
            Download each document below or scroll down to learn about the complete system.
          </p>
        </div>

        {/* Starter Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Your Starter Documents:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {starterDocs.map((doc) => (
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

        {/* Upgrade CTA */}
        <div className="bg-primary/5 border-2 border-primary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Want All 32 Documents?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get the complete Blueprint System plus a 30-day email course on finding and closing deals.
          </p>
          
          <div className="bg-white dark:bg-background rounded-lg p-6 mb-6">
            <p className="font-semibold text-foreground mb-2">The Complete System Includes:</p>
            <ul className="text-left text-sm text-muted-foreground space-y-1 max-w-md mx-auto">
              <li>• All 32 acquisition documents (you have 5)</li>
              <li>• Advanced negotiation scripts</li>
              <li>• Creative financing strategies</li>
              <li>• Growth & scaling playbooks</li>
              <li>• 30-day email course with real deal breakdowns</li>
            </ul>
          </div>
          
          <Link
            href="/acquisition-accelerator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-semibold rounded-lg"
          >
            Get Complete Access Free →
          </Link>
          
          <p className="mt-4 text-sm text-muted-foreground">
            No catch. Just more resources to help you succeed.
          </p>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">How to Use Your Starter Pack:</h3>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Start with Doc #1 - The 30-Day Timeline (your roadmap)</li>
            <li>2. Use Doc #2 to identify your target business type</li>
            <li>3. Apply Doc #6 templates to contact owners directly</li>
            <li>4. Reference Doc #8 during due diligence</li>
            <li>5. Use Doc #11 to understand valuation</li>
          </ol>
        </div>
      </div>
    </div>
  );
}