import { useState } from "react";
import SingleProperty from "./SingleProperty"
const AllProperties = () => {
    const [activeTab,setActiveTab] = useState("all")
  return (
    <div className="bg-white m-3">
        <div className="flex gap-3 pt-3 mx-5 my-4">
            <span onClick={() => setActiveTab('all')} className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>همه</span>
            <span onClick={() => setActiveTab("accepted")} className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "accepted" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>تایید شده</span>
            <span onClick={() => setActiveTab('rejected')} className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "rejected" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`} >رد شده</span>
            <span onClick={() => setActiveTab('pending')} className={`px-4 py-3 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === "pending" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>در انتظار</span>
        </div>
        <SingleProperty activeTab={activeTab} />
    </div>
  )
}

export default AllProperties;
