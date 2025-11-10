/**
 * API Client for making requests to the Node.js backend
 * Replaces Supabase client with fetch-based API calls
 */

const API_BASE_URL = 'http://localhost:3001/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export class ApiError extends Error {
  constructor(public message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

class ApiClient {
  private baseUrl: string;
  private authToken: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  setAuthToken(token: string | null) {
    this.authToken = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          this.authToken = null;
        }
        throw new ApiError(data.error || 'Request failed', response.status);
      }

      return data;
    } catch (error: any) {
      console.error(`API request failed: ${endpoint}`, error);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(error.message || 'Network error');
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // Auth endpoints
  auth = {
    login: (credentials: { username: string; password: string; userType: string }) =>
      this.post('/auth/login', credentials),
    
    logout: () =>
      this.post('/auth/logout'),
    
    getCurrentUser: () =>
      this.get('/auth/current-user'),
  };

  // User endpoints
  users = {
    getProfile: (id: string) =>
      this.get(`/users/profile/${id}`),
  };

  // Vendor application endpoints
  vendor = {
    submitApplication: (application: any) =>
      this.post('/vendor/applications', application),
    
    getApplicationsByStatus: (status?: string) =>
      this.get(`/vendor/applications${status && status !== 'all' ? `?status=${status}` : ''}`),
    
    getAllApplications: () =>
      this.get('/vendor/applications/all'),
    
    getMyApplications: () =>
      this.get('/vendor/applications/my'),
    
    approveApplication: (applicationId: string, userId: string, comments?: string) =>
      this.post(`/vendor/applications/${applicationId}/approve`, { userId, comments }),
    
    rejectApplication: (applicationId: string, userId: string, reason: string) =>
      this.post(`/vendor/applications/${applicationId}/reject`, { userId, reason }),
    
    getApplicationsForLevel: (hierarchyLevel: number) =>
      this.get(`/vendor/applications/level/${hierarchyLevel}`),
    
    getApprovalHistory: (applicationId: string) =>
      this.get(`/vendor/applications/${applicationId}/history`),
    
    requestAdditionalInfo: (applicationId: string, userId: string, note: string) =>
      this.post(`/vendor/applications/${applicationId}/request-info`, { userId, note }),
  };

  // Department endpoints
  departments = {
    getAll: () =>
      this.get('/departments'),
    
    getByCode: (code: string) =>
      this.get(`/departments/code/${code}`),
    
    getById: (id: string) =>
      this.get(`/departments/${id}`),
    
    getModules: (departmentId: string) =>
      this.get(`/departments/${departmentId}/modules`),
    
    getUserAssignments: (userId: string) =>
      this.get(`/departments/users/${userId}/assignments`),
    
    getUserPrimaryDepartment: (userId: string) =>
      this.get(`/departments/users/${userId}/primary`),
    
    assignUser: (userId: string, departmentId: string, assignmentType: string, isPrimary: boolean) =>
      this.post('/departments/assignments', { userId, departmentId, assignmentType, isPrimary }),
    
    getUserWidgets: (userId: string, departmentId: string) =>
      this.get(`/departments/${departmentId}/users/${userId}/widgets`),
    
    saveWidget: (widget: any) =>
      this.post('/departments/widgets', widget),
    
    deleteWidget: (widgetId: string) =>
      this.delete(`/departments/widgets/${widgetId}`),
    
    getSettings: (departmentId: string) =>
      this.get(`/departments/${departmentId}/settings`),
    
    updateSetting: (departmentId: string, settingKey: string, settingValue: any, settingType: string) =>
      this.post(`/departments/${departmentId}/settings`, { settingKey, settingValue, settingType }),
    
    logActivity: (departmentId: string, userId: string, action: string, options?: any) =>
      this.post(`/departments/${departmentId}/activity`, { userId, action, ...options }),
    
    getActivityLogs: (departmentId: string, limit?: number) =>
      this.get(`/departments/${departmentId}/activity${limit ? `?limit=${limit}` : ''}`),
    
    update: (departmentId: string, updates: any) =>
      this.patch(`/departments/${departmentId}`, updates),
    
    checkUserAccess: (userId: string, departmentId: string) =>
      this.get(`/departments/${departmentId}/users/${userId}/access`),
    
    getUserRole: (userId: string, departmentId: string) =>
      this.get(`/departments/${departmentId}/users/${userId}/role`),
  };
}

export const apiClient = new ApiClient();
export default apiClient;
