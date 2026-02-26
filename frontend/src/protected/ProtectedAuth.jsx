import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore";

const ProtectedAuth = ({children}) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if(isAuthenticated){
    return <Navigate to='/' replace />;
  }  
  return (
    children 
    )
}

export default ProtectedAuth;
