import { useMutation } from "@tanstack/react-query";
import { becomeAgent } from "../api/becomeAgent";

export const useBecomeAgent = () => {
    return useMutation({
        mutationFn: becomeAgent,
        onSuccess: (response) => {
            console.log('Become agent successful:', response);
        },
        onError: (error) => {
              console.log('error comes from backend ',error.response?.data);
        }
    })
}