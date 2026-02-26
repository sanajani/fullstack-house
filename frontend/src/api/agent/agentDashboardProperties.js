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
  try {
     const response = await api.get(`agent/property/${id}`);
  return response.data;
  } catch (error) {
    throw error
  } 
};

export const patchSinglePropertyByAgentByIdAPI = async (id, data) => {
  try {
    
    const response = await api.patch(`agent/property/${id}`, data);
    return response.data;
    
  } catch (error) {
    throw error
  }
};

export const patchPropertyStatus = async (id, status) => {
  console.log(id, status);
  
  try {
    const response = await api.patch(`/agent/property/${id}/status`, status)
    return response.data
  } catch (error) {
   throw error 
  }
}