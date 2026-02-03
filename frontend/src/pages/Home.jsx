import PropertyPreview from "../components/PropertyPreview"

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <h1>خانه های لیست شده</h1>
        {/* grid parent div for all childs */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
            {/* childs of grid container */}
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
            <PropertyPreview />
        </div>
    </div>
  )
}

export default Home
