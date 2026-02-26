import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSelectBoxes from "./SearchSelectBoxes";
import SideBar from "./SideBar";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);   

  return (
    <div className="z-50 flex flex-col bg-blue-600 p-2 text-white relative overflow-hidden">
        <div className="w-full md:w-[85vw] mx-auto">
        <div className="flex mb-4 justify-between items-center">
            <Link to='/'><h1 className="font-bold text-3xl">خانه من</h1></Link>
            <div className="cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}><GiHamburgerMenu size={28} /></div>
        </div>
        <SearchSelectBoxes />
        </div>
        {/* sidebar  */}
        <div className={`w-full bg-blue-600 fixed top-0 left-0 h-screen md:w-[35%] transition-transform duration-300 ease-in-out ${showSideBar ? 'translate-x-0': '-translate-x-450'}`}>
          <button className="text-4xl mx-3 my-2 p-4 cursor-pointer" onClick={() => setShowSideBar(false)}>
            <IoClose/>
          </button>
          <SideBar setShowSideBar={setShowSideBar} />
        </div> 
    </div>
  )
}

export default Navbar;
