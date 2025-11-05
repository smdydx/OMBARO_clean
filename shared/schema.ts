import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const userProfiles = pgTable('user_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  mobile: text('mobile').notNull(),
  email: text('email').notNull().unique(),
  role: text('role').notNull(),
  status: text('status').notNull().default('active'),
  mobileVerified: boolean('mobile_verified').default(false),
  profileCompleted: boolean('profile_completed').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
