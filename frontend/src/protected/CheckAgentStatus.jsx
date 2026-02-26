import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserProfile } from "../hooks/useAuth";
import AgentRequestStatus from "../pages/AgentRequestStatus";

const CheckAgentStatus = ({ children }) => {
  const { data, isLoading, isError, error } = useGetUserProfile();
  const navigate = useNavigate();

  // 1. Read the status during render
  const hasRequest = data?.data?.hasRequestedAgent;
  const requestStatus = data?.data?.agentRequestStatus;

  // 2. Perform the navigation SIDE EFFECT *after* render
  useEffect(() => {
    if (hasRequest && requestStatus === 'approved') {
      navigate('/'); // Navigate after render is committed
    }
  }, [hasRequest, requestStatus, navigate]); // Dependencies

  // 3. Render UI based on state (pure, during render)
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error.. {error?.message}</h1>;

  // Return appropriate component based on status
  if (hasRequest) {
    if (requestStatus === 'pending') {
      return <AgentRequestStatus />;
    }
    if (requestStatus === 'rejected') {
      return <h1>Your agent request was rejected</h1>;
    }
    if (requestStatus === 'approved') {
      // For approved, we return children but the useEffect will navigate
      // OR you could return a loading spinner while navigation is pending
      return <div>Redirecting...</div>;
    }
  }

  return children;
};

export default CheckAgentStatus;