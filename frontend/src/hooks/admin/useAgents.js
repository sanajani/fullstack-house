import { useMutation, useQuery } from '@tanstack/react-query';
import { acceptAgentRequest, pendingAgentRequests } from '../../api/admin/agents';

export const useGetPendingAgentRequests = () => {
    return useQuery({
        queryKey: ['agentpendingrequests'],
        queryFn: pendingAgentRequests,
        // staleTime: 5 * 60 * 1000
    })
}

export const useAcceptAgentRequest = () => {
    return useMutation({
        mutationFn: acceptAgentRequest
    })
}