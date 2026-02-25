import api from '../axiosInstance.js'

export const login = async (data) => {
  try {
    const response = await api.post('users/login', data);
    return response.data; // Assuming the token is returned in the response data
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('users/register', userData);
    return response.data; // Assuming the token is returned in the response data
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (userUpdatedData) => {
  try {
    const response = await api.put('/users/me', userUpdatedData)
    return response.data
  } catch (error) {
    throw error
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('users/me')
    return response.data
  } catch (error) {
    throw error;
  }
}