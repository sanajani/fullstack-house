import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import LoadingBigImagesSVG from "../../public/LoadingBigImagesSVG";
import ErrorIcon from "../../public/ErrorImageSVG";
import ShowSingleImage from "./ShowSingleImage";

const ImageGallery = ({ setShowGallery, images = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [imageStatus, setImageStatus] = useState({});

  const openShowImageComponent = (index) => {
    setImageIndex(index);
    setShowImage(true);
  };

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

  // Prevent body scroll when gallery is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="z-50 w-full min-h-screen bg-white fixed inset-0 top-0 left-0 overflow-y-auto"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* ===== Top Bar ===== */}
      <div className="px-5 py-6 text-black">
        <span
          className="float-end cursor-pointer"
          onClick={() => setShowGallery(false)}
        >
          <IoIosArrowBack size={28} />
        </span>
      </div>

      {/* ===== Gallery Container ===== */}
      <div className="max-w-6xl mx-auto w-full md:w-[70%] p-4 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((value, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] overflow-hidden rounded-xl"
              onClick={() => openShowImageComponent(index)}
            >
              {/* Loader */}
              {!imageStatus[index]?.loaded &&
                !imageStatus[index]?.error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <LoadingBigImagesSVG />
                  </div>
                )}

              {/* Error */}
              {imageStatus[index]?.error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <ErrorIcon />
                </div>
              )}

              {/* Image */}
              {!imageStatus[index]?.error && (
                <img
                  src={value?.url || value?.src}
                  alt={value?.alt || "gallery image"}
                  className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${
                    imageStatus[index]?.loaded
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  onLoad={() => handleLoad(index)}
                  onError={() => handleError(index)}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Single Image Modal ===== */}
      <AnimatePresence>
        {showImage && (
          <ShowSingleImage
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            images={images}
            setShowImage={setShowImage}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageGallery;
