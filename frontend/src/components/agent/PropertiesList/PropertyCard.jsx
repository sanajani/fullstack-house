import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{property.title}</h3>
          <p className="text-blue-600 font-bold mt-1">{property.price}</p>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs ${
            property.status === "فروشی"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {property.status}
        </span>
      </div>

      <div className="flex gap-4 mt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <HiOutlineEye className="w-4 h-4" />
          {property.views} بازدید
        </span>
      </div>

      <div className="flex gap-2 mt-3 pt-3 border-t">
        <ActionButton icon={HiOutlineEye} text="مشاهده" color="blue" />
        <ActionButton icon={HiOutlinePencilSquare} text="ویرایش" color="yellow" />
        <ActionButton icon={HiOutlineTrash} text="حذف" color="red" />
      </div>
    </div>
  );
};

const ActionButton = ({ icon: Icon, text, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <button
      className={`flex-1 cursor-pointer py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 ${colors[color]}`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </button>
  );
};

export default PropertyCard;