#!/bin/bash

# Test production email flow
PROD_URL="https://www.myleskameron.com"
TEST_EMAIL="production-test-$(date +%s)@example.com"

echo "Testing production email flow..."
echo "Email: $TEST_EMAIL"
echo ""

curl -X POST "$PROD_URL/api/subscribe" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$TEST_EMAIL\", \"leadMagnet\": \"prod-test\"}" \
  -w "\n\nHTTP Status: %{http_code}\nTime: %{time_total}s\n"

echo ""
echo "✅ Check Resend dashboard for delivery status"
echo "✅ Check Beehiiv for new subscriber with utm_source=website, utm_medium=prod-test"