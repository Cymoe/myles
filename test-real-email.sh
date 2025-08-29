#!/bin/bash

echo "Testing with realistic email format..."
echo "=================================="

# Use a realistic email format that Beehiiv will accept
TEST_EMAIL="beehiiv.test+$(date +%s)@gmail.com"

echo "Testing email: $TEST_EMAIL"
echo ""

# Test locally first
echo "1. Testing local environment..."
curl -X POST "http://localhost:3000/api/subscribe" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$TEST_EMAIL\", \"leadMagnet\": \"valid-email-test\"}" \
  -w "\nStatus: %{http_code}\n"

echo ""
echo "2. Testing production..."
curl -X POST "https://www.myleskameron.com/api/subscribe" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$TEST_EMAIL\", \"leadMagnet\": \"production-test\"}" \
  -w "\nStatus: %{http_code}\n"

echo ""
echo "✅ Check Beehiiv dashboard - this email should appear as 'active'"
echo "✅ Email used: $TEST_EMAIL"