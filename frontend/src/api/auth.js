import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:44004/api/v1/'; // Set the base URL for your API
// http://localhost:44004/api/v1/users/register
const createAuthHeaders = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export const login = async (data) => {
  try {
    const response = await axios.post('users/login', data);
    return response.data; // Assuming the token is returned in the response data
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post('users/register', userData);
    return response.data; // Assuming the token is returned in the response data
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};
