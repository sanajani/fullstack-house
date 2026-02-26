// NotFound.jsx
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-6">
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center text-white">
        
        <h1 className="text-8xl font-bold mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          صفحه پیدا نشد
        </h2>

        <p className="text-white/80 mb-8">
          صفحه‌ای که دنبالش هستید وجود ندارد یا منتقل شده است.
          بیایید شما را به صفحه اصلی برگردانیم.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-800 transition duration-300 border border-white/20 font-medium shadow-lg"
        >
          بازگشت به صفحه اصلی
        </Link>

      </div>

    </div>
  );
}