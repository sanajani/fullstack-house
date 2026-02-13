import { Navigate } from "react-router-dom"

const AgentOnlyProtected = ({isAuthenticated, children}) => {
    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
  return (
    children
    )
}

export default AgentOnlyProtected;