import { Link } from "react-router-dom";
const ActionLinks = ({ icon: Icon, text, color, to }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <Link
     to={to}
      className={`flex-1 cursor-pointer py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 ${colors[color]}`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </Link>
  );
};
export default ActionLinks