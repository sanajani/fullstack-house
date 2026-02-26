import { ImageWithStatus } from "./ImageWithStatus";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoMdClose } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ShowSingleImage = ({ imageIndex: initialIndex, images, setShowImage }) => {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <motion.div
      className="w-full fixed top-0 left-0 h-screen bg-black flex justify-center overflow-hidden items-center z-[9999]"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
    >
      {/* Top Bar */}
      <div className="text-white absolute top-6 left-0 px-10 text-xl flex justify-between w-full">
        <span><GiSelfLove /></span>
        <span>{currentIndex + 1} / {images.length}</span>
        <span className="cursor-pointer">
          <IoMdClose onClick={() => setShowImage(false)} />
        </span>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-12 z-50 cursor-pointer text-white -translate-y-1/2 hidden md:block"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
      >
        <FaArrowLeft size={22} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 hidden md:block right-12 z-50 cursor-pointer text-white -translate-y-1/2"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
      >
        <FaArrowRight size={22} />
      </div>

      {/* Swiper Container */}
      <div className="max-w-6xl mx-auto w-[600px] h-[500px] border-2 border-white flex items-center justify-center">
        <Swiper
          ref={swiperRef}
          initialSlide={initialIndex}
          modules={[Navigation]}
          navigation={false}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {images.map((img) => (
            <SwiperSlide key={img?._id || img.url}>
              <ImageWithStatus src={img.url} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ShowSingleImage;
