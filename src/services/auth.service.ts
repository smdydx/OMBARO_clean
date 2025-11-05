import { apiClient } from '../lib/api-client';
import { UserRole } from '../types/auth';

export interface LoginCredentials {
  username: string;
  password: string;
  userType: UserRole;
}

export interface LoginResponse {
  success: boolean;
  user?: any;
  error?: string;
}

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const { username, password, userType } = credentials;

      console.log('Login attempt:', { username, userType });

      const response = await apiClient.auth.login({
        username,
        password,
        userType,
      });

      console.log('Login response:', response);

      return response as LoginResponse;
    } catch (error: any) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    }
  }

  static async logout(): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiClient.auth.logout();
      return response as { success: boolean; error?: string };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  static async getCurrentUser(): Promise<{ success: boolean; user?: any; error?: string }> {
    try {
      const response = await apiClient.auth.getCurrentUser();
      return response as { success: boolean; user?: any; error?: string };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  static async getSession() {
    // Mock implementation for compatibility
    return { data: { session: null }, error: null };
  }

  static onAuthStateChange(callback: (event: string, session: any) => void) {
    // Mock implementation for compatibility
    return {
      data: {
        subscription: {
          unsubscribe: () => {},
        },
      },
    };
  }
}
