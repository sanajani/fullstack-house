import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import ActionLinks from "./ActionLinks";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{property?.title}</h3>
          <p className="text-blue-600 font-bold mt-1">{property?.price?.amount}</p>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs ${
            property.status === "sold"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {property?.status || 'pending' }
        </span>
      </div>

      <div className="flex gap-4 mt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <HiOutlineEye className="w-4 h-4" />
          {property.views} بازدید
        </span>
      </div>

      <div className="flex gap-2 mt-3 pt-3 border-t">
        <ActionLinks to={`/dashboard/agent/show/${property?._id}`} icon={HiOutlineEye} text="مشاهده" color="blue"  />
        <ActionLinks to={`/dashboard/agent/edit/${property?._id}`} icon={HiOutlinePencilSquare} text="ویرایش" color="yellow" />
        <ActionLinks to="/" icon={HiOutlineTrash} text="حذف" color="red"  />
      </div>
    </div>
  );
};


export default PropertyCard;