
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const iamges = [
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

const ImagePreviewMobile = () => {
  return (
    <div className='bg-gray-600 w-full'>
            <Swiper 
                slidesPerView={1}      // show 1 slide at a time
                spaceBetween={0}       // optional, gap between slides
                loop={true}            // disable infinite loop if you want
                autoplay={false}       // disable auto sliding
                allowTouchMove={true}  // allow manual swipe
                speed={300}            // swipe animation speed
            className='w-full h-full'>
                {
                    iamges.map((value, index) => {
                       return <SwiperSlide key={index} className='w-full h-full'><img className='w-full h-full object-cover' src={value.src} alt={value.alt} /></SwiperSlide>
                    })
                }
              
            </Swiper>
    </div>
  )
}

export default ImagePreviewMobile