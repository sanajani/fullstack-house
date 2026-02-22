import {
  HiOutlineHome,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineEye,
} from "react-icons/hi2";

const stats = [
  { label: "کل ملک‌ها", value: "24", icon: HiOutlineHome, color: "bg-blue-500" },
  { label: "پیام‌های جدید", value: "8", icon: HiOutlineChatBubbleLeftRight, color: "bg-green-500" },
  { label: "مشتریان", value: "156", icon: HiOutlineUserGroup, color: "bg-purple-500" },
  { label: "بازدید امروز", value: "342", icon: HiOutlineEye, color: "bg-orange-500" },
];

const StatsSection = () => {
  return (
    <section className="px-4 grid grid-cols-2 gap-3">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </section>
  );
};

const StatCard = ({ stat }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
      <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
        <stat.icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
        <p className="text-xs text-gray-500">{stat.label}</p>
      </div>
    </div>
  );
};

export default StatsSection;