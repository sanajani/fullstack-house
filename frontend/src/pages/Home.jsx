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
  console.log(data);
  
  const properties = data?.data?.properties;
  
  const pages = data?.data?.pages;
  useEffect(() => {
  if (!searchParams.get("page") || !searchParams.get("limit")) {
    setSearchParams({ page: 1, limit: 4}, { replace: true });
  }
}, [searchParams, setSearchParams]);

  const prePage = () => {
    if(page > 1) {
      setSearchParams({
        ...Object.entries(searchParams),
        page: page -1,
        limit,
        province,
        dealType,
        houseRent,
        propertyType
      });
    }
  }
  const nextPage = () => {
    if(page < pages) {
      setSearchParams({
        ...Object.entries(searchParams),
        page: page + 1,
        limit,
        province,
        dealType,
        houseRent,
        propertyType
      });
    }
  }


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
        { properties?.length > 0 && <PreNextButtons page={page} pages={pages} nextPage={nextPage} prePage={prePage}/>}
        {properties?.length === 0 && <NotProperty />}
    </div>
  )
}

export default Home;
