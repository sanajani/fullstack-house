import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingImage from "../public/LoadingImageSVG";
import ErrorIcon from "../public/ErrorImageSVG";

const PropertyPreview = ({ property }) => {
  const [isLoaded, setIsLoaded] = useState(false); // track if image is loaded
  const [hasError, setHasError] = useState(false); // track if image failed
  const fallbackImage = "https://via.placeholder.com/300x200"; // fallback URL

  const imgSrc = property?.media?.[0]?.url || fallbackImage;

const colorsTagMap = {
  rent: { label: "کرایی", bgColor: "bg-blue-700" },
  sell: { label: "فروشی", bgColor: "bg-red-600" },
  gerawi: { label: "گیراوی", bgColor: "bg-orange-800" }
};
const propertyDealType = property.dealType
const tag = colorsTagMap[propertyDealType];

  return (
    <div className="p-3 border-2 m-2 mb-9 rounded-2xl border-blue-700 relative">
      <span className={`absolute top-6 left-0 -rotate-60 z-50 ${tag.bgColor} text-white rounded-md px-4 py-2`}>{tag.label}</span>
      <Link to={`/property/${property._id}`}>
        {/* Images */}
        <div className="w-full h-64 relative">
          {/* Loader */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingImage />
            </div>
          )}

          {/* Error */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <ErrorIcon />
            </div>
          )}

          {/* Actual image */}
          {!hasError && (
            <img
              src={imgSrc}
              alt={property.title}
              className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)} // called when image finishes loading
              onError={() => setHasError(true)} // called if image fails to load
            />
          )}
        </div>

        {/* Property Info */}
        <div className="mt-2">
          <h1 className="font-semibold text-blue-700 my-2">{property.title}</h1>
          <p className="my-3">
            {property.description.length > 100
              ? property.description.substring(0, 100) + "..."
              : property.description}
          </p>
          <div className="flex text-blue-800 justify-between font-bold">
            <p>{property.location.city}</p>
            <p>{property.transaction}</p>
            <p>{property.price.amount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyPreview;
