import { motion } from "framer-motion";
import { FaHourglassHalf } from "react-icons/fa";

const AgentRequestStatus = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white text-gray-800 max-w-lg w-full rounded-3xl shadow-2xl p-10 text-center"
      >

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <FaHourglassHalf size={50} className="text-blue-600" />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          درخواست شما در حال بررسی است
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-7">
          تیم ما در حال بررسی اطلاعات ارسال شده شما میباشد.
          لطفاً صبور باشید، نتیجه از طریق پیام یا ایمیل برای شما ارسال خواهد شد.
        </p>

        {/* Status Badge */}
        <div className="mt-8">
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
            وضعیت: در حال بررسی
          </span>
        </div>

      </motion.div>

    </div>
  );
};

export default AgentRequestStatus;