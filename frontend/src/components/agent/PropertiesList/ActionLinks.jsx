import { Link } from "react-router-dom";

const ActionLinks = ({ icon: Icon, text, color, to, onClick, status }) => {
  
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };

  const className = `flex-1  py-2 rounded-lg text-sm ${status === 'pending' ? 'cursor-pointer' : 'cursor-not-allowed'} font-medium flex items-center justify-center gap-1 ${colors[color]}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={className} disabled={status!=='pending'}>
        <Icon className="w-4 h-4" />
        {text}
      </button>
    );
  }

  return (
    <Link to={status === 'pending' ? to : '#'} className={className}>
      <Icon className="w-4 h-4" />
      {text}
    </Link>
  );
};

export default ActionLinks;