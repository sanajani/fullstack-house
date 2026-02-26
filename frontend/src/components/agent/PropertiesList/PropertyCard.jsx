import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineCheckCircle,
  HiOutlineKey,
} from "react-icons/hi2";
import { HiOutlineCash } from "react-icons/hi";

import ActionLinks from "./ActionLinks";
import { useUpdatePropertyStatus } from "../../../hooks/agent/useAgentDashboardProperties";
import toast from "react-hot-toast";

const PropertyCard = ({ property }) => {
  const { mutate } = useUpdatePropertyStatus()
  // Determine button config based on dealType
  const getActionButton = () => {
    switch(property?.dealType) {
      case 'sell':
        return {
          text: "فروخته شد",
          icon: HiOutlineCash,
          color: "green"
        };
      case 'rent':
        return {
          text: "به کرایه رفت",
          icon: HiOutlineKey,
          color: "blue"
        };
      case "gerawi":
        return {
          text: "گیراو شد",
          icon: HiOutlineCheckCircle,
          color: "purple"
        };
      default:
        return {
          text: "تغییر وضعیت",
          icon: HiOutlineCheckCircle,
          color: "gray"
        };
    }
  };

  const updateStatus = (propertyId, dealType) => {
     const statusText = {
      sell: 'sold',
      rent: 'rented',
      gerawi: 'gerawed'
    } 
      const newStatus = statusText[dealType];
  console.log('Sending status:', newStatus);
   
    console.log(statusText[dealType]);
    
    mutate({propertyId, status: {status: newStatus}},{
        onSuccess: (response) => {
          // setLoading(false);
          console.log(response);
          toast.success("ملک با موفقیت آپدیت شد");
          // navigate('/dashboard/agent', { replace: true });
          
        },
        onError: (err) => {
          // setLoading(false);
          console.error("Update error:", err.response?.data);
          // toast.error(err.response?.data?.message || "خطا در آپدیت ملک");
        }

    })    
  }

  const actionButton = getActionButton();

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
          {property?.status || 'pending'}
        </span>
      </div>

      <div className="flex gap-4 mt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <HiOutlineEye className="w-4 h-4" />
          {property.views} بازدید
        </span>
      </div>

      <div className="flex gap-2 mt-3 pt-3 border-t">
        <ActionLinks 
          to={`/dashboard/agent/show/${property?._id}`} 
          icon={HiOutlineEye} 
          text="مشاهده" 
          color="blue" 
          status={property?.status}

        />
        
        <ActionLinks 
          status={property?.status}
          to={`/dashboard/agent/edit/${property?._id}`} 
          icon={HiOutlinePencilSquare} 
          text="ویرایش" 
          color="yellow" 
        />
        
        <ActionLinks
          status={property?.status}
          to="#"
          icon={actionButton.icon} 
          text={actionButton.text} 
          color={actionButton.color} 
          onClick={() => updateStatus(property?._id, property?.dealType)}
          />
      </div>
    </div>
  );
};

export default PropertyCard;