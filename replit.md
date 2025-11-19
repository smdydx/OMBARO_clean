# OMBARO - Beauty & Wellness Platform

## Overview

OMBARO is a comprehensive beauty and wellness booking platform that connects customers with spa, salon, and wellness service providers. The platform features multi-portal authentication supporting customers, vendors, therapists, beauticians, employees, and administrators, with real-time tracking, booking management, and automated workflows.

**Technology Stack:**
- Frontend: React 18.3+ with TypeScript, Vite, Tailwind CSS
- Mobile: React Native with Expo
- Database: Supabase (PostgreSQL 15+) with Row Level Security
- Backend API: FastAPI (Python) - optional, most features use Supabase directly
- Deployment: Vercel (frontend), Replit (backend API)

**Project Status:** Production-ready with 60+ essential database tables and complete multi-portal implementation.

## Recent Changes

**November 19, 2025:**
- **Image Optimization**: Added lazy loading attributes to all large marketing images (hero sections, collages) for improved page load performance
- **Home Page Enhancement**: Replaced single hero image with collage-style grid of 4 spa/wellness images, matching the Become a Partner page design
- **Navigation Updates**: 
  - Added "Become a Partner" button to header navigation (desktop and mobile)
  - Standardized routing to `/become-partner` across all CTAs
  - Replaced all "Get Started" CTAs with "Become a Partner" links
- **Login Modal**: Implemented modal dialog with Web/Mobile App selection options, includes smooth fadeIn/slideUp animations
- **CSS Cleanup**: Removed invalid CSS properties and added proper modal animations in index.css

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Database Design

**Core Philosophy:** Clean, production-ready schema with 60 essential tables organized into 11 functional categories. All tables have Row Level Security (RLS) enabled for data isolation.

**Key Architectural Decisions:**

1. **Supabase-First Architecture**
   - Chose Supabase over custom backend for built-in auth, real-time subscriptions, and RLS
   - Rationale: Reduces backend complexity, provides WebSocket support out-of-the-box
   - Trade-off: Some complex business logic may need optional FastAPI backend
   - Pros: Faster development, built-in security, real-time capabilities
   - Cons: Vendor lock-in, need Postgres expertise for complex queries

2. **Multi-Portal Access Control**
   - Role-based system with 15+ user types (customer, vendor, therapist, employee, admin, departments)
   - Database stores roles in `user_profiles.role` column with RLS policies enforcing access
   - Each portal has dedicated dashboard components and service layers
   - Alternative considered: Separate databases per portal (rejected due to complexity)

3. **Hierarchical Approval Workflow**
   - 5-level employee hierarchy for vendor approvals (Field Officer → Manager → Director → VP → Admin)
   - Database triggers automatically route applications and create notifications
   - Stores complete audit trail in `vendor_approval_history`
   - Chosen over manual routing for automation and transparency

4. **Location Tracking Architecture**
   - Real-time GPS tracking stored in `therapist_locations` and `beautician_locations`
   - Uses Expo Location API on mobile, browser geolocation on web
   - Updates every 30 seconds during active service
   - Privacy: Only visible to vendor and customer during assignment

5. **Authentication Strategy**
   - Dual authentication: Supabase Auth (recommended) + fallback username/password
   - Default credentials pattern: `{role}321` with password `1234` for testing
   - Production: Vendors self-register with custom passwords, employees use Supabase Auth
   - RLS policies check `auth.uid()` to enforce data access

### Frontend Architecture

**Component Organization:**

1. **Portal-Based Structure**
   - Separate component trees for each portal (customer, vendor, admin, etc.)
   - Shared components in `/components/common` and `/components/layout`
   - Portal routing handled by `App.tsx` with role-based navigation
   - Chose monolithic app over micro-frontends for simpler deployment

2. **State Management**
   - Context API for portal state (`PortalContext`) and authentication (`useAuth` hook)
   - Service layers handle data fetching and caching
   - No Redux/MobX: Kept simple since Supabase handles real-time state
   - Alternative considered: Zustand (rejected to minimize dependencies)

3. **Routing Strategy**
   - React Router DOM v7 with lazy-loaded routes
   - Main website (`/`) separate from app routes (`/app/*`)
   - `AppRouter.tsx` for marketing pages, `App.tsx` for authenticated app
   - Pros: SEO-friendly landing pages, fast initial load
   - Cons: More complex routing logic

### Mobile Application

**React Native + Expo Architecture:**

1. **Code Sharing with Web**
   - Shares Supabase client configuration and service layers
   - Separate UI components (React Native vs React)
   - Same database, authentication, and business logic
   - Rationale: Maximize code reuse while respecting platform differences

