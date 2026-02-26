
import PropertyPreview from "../PropertyPreview"

const PreviewPorpertiesComp = ({properties}) => {
  console.log(properties);
  
  return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-6 my-4 mb-8">
            {/* childs of grid container */} 
            {
              properties?.map((property) => (
                <PropertyPreview key={property._id} property={property} />
              ))
            }
        </div>
  )
}

export default PreviewPorpertiesComp