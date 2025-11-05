# OMBARO Platform - Replit Configuration

## Project Overview
OMBARO is a comprehensive beauty & wellness platform with multi-portal authentication for customers, vendors, therapists, beauticians, employees, and administrators.

## Project Type
- **Framework**: React 18.3 + TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Database**: Supabase (External PostgreSQL)
- **Port**: 5000 (Frontend)

## Architecture
- **Frontend**: React web application (main project)
- **Backend**: FastAPI (Python) - optional, located in `/backend` directory
- **Mobile**: React Native - separate app in `/OMBAROMobile` directory
- **Database**: Supabase with 60+ tables and Row Level Security

## Recent Changes
- **2025-11-04**: Initial Replit setup
  - Installed @types/node for TypeScript compatibility
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up development workflow for frontend
  - Configured deployment for autoscale
  - Updated .gitignore for Replit environment

## Environment Variables
The project uses Supabase for database and authentication. Environment variables are configured with fallback values in `vite.config.ts`:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

Default values are hardcoded in vite.config.ts for development purposes.

## Key Features
1. **Multi-Portal System**: Customer, Vendor, Therapist, Beautician, Employee, Admin
2. **Real-time Updates**: WebSocket subscriptions via Supabase
3. **Booking System**: Complete booking workflow with therapist assignment
4. **Payment Integration**: Support for multiple payment methods
5. **GPS Tracking**: Real-time location tracking for service delivery
6. **Loyalty & Rewards**: Points system and referral program

## Project Structure
```
/src/components/     - React components by feature (admin, vendor, therapist, etc.)
/src/context/        - React Context providers (PortalContext, AuthContext)
/src/services/       - API service layer for database operations
/src/types/          - TypeScript type definitions
/supabase/migrations/- Database migration files (60+ tables)
/backend/            - Optional FastAPI backend
/public/             - Static assets
```

## Database
- **Provider**: Supabase (managed PostgreSQL)
- **Tables**: 60+ production tables
- **Security**: Row Level Security enabled on all tables
- **Migrations**: Located in `/supabase/migrations/` directory

Note: Database migrations must be run manually in Supabase dashboard. See `MIGRATION_GUIDE.md` for details.

## Running the Project

### Development
The dev server runs automatically on port 5000. Access via the webview.

### Local Testing
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Deployment
Configured for Replit autoscale deployment:
- Build command: `npm run build`
- Run command: `npm run preview`
- Target: Autoscale (stateless web app)

## User Preferences
- None recorded yet

## Documentation
Extensive documentation available in project root:
- `README.md` - Main project documentation
- `QUICK_START.md` - Quick start guide
- `DATABASE_SCHEMA.md` - Database schema reference
- `MIGRATION_GUIDE.md` - Database migration instructions
- `API_DOCUMENTATION.md` - API reference
- `TECHNICAL_IMPLEMENTATION_GUIDE.md` - Technical details

## Backend (Optional)
The `/backend` directory contains an optional FastAPI application for complex business logic. It's not required for basic functionality as most operations go through Supabase directly.

To run backend:
- Framework: FastAPI
- Python: 3.11+
- Dependencies: Redis (optional for caching)
- Note: Not configured in current Replit setup

## Important Notes
- Frontend must run on port 5000 for Replit webview
- Vite configured to accept all hosts for proxy compatibility
- Database is external (Supabase), not local
- Mobile app is separate project (not part of this Replit)
