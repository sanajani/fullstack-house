import { motion } from "framer-motion";
import { FaHome, FaUsers, FaShieldAlt, FaBuilding } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white">

      {/* hero section */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            درباره خانه من
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-8"
          >
            ما کرایه نشین را با کرایه کننده، خریدار را با فروشنده و همچنان
            صاحبان دوکان و دفتر معاملات را با مشتریان واقعی وصل میکنیم — ساده،
            سریع و امن.
          </motion.p>
        </div>
      </div>

      {/* mission cards */}
      <div className="bg-white text-gray-800 py-16 px-4 rounded-t-[40px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6 text-center">
            <FaUsers className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">اتصال مستقیم</h3>
            <p className="leading-7">
              ما افراد را مستقیم با هم وصل میکنیم تا روند پیدا کردن خانه یا
              مشتری سریع و بدون دردسر باشد.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6 text-center">
            <FaShieldAlt className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">امن و مظمین</h3>
            <p className="leading-7">
              شما میتوانید با اطمینان خانه های تان را کرایه بدهید یا خانه مناسب
              برای زندگی پیدا کنید.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="rounded-2xl shadow-lg p-6 text-center">
            <FaBuilding className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="font-bold text-xl mb-2">برای همه</h3>
            <p className="leading-7">
              مالک، کرایه نشین، خریدار، فروشنده یا دفتر معاملات — اینجا جای
              شماست.
            </p>
          </motion.div>

        </div>

        {/* features section */}
        <div className="max-w-5xl mx-auto mt-20 bg-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <FaHome size={36} />
            <h2 className="text-2xl md:text-3xl font-bold">
              شما چه کار میتوانید انجام دهید؟
            </h2>
          </div>

          <ul className="space-y-4 text-lg leading-8">
            <li>خانه های تان را به کرایه بدهید</li>
            <li>خانه مناسب برای کرایه پیدا کنید</li>
            <li>ملک خود را خرید و فروش کنید</li>
            <li>به عنوان دفتر معاملات با مشتریان واقعی وصل شوید</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
