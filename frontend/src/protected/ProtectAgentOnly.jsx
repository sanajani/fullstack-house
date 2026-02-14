import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';

const ProtectAgentOnly = ({children}) => {
  const {role, isAuthenticated} = useAuthStore()
  console.log(role);
  if(!isAuthenticated || role !== 'agent'){
    return <Navigate to='/become-agent' replace />;
  }

  return (
    children
  )
}

export default ProtectAgentOnly;
