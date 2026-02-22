import { HiOutlinePlusCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const QuickAction = () => {
  return (
    <div className="px-4 mt-4">
      <Link
        to="create-property"
        className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
      >
        <HiOutlinePlusCircle className="w-5 h-5" />
        افزودن ملک جدید
      </Link>
    </div>
  );
};

export default QuickAction;
