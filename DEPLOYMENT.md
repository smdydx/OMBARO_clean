# OMBARO - Vercel Deployment Guide

## Frontend-Only Deployment to Vercel

This guide explains how to deploy the OMBARO spa and wellness booking platform frontend to Vercel with optimized build configuration.

### Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository connected to your Vercel account

### Deployment Configuration

The project is configured for optimized frontend-only deployment with the following files:

#### 1. `vercel.json`
- **Build Command**: `npm run build` (compiles TypeScript and builds Vite)
- **Output Directory**: `dist` (Vite output)
- **Framework**: Vite
- **Optimizations**:
  - Asset caching (31536000s = 1 year for immutable assets)
  - Security headers (X-Frame-Options, X-XSS-Protection, etc.)
  - SPA routing (all routes redirect to index.html)

#### 2. `.vercelignore`
Excludes backend and database files from deployment:
- `server/` - Backend Express server
- `supabase/` - Database migrations
- `drizzle/` - ORM configuration
- Environment files and logs

#### 3. Build Scripts
- `npm run build` - Full build with TypeScript compilation
- `npm run build:frontend` - Frontend-only build (faster)

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard

1. **Connect Your Repository**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Select the project

2. **Configure Build Settings**
   Vercel will auto-detect the configuration from `vercel.json`:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (Optional)
   If your frontend needs environment variables:
   - Go to Project Settings → Environment Variables
   - Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Build Optimization Features

1. **Code Splitting**: Vite automatically splits code for optimal loading
2. **Asset Optimization**: Images and assets are cached for 1 year
3. **Tree Shaking**: Unused code is removed during build
4. **Minification**: JavaScript and CSS are minified
5. **Security Headers**: Enhanced security with CSP headers

### Performance Tips

1. **Image Optimization**
   - Use WebP format when possible
   - Implement lazy loading (already configured)
   - Consider using Vercel Image Optimization

2. **Caching Strategy**
   - Static assets: 1 year cache (configured)
   - HTML: No cache (configured for SPA routing)

3. **Bundle Size**
   ```bash
   # Analyze bundle size
   npm run build
   # Check dist/ folder size
   ```

### Troubleshooting

#### Build Fails
- Check that all dependencies are in `dependencies` (not just `devDependencies`)
- Ensure TypeScript compiles without errors: `npm run lint`

#### Routing Issues
- Configured in `vercel.json` - all routes redirect to `index.html`
- React Router handles client-side routing

#### Missing Assets
- Ensure images are in `public/images/` directory
- Check that paths use `/images/` (not relative paths)

### Post-Deployment

1. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Analytics** (Optional)
   - Enable Vercel Analytics in project settings
   - Monitor performance and user behavior

3. **Environment Variables**
   - Update API endpoints if backend is hosted separately
   - Use `VITE_` prefix for environment variables

### Backend Considerations

This configuration deploys **frontend only**. For the backend:

1. **Separate Backend Deployment**
   - Deploy Express server separately (Railway, Render, Fly.io)
   - Update frontend API calls to use backend URL

2. **Database**
   - Neon PostgreSQL (already configured)
   - Database runs independently of frontend

3. **API Endpoints**
   - Update `VITE_API_URL` environment variable in Vercel
   - Point to your backend deployment URL

### Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

### Cost Optimization

- Vercel Free Tier: Suitable for most small projects
- Bandwidth: Efficient with static assets
- Build Minutes: Vite builds are fast (~1-2 minutes)

### Support

For issues with:
- **Vercel Deployment**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Configuration**: [vitejs.dev](https://vitejs.dev)
- **React Router**: [reactrouter.com](https://reactrouter.com)

---

**Note**: This deployment setup focuses on frontend efficiency. Backend and database services should be deployed separately for production use.
