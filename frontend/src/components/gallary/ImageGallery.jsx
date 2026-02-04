import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'

const images = [
    {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
]

import { useState } from "react";
import ShowSingleImage from "./ShowSingleImage";

const ImageGallery = ({setShowGallery}) => {
    const [imageIndex,setImageIndex] = useState(0);
    const [showImage,setShowImage] = useState(false)

    const openShowImageComponent = (index) => {
        setImageIndex(index)
        setShowImage(true)
    }

  return (
        <motion.div className='z-50 w-full min-h-screen bg-white fixed inset-0 top-0 left-0 overflow-y-auto'
            initial={{y: '100%', opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: '100%', opacity: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 20, duration: 0.5}}
        >
          {/* top bar */}
          <div className=' px-5 py-6 text-black'>
            <span className='float-end cursor-pointer' onClick={() => setShowGallery(false)}><IoIosArrowBack size={28} /></span>
            {/* love share component */}
            <span>right</span>
          </div>
          {/* end of top bar */}

          {/* iamge gallery div container */}
          <div className='max-w-6xl mx-auto w-full md:w-[70%] p-4'>
            {/* image container */}
            <div className="grid grid-cols-2 gap-4">
            {
                images?.map((value, index) => {
                  return <img onClick={() => openShowImageComponent(index)} className="w-full h-full object-cover cursor-pointer" key={index} src={value.src} alt={value.alt} />
                })
            }
            </div>
          </div>
          {/*end of iamge gallery div container */}
          {
            <AnimatePresence>
                {showImage && <ShowSingleImage startIndex={imageIndex} images={images} setShowImage={setShowImage} />}
            </AnimatePresence>
          }

    </motion.div>  )
}

export default ImageGallery
