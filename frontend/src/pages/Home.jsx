import PropertyPreview from "../components/PropertyPreview"

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold my-3">خانه های لیست شده:</h1>
        {/* grid parent div for all childs */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
            {/* childs of grid container */} 
           <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />         
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />         
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />         
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />         
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
        </div>
        <div className="flex justify-evenly mb-20">
          <span className="block px-4 py-1 rounded-lg font-bold cursor-pointer hover:bg-blue-800 bg-blue-700 text-white">prew</span>
          <span className="bg-gray-200 px-4 py-1 rounded-md font-bold">33 / 555</span> 
          <span className="block px-4 py-1 rounded-lg font-bold cursor-pointer hover:bg-blue-800 bg-blue-700 text-white">next</span>

        </div>
    </div>
  )
}

export default Home
