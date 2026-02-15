import { useQuery } from '@tanstack/react-query';
import { getAllProperties } from '../api/properties';
// import { useSearchParams } from 'react-router-dom';

export const useGetAllProperties = ({page, limit, province, dealType, houseRent, propertyType}) => {
    // const [searchParams, setSearchParams] = useSearchParams();
  return useQuery({
    queryKey: ['properties', page, limit, province, dealType, houseRent, propertyType],
    queryFn: () => getAllProperties({page, limit, province, dealType, houseRent, propertyType})
  })
};
