
import { useState } from "react";
import LoadingImage from "../../public/LoadingImageSVG";
import LoadingBigImagesSVG from "../../public/LoadingBigImagesSVG";
import ErrorIcon from "../../public/ErrorImageSVG";

const ImagePreviewDesk = ({ setShowGallery, images = [] }) => {
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
    <div
      className="grid grid-cols-12 rounded-2xl h-96 xl:h-[400px] w-[90%] max-w-6xl
      mx-auto bg-gray-200 mt-3 shadow-[0_0_20px_0_rgba(0,0,0,0.5)] 
      text-white text-4xl grid-rows-12 gap-3 p-2"
    >
      {/* ===== MAIN IMAGE ===== */}
      <div
        className="rounded-2xl col-span-7 row-span-12 relative overflow-hidden"
        onClick={() => setShowGallery(true)}
      >
        {/* Loader */}
        {!imageStatus[0]?.loaded && !imageStatus[0]?.error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingBigImagesSVG />
          </div>
        )}

        {/* Error */}
        {imageStatus[0]?.error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <ErrorIcon />
          </div>
        )}

        {/* Image */}
        {!imageStatus[0]?.error && (
          <img
            src={images[0]?.url}
            alt={images[0]?.alt || "property image"}
            className={`w-full h-full object-cover rounded-xl cursor-pointer transition-opacity duration-500 ${
              imageStatus[0]?.loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleLoad(0)}
            onError={() => handleError(0)}
          />
        )}
      </div>

      {/* ===== SMALL IMAGES ===== */}
      <div className="col-span-5 row-span-12 grid grid-cols-2 gap-2">
        {images.slice(1).map((val, index) => {
          const realIndex = index + 1;

          return (
            <div
              key={realIndex}
              onClick={() => setShowGallery(true)}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Loader */}
              {!imageStatus[realIndex]?.loaded &&
                !imageStatus[realIndex]?.error && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LoadingImage />
                  </div>
                )}

              {/* Error */}
              {imageStatus[realIndex]?.error && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ErrorIcon />
                </div>
              )}

              {/* Image */}
              {!imageStatus[realIndex]?.error && (
                <img
                  src={val?.url}
                  alt={val?.alt || "property image"}
                  className={`w-full h-full object-cover rounded-xl cursor-pointer transition-opacity duration-500 ${
                    imageStatus[realIndex]?.loaded
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  onLoad={() => handleLoad(realIndex)}
                  onError={() => handleError(realIndex)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreviewDesk;