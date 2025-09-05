export interface Deal {
  id: string
  created_at: string
  updated_at: string
  
  // Basic Info
  business_type: string
  city: string
  state: string
  
  // Financial Info
  revenue?: number
  cash_flow: number
  ebitda?: number
  asking_price: number
  multiple?: number
  down_payment?: number
  
  // Deal Details
  why_interesting?: string
  real_talk?: string
  established_year?: number
  
  // Listing Info
  listing_url?: string
  broker_name?: string
  broker_email?: string
  
  // Status
  status: 'active' | 'under_loi' | 'sold' | 'expired' | 'draft'
  featured_in_newsletter: boolean
  newsletter_date?: string
  
  // Tracking
  views: number
  clicks: number
  inquiries: number
  
  // SEO/Display
  slug?: string
  meta_description?: string
}

export interface NewsletterFeature {
  id: string
  deal_id: string
  newsletter_date: string
  position?: number
  clicks: number
  created_at: string
}