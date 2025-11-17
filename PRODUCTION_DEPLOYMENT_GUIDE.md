# Production Deployment Guide

## Overview

OMBARO is a full-stack application with:
- **Frontend**: React SPA (Vite + React Router)
- **Backend**: Express.js API with Drizzle ORM
- **Database**: Neon PostgreSQL

This guide explains how to deploy the application to production.

---

## Architecture

```
┌─────────────────────┐
│  Vercel/Netlify     │ ← Frontend (Static SPA)
│  (React SPA)        │
└──────────┬──────────┘
           │
           │ HTTPS API calls
           ▼
┌─────────────────────┐
│  Replit Deployment  │ ← Backend (Express API)
│  (Express API)      │
└──────────┬──────────┘
           │
           │ PostgreSQL
           ▼
┌─────────────────────┐
│  Neon Database      │ ← Database
└─────────────────────┘
```

---

## Deployment Steps

### Part 1: Deploy Backend API on Replit

1. **Keep your Replit project as the API backend**
   - The Express server is already configured to run on Replit
   - Make sure the DATABASE_URL is set in Replit Secrets

2. **Configure Deployment Settings**
   - Click "Deploy" button in Replit
   - Choose "Autoscale" or "Reserved VM" based on your needs
   - Autoscale: Scales based on traffic (recommended for most cases)
   - Reserved VM: Always-on server (better for websockets/real-time features)

3. **Set Environment Variables in Replit (CRITICAL)**
   - `DATABASE_URL` - Already set automatically
   - `FRONTEND_ORIGINS` - **REQUIRED** Comma-separated list of allowed frontend domains
     
     **Example**:
     ```
     FRONTEND_ORIGINS=https://ombaro.vercel.app,https://www.ombaro.com,https://ombaro-git-main.vercel.app
     ```
     
   **⚠️ IMPORTANT**: 
   - Include ALL domains that need API access (production, www, preview deployments)
   - Each domain must match EXACTLY (including protocol https://)
   - No trailing slashes
   - Separate multiple domains with commas
   - This is used for CORS security to prevent unauthorized API access
   - Without this, your frontend will get CORS errors

4. **Get your Replit API URL**
   - After deployment, you'll get a URL like:
     `https://your-project.your-username.repl.co`
   - Copy this URL - you'll need it for frontend deployment

5. **Test the API**
   ```bash
   curl https://your-project.your-username.repl.co/api/health
   ```
   Should return: `{"status":"ok","timestamp":"..."}`

---

### Part 2: Deploy Frontend on Vercel

1. **Connect GitHub Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository containing OMBARO

2. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build:frontend`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the following:

   ```
   VITE_API_BASE_URL=https://your-project.your-username.repl.co/api
   ```

   Replace `your-project.your-username.repl.co` with your actual Replit deployment URL.

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be available at `https://your-project.vercel.app`

5. **Add Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `www.ombaro.com`)
   - Follow Vercel's DNS configuration instructions

---

### Part 3: Deploy Frontend on Netlify (Alternative)

1. **Connect GitHub Repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build:frontend`
   - Publish directory: `dist`

3. **Set Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the following:

   ```
   VITE_API_BASE_URL=https://your-project.your-username.repl.co/api
   ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your app will be available at `https://your-site.netlify.app`

---

## Important Configuration Files

### `.env.production.example`
Copy this to `.env.production` and update with your values:
```env
VITE_API_BASE_URL=https://your-replit-api.repl.co/api
```

### `vercel.json`
Already configured for:
- SPA routing (all routes go to index.html)
- Static asset caching
- Security headers

### `netlify.toml`
Already configured for:
- SPA routing via redirects
- Build settings
- Static asset caching

---

## Testing the Deployment

1. **Test Frontend**
   - Visit your Vercel/Netlify URL
   - Navigate to different pages (should not get 404 errors)
   - Try direct URL navigation (e.g., `/about`, `/services`)

2. **Test API Connection**
   - Try logging in (username: 1234, password: 1234)
   - Check browser console for any CORS errors
   - Verify API calls are going to your Replit URL

3. **Check Browser Console**
   - Open DevTools → Console
   - Look for any errors related to API calls
   - Verify no 404 or CORS errors

---

## Troubleshooting

### 404 Errors on Page Refresh

**Problem**: Getting 404 when refreshing pages like `/about` or `/services`

**Solution**: 
- **Vercel**: Already fixed in `vercel.json` with rewrites
- **Netlify**: Already fixed with `_redirects` file and `netlify.toml`

### API Connection Errors

**Problem**: Frontend cannot connect to backend API

**Solutions**:
1. Check `VITE_API_BASE_URL` is set correctly in Vercel/Netlify
2. Verify Replit API is running: `curl https://your-api.repl.co/api/health`
3. Check CORS errors in browser console
4. Ensure `FRONTEND_ORIGINS` is set in Replit environment with ALL your frontend domains

### CORS Errors

**Problem**: "Access to fetch has been blocked by CORS policy"

**Solutions**:
1. Set `FRONTEND_ORIGINS` environment variable in Replit with ALL your domains
2. Include production domain, www subdomain, and any preview/staging domains
3. Check browser console for the exact origin being blocked
4. Add that origin to `FRONTEND_ORIGINS` in Replit (comma-separated)
5. Restart your Replit deployment after adding new origins
6. Verify the origin in logs: Replit backend logs will show "CORS allowed origins: [...]"

### Build Failures

**Problem**: Build fails on Vercel/Netlify

**Solutions**:
1. Verify `build:frontend` script exists in `package.json`
2. Check that all dependencies are listed in `package.json`
3. Review build logs for specific errors
4. Ensure Node version is compatible (v18 or higher recommended)

---

## Environment Variables Reference

### Frontend (Vercel/Netlify)
- `VITE_API_BASE_URL` - Backend API URL (Required for production)

### Backend (Replit)
- `DATABASE_URL` - PostgreSQL connection string (Auto-set by Replit)
- `FRONTEND_ORIGINS` - Comma-separated list of allowed frontend URLs for CORS (Required for production)
  Example: `https://ombaro.vercel.app,https://www.ombaro.com`

---

## Monitoring and Maintenance

1. **Monitor Replit API**
   - Check Replit deployment logs regularly
   - Monitor API response times
   - Set up uptime monitoring (e.g., UptimeRobot)

2. **Monitor Frontend**
   - Use Vercel/Netlify analytics
   - Check for 404 errors in logs
   - Monitor build times

3. **Database**
   - Monitor Neon dashboard for connection usage
   - Check query performance
   - Regular backups (Neon handles this automatically)

---

## Replit-Only Deployment (Simpler Alternative)

If you prefer to deploy everything on Replit:

1. **Use Replit Deployments**
   - Frontend and backend run together
   - No need for separate deployments
   - Environment variables already configured

2. **Configuration**
   - No changes needed to `api-client.ts`
   - CORS automatically configured
   - Just click "Deploy" in Replit

3. **Access**
   - Your app will be at: `https://your-project.your-username.repl.co`
   - Both frontend (port 5000) and API (port 3001) work automatically

---

## Next Steps

1. Set up custom domain on Vercel/Netlify
2. Configure SSL certificate (automatic on Vercel/Netlify)
3. Set up monitoring and error tracking
4. Enable analytics
5. Configure CDN for faster global access (automatic on Vercel/Netlify)

---

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Replit deployment logs
3. Verify all environment variables are set
4. Test API endpoint directly with curl/Postman
5. Review this guide's troubleshooting section

---

**Last Updated**: November 2025
