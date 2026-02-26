import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllProperties, getSinglePropertyByID, createProperty } from '../api/properties';

export const useGetAllProperties = ({page, limit, province, dealType, houseRent, propertyType}) => {
  return useQuery({
    queryKey: ['properties', page, limit, province, dealType, houseRent, propertyType],
    queryFn: () => getAllProperties({page, limit, province, dealType, houseRent, propertyType})
  })
};

export const useGetSinglePropertyByID = ({id}) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: () => getSinglePropertyByID(id)
  })
}

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: createProperty
  })
}