'use client';

import { useEffect, useState } from 'react';
import { getTimeAgo } from '@/utils/formatTime';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from 'recharts';

interface RevenueData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
  totalRevenue?: number;
  monthlyGrowth?: number;
  yearTarget?: number;
}

export default function RevenueTrackerV2() {
  const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState<'line' | 'bar' | 'area'>('area');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    async function fetchRevenue() {
      try {
        const response = await fetch('/api/notion/revenue');
        const data = await response.json();
        setRevenueData(data);
      } catch (error) {
        console.error('Failed to fetch revenue:', error);
        // Use fallback data
        setRevenueData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Monthly Revenue',
              data: [45000, 52000, 48000, 61000, 65000, 72000],
            },
          ],
          totalRevenue: 343000,
          monthlyGrowth: 10.8,
          yearTarget: 1000000,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchRevenue();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto my-16 p-8 bg-card dark:bg-card border border-border rounded-lg shadow-sm">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  if (!revenueData) {
    return null;
  }

  // Transform data for Recharts
  const chartData = revenueData.labels.map((label, index) => ({
    month: label,
    revenue: revenueData.datasets[0].data[index],
  }));

  const progressPercentage = revenueData.yearTarget 
    ? (revenueData.totalRevenue! / revenueData.yearTarget) * 100 
    : 0;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background dark:bg-card p-3 border border-border rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-sm text-primary">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  // Chart components based on type
  const renderChart = () => {
    const commonProps = {
      width: 500,
      height: 300,
      data: chartData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    switch (chartType) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="revenue" 
              fill="#9333ea"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        );
      
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#9333ea"
              strokeWidth={3}
              dot={{ fill: '#9333ea', r: 6 }}
              activeDot={{ r: 8 }}
              animationDuration={1000}
            />
          </LineChart>
        );
      
      default: // area
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#9333ea" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#9333ea"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationDuration={1000}
            />
          </AreaChart>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-light text-3xl text-foreground tracking-wide mb-2">Revenue Tracker</h2>
        <p className="text-muted-foreground font-light">
          Building in public • Updated {getTimeAgo(lastUpdated)}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-background dark:bg-card p-6 rounded-lg border border-border hover:shadow-md dark:hover:shadow-xl transition-shadow">
          <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
          <p className="text-2xl font-semibold text-foreground">
            ${revenueData.totalRevenue?.toLocaleString() || '0'}
          </p>
        </div>
        <div className="bg-background dark:bg-card p-6 rounded-lg border border-border hover:shadow-md dark:hover:shadow-xl transition-shadow">
          <p className="text-sm text-muted-foreground mb-1">Monthly Growth</p>
          <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
            +{revenueData.monthlyGrowth || 0}%
          </p>
        </div>
        <div className="bg-background dark:bg-card p-6 rounded-lg border border-border hover:shadow-md dark:hover:shadow-xl transition-shadow">
          <p className="text-sm text-muted-foreground mb-1">Year Target</p>
          <p className="text-2xl font-semibold text-foreground">
            ${revenueData.yearTarget?.toLocaleString() || '0'}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress to $1M</span>
          <span className="font-semibold">{progressPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-border dark:bg-border rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-500 to-primary h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-foreground">Monthly Revenue</h3>
          
          {/* Chart Type Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setChartType('area')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                chartType === 'area' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Area
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                chartType === 'line' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Line
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                chartType === 'bar' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Bar
            </button>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}