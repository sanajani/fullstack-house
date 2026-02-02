import SelectBox from "../SelectBox"
import {provinces, dealTypes, houseRent, propertyType} from '../../i18n/fa/provincesAndSelectBoxData.json'

const SearchSelectBoxes = ({
     selectedDealType, setSelectDealTypes,
     selectedProvince, setSelectedProvince, 
     selectedHouseRent,setSelectHouseRent, 
     selectedPropertyType,setSelectPropertyType
    }) => {
  return (
     <div className="flex justify-between gap-4">
            <div className="relative flex-1">
                <SelectBox
                    placeholder={'انتخاب ولایت'}
                    options={provinces}
                    value={selectedProvince}
                    onChange={setSelectedProvince}
                    className="cursor-pointer"
                />            
            </div>
            <div className="relative flex-1">
                <SelectBox
                    placeholder={'کرایی یا فروشی'}
                    options={dealTypes}
                    value={selectedDealType}
                    onChange={setSelectDealTypes}
                    className="cursor-pointer"
                />   
            </div>
            {/* 2 more */}
            <div className="flex-1 hidden sm:block">
                 <SelectBox
                    placeholder={'مقدار کرایه'}
                    options={houseRent}
                    value={selectedHouseRent}
                    onChange={setSelectHouseRent}
                    className="cursor-pointer"
                />   
            </div>
            <div className="flex-1 hidden md:block">
                <SelectBox
                    placeholder={'نوع خانه'}
                    options={propertyType}
                    value={selectedPropertyType}
                    onChange={setSelectPropertyType}
                    className="cursor-pointer"
                />   
            </div>
        </div>
)
}

export default SearchSelectBoxes