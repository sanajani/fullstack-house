import { useGetUserProfile } from "../hooks/useAuth";
import AgentRequestStatus from "../pages/AgentRequestStatus";

const CheckAgentStatus = ({children}) => {
    const {data, isLoading, isError, error} = useGetUserProfile();
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Errors.. {error?.message}</h1>
    const hasRequest = data?.data?.hasRequestedAgent;
    const requestStatus = data?.data?.agentRequestStatus;

    if(hasRequest){
        if(requestStatus === 'pending'){
            return <AgentRequestStatus />
        }
        if(requestStatus === 'rejected'){
            return <h1>Check Agent Status else if section inisde else if </h1>
        }
    }
    
  return children
}

export default CheckAgentStatus