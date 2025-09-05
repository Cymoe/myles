import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || 'active'
  const limit = parseInt(searchParams.get('limit') || '10')
  const format = searchParams.get('format') || 'json'
  
  const supabase = createClient()
  
  const { data: deals, error } = await supabase
    .from('deals')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })
    .limit(limit)
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  // Return HTML format for newsletter embedding
  if (format === 'html') {
    const html = deals?.map((deal, index) => {
      const formatCurrency = (num: number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(num)
      }
      
      return `
<div style="background: #f8f9fa; border-left: 4px solid #000000; padding: 20px; margin: 0 0 24px 0; border-radius: 0 8px 8px 0;">
  <h3 style="font-size: 18px; font-weight: 600; color: #333; margin: 0 0 12px 0;">
    ${index + 1}/ ${deal.business_type} - ${deal.city}, ${deal.state}
  </h3>
  <p style="color: #404040; font-size: 16px; line-height: 24px; margin-bottom: 12px;">
    <strong>The Numbers:</strong><br>
    ${deal.revenue ? `• Revenue: ${formatCurrency(deal.revenue)}<br>` : ''}
    • Cash Flow: ${formatCurrency(deal.cash_flow)}<br>
    • Asking: ${formatCurrency(deal.asking_price)} (${deal.multiple}x multiple)<br>
    ${deal.down_payment ? `• Down Payment: ${formatCurrency(deal.down_payment)} with SBA` : ''}
  </p>
  ${deal.why_interesting ? `
  <p style="color: #404040; font-size: 16px; line-height: 24px; margin-bottom: 12px;">
    <strong>Why This Deal:</strong><br>
    ${deal.why_interesting}
  </p>` : ''}
  ${deal.real_talk ? `
  <p style="color: #666; font-size: 14px; line-height: 20px; margin-bottom: 12px;">
    <strong>The Real Talk:</strong> ${deal.real_talk}
  </p>` : ''}
  <div style="text-align: center; margin-top: 16px;">
    <a href="https://myleskameron.com/deals/${deal.slug || deal.id}" style="color: #000000; text-decoration: none; font-weight: 600; font-size: 14px;">
      Get Full Details →
    </a>
  </div>
</div>`
    }).join('\n')
    
    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' },
    })
  }
  
  // Return JSON format for app
  return NextResponse.json({ deals })
}

// Create new deal via API
export async function POST(request: Request) {
  const supabase = createClient()
  const data = await request.json()
  
  // Calculate multiple if not provided
  if (!data.multiple && data.cash_flow && data.asking_price) {
    data.multiple = Math.round(data.asking_price / data.cash_flow * 10) / 10
  }
  
  // Generate slug if not provided
  if (!data.slug) {
    data.slug = `${data.business_type}-${data.city}-${Date.now()}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
  }
  
  const { data: deal, error } = await supabase
    .from('deals')
    .insert(data)
    .select()
    .single()
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ deal }, { status: 201 })
}