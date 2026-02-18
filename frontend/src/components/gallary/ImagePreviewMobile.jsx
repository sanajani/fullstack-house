import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";
import LoadingImage from "../../public/LoadingImageSVG";
import ErrorIcon from "../../public/ErrorImageSVG";

const ImagePreviewMobile = ({ setShowGallery, images = [] }) => {
  const [imageStatus, setImageStatus] = useState({});

  const handleLoad = (index) => {
    setImageStatus((prev) => ({
      ...prev,
      [index]: { loaded: true, error: false },
    }));
  };

  const handleError = (index) => {
    setImageStatus((prev) => ({
      ...prev,
      [index]: { loaded: false, error: true },
    }));
  };

  return (
    <div className="bg-gray-600 w-full h-[300px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        allowTouchMove={true}
        speed={300}
        className="w-full h-full cursor-pointer"
      >
        {images.map((value, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setShowGallery(true)}
            className="relative w-full h-full"
          >
            {/* Loader */}
            {!imageStatus[index]?.loaded &&
              !imageStatus[index]?.error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <LoadingImage />
                </div>
              )}

            {/* Error */}
            {imageStatus[index]?.error && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <ErrorIcon />
              </div>
            )}

            {/* Image */}
            {!imageStatus[index]?.error && (
              <img
                src={value?.url || value?.src}
                alt={value?.alt || "property image"}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageStatus[index]?.loaded
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                onLoad={() => handleLoad(index)}
                onError={() => handleError(index)}
                loading="lazy"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagePreviewMobile;