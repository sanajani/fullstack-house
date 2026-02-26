import api from '../axiosInstance';

export const pendingAgentRequests = async () => {
    try {
        const response = await api.get("/admin/pending-agent-lists");
        return response.data
    } catch (error) {
        throw error
    }
}

export const acceptAgentRequest = async (userId) => {
    try {
        const  response = await api.patch(`/admin/tenant-to-agent-accept/${userId}`)        
        return response.data;
    } catch (error) {
        throw error
    }
}