import { useMutation } from "@tanstack/react-query";
import { becomeAgent } from "../api/becomeAgent";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useBecomeAgent = () => {
    return useMutation({
        mutationFn: becomeAgent
    })
}