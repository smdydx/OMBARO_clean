
# OMBARO Services Documentation

## Overview
OMBARO offers a comprehensive range of beauty and wellness services across India through our verified partner network.

## Service Categories

### 1. Spa & Massage Services
**Location**: `/spa-massage`

#### Available Services:
- **Swedish Massage** (60min, ₹2,999)
  - Gentle, relaxing massage using long strokes
  - Benefits: Stress relief, improved circulation, muscle relaxation

- **Deep Tissue Massage** (75min, ₹3,499)
  - Firm pressure targeting deep muscle layers
  - Benefits: Pain relief, muscle recovery, injury rehabilitation

- **Thai Massage** (90min, ₹3,799)
  - Traditional massage with stretching and acupressure
  - Benefits: Flexibility, energy boost, stress relief

- **Aromatherapy Massage** (60min, ₹3,299)
  - Relaxing massage with essential oils
  - Benefits: Stress reduction, mood enhancement, better sleep

- **Hot Stone Massage** (90min, ₹3,999)
  - Therapeutic massage using heated stones
  - Benefits: Deep relaxation, pain relief, improved circulation

- **Couple Massage** (60min, ₹5,499)
  - Side-by-side massage experience
  - Benefits: Bonding time, shared relaxation

#### Add-on Services:
- Foot Scrub (20min, ₹599)
- Head Massage (15min, ₹499)
- Premium Aromatherapy (₹799)
- Hot Compress (10min, ₹399)
- Cupping Therapy (30min, ₹800)
- Gua Sha Treatment (30min, ₹600)
- Paraffin Wraps (45min, ₹900)

### 2. Beauty Salon Services
**Location**: `/beauty-salon`

#### Services Offered:
- Hair Cut & Styling
- Hair Coloring & Highlights
- Hair Spa & Treatment
- Keratin Treatment
- Facial & Skin Care
- Manicure & Pedicure
- Makeup Services
- Threading & Waxing
- Body Treatments

### 3. Bridal Makeup Services
**Location**: `/bridal-makeup`

#### Services Offered:
- Bridal Makeup (Traditional, Contemporary, Fusion)
- HD & Airbrush Makeup
- Bridal Hair Styling
- Pre-Bridal Treatments
- Engagement & Mehendi Makeup
- Reception & Party Makeup
- Saree & Dupatta Draping
- Bridal Trial Sessions
- Bridal Party Makeup

### 4. Facial & Skin Care
- Classic Facial
- Anti-Aging Facial
- Acne Treatment
- Hydrafacial
- Chemical Peel
- Skin Brightening

### 5. Hair Services
- Hair Cut & Styling
- Hair Coloring
- Hair Treatment
- Keratin Treatment
- Hair Spa
- Highlights & Lowlights

### 6. Nail Services
- Classic Manicure
- Classic Pedicure
- Gel Nails
- Nail Art
- Nail Extensions
- Spa Manicure & Pedicure

### 7. Body Treatments
- Waxing Services
- Body Scrub
- Body Wrap
- Threading
- Bleach
- Tan Removal

### 8. Wellness Programs
- Yoga Sessions
- Meditation Classes
- Nutrition Counseling
- Stress Management
- Weight Management
- Lifestyle Coaching

## Service Features

### For Customers:
- Browse verified service providers nationwide
- View detailed service menus and portfolios
- Compare prices and packages
- Read authentic customer reviews
- Book appointments instantly
- Flexible scheduling with rescheduling options
- Secure payment methods
- Exclusive discounts and offers

### Service Categories (Technical):
```typescript
SERVICE_CATEGORIES = [
  { id: 'relaxation', name: 'Relaxation', icon: '🧘', color: '#8B5CF6' },
  { id: 'therapeutic', name: 'Therapeutic', icon: '💆', color: '#3B82F6' },
  { id: 'deep-tissue', name: 'Deep Tissue', icon: '💪', color: '#EF4444' },
  { id: 'aromatherapy', name: 'Aromatherapy', icon: '🌸', color: '#EC4899' },
  { id: 'hot-stone', name: 'Hot Stone', icon: '🔥', color: '#F59E0B' },
  { id: 'couple', name: 'Couple', icon: '💑', color: '#10B981' },
]
```

## Booking Flow
1. Browse services
2. Select service provider
3. Choose service and duration
4. Select date and time
5. Add to cart
6. Proceed to checkout
7. Make payment
8. Receive confirmation

## API Endpoints
- `GET /api/services` - List all services
- `GET /api/services/:id` - Get service details
- `POST /api/bookings` - Create booking
- `GET /api/providers` - List service providers
- `GET /api/providers/:id/services` - Get provider services

## Database Schema
Services are stored in:
- `services` table - Base service information
- `service_categories` table - Category mappings
- `service_providers` table - Provider-service relationships
- `bookings` table - Service bookings
