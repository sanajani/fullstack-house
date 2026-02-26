import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { useGetUserProfile } from '../hooks/useAuth';

const ProtectAgentOnly = ({children}) => {
    const {data, isLoading, isError} = useGetUserProfile();
  const { isAuthenticated} = useAuthStore();

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error</h1>
  }
  const role = data?.data?.role;
  

  if(!isAuthenticated || role !== 'agent'){
    return <Navigate to='/become-agent' replace />;
  }

  return (
    children
  )
}

export default ProtectAgentOnly;
