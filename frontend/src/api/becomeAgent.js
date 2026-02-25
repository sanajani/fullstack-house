import api from './axiosInstance.js';

// becoem agent api
export const becomeAgent = async (data) => {
  try {
    // http://localhost:44004/api/v1/users/become-agent
    const response = await api.put('users/become-agent', data);
    return response.data; // Assuming the token is returned in the response data
  } catch (error) {
    console.error('Become agent failed:', error);
    throw error;
  }
};
