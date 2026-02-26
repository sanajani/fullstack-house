import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from '../../store/authStore';
import { useGetUserProfile } from "../../hooks/useAuth";

const SideBar = ({ setShowSideBar }) => {
  const {isAuthenticated} = useAuthStore();

  const { logoutAuth } = useAuthStore();
  const {data, isLoading, isError, error} = useGetUserProfile({
      enabled: isAuthenticated
  });

  const handleLogout = () => {
    logoutAuth();
    setShowSideBar(false);
    return <Navigate to='/login' replace={true} />;
  };

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    console.log(error.message);
    
    return <h1>Error</h1>
  }
  const role = data?.data?.role || null;
  

  return (
    <div className="h-full bg-white border-t-4 border-blue-700 mt-12 z-50">
      <ul className="flex flex-col gap-3 h-full pt-24 px-4">

        {/* Public routes - always visible */}
        <Link to='/' onClick={() => setShowSideBar(false)}>
          <li className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
            لیست کردن کلی خانه ها
          </li>
        </Link>

        <Link to='/about' onClick={() => setShowSideBar(false)}>
          <li className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
            درباره ما
          </li>
        </Link>

        {/* Conditional routes based on login status */}
        {!isAuthenticated ? (
          // Not logged in - show auth options
          <>
            <Link to='/signup' onClick={() => setShowSideBar(false)}>
              <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                درست کردن حساب کاربری
              </li>
            </Link>

            <Link to='/login' onClick={() => setShowSideBar(false)}>
              <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                وارد شدن به حساب
              </li>
            </Link>
          </>
        ) : (
          // Logged in - show user options based on role
          <>
            {/* Profile - always visible when logged in */}
            <Link to='/profile' onClick={() => setShowSideBar(false)}>
              <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                پروفایل کاربری
              </li>
            </Link>

            {/* Role-specific routes */}
            {role === 'tenant' && (
              <Link to='/become-agent' onClick={() => setShowSideBar(false)}>
                <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                  تبدیل شدن به یک نماینده
                </li>
              </Link>
            )}

            {role === 'agent' && (
              <>
                <Link to='/dashboard/agent' onClick={() => setShowSideBar(false)}>
                  <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                    داشبورد نماینده
                  </li>
                </Link>
                <Link to='/dashboard/agent/create-property' onClick={() => setShowSideBar(false)}>
                  <li className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer">
                    اضافه کردن ملک جدید
                  </li>
                </Link>
              </>
            )}

            {/* Logout option */}
            <li 
              onClick={handleLogout}
              className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-6 rounded-full text-center cursor-pointer mt-4"
            >
              خروج از حساب
            </li>
          </>
        )}

        {/* Version footer - always visible */}
        <div className="mt-8 pt-4 border-t border-blue-700/30">
          <p className="text-blue-700/70 text-sm text-center">
            نسخه 1.0
          </p>
        </div>

      </ul>
    </div>
  );
}

export default SideBar;