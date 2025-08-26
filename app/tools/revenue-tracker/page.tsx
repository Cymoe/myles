'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function RevenueTrackerPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const table = document.getElementById('revenue-table');
    if (table) {
      // Create a selection range
      const range = document.createRange();
      range.selectNode(table);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      
      // Copy to clipboard
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">Revenue Tracking Template</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copy this template into Google Sheets or Excel to track your business revenue
            </p>
            
            {/* Instructions */}
            <div className="bg-card p-6 rounded-lg border border-border max-w-2xl mx-auto mb-8">
              <h2 className="font-semibold text-lg mb-4">How to Use:</h2>
              <ol className="text-left text-muted-foreground space-y-2">
                <li>1. Click &ldquo;Copy Table&rdquo; below</li>
                <li>2. Open Google Sheets or Excel</li>
                <li>3. Paste (Ctrl/Cmd + V) into cell A1</li>
                <li>4. The formulas will automatically calculate totals and growth</li>
              </ol>
            </div>
          </div>

          {/* Copy Button */}
          <div className="text-center mb-6">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Table</span>
                </>
              )}
            </button>
          </div>

          {/* Revenue Tracking Table */}
          <div className="overflow-x-auto bg-card p-8 rounded-lg border border-border">
            <table id="revenue-table" className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-semibold">Year</th>
                  {months.map(month => (
                    <th key={month} className="text-right py-2 px-4 font-semibold">{month}</th>
                  ))}
                  <th className="text-right py-2 px-4 font-semibold bg-primary/10">Total</th>
                  <th className="text-right py-2 px-4 font-semibold">Growth %</th>
                </tr>
              </thead>
              <tbody>
                {/* 2024 Row */}
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">2024</td>
                  {months.map((_, index) => (
                    <td key={index} className="text-right py-2 px-4">0</td>
                  ))}
                  <td className="text-right py-2 px-4 bg-primary/10">=SUM(B2:M2)</td>
                  <td className="text-right py-2 px-4">-</td>
                </tr>
                
                {/* 2025 Row */}
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">2025</td>
                  {months.map((_, index) => (
                    <td key={index} className="text-right py-2 px-4">0</td>
                  ))}
                  <td className="text-right py-2 px-4 bg-primary/10">=SUM(B3:M3)</td>
                  <td className="text-right py-2 px-4">=((N3-N2)/N2)*100</td>
                </tr>
                
                {/* Monthly Growth Row */}
                <tr className="border-t-2">
                  <td className="py-2 px-4 font-semibold">MoM Growth</td>
                  <td className="text-right py-2 px-4">-</td>
                  {months.slice(1).map((_, index) => {
                    const col = String.fromCharCode(67 + index); // C, D, E, etc.
                    const prevCol = String.fromCharCode(66 + index); // B, C, D, etc.
                    return (
                      <td key={index} className="text-right py-2 px-4 text-xs">
                        =({col}3-{prevCol}3)/{prevCol}3*100
                      </td>
                    );
                  })}
                  <td className="text-right py-2 px-4 bg-primary/10">AVG</td>
                  <td className="text-right py-2 px-4">=AVERAGE(C4:M4)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-4">Key Metrics to Add:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Year-to-Date (YTD) Total: =SUM(B3:M3)</li>
                <li>• Average Monthly Revenue: =AVERAGE(B3:M3)</li>
                <li>• Best Month: =MAX(B3:M3)</li>
                <li>• Quarterly Totals: =SUM(B3:D3) for Q1</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-4">Pro Tips:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Add conditional formatting for negative growth</li>
                <li>• Create a chart to visualize trends</li>
                <li>• Add a &ldquo;Target&rdquo; row to track vs goals</li>
                <li>• Include a notes section for context</li>
              </ul>
            </div>
          </div>

          {/* Goal Tracking Section */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-6">Annual Goal Tracker</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Metric</th>
                  <th className="text-right py-2 px-4">Formula</th>
                  <th className="text-right py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Annual Goal</td>
                  <td className="py-2 px-4 font-mono text-xs">1000000</td>
                  <td className="py-2 px-4 text-muted-foreground">Your target revenue</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Current Total</td>
                  <td className="py-2 px-4 font-mono text-xs">=N3</td>
                  <td className="py-2 px-4 text-muted-foreground">Year-to-date revenue</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Progress %</td>
                  <td className="py-2 px-4 font-mono text-xs">=Current/Goal*100</td>
                  <td className="py-2 px-4 text-muted-foreground">Percentage to goal</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Monthly Required</td>
                  <td className="py-2 px-4 font-mono text-xs">=(Goal-Current)/(12-MONTH(TODAY()))</td>
                  <td className="py-2 px-4 text-muted-foreground">Avg needed per remaining month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}