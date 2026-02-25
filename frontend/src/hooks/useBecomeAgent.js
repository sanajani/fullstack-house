import { useMutation, useQueryClient } from "@tanstack/react-query";
import { becomeAgent } from "../api/becomeAgent";

export const useBecomeAgent = () => {
    return useMutation({
        mutationFn: becomeAgent
    })
}
