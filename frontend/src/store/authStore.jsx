// stores/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      role : null,

      // Set user and token on login
      setAuth: (user, token, role) => {
        set({ 
          user, 
          token, 
          role,
          isAuthenticated: true 
        });
      },

      // Clear auth data on logout
      logoutAuth: () => {
        set({ 
          user: null, 
          token: null, 
          role: null,
          isAuthenticated: false 
        });
      },

      // Get current user
      getUser: () => get().user,

      // Get token
      getToken: () => get().token,

      // Get role
      getRole: () => get().role,

      // Check if authenticated
      checkAuth: () => get().isAuthenticated,
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      getStorage: () => localStorage, // (optional) by default, localStorage is used
    }
  )
);

