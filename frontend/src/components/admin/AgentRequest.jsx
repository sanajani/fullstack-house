import { useState } from "react";
import { useGetPendingAgentRequests } from "../../hooks/admin/useAgents";
import SingleRequest from "./SingleRequest";

const AgentRequests = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const { data, isLoading, isError, error } = useGetPendingAgentRequests();
  const agentInfo = data?.data || [];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error {error.message}</h1>;
  }

  // ✅ Filter once
  const filteredAgents = agentInfo?.filter((agent) =>
    activeTab === "pending"
      ? agent.agentRequestStatus === "pending"
      : agent.agentRequestStatus !== "pending",
  );

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 border-b pb-2 mt-5 mx-4">
        <button
          onClick={() => setActiveTab("accepted")}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200
      ${
        activeTab === "accepted"
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
        >
          نماینده گان
        </button>

        <button
          onClick={() => setActiveTab("pending")}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200
      ${
        activeTab === "pending"
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
        >
          درخواستی ها
        </button>
      </div>

      {/* Render once */}
      {filteredAgents.map((agent) => (
        <SingleRequest key={agent._id} agent={agent} activeTab={activeTab} />
      ))}
    </div>
  );
};

export default AgentRequests;
