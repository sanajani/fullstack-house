import { useQuery } from '@tanstack/react-query';
import { getAllProperties, getSinglePropertyByID } from '../api/properties';

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