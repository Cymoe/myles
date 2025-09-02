'use client';

import { useState } from 'react';
import { Check, X, Printer } from 'lucide-react';

export default function BusinessChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const sections = [
    {
      title: "Business Fundamentals",
      items: [
        "Has the business been operating for 5+ years?",
        "Are revenues stable or growing over the last 3 years?",
        "Is the business profitable (positive EBITDA)?",
        "Does it have a diverse customer base (no customer >20% of revenue)?",
        "Is it in a recession-resistant industry?"
      ]
    },
    {
      title: "Seller Motivation",
      items: [
        "Is the owner 55+ years old?",
        "Has the owner mentioned retirement plans?",
        "Are there health issues or family pressures?",
        "Is the owner burned out or disengaged?",
        "Would they consider seller financing?"
      ]
    },
    {
      title: "Valuation & Financials",
      items: [
        "Is it priced at 3-5x EBITDA or less?",
        "Are the financials professionally prepared or verifiable?",
        "Is there minimal customer concentration risk?",
        "Are there opportunities to cut costs?",
        "Can you identify 2-3 revenue growth opportunities?"
      ]
    },
    {
      title: "Operations",
      items: [
        "Can the business run without the current owner?",
        "Is there a management team in place?",
        "Are the systems and processes documented?",
        "Is the lease favorable and transferable?",
        "Are key employees likely to stay?"
      ]
    },
    {
      title: "Growth Potential",
      items: [
        "Can you add complementary services?",
        "Is there room for geographic expansion?",
        "Are there competitors you could acquire?",
        "Could you improve the marketing?",
        "Is there technology that could improve margins?"
      ]
    },
    {
      title: "Deal Structure",
      items: [
        "Will the bank finance 70%+ of purchase price?",
        "Can you get an SBA loan for this business?",
        "Will the seller carry 10-30% financing?",
        "Can you structure an earnout?",
        "Do you need less than $50k for down payment?"
      ]
    },
    {
      title: "Red Flags to Avoid",
      items: [
        "Is the industry in decline?",
        "Are there pending lawsuits or major liabilities?",
        "Is there high employee turnover?",
        "Are online reviews consistently poor?",
        "Is the owner the only revenue generator?"
      ]
    }
  ];

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
  const score = checkedItems.size;
  const percentage = Math.round((score / totalItems) * 100);

  const getScoreMessage = () => {
    if (percentage >= 80) return { text: "Excellent Deal", color: "text-green-600" };
    if (percentage >= 60) return { text: "Good Potential", color: "text-primary" };
    if (percentage >= 40) return { text: "Proceed with Caution", color: "text-yellow-600" };
    return { text: "Too Risky", color: "text-red-600" };
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">The Boring Business Checklist</h1>
            <p className="text-muted-foreground text-lg mb-8">
              27 questions to evaluate before buying any business
            </p>

            {/* Score Card */}
            <div className="bg-card p-6 rounded-lg border border-border inline-block">
              <div className="text-3xl font-bold mb-2">
                {score}/{totalItems} Checked
              </div>
              <div className={`text-xl font-semibold ${scoreMessage.color}`}>
                {scoreMessage.text} ({percentage}%)
              </div>
            </div>
          </div>

          {/* Print Button */}
          <div className="text-right mb-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md hover:bg-muted transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Checklist</span>
            </button>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-8 print:space-y-6">
            {sections.map((section, sectionIndex) => {
              let itemIndex = 0;
              for (let i = 0; i < sectionIndex; i++) {
                itemIndex += sections[i].items.length;
              }

              return (
                <div key={sectionIndex} className="bg-card p-6 rounded-lg border border-border print:break-inside-avoid">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.items.map((item, i) => {
                      const globalIndex = itemIndex + i;
                      const isChecked = checkedItems.has(globalIndex);
                      const isRedFlag = section.title === "Red Flags to Avoid";

                      return (
                        <label
                          key={i}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleItem(globalIndex);
                            }}
                            className={`
                              mt-0.5 w-5 h-5 border-2 rounded flex items-center justify-center transition-colors
                              ${isChecked 
                                ? isRedFlag 
                                  ? 'bg-red-600 border-red-600' 
                                  : 'bg-primary border-primary' 
                                : 'border-border hover:border-primary'
                              }
                            `}
                          >
                            {isChecked && (
                              isRedFlag ? <X className="w-3 h-3 text-white" /> : <Check className="w-3 h-3 text-white" />
                            )}
                          </button>
                          <span className={`flex-1 ${isChecked ? 'text-foreground' : 'text-muted-foreground'} group-hover:text-foreground transition-colors`}>
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scoring Guide */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-6">Scoring Guide</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <div>
                  <strong>22+ Yes (80%+):</strong>
                  <span className="text-muted-foreground ml-2">Excellent opportunity. Move fast.</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <div>
                  <strong>16-21 Yes (60-79%):</strong>
                  <span className="text-muted-foreground ml-2">Good potential. Negotiate hard on price.</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                <div>
                  <strong>11-15 Yes (40-59%):</strong>
                  <span className="text-muted-foreground ml-2">Risky. Only proceed with heavy due diligence.</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <div>
                  <strong>&lt;11 Yes (&lt;40%):</strong>
                  <span className="text-muted-foreground ml-2">Walk away. Too many red flags.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Found a business that scores 60%+? Time to make an offer.
            </p>
            <a 
              href="/acquisition-accelerator" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md font-semibold"
            >
              Start the Accelerator →
            </a>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}