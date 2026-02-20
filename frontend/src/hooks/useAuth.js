import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {  register, login, updateProfile, getUserProfile } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import {useAuthStore} from '../store/authStore';

export const useRegister = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries('auth');
              toast.success('User registered successfully');
            navigate('/login');
            console.log('user registered');
        },
        onError: (error) => {
              console.log('error comes from backend ',error.response?.data);
              toast.error(error.response?.data?.message || 'Registration failed');
        }
    })
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      // Assuming response structure: { data: { user, token }, message }
      const { user, token } = response.data;

      const { role } = user; // Assuming user object contains a 'role' property
      
      // Store user and token in Zustand (automatically persisted)
      setAuth(user, token, role);
      
      // Invalidate auth queries
      queryClient.invalidateQueries('auth');
      
      toast.success('User logged in successfully');
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log('error comes from backend ', error.response?.data);
      toast.error(error.response?.data?.message || 'Login failed');
    }
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
      
    }
  })
}

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile, 
    staleTime: 5 * 60 * 1000
  })
}