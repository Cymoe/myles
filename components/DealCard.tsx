import { Deal } from '@/lib/supabase/types'
import Link from 'next/link'

interface DealCardProps {
  deal: Deal
}

export default function DealCard({ deal }: DealCardProps) {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {deal.business_type}
        </h3>
        <p className="text-gray-600">
          {deal.city}, {deal.state}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Asking Price:</span>
          <span className="font-semibold">{formatCurrency(deal.asking_price)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cash Flow:</span>
          <span className="font-semibold text-green-600">
            {formatCurrency(deal.cash_flow)}
          </span>
        </div>
        {deal.multiple && (
          <div className="flex justify-between">
            <span className="text-gray-600">Multiple:</span>
            <span className="font-semibold">{deal.multiple}x</span>
          </div>
        )}
        {deal.down_payment && (
          <div className="flex justify-between">
            <span className="text-gray-600">Down (SBA):</span>
            <span className="font-semibold">{formatCurrency(deal.down_payment)}</span>
          </div>
        )}
      </div>

      {deal.featured_in_newsletter && (
        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Featured in Newsletter
          </span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Link
          href={`/deals/${deal.slug || deal.id}`}
          className="text-black font-semibold hover:underline"
        >
          View Details →
        </Link>
        
        <span className="text-sm text-gray-500">
          Added {new Date(deal.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}