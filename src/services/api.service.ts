const API_BASE_URL = 'http://localhost:3001/api';

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async login(username: string, password: string, userType: string): Promise<LoginResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, userType }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Network error. Please try again.',
      };
    }
  }

  async logout(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (error) {
      console.error('Logout error:', error);
      return {
        success: false,
        error: 'Network error. Please try again.',
      };
    }
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/current-user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (error) {
      console.error('Get current user error:', error);
      return {
        success: false,
        error: 'Network error. Please try again.',
      };
    }
  }

  async getUserProfile(userId: string): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`${this.baseUrl}/users/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return {
        success: data.success,
        data: data.profile,
        error: data.error,
      };
    } catch (error) {
      console.error('Get user profile error:', error);
      return {
        success: false,
        error: 'Network error. Please try again.',
      };
    }
  }
}

export const apiService = new ApiService();
