import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSelectBoxes from "./SearchSelectBoxes";

const Navbar = () => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDealType, setSelectDealTypes] = useState("");
    const [selectedHouseRent, setSelectHouseRent] = useState("");
    const [selectedPropertyType, setSelectPropertyType] = useState("");
    
  return (
    <div className="mb-5 flex flex-col bg-blue-600 p-2 text-white">
        <div className="w-full md:w-[85vw] mx-auto">
        <div className="flex mb-4 justify-between items-center">
            <Link to='/'><h1 className="font-bold text-3xl">خانه من</h1></Link>
            <div><GiHamburgerMenu size={28} /></div>
        </div>
        <SearchSelectBoxes 
        selectedProvince={selectedProvince} setSelectedProvince={setSelectedProvince}
        selectedDealType={selectedDealType} setSelectDealTypes={setSelectDealTypes}
        selectedHouseRent={selectedHouseRent} setSelectHouseRent={setSelectHouseRent}
        selectedPropertyType={selectedPropertyType} setSelectPropertyType={setSelectPropertyType}

        />
        </div>
    </div>
  )
}

export default Navbar