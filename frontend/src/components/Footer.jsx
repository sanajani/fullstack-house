// components/Footer.jsx
import { FaHome, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-20">

      {/* top section */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">

        {/* brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <FaHome size={28} />
            <h2 className="text-2xl font-bold">خانه من</h2>
          </div>
          <p className="leading-8 text-sm">
            ما کرایه نشین را با کرایه کننده، خریدار را با فروشنده و دفاتر معاملات
            را با مشتریان واقعی وصل میکنیم. هدف ما ایجاد یک سیستم ساده، امن و
            مظمین برای خرید، فروش و کرایه ملک است.
          </p>
        </motion.div>

        {/* quick links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-xl font-bold mb-4">لینک های سریع</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:underline">صفحه اصلی</Link></li>
            <li><Link to="/about" className="hover:underline">درباره ما</Link></li>
            <li><Link to="/" className="hover:underline">ملک ها</Link></li>
            <li><Link to="/contact" className="hover:underline">تماس با ما</Link></li>
          </ul>
        </motion.div>

        {/* contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-xl font-bold mb-4">تماس با ما</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt /> +93 700 000 000
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> info@khaneman.com
            </p>
          </div>

          {/* social */}
          <div className="flex gap-4 mt-6 text-2xl">
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
          </div>
        </motion.div>

      </div>

      {/* bottom bar */}
      <div className="bg-blue-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} خانه من — تمام حقوق محفوظ است
      </div>

    </footer>
  );
};

export default Footer;