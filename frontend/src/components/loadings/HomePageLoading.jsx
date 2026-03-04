import { PropertyCardSkeleton } from "../skeletons/PropertyCardSkeleton"

const HomePageLoading = () => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-10 mt-10">
        {
            Array(8).fill().map((_, index) => {
                return <PropertyCardSkeleton key={index}/>
            })
        }
    </div>
  )
}

export default HomePageLoading