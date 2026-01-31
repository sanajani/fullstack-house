import { GiHamburgerMenu } from "react-icons/gi";
import {provinces, dealTypes, houseRent, propertyType} from '../../i18n/fa/provincesAndSelectBoxData.json'
import SelectBox from "../SelectBox";
import { useState } from "react";

const Navbar = () => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDealType, setSelectDealTypes] = useState("");
    const [selectedHouseRent, setSelectHouseRent] = useState("");
    const [selectedPropertyType, setSelectPropertyType] = useState("");
    
  return (
    <div className="mb-5 flex flex-col bg-blue-600 p-2 text-white">
        <div className="w-full md:w-[85vw] mx-auto">
        <div className="flex mb-4 justify-between items-center">
            <h1 className="font-bold text-3xl">خانه من</h1>
            <div><GiHamburgerMenu size={28} /></div>
        </div>
        <div className="flex justify-between gap-4">
            <div className="relative flex-1">
                <SelectBox
                    options={provinces}
                    value={selectedProvince}
                    onChange={setSelectedProvince}
                />            
            </div>
            <div className="relative flex-1">
                <SelectBox
                    options={dealTypes}
                    value={selectedDealType}
                    onChange={setSelectDealTypes}
                />   
            </div>
            {/* 2 more */}
            <div className="flex-1 hidden sm:block">
                 <SelectBox
                    options={houseRent}
                    value={selectedHouseRent}
                    onChange={setSelectHouseRent}
                />   
            </div>
            <div className="flex-1 hidden md:block">
                <SelectBox
                    options={propertyType}
                    value={selectedPropertyType}
                    onChange={setSelectPropertyType}
                />   
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar