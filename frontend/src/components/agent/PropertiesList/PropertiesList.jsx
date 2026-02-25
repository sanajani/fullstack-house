import { getAllPropertiesByAgent } from "../../../hooks/agent/useAgentDashboardProperties";
import PropertyCard from "./PropertyCard";

// const properties = [
//   { id: 1, title: "آپارتمان لوکس", price: "$85,000", status: "فروشی", views: 234 },
//   { id: 2, title: "خانه ویلایی", price: "$120,000", status: "فروشی", views: 156 },
// ];


const PropertiesList = () => {
  const {data: { allProperties: allPropertiesByAgent = [] } = {}, isLoading, isError } = getAllPropertiesByAgent();
  
  if(isLoading) {
    return <h1>Loading...</h1>
  }
  
  if(isError) {
    return <h1>Error</h1>
  }

  return (
    <section className="px-4 mt-4 space-y-3 pb-4">
      {allPropertiesByAgent.map((property) => (
        <PropertyCard key={property._id} property={property} />
        // console.log(property._id)
        
        
      ))}
    </section>
  );
};

export default PropertiesList;
