#!/bin/bash

# Test Blueprint flow on production
# Usage: ./test-production-blueprint.sh

echo "🧪 Testing Blueprint flow on production..."
echo ""

# Set production URL (update this with your actual domain)
PRODUCTION_URL="https://myleskameron.com"
TEST_EMAIL="test-$(date +%s)@example.com"

echo "1️⃣ Testing homepage loads..."
curl -s -o /dev/null -w "%{http_code}" $PRODUCTION_URL
echo " - Homepage status"

echo ""
echo "2️⃣ Testing /blueprint-free page..."
curl -s -o /dev/null -w "%{http_code}" $PRODUCTION_URL/blueprint-free
echo " - Blueprint free page status"

echo ""
echo "3️⃣ Testing /blueprint page..."
curl -s -o /dev/null -w "%{http_code}" $PRODUCTION_URL/blueprint
echo " - Blueprint sales page status"

echo ""
echo "4️⃣ Testing API endpoint..."
echo "Test email: $TEST_EMAIL"

# Test the API
RESPONSE=$(curl -s -X POST $PRODUCTION_URL/api/blueprint-download \
  -H "Content-Type: application/json" \
  -d '{"email": "'$TEST_EMAIL'", "source": "blueprint-starter-pack"}')

echo "API Response: $RESPONSE"

echo ""
echo "5️⃣ Testing sample document..."
curl -s -o /dev/null -w "%{http_code}" $PRODUCTION_URL/downloads/blueprint-starter-pack/sample-document.html
echo " - Sample document status"

echo ""
echo "✅ Production test complete!"
echo ""
echo "Next steps:"
echo "1. Check Beehiiv for subscriber with tag 'blueprint-starter-pack'"
echo "2. Verify email was sent (check Resend dashboard)"
echo "3. Test with a real email address"
echo "4. Monitor for 24 hours before announcing"