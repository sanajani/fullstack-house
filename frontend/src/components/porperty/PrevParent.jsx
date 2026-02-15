import React from 'react'
import PropertyPreview from "../PropertyPreview"

const PreviewPorpertiesComp = ({properties}) => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
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