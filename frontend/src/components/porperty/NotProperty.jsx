import { motion } from "framer-motion";
import { FaHome, FaSearch, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotProperty = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          هیچ خانه‌ای پیدا نشد
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-8"
        >
          متأسفانه در حال حاضر ملکی مطابق با جستجوی شما موجود نیست.
          میتوانید فیلترها را تغییر دهید یا دوباره تلاش کنید.
        </motion.p>
      </div>

      {/* Action Section */}
      <div className="bg-white text-gray-800 rounded-t-[40px] py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6">
            <FaSearch className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">جستجوی دوباره</h3>
            <p className="leading-7">
              فیلترها را تغییر دهید و دوباره خانه مورد نظر خود را جستجو کنید.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6">
            <FaPlusCircle className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">ثبت ملک جدید</h3>
            <p className="leading-7">
              اگر شما مالک هستید، میتوانید ملک خود را ثبت کنید و مشتری پیدا کنید.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6">
            <FaHome className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">بازگشت به صفحه اصلی</h3>
            <p className="leading-7">
              به صفحه اصلی برگردید و جدیدترین خانه‌ها را مشاهده کنید.
            </p>
          </motion.div>

        </div>

        {/* Button Section */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            رفتن به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotProperty;
