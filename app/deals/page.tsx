import { createClient } from '@/lib/supabase/server'
import { Deal } from '@/lib/supabase/types'
import DealCard from '@/components/DealCard'
import DealFilters from '@/components/DealFilters'

export const metadata = {
  title: 'Deal Flow - Current Business Acquisition Opportunities',
  description: 'Browse vetted businesses for sale with real financials. Updated weekly with new acquisition opportunities.',
}

export default async function DealsPage({
  searchParams,
}: {
  searchParams: { state?: string; min?: string; max?: string; sort?: string }
}) {
  const supabase = createClient()
  
  // Build query
  let query = supabase
    .from('deals')
    .select('*')
    .eq('status', 'active')
  
  // Apply filters
  if (searchParams.state) {
    query = query.eq('state', searchParams.state)
  }
  
  if (searchParams.min) {
    query = query.gte('cash_flow', parseInt(searchParams.min))
  }
  
  if (searchParams.max) {
    query = query.lte('cash_flow', parseInt(searchParams.max))
  }
  
  // Apply sorting
  const sortBy = searchParams.sort || 'created_at'
  query = query.order(sortBy, { ascending: false })
  
  const { data: deals, error } = await query
  
  if (error) {
    console.error('Error fetching deals:', error)
    return <div>Error loading deals</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Deal Flow</h1>
          <p className="text-xl text-gray-300">
            Current businesses for sale. Real numbers. Updated weekly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Filters */}
          <div className="lg:col-span-3">
            <DealFilters />
          </div>

          {/* Deals Grid */}
          <div className="lg:col-span-9">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {deals?.length || 0} Active Deals
              </h2>
              <select
                className="border border-gray-300 rounded-md px-4 py-2"
                defaultValue={searchParams.sort || 'created_at'}
                onChange={(e) => {
                  const params = new URLSearchParams(window.location.search)
                  params.set('sort', e.target.value)
                  window.location.search = params.toString()
                }}
              >
                <option value="created_at">Newest First</option>
                <option value="cash_flow">Highest Cash Flow</option>
                <option value="asking_price">Price: Low to High</option>
                <option value="multiple">Best Multiple</option>
              </select>
            </div>

            {deals && deals.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No deals match your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Get These Deals First
          </h2>
          <p className="text-xl mb-8">
            Join the newsletter for early access to new listings and expert analysis.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Join Deal Flow Newsletter →
          </a>
        </div>
      </div>
    </div>
  )
}