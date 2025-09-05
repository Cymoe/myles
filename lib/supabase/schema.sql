-- Create deals table
CREATE TABLE IF NOT EXISTS deals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Basic Info
  business_type VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(100) NOT NULL,
  
  -- Financial Info
  revenue DECIMAL(12, 2),
  cash_flow DECIMAL(12, 2) NOT NULL,
  ebitda DECIMAL(12, 2),
  asking_price DECIMAL(12, 2) NOT NULL,
  multiple DECIMAL(5, 2),
  down_payment DECIMAL(12, 2),
  
  -- Deal Details
  why_interesting TEXT,
  real_talk TEXT,
  established_year INTEGER,
  
  -- Listing Info
  listing_url TEXT,
  broker_name VARCHAR(255),
  broker_email VARCHAR(255),
  
  -- Status
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'under_loi', 'sold', 'expired', 'draft')),
  featured_in_newsletter BOOLEAN DEFAULT FALSE,
  newsletter_date DATE,
  
  -- Tracking
  views INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  inquiries INTEGER DEFAULT 0,
  
  -- SEO/Display
  slug VARCHAR(255) UNIQUE,
  meta_description TEXT
);

-- Create indexes
CREATE INDEX idx_deals_status ON deals(status);
CREATE INDEX idx_deals_created_at ON deals(created_at DESC);
CREATE INDEX idx_deals_state ON deals(state);
CREATE INDEX idx_deals_cash_flow ON deals(cash_flow DESC);

-- Create RLS policies
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

-- Public can read active deals
CREATE POLICY "Public can view active deals" ON deals
  FOR SELECT USING (status = 'active');

-- Only authenticated users can insert/update (you)
CREATE POLICY "Authenticated users can insert deals" ON deals
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update deals" ON deals
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Newsletter tracking table
CREATE TABLE IF NOT EXISTS newsletter_features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  deal_id UUID REFERENCES deals(id) ON DELETE CASCADE,
  newsletter_date DATE NOT NULL,
  position INTEGER, -- 1st, 2nd, 3rd in newsletter
  clicks INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_deals_updated_at BEFORE UPDATE ON deals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();