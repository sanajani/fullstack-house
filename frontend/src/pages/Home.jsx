import { useEffect } from "react";
import { useGetAllProperties } from "../hooks/useProperties"
import { useSearchParams } from "react-router-dom";
import PreNextButtons from "../components/PreNextButtons";
import HosesHeader from "../components/HosesHeader";
import PreviewPorpertiesComp from "../components/porperty/PrevParent";
import NotProperty from "../components/porperty/NotProperty";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 4;
  const province = searchParams.get("province") || "";
  const dealType = searchParams.get("dealType") || "";
  const houseRent = searchParams.get("houseRent") || "";
  const propertyType = searchParams.get("propertyType") || "";
  
  const {data, isLoading, error} = useGetAllProperties({page, limit, province, dealType, houseRent, propertyType});
  
  const properties = data?.data?.properties;
  
  const pages = data?.data?.pages;
  useEffect(() => {
  if (!searchParams.get("page") || !searchParams.get("limit")) {
    setSearchParams({ page: 1, limit: 4}, { replace: true });
  }
}, [searchParams, setSearchParams]);

  if(isLoading) {
    return <div className="text-center mt-20 text-xl font-bold">Loading...</div>
  }
  if(error ) {
    return <div className="text-center mt-20 text-xl font-bold text-red-500">Error: {error.message}</div>
  }
  
  return (
    <div className="max-w-6xl mx-auto">
        {properties?.length > 0 && <HosesHeader />}
        {/* grid parent div for all childs */}
        {properties?.length > 0 && <PreviewPorpertiesComp properties={properties} />}
        { properties?.length > 0 && <PreNextButtons 
        page={page} pages={pages} 
        setSearchParams={setSearchParams}
        limit={limit}
        province={province}
        dealType={dealType}
        houseRent={houseRent}
        propertyType={propertyType}
        searchParams={searchParams}
        />}
        {properties?.length === 0 && <NotProperty />}
    </div>
  )
}

export default Home;
