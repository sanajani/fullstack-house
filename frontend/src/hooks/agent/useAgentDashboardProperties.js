import { getAllPropertiesByAgentAPI, getSinglePropertyByAgentByIdAPI, patchSinglePropertyByAgentByIdAPI } from "../../api/agent/agentDashboardProperties";
import { useMutation, useQuery } from "@tanstack/react-query";
export const getAllPropertiesByAgent = () => {
    return useQuery({
        queryKey:['getAllpropertiesByAgent'],
        queryFn: getAllPropertiesByAgentAPI
    })
}

// hooks/useProperty.js

export const useSinglePropertyByAgentById = (id) => {
  return useQuery({
    queryKey: ["singleProperty", id],
    queryFn: () => getSinglePropertyByAgentByIdAPI(id),
    enabled: !!id,
  });
};

// export const useUpdateProperty = (id) => {
//   return useMutation({
//     mutationFn: patchSinglePropertyByAgentByIdAPI
//   })
// }
export const useUpdateProperty = () => {
  return useMutation({
    mutationFn: ({ propertyId, data }) => 
      patchSinglePropertyByAgentByIdAPI(propertyId, data)
  });
};