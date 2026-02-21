import {
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineBuildingOffice,
  HiOutlineClock,
} from "react-icons/hi2";
import State from "../../components/admin/State";
import { useState } from "react";
import Tabs from "../../components/admin/Tabs";
import RenderTabContent from "../../components/admin/RenderTabs";

const stats = [
  {
    label: "کاربران کل",
    value: "۱,۲۳۴",
    icon: HiOutlineUsers,
    color: "bg-blue-500",
    change: "+۱۲",
  },
  {
    label: "نمایندگان",
    value: "۴۵۶",
    icon: HiOutlineUserGroup,
    color: "bg-green-500",
    change: "+۸",
  },
  {
    label: "ملک‌ها",
    value: "۸۹۲",
    icon: HiOutlineBuildingOffice,
    color: "bg-purple-500",
    change: "+۲۳",
  },
  {
    label: "درخواست‌ها",
    value: "۱۸",
    icon: HiOutlineClock,
    color: "bg-orange-500",
    change: "+۵",
  },
];

const AdminDashboard2 = () => {
    const [activeTab, setActiveTab] = useState("users")
  return (
    <div>
      <div className="max-w-5xl pb-2 mx-auto bg-gray-200">
        {/* Overview of State */}
        <State stats={stats} />
        {/* End Overview of State */}

        {/* tabs to watch */}
        <div className="bg-white mx-2 rounded-md p-3">
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        {/* set tabs to watch */}
        <div>
            <RenderTabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard2;