2. **Platform-Specific Features**
   - Native push notifications via Expo Notifications
   - GPS tracking with Expo Location
   - Camera access for document uploads
   - Alternative: React Native CLI (rejected for Expo's easier deployment)

### Service Layer Design

**Key Services:**

1. **`auth.service.ts`** - Handles all authentication operations
2. **`vendor-approval.service.ts`** - Multi-level approval workflow
3. **`employee.service.ts`** - Employee hierarchy management
4. **`therapist.service.ts`** - Therapist assignment and tracking
5. **`beautician.service.ts`** - Beautician management
6. **`booking.service.ts`** - Booking lifecycle management

**Design Patterns:**
- Service classes expose async methods returning typed data
- Error handling with try/catch and user-friendly messages
- Data mapping layer to flatten JSONB fields from database
- Chosen over GraphQL for simplicity and direct Supabase integration

### Real-Time Features

**Implementation:**
- Supabase Realtime for live updates on bookings, locations, notifications
- WebSocket connections managed by Supabase client
- Subscribe to table changes in React components with `useEffect`
- Alternative considered: Custom WebSocket server (rejected as Supabase provides this)

### Data Model Decisions

1. **JSONB vs Flat Columns**
   - Uses JSONB for `business_address`, `application_data` to store complex objects
   - Service layer flattens JSONB for UI consumption
   - Pros: Flexible schema, easy to add fields
   - Cons: Requires data mapping, harder to query

2. **Vendor Onboarding Workflow**
   - Applicants stored in `vendor_applications` with status tracking
   - Upon final approval, automatic account creation in `vendors` table
   - Database triggers send notifications at each approval stage
   - Rationale: Separates applications from active vendors

3. **Commission Tracking**
   - Partner types (Franchise, Association, Aggregator) with different commission rates
   - Stored in `partner_types` table referenced by `vendor_applications`
   - Commission records tracked separately for accounting
   - Alternative: Hard-coded rates (rejected for flexibility)

### Security Architecture

**Row Level Security (RLS):**
- Every table has RLS policies restricting access by role
- Policies check `auth.uid()` against user IDs and roles
- Special function `is_admin_user()` bypasses RLS for admin checks
- Prevents infinite recursion by using SECURITY DEFINER function

**Password Management:**
- Supabase Auth handles hashing and validation
- Fallback authentication for demo users validates against `user_profiles`
- Production: Enforces strong passwords (8+ chars, complexity)

## External Dependencies

### Third-Party Services

1. **Supabase** (Primary Database & Auth)
   - PostgreSQL 15+ database
   - Built-in authentication with JWT tokens
   - Real-time subscriptions via WebSockets
   - Row Level Security for data isolation
   - Edge Functions for serverless compute (if needed)
   - Connection: Via `@supabase/supabase-js` client library

2. **Vercel** (Frontend Hosting)
   - Hosts production React SPA
   - Automatic deployments from Git
   - CDN for static assets
   - Configuration in `vercel.json`

3. **Replit** (Optional Backend API)
   - Hosts FastAPI backend for complex business logic
   - Uses Neon Postgres for database (alternative to Supabase)
   - WebSocket support for real-time features
   - Configuration in `server/` directory

### NPM Packages

**Core:**
- `react` & `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `@supabase/supabase-js` - Database and auth client
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS

**Build Tools:**
- `vite` - Fast build tool and dev server
- `typescript` - Type safety
- `drizzle-orm` - Optional ORM for Neon database
- `drizzle-kit` - Database migrations (if not using Supabase)

**Backend (Optional FastAPI):**
- `fastapi` - API framework
- `uvicorn` - ASGI server
- `sqlalchemy` - ORM for Postgres
- `redis` - Caching layer
- `python-jose` - JWT handling

### External APIs

1. **Google Maps API** (if implemented)
   - For location search and display
   - Therapist/beautician tracking visualization

2. **Payment Gateways** (planned)
   - Razorpay or Stripe for payment processing
   - Webhook integration for payment confirmations

3. **SMS Gateway** (planned)
   - For OTP verification
   - Booking confirmations and reminders

### Database Migration Strategy

**Current System:**
- Main migration: `supabase/migrations/20250115_clean_production_schema.sql` (60 tables)
- Additional migrations for vendor onboarding, notifications, etc.
- Total: 9 migration files documented in `MIGRATION_GUIDE.md`

**Deployment:**
- Apply via Supabase Dashboard SQL Editor
- Or use Supabase CLI: `supabase db push`
- Migrations are idempotent (safe to run multiple times)

### Environment Configuration

**Required Variables:**
```
VITE_SUPABASE_URL - Supabase project URL
VITE_SUPABASE_ANON_KEY - Supabase anonymous key
DATABASE_URL - Neon Postgres URL (if using backend API)
```

**Optional:**
```
FRONTEND_ORIGINS - CORS allowed origins for backend
REDIS_URL - Redis connection for caching
```