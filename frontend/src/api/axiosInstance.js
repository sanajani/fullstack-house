import axios from "axios";
import { useAuthStore } from "../store/authStore";


const axiosInstance = axios.create({
  baseURL: "http://localhost:44004/api/v1/",
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
