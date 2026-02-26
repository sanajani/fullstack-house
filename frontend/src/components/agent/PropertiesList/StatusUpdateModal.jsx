// StatusUpdateModal.jsx
import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import toast from "react-hot-toast";

const StatusUpdateModal = ({ isOpen, onClose, property, onUpdate }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  // Update selectedStatus when property changes or modal opens
  useEffect(() => {
    if (property?.status) {
      setSelectedStatus(property.status);
    }
  }, [property, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!selectedStatus) {
      toast.error("لطفاً یک وضعیت انتخاب کنید");
      return;
    }

    if (selectedStatus === property?.status) {
      toast.error("وضعیت جدید با وضعیت فعلی یکسان است");
      return;
    }

    // Call onUpdate directly (no loading simulation)
    onUpdate(property._id, selectedStatus);
    toast.success("وضعیت ملک با موفقیت به‌روزرسانی شد");
    onClose();
  };

  const statusOptions = [
    { value: "rented", label: "به کرایه رفت" },
    { value: "sold", label: "فروخته شد" },
    { value: "gerawi", label: "گیروی رفت" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">تغییر وضعیت ملک</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition"
          >
            <HiOutlineX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Property Title (optional - helps identify which property) */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">
          {property?.title}
        </p>

        {/* Select Box */}
        <div className="mb-6">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
          >
            <option value="">انتخاب کنید</option>
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            تایید
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusUpdateModal;