import AgentHeader from "../../components/agent/AgentHeader";
import WelcomeCard from "../../components/agent/WelcomeCard";
import QuickAction from "../../components/agent/QuickAction";
import PropertiesList from "../../components/agent/PropertiesList/PropertiesList";
import StatsSection from "../../components/agent/StatsSection/StatCard";
import { Outlet } from "react-router-dom";

const AgentDashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-5xl mx-auto">
      <AgentHeader />
      <WelcomeCard />
      <StatsSection />
      <QuickAction />
      <PropertiesList/>
      <Outlet />
    </div>
  );
};

export default AgentDashboard;