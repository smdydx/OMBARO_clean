# OMBARO Platform - Replit Configuration

## Project Overview
OMBARO is a comprehensive beauty & wellness platform with multi-portal authentication for customers, vendors, therapists, beauticians, employees, and administrators.

## Project Type
- **Framework**: React 18.3 + TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Database**: Neon Postgres (via Replit integration)
- **ORM**: Drizzle ORM
- **Backend**: Express.js + TypeScript
- **Port**: 5000 (Frontend), 3001 (API Server)

## Architecture
- **Frontend**: React web application with Vite
- **Backend**: Express API server with authentication and database endpoints
- **Database**: Neon Postgres with Drizzle ORM for type-safe queries
- **Mobile**: React Native - separate app in `/OMBAROMobile` directory (not migrated)
- **API**: RESTful API with JSON responses

## Recent Changes
- **2025-11-10**: Migrated from Supabase to Neon Postgres
  - Removed @supabase/supabase-js dependency
  - Implemented Express API server (port 3001) with authentication endpoints
  - Set up Drizzle ORM for database operations
  - Created API client (src/lib/api-client.ts) to replace Supabase client
  - Updated auth service to use Express API instead of Supabase
  - Created compatibility shim in src/lib/supabase.ts for unmigrated components
  - Configured concurrent development workflow (Vite + Express)
  - Pushed database schema to Neon using Drizzle Kit

- **2025-11-04**: Initial Replit setup
  - Installed @types/node for TypeScript compatibility
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up development workflow for frontend
  - Configured deployment for autoscale
  - Updated .gitignore for Replit environment

## Environment Variables
The project uses Neon Postgres for the database. Environment variables managed by Replit:
- `DATABASE_URL`: Neon Postgres connection string
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`: PostgreSQL connection details

Legacy Supabase environment variables (no longer used):
- ~~`VITE_SUPABASE_URL`~~ - Removed
- ~~`VITE_SUPABASE_ANON_KEY`~~ - Removed

## Key Features
1. **Multi-Portal System**: Customer, Vendor, Therapist, Beautician, Employee, Admin
2. **Authentication**: Express API-based login/logout with demo credentials
3. **Booking System**: Complete booking workflow with therapist assignment
4. **Payment Integration**: Support for multiple payment methods
5. **GPS Tracking**: Real-time location tracking for service delivery
6. **Loyalty & Rewards**: Points system and referral program

## Project Structure
```
/server/             - Express API server
  - index.ts         - Server entry point
  - api.ts           - API routes and handlers
  - db.ts            - Database connection (Neon + Drizzle)
/shared/             - Shared code between frontend and backend
  - schema.ts        - Drizzle ORM schema definitions
/src/components/     - React components by feature (admin, vendor, therapist, etc.)
/src/context/        - React Context providers (PortalContext, AuthContext)
/src/services/       - API service layer (now uses Express API)
  - auth.service.ts  - Authentication service
/src/lib/            - Utilities and clients
  - api-client.ts    - API client for Express backend
  - supabase.ts      - Compatibility shim (deprecated)
/src/types/          - TypeScript type definitions
/public/             - Static assets
```

## Database
- **Provider**: Neon Postgres (Replit integration)
- **ORM**: Drizzle ORM for type-safe queries
- **Schema**: Defined in `/shared/schema.ts`
- **Migrations**: Use `npm run db:push` to sync schema changes

Current schema:
- `user_profiles`: User authentication and profile data (UUID primary key)

Note: The original Supabase migrations (60+ tables) have not been migrated yet. The current schema has only the essential user_profiles table for authentication.

## Running the Project

### Development
The dev workflow runs two servers concurrently:
1. Vite dev server (port 5000) - React frontend
2. Express API server (port 3001) - Backend API

```bash
npm run dev
```

### API Server Only
```bash
npm run dev:api
```

### Frontend Only
```bash
npm run dev:vite
```

### Database Management
```bash
npm run db:push      # Push schema changes to Neon
npm run db:studio    # Open Drizzle Studio for database management
```

### Production Build
```bash
npm run build
npm run preview
```

## API Endpoints
Base URL: `http://localhost:3001/api`

### Authentication
- `POST /api/auth/login` - User login (username, password, userType)
- `POST /api/auth/logout` - User logout
- `GET /api/auth/current-user` - Get current authenticated user

### Users
- `GET /api/users/profile/:id` - Get user profile by ID

Demo credentials for all user types:
- Username: `1234`
- Password: `1234`

## Deployment
Configured for Replit autoscale deployment:
- Build command: `npm run build`
- Run command: `npm run preview`
- Target: Autoscale (stateless web app)

## User Preferences
- Demo authentication with username="1234" and password="1234" for all test users

## Documentation
Extensive documentation available in project root:
- `README.md` - Main project documentation
- `QUICK_START.md` - Quick start guide
- `DATABASE_SCHEMA.md` - Database schema reference
- `MIGRATION_GUIDE.md` - Database migration instructions
- `API_DOCUMENTATION.md` - API reference
- `TECHNICAL_IMPLEMENTATION_GUIDE.md` - Technical details

## Migration Status
✅ **Completed:**
- Database schema setup with Drizzle ORM
- Express API server with authentication
- Frontend API client replacing Supabase
- Removed Supabase dependencies
- Application running successfully

🔄 **Pending:**
- Migrate remaining 60+ Supabase tables to Drizzle schema
- Update all components to use Express API instead of Supabase client
- Implement proper password hashing for production
- Add integration tests for API endpoints

## Important Notes
- Frontend must run on port 5000 for Replit webview
- Backend API runs on port 3001
- Vite configured to accept all hosts for proxy compatibility
- Database is Neon Postgres (Replit managed)
- Mobile app is separate project (not part of this Replit)
- Legacy Supabase imports are shimmed but should be replaced with API client
