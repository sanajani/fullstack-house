import { Outlet } from "react-router-dom"
import NavAgent from "../components/agent/NavAgent.jsx"

const AgentLayout = () => {
  return (
    <div>
        <div>
            <NavAgent/>
        </div>
        <div>
            <Outlet />
        </div>
        <footer>
        footer
        </footer>
    </div>
  )
}

export default AgentLayout