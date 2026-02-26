
const Tabs = ({activeTab, setActiveTab}) => {
  return (
    <div className="flex text-sm gap-8">
      <button
        onClick={() => setActiveTab("users")}
        className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "users" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
      >
        کاربران
      </button>
      <button
        onClick={() => setActiveTab("properties")}
        className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "properties" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
      >
        ملک ها
      </button>
      <button
        onClick={() => setActiveTab("agents")}
        className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "agents" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
      >
        درخواست های نمایندگان
      </button>
    </div>
  );
};

export default Tabs;
