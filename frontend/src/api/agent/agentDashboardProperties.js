import api from '../axiosInstance';

export const getAllPropertiesByAgentAPI = async () => {
    try {
        const response = await api.get("/agent/property")
        return response.data
    } catch (error) {
        throw error
    }
}

// api/agent/property.js

export const getSinglePropertyByAgentByIdAPI = async (id) => {
  const response = await api.get(`agent/property/${id}`);
  return response.data;
};

export const patchSinglePropertyByAgentByIdAPI = async (id, data) => {
  console.log(id, data, 'inside patch');
  
  const response = await api.patch(`agent/property/${id}`, data);
  return response.data;
};