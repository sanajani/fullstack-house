import api from './axiosInstance';

export const getAllProperties = async ({page, limit, province, dealType, houseRent, propertyType}) => {
    
    try {
        const response = await api.get("properties", {
            params: {
                page,
                limit,
                province,
                dealType,
                houseRent,
                propertyType
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getSinglePropertyByID = async (id) => {
    
    try {
        const response = await api.get(`properties/${id}`)
        return response.data
    } catch (error) {
        throw error;
    }
}