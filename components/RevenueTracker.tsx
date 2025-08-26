'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
  totalRevenue?: number;
  monthlyGrowth?: number;
  yearTarget?: number;
}

export default function RevenueTracker() {
  const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
  const [loading, setLoading] = useState(true);

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
              backgroundColor: 'rgba(147, 51, 234, 0.1)',
              borderColor: 'rgb(147, 51, 234)',
              borderWidth: 2,
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
      <div className="max-w-4xl mx-auto my-16 p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
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

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
  };

  const progressPercentage = revenueData.yearTarget 
    ? (revenueData.totalRevenue! / revenueData.yearTarget) * 100 
    : 0;

  return (
    <div className="max-w-4xl mx-auto my-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-light text-3xl text-gray-900 tracking-wide mb-2">Revenue Tracker</h2>
        <p className="text-gray-600 font-light">Building in public</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-semibold text-gray-900">
            ${revenueData.totalRevenue?.toLocaleString() || '0'}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Monthly Growth</p>
          <p className="text-2xl font-semibold text-green-600">
            +{revenueData.monthlyGrowth || 0}%
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Year Target</p>
          <p className="text-2xl font-semibold text-gray-900">
            ${revenueData.yearTarget?.toLocaleString() || '0'}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress to $1M</span>
          <span>{progressPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
        <div className="h-64">
          <Line data={revenueData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}