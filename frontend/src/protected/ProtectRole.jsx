import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore";

const ProtectRole = ({children}) => {
  const {role, isAuthenticated} = useAuthStore()

  if(!isAuthenticated && role !== 'tenant'){
    return <Navigate to='/' replace />;
  }
  return (
    children
    )
}

export default ProtectRole;