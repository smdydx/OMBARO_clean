import express from 'express';
import cors from 'cors';
import { db } from './db';
import { userProfiles } from '../shared/schema';
import { eq, and } from 'drizzle-orm';

const app = express();
const port = 3001;

// CORS configuration for production
// Parse allowed origins from environment variables
// FRONTEND_ORIGINS should be a comma-separated list of allowed origins
// Example: https://ombaro.vercel.app,https://www.ombaro.com,https://ombaro-preview.netlify.app
const frontendOrigins = process.env.FRONTEND_ORIGINS 
  ? process.env.FRONTEND_ORIGINS.split(',').map(origin => origin.trim())
  : [];

const allowedOrigins = [
  'http://localhost:5000',
  'http://localhost:3000',
  ...frontendOrigins,
].filter(Boolean);

console.log('CORS allowed origins:', allowedOrigins);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin exactly matches one of the allowed origins
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Log unauthorized attempts for debugging
      console.warn(`CORS: Blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password, userType } = req.body;

    console.log('Login attempt:', { username, userType });

    // Find user by mobile or email
    let user = await db
      .select()
      .from(userProfiles)
      .where(
        and(
          eq(userProfiles.mobile, username),
          eq(userProfiles.role, userType)
        )
      )
      .limit(1);

    // If not found by mobile, try by email
    if (user.length === 0) {
      user = await db
        .select()
        .from(userProfiles)
        .where(
          and(
            eq(userProfiles.email, username),
            eq(userProfiles.role, userType)
          )
        )
        .limit(1);
    }

    if (user.length === 0) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials or user type'
      });
    }

    const userProfile = user[0];

    // Check password - for demo, accept "1234" for users with mobile "1234"
    if (password === '1234' && userProfile.mobile === '1234') {
      return res.json({
        success: true,
        user: {
          id: userProfile.id,
          name: userProfile.name,
          email: userProfile.email,
          mobile: userProfile.mobile,
          role: userProfile.role,
        }
      });
    }

    // For other passwords, validate (in production, use proper password hashing)
    return res.status(401).json({
      success: false,
      error: 'Invalid password'
    });

  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Login failed'
    });
  }
});

// Get current user (mock implementation)
app.get('/api/auth/current-user', async (req, res) => {
  try {
    // In a real implementation, you'd get the user ID from a JWT token
    // For now, return a mock response
    res.json({
      success: true,
      user: null
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Logout endpoint (mock implementation)
app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true });
});

// Get user profile by ID
app.get('/api/users/profile/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.id, userId))
      .limit(1);

    if (user.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      profile: user[0]
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`API server running on port ${port}`);
});

export default app;
