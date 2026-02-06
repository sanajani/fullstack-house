import { Link } from "react-router-dom"

const SideBar = ({setShowSideBar}) => {
  return (
    <div className="border-t-4 mt-12 h-full shadow-2xl">
        <ul className="flex flex-col gap-5 bg-gray-200 h-full pt-24">
            <Link to='/' onClick={() => setShowSideBar(false)}><li className="bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out text-xl py-4 px-2">لیست کردن کلی خانه ها</li> </Link>
            <Link to='/about' onClick={() => setShowSideBar(false)}><li className="bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out text-xl py-4 px-2">درباره ما</li> </Link>
            <Link to='/login' onClick={() => setShowSideBar(false)}> <li className="bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out text-xl py-4 px-2">درست کردن حساب کاربری</li> </Link>
            <Link to='/signup' onClick={() => setShowSideBar(false)}><li className="bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out text-xl py-4 px-2"> وارد شدن ب حساب</li> </Link>
        </ul>
    </div>
  )
}

export default SideBar;
