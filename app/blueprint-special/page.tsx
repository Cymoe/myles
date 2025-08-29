'use client';

import Script from 'next/script';

export default function BlueprintSpecialPage() {
  return (
    <main className="min-h-screen">
      {/* Urgency Bar */}
      <div className="bg-red-500 text-white py-3 text-center font-semibold animate-pulse">
        ⏰ PRIVATE LINK: This page expires when your email timer runs out
      </div>
      
      {/* Hero Section */}
      <section className="relative py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Social Proof */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold mb-6">
              <span>✅</span>
              217 Starter Pack Members Upgraded This Week
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              You&apos;re 67 Documents Away From<br/>
              <span className="text-primary">Your First Business Acquisition</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              You&apos;ve seen what&apos;s in the Starter Pack. Now get the <span className="font-semibold text-foreground">complete system</span> that&apos;s helped<br/>
              283 people buy their first business (average deal size: $1.2M)
            </p>
            
            {/* Price Anchor */}
            <div className="bg-white dark:bg-muted/50 rounded-lg p-8 mb-8 max-w-2xl mx-auto border-2 border-primary">
              <p className="text-sm text-muted-foreground mb-2">Starter Pack Exclusive Price</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through text-muted-foreground">$888</span>
                <span className="text-5xl font-bold text-foreground">$697</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold">SAVE $191</span>
              </div>
              
              {/* Scarcity */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-red-600">
                  ⚠️ After this timer expires, price goes to $888
                </p>
                <p className="text-xs text-muted-foreground">
                  This link only works once. Bookmark it if you need to think.
                </p>
              </div>
            </div>
            
            {/* Primary CTA */}
            <a
              href="https://blueprintsystem.gumroad.com/l/tezhbk/STARTERPACK"
              className="gumroad-button inline-block px-12 py-5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-gumroad-single-product="true"
            >
              Get The Complete Blueprint Now →
            </a>
            
            <p className="text-sm text-muted-foreground mt-4">
              💳 Secure checkout • Instant download • 30-day guarantee
            </p>
          </div>
        </div>
      </section>

      {/* What You&apos;re Getting */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Here&apos;s Everything You&apos;re Getting Today
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              (Took me 10 years and $80M in deals to create this)
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Column 1 */}
              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  🎯 Acquisition Arsenal (25 docs)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Negotiation scripts that cut 40% off price</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>No-money-down deal structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Off-market funnel (10 deals/week)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Due diligence that saves millions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Seller psychology manipulation</span>
                  </li>
                </ul>
              </div>
              
              {/* Column 2 */}
              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  🚀 Operations & Scale (22 docs)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Run everything in 15 hrs/week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Hire operators who do the work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Systems that run without you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Industry-specific playbooks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Exit for 5-8x in 18 months</span>
                  </li>
                </ul>
              </div>
              
              {/* Column 3 */}
              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  🎆 Empire Building (10 docs)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>$50M portfolio in 24 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Buy a new business every 90 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Roll-up entire markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Raise capital from others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Exit for generational wealth</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA Middle */}
            <div className="text-center my-12">
              <a
                href="https://blueprintsystem.gumroad.com/l/tezhbk/STARTERPACK"
                className="gumroad-button inline-block px-12 py-5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                data-gumroad-single-product="true"
              >
                Yes! Give Me The Complete Blueprint for $697 →
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                One-time payment • Lifetime access • All future updates included
              </p>
            </div>
            
            {/* Risk Reversal */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🛡️ 30-Day &quot;Find a Deal or Free&quot; Guarantee</h3>
              <p className="text-lg mb-4">
                Use the Blueprint for 30 days. If you don&apos;t find at least ONE viable business to buy,<br/>
                I&apos;ll refund every penny. No questions, no hassle.
              </p>
              <p className="text-sm text-muted-foreground">
                Why can I offer this? Because in 10 years, nobody who actually used the system has asked for a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Starter Pack Members Are Already Making Moves
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              While others are still &quot;researching&quot;, Blueprint users are closing deals
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Testimonial 1 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🎨</span>
                  <span className="font-semibold">Painting Business</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;Used doc #6 to reach out to 30 companies. Got 4 meetings in week 1. 
                  Now negotiating a $1.2M deal.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- Jessica R., TX</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🌿</span>
                  <span className="font-semibold">Landscaping Deal</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;Valuation framework saved me $400K on overpriced business. 
                  Found better deal at 2.5x instead of 5x.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- David M., FL</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🏠</span>
                  <span className="font-semibold">ADU Construction</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;Closed my first deal in 47 days. Zero down using doc #19. 
                  Now doing $80K/month.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- Marcus T., CA</p>
              </div>
              
              {/* Testimonial 4 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🚿</span>
                  <span className="font-semibold">Plumbing Empire</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;Bought 3 companies in 6 months. The roll-up strategy in doc #31 
                  is pure gold.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- Sarah K., AZ</p>
              </div>
              
              {/* Testimonial 5 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🌱</span>
                  <span className="font-semibold">Turf Installation</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;Negotiation scripts cut $300K off asking price. Seller actually 
                  thanked me after.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- Ryan P., NV</p>
              </div>
              
              {/* Testimonial 6 */}
              <div className="bg-muted/30 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🔧</span>
                  <span className="font-semibold">HVAC Service</span>
                </div>
                <p className="text-sm mb-3 italic">
                  &quot;From employee to owner in 90 days. Blueprint showed me exactly 
                  how to structure the buyout.&quot;
                </p>
                <p className="text-xs text-muted-foreground">- Mike L., OH</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold mb-2">⚡ Real Results From Real People</p>
              <p className="text-muted-foreground">
                These aren&apos;t cherry-picked success stories. This is what happens when you follow the Blueprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Questions? I&apos;ve Got Answers
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;I have no business experience. Will this work for me?&quot;</h3>
                <p className="text-muted-foreground">
                  Yes. 40% of Blueprint users had zero business experience. The documents assume you&apos;re starting from scratch. 
                  Everything is explained step-by-step. If you can follow instructions, you can buy a business.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;Do I need money to buy a business?&quot;</h3>
                <p className="text-muted-foreground">
                  No. Document #19 shows 7 ways to buy with zero down. Document #23 shows how to use the business&apos;s 
                  own cash flow to pay for itself. I&apos;ve done 12 deals with no money out of pocket.
                </p>
              </div>
              
              {/* FAQ 3 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;How is this different from other business courses?&quot;</h3>
                <p className="text-muted-foreground">
                  This isn&apos;t a course. It&apos;s a proven system of documents I use in my own deals. No fluff, no theory. 
                  Just copy-paste templates, scripts, and frameworks that work. Used on over $80M in real transactions.
                </p>
              </div>
              
              {/* FAQ 4 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;What if I can&apos;t find good deals in my area?&quot;</h3>
                <p className="text-muted-foreground">
                  Document #8 shows how to find off-market deals anywhere. Document #14 reveals 5 deal sources nobody uses. 
                  Plus, many Blueprint users buy businesses remotely and run them from anywhere.
                </p>
              </div>
              
              {/* FAQ 5 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;How long until I see results?&quot;</h3>
                <p className="text-muted-foreground">
                  Most users find their first viable deal within 30-60 days. Some close within 90 days. 
                  The fastest was 19 days (painting company in Houston). It depends on how fast you move.
                </p>
              </div>
              
              {/* FAQ 6 */}
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">&quot;Is this price really only for Starter Pack members?&quot;</h3>
                <p className="text-muted-foreground">
                  Yes. This $697 price is exclusive to people who downloaded the Starter Pack. 
                  Everyone else pays $888. Once this link expires, you&apos;ll pay full price too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Clock Is Ticking
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Every day you wait, someone else is buying the business you should own.<br/>
              The choice is yours: Keep dreaming or start doing.
            </p>
            
            <div className="bg-background border-2 border-primary p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">The Complete Blueprint</h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl line-through text-muted-foreground">$888</span>
                <span className="text-5xl font-bold text-foreground">$697</span>
              </div>
              
              <a
                href="https://blueprintsystem.gumroad.com/l/tezhbk/STARTERPACK"
                className="gumroad-button inline-block w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg text-center no-underline"
                data-gumroad-single-product="true"
              >
                Get Instant Access for $697
              </a>
              
              <p className="text-sm text-muted-foreground mt-4">
                Instant download • 67 documents • Lifetime updates
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-8">
              This special link expires soon. After that, it&apos;s back to $888.<br/>
              <strong>Don&apos;t wait.</strong> Every day you delay is money lost.
            </p>
            
            {/* Urgency Box */}
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="font-bold text-lg mb-3">⚠️ Why You Need To Act Now</h3>
              <ul className="space-y-2 text-left text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Deals are happening NOW:</strong> 3 painting companies sold last week in Texas alone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Prices are rising:</strong> Service businesses up 23% this year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Competition is growing:</strong> PE firms moving into smaller deals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>This price ends soon:</strong> Then it&apos;s $888 forever</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-12 border-t">
              <p className="text-sm text-muted-foreground">
                Questions? Email hello@myleskameron.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              <span>SSL Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📥</span>
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">💰</span>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">🔄</span>
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gumroad Script */}
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
    </main>
  );
}