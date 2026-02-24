import { useSearchParams } from "react-router-dom"
import { provinces, dealTypes, houseRent, propertyType } from "../../i18n/fa/provincesAndSelectBoxData.json";
import SelectBox from "../SelectBox"


const SearchSelectBoxes = () => {
    const [searchParam,setSearchParam] = useSearchParams();

      // Read directly from URL
  const selectedProvince = searchParam.get("province") || "";
  const selectedDealType = searchParam.get("dealType") || "";
  const selectedHouseRent = searchParam.get("houseRent") || "";
  const selectedPropertyType = searchParam.get("propertyType") || "";

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParam);
    if(value) {
        params.set(key, value);
        params.set("page", 1); // reset page to 1 when any filter changes
        params.set("limit", 4); // reset limit to default when any filter changes
    }else {
        params.delete(key);
    }
    setSearchParam(params);
  }

  return (
     <div className="flex justify-between gap-4">
            <div className="relative flex-1">
                <SelectBox
                    placeholder={'انتخاب ولایت'}
                    options={provinces}
                    value={selectedProvince}
                    onChange={(val) => updateParam("province", val)}
                    className="cursor-pointer"
                />            
            </div>
            <div className="relative flex-1">
                <SelectBox
                    placeholder={'کرایی یا فروشی'}
                    options={dealTypes}
                    value={selectedDealType}
                    onChange={(val) => updateParam("dealType", val)}
                    className="cursor-pointer"
                />   
            </div>
            {/* 2 more */}
            <div className="flex-1 hidden sm:block">
                 <SelectBox
                    placeholder={'مقدار کرایه'}
                    options={houseRent}
                    value={selectedHouseRent}
                    onChange={(val) => updateParam("houseRent", val)}
                    className="cursor-pointer"
                />   
            </div>
            <div className="flex-1 hidden md:block">
                <SelectBox
                    placeholder={'نوع خانه'}
                    options={propertyType}
                    value={selectedPropertyType}
                    onChange={(val) => updateParam("propertyType", val)}
                    className="cursor-pointer"
                />   
            </div>
        </div>
)
}


export default SearchSelectBoxes