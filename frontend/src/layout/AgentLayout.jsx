import { Outlet } from "react-router-dom"
import NavAgent from "../components/agent/NavAgent.jsx"
import Footer from "../components/agent/Footer.jsx"

const AgentLayout = () => {
  return (
    <div>
        <div>
            <NavAgent/>
        </div>
        <div className="min-h-screen">
            <Outlet />
        </div>
    </div>
  )
}

export default AgentLayout