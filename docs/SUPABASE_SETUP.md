# Supabase Admin Setup Guide

## Setting Up Your First Admin Account

Follow these steps to create your admin account in Supabase:

### 1. Access Supabase Dashboard
Go to: https://supabase.com/dashboard/project/jnfglmdwnczbmklktfty/auth/users

### 2. Create New User
1. Click "Add user" → "Create new user"
2. Enter your admin email and a strong password
3. Click "Create user"

### 3. Verify Email (Optional)
- Check "Auto Confirm User" when creating to skip email verification
- Or manually confirm the user after creation

### 4. Test Login
1. Go to: http://localhost:3000/admin/login (or your deployed URL)
2. Enter the email and password you just created
3. You should be redirected to the admin dashboard

## Database Access

Your Supabase project details:
- **Project URL**: https://jnfglmdwnczbmklktfty.supabase.co
- **Dashboard**: https://supabase.com/dashboard/project/jnfglmdwnczbmklktfty

## Next Steps

1. **Configure Subdomain**: Point `app.myleskameron.com` to your Next.js application
   - Add CNAME record pointing to your Vercel deployment
   - Or configure your hosting provider's DNS settings

2. **Start Adding Deals**: Once logged in, you can:
   - Click "Add New Deal" to create deals
   - Set deal status (draft, active, under LOI, sold, expired)
   - Export deals as HTML for your newsletter
   - View public deal pages

3. **Newsletter Workflow**:
   - Add deals in the admin dashboard
   - Click "Add to Newsletter" for deals you want to feature
   - Copy the generated HTML
   - Paste into Beehiiv for your Deal Flow newsletter

## Security Notes

- Keep your admin credentials secure
- Consider enabling 2FA in Supabase Dashboard
- Regularly review user access
- Monitor authentication logs in Supabase Dashboard