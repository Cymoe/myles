# Admin Setup Guide

## Quick Start

1. **Visit the signup page**: Go to `/admin/signup` to create your admin account
   - This will only work if no admin exists yet
   - Use a secure password

2. **Access the admin area**: After creating your account, you can access:
   - `/admin/deals` - Manage all deals
   - `/admin/deals/new` - Create new deals
   - `/admin/deals/[id]/edit` - Edit existing deals
   - `/admin/deals/[id]/newsletter` - Export deals for newsletter

## Database Setup Complete

The following tables have been created in Supabase:
- `deals` - Stores all deal information
- `profiles` - Tracks admin users

## Security

- Only users with `is_admin = true` in the profiles table can access admin routes
- Authentication is handled via Supabase Auth
- All admin routes are protected by middleware

## Next Steps

1. Create your admin account at `/admin/signup`
2. Start adding deals through the admin interface
3. Configure your subdomain (app.myleskameron.com) to point to this app