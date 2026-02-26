import AgentRequests from "./AgentRequest";
import AllProperties from "./AllProperties";
import AllUsers from "./AllUsers";

const RenderTabContent = ({activeTab}) => {
  switch (activeTab) {
    case "properties":
      return <AllProperties />;
    case "agents":
      return <AgentRequests />;
    case "users":
      return <AllUsers />;
    default:
      return null;
  }
};

export default RenderTabContent