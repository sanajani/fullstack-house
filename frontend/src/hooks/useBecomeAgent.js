import { useMutation, useQueryClient } from "@tanstack/react-query";
import { agentLogin, becomeAgent } from "../api/becomeAgent";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/authStore";

export const useBecomeAgent = () => {
    return useMutation({
        mutationFn: becomeAgent
    })
}

// export const useLoginAgent = () => {
//     return useMutation({
//         mutationFn: agentLogin
//     })
// }

export const useLoginAgent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: agentLogin,
    onSuccess: (response) => {
      // Assuming response structure: { data: { user, token }, message }
      const { agent, token } = response.data;

      const { role } = agent; // Assuming agent object contains a 'role' property
      
      // Store user and token in Zustand (automatically persisted)
      setAuth(agent, token, role);
      
      // Invalidate auth queries
      queryClient.invalidateQueries(['userProfile']);
      
      toast.success('Agent logged in successfully');
      navigate('/dashboard/agent/create-property');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  });
};