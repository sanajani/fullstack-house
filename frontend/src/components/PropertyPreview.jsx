import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingImage from "../public/LoadingImageSVG";
import ErrorIcon from "../public/ErrorImageSVG";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaEye } from "react-icons/fa";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyPreview = ({ property }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  
  const fallbackImage = <LoadingImage />;
  const imgSrc = property?.media?.[0]?.url || fallbackImage;

  // Deal Type Configuration
  const dealTypeMap = {
    rent: { 
      label: "اجاره", 
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      badge: "اجاره‌ای"
    },
    sell: { 
      label: "فروش", 
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      badge: "برای فروش"
    },
    gerawi: { 
      label: "گروی", 
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      badge: "گروی"
    }
  };

  // Status Configuration
  const statusMap = {
    pending: {
      label: "در انتظار",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      dot: "🟡"
    },
    rented: {
      label: "اجاره شده",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      dot: "🔵"
    },
    sold: {
      label: "فروخته شده",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
      dot: "🔴"
    }
  };

  const dealType = dealTypeMap[property.dealType] || dealTypeMap.rent;
  const status = statusMap[property.status] || statusMap.pending;

  const formatPrice = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCurrencySymbol = (currency) => {
    const symbols = {
      afghani: "؋",
      dollar: "$",
      euro: "€",
      rupee: "₹"
    };
    return symbols[currency] || "؋";
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
        className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
      >
        {isLiked ? (
          <FaHeart className="text-red-500" size={20} />
        ) : (
          <FaRegHeart className="text-gray-600 hover:text-red-500" size={20} />
        )}
      </button>

      {/* Status Badge - Top Left */}
      <div className={`absolute top-4 left-4 z-20 ${status.bgColor} ${status.textColor} px-3 py-1.5 rounded-full text-sm font-semibold shadow-md flex items-center gap-1.5`}>
        <span>{status.dot}</span>
        <span>{status.label}</span>
      </div>

      {/* Deal Type Badge - Below Status */}
      <div className={`absolute top-16 left-4 z-20 ${dealType.bgColor} ${dealType.textColor} px-3 py-1 rounded-lg text-xs font-medium border ${dealType.borderColor} shadow-sm`}>
        {dealType.badge}
      </div>

      {/* Image Container */}
      <Link to={`/property/${property._id}`} className="block">
        <div 
          className="relative w-full h-64 overflow-hidden bg-gray-100"
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          {/* Loading State */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <LoadingImage />
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <ErrorIcon />
            </div>
          )}

          {/* Actual Image */}
          {!hasError && (
            <img
              src={imgSrc}
              alt={property.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              } ${imageHover ? "scale-110" : "scale-100"}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* View Count Badge */}
          <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5">
            <FaEye className="text-white" size={14} />
            <span>{property.views || 0}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Title and Location */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 hover:text-blue-600 transition-colors">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-gray-400" size={16} />
              <span className="text-sm">
                {property.location?.city || "موقعیت نامشخص"}
                {property.location?.district && `، ${property.location.district}`}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {property.description}
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-3 pt-2">
            {property.details?.bedroom > 0 && (
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                <BiBed className="text-gray-700" size={18} />
                <span className="text-sm font-medium text-gray-700">{property.details.bedroom}</span>
              </div>
            )}
            {property.details?.bathroom > 0 && (
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                <BiBath className="text-gray-700" size={18} />
                <span className="text-sm font-medium text-gray-700">{property.details.bathroom}</span>
              </div>
            )}
            {property.details?.area > 0 && (
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                <BiArea className="text-gray-700" size={18} />
                <span className="text-sm font-medium text-gray-700">{property.details.area} m²</span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">قیمت</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(property.price?.amount)}
                </span>
                <span className="text-sm text-gray-600">
                  {getCurrencySymbol(property.price?.currency)}
                </span>
              </div>
              {property.price?.period && (
                <p className="text-xs text-gray-500 mt-0.5">
                  {property.price.period === "monthly" ? "ماهانه" : "سالانه"}
                </p>
              )}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95">
              مشاهده
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyPreview;