/**
 * Supabase compatibility shim
 * This file provides a stub to prevent errors in components that haven't been migrated yet.
 * Use the API client (src/lib/api-client.ts) and auth service (src/services/auth.service.ts) instead.
 */

// Stub object for backward compatibility
export const supabase = {
  auth: {
    signInWithPassword: async () => ({ data: null, error: new Error('Supabase has been replaced. Use auth.service.ts instead.') }),
    signUp: async () => ({ data: null, error: new Error('Supabase has been replaced. Use auth.service.ts instead.') }),
    signOut: async () => ({ error: new Error('Supabase has been replaced. Use auth.service.ts instead.') }),
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: (callback: any) => ({
      data: {
        subscription: {
          unsubscribe: () => {},
        },
      },
    }),
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({ data: null, error: new Error('Supabase has been replaced. Use API client instead.') }),
      single: () => ({ data: null, error: new Error('Supabase has been replaced. Use API client instead.') }),
    }),
    insert: () => ({ data: null, error: new Error('Supabase has been replaced. Use API client instead.') }),
    update: () => ({ data: null, error: new Error('Supabase has been replaced. Use API client instead.') }),
    delete: () => ({ data: null, error: new Error('Supabase has been replaced. Use API client instead.') }),
  }),
};

export type Database = any;
