import { AnimatePresence } from 'motion/react';

import ImagePreviewDesk from '../components/gallary/ImagePreviewDesk'
import ImagePreviewMobile from '../components/gallary/ImagePreviewMobile';

import { useState } from 'react';
import ImageGallery from '../components/gallary/ImageGallery';

const ShowSingleProperty = () => {
  const [showGallery, setShowGallery] = useState(true);
  return (
    <div className=' relativ'>
      <div className='hidden md:block'>
        <ImagePreviewDesk setShowGallery={setShowGallery} />
      </div>
      <div className='block md:hidden bg-red-500 [@media(min-width:530px)]:w-[80%] [@media(min-width:530px)]:mt-3 mx-auto'>
        <ImagePreviewMobile setShowGallery={setShowGallery} />
      </div>
      <AnimatePresence mode='wait'>
      {showGallery &&
         <ImageGallery setShowGallery={setShowGallery} />
      }
        </AnimatePresence>
    </div>
  )
}

export default ShowSingleProperty