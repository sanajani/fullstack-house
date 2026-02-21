import AllProperties from "./AllProperties";
import AllUsers from "./AllUsers";

const RenderTabContent = ({activeTab}) => {
  switch (activeTab) {
    case "properties":
      return <AllProperties />;
    case "agents":
      return <h1>hello world agents</h1>;
    case "users":
      return <AllUsers />;
    default:
      return null;
  }
};

export default RenderTabContent