import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:44004/api/v1/";
console.log(API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  
  const {token} = useAuthStore.getState();

  const publicEndpoints = ['users/login', 'users/register'];
  if(!publicEndpoints.includes(config.url) && token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
})

export default axiosInstance;


// import axios from "axios";
// import { useAuthStore } from "../store/authStore";

// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:44004/api/v1/";

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 10000, // Optional: 10 second timeout
// });

// // Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const { token } = useAuthStore.getState();

//     // Public endpoints that don't need token
//     const publicEndpoints = ['/users/login', '/users/register', '/properties'];
//     const isPublicEndpoint = publicEndpoints.some(endpoint => config.url.includes(endpoint));
    
//     // Add token if needed
//     if (!isPublicEndpoint && token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
    
//     // Optional: Log requests in development
//     if (import.meta.env.DEV) {
//       console.log(`🚀 ${config.method.toUpperCase()} ${config.url}`);
//     }
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Optional: Log responses in development
//     if (import.meta.env.DEV) {
//       console.log(`✅ ${response.status} ${response.config.url}`);
//     }
//     return response;
//   },
//   (error) => {
//     // Handle 401 Unauthorized
//     if (error.response?.status === 401) {
//       const { logout } = useAuthStore.getState();
//       logout();
//       window.location.href = '/login';
//     }
    
//     // Handle network errors
//     if (!error.response) {
//       console.error('Network error - server might be down');
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;