'use client';

import { useEffect, useState } from 'react';
import { getTimeAgo } from '@/utils/formatTime';

export default function DynamicGoalsSection() {
  const [goals, setGoals] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    async function fetchGoals() {
      try {
        const response = await fetch('/api/notion/goals-dynamic');
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGoals();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto my-8 md:my-24 p-6 md:p-12 bg-card dark:bg-card/50 border-l-4 border-l-primary border-t border-b border-r border-border">
        <div className="animate-pulse">
          <div className="h-6 md:h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mx-auto mb-6 md:mb-8"></div>
          <div className="space-y-2 md:space-y-3">
            <div className="h-3 md:h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-3 md:h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-3 md:h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!goals || Object.keys(goals).length === 0) {
    return null;
  }

  // Define the order for known sections
  const sectionOrder = ['2024 Goals', '2025 Goals', 'Current Focus', '10 Year Goals'];
  const orderedKeys = [
    ...sectionOrder.filter(key => goals[key]),
    ...Object.keys(goals).filter(key => !sectionOrder.includes(key))
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 md:my-24 p-6 md:p-12 bg-card dark:bg-card/50 border-l-4 border-l-primary border-t border-b border-r border-border">
      <div className="space-y-8 md:space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-light text-2xl md:text-3xl text-foreground tracking-wide mb-2">Public Goals</h2>
          <p className="text-sm md:text-base text-muted-foreground font-light">
            Accountability in public • Updated {getTimeAgo(lastUpdated)}
          </p>
        </div>
        
        {/* Dynamically render all sections */}
        {orderedKeys.map((sectionName) => {
          const content = goals[sectionName];
          if (!content) return null;

          return (
            <div key={sectionName}>
              <h3 className="font-semibold text-xl md:text-2xl text-foreground mb-3 md:mb-4 tracking-wide">
                {sectionName}
              </h3>
              <div className="text-muted-foreground font-light">
                {Array.isArray(content) ? (
                  // Process content to group by sub-headers
                  (() => {
                    const groups: { header?: string; items: string[]; isDivider?: boolean }[] = [];
                    let currentGroup: { header?: string; items: string[] } = { items: [] };
                    
                    content.forEach((item) => {
                      // Detect dividers (lines with only dashes, underscores, equals, or asterisks)
                      if (/^[-_=*\s]+$/.test(item) && item.length >= 3) {
                        // Add current group if it has content
                        if (currentGroup.items.length > 0 || currentGroup.header) {
                          groups.push(currentGroup);
                        }
                        // Add divider as a special group
                        groups.push({ items: [], isDivider: true });
                        // Start a new group
                        currentGroup = { items: [] };
                      }
                      // Detect sub-headers
                      else if (
                        !item.startsWith('•') && 
                        !item.startsWith('-') && 
                        item.length < 30 && 
                        !item.includes(':') &&
                        !item.startsWith('#')
                      ) {
                        // Start a new group
                        if (currentGroup.items.length > 0 || currentGroup.header) {
                          groups.push(currentGroup);
                        }
                        currentGroup = { header: item, items: [] };
                      } else {
                        currentGroup.items.push(item);
                      }
                    });
                    
                    // Don't forget the last group
                    if (currentGroup.items.length > 0 || currentGroup.header) {
                      groups.push(currentGroup);
                    }
                    
                    // If we have multiple groups with headers, use special rendering
                    const hasMultipleGroups = groups.filter(g => g.header && !g.isDivider).length > 1;
                    
                    if (hasMultipleGroups) {
                      // Render groups with dividers
                      const result: JSX.Element[] = [];
                      let currentBatch: typeof groups = [];
                      
                      groups.forEach((group, index) => {
                        if (group.isDivider) {
                          // Render current batch in grid
                          if (currentBatch.length > 0) {
                            result.push(
                              <div key={`batch-${index}`} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {currentBatch.map((g, gIndex) => (
                                  <div key={gIndex}>
                                    {g.header && (
                                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                                        {g.header}
                                      </h4>
                                    )}
                                    <div className="space-y-1 md:space-y-2 text-sm md:text-base">
                                      {g.items.map((item, itemIndex) => {
                                        let processedItem = item;
                                        let className = "";
                                        
                                        // Handle size markers
                                        if (item.startsWith('# ')) {
                                          className = "text-2xl font-semibold text-foreground";
                                          processedItem = item.substring(2);
                                        } else if (item.startsWith('## ')) {
                                          className = "text-xl font-medium text-foreground";
                                          processedItem = item.substring(3);
                                        } else if (item.startsWith('### ')) {
                                          className = "text-lg text-muted-foreground";
                                          processedItem = item.substring(4);
                                        }
                                        
                                        return (
                                          <p key={itemIndex} className={className} dangerouslySetInnerHTML={{ 
                                            __html: processedItem 
                                          }} />
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          
                          // Add divider
                          result.push(
                            <hr key={`divider-${index}`} className="my-8 border-t-2 border-gray-300 border-dashed" />
                          );
                          
                          // Reset batch
                          currentBatch = [];
                        } else {
                          currentBatch.push(group);
                        }
                      });
                      
                      // Render final batch
                      if (currentBatch.length > 0) {
                        result.push(
                          <div key="final-batch" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {currentBatch.map((g, gIndex) => (
                              <div key={gIndex}>
                                {g.header && (
                                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                                    {g.header}
                                  </h4>
                                )}
                                <div className="space-y-1 md:space-y-2 text-sm md:text-base">
                                  {g.items.map((item, itemIndex) => {
                                    let processedItem = item;
                                    let className = "";
                                    
                                    // Handle size markers
                                    if (item.startsWith('# ')) {
                                      className = "text-2xl font-semibold text-gray-900";
                                      processedItem = item.substring(2);
                                    } else if (item.startsWith('## ')) {
                                      className = "text-xl font-medium text-gray-800";
                                      processedItem = item.substring(3);
                                    } else if (item.startsWith('### ')) {
                                      className = "text-lg text-gray-700";
                                      processedItem = item.substring(4);
                                    }
                                    
                                    return (
                                      <p key={itemIndex} className={className} dangerouslySetInnerHTML={{ 
                                        __html: processedItem 
                                      }} />
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      
                      return <div>{result}</div>;
                    }
                    
                    // Otherwise render normally (no grid layout)
                    return content.map((item, index) => {
                      // Check for dividers
                      if (/^[-_=*\s]+$/.test(item) && item.length >= 3) {
                        return <hr key={index} className="my-4 border-t-2 border-gray-300 border-dashed" />;
                      }
                      
                      // Check for special formatting markers
                      let className = "";
                      let processedItem = item;
                      
                      // Handle size markers
                      if (item.startsWith('# ')) {
                        className = "text-2xl font-semibold text-gray-900";
                        processedItem = item.substring(2);
                      } else if (item.startsWith('## ')) {
                        className = "text-xl font-medium text-gray-800";
                        processedItem = item.substring(3);
                      } else if (item.startsWith('### ')) {
                        className = "text-lg text-gray-700";
                        processedItem = item.substring(4);
                      }
                      // Auto-detect headers (single words or short phrases without bullets/dashes)
                      else if (
                        !item.startsWith('•') && 
                        !item.startsWith('-') && 
                        item.length < 30 && 
                        !item.includes(':') &&
                        index > 0 && // Not the first item
                        (index === 0 || !content[index-1].startsWith('•')) // Previous wasn't a bullet
                      ) {
                        className = "text-lg font-semibold text-gray-800 mt-4";
                        processedItem = item;
                      }
                      
                      return (
                        <p key={index} className={className} dangerouslySetInnerHTML={{ 
                          __html: processedItem 
                        }} />
                      );
                    });
                  })()
                ) : (
                  // If it's a string, render as paragraph
                  <p dangerouslySetInnerHTML={{ __html: content }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}