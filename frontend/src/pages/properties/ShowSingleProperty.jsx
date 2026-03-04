
import ImageGallery from '../../components/gallary/ImageGallery';
import ImagePreviewDesk from '../../components/gallary/ImagePreviewDesk'
import ImagePreviewMobile from '../../components/gallary/ImagePreviewMobile';
import PropertyInfo from '../../components/showSIngleDataInfo/PropertyInfo';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSinglePropertyByID } from '../../hooks/useProperties';

const ShowSingleProperty = () => {

  const [showGallery, setShowGallery] = useState(false);
  const {id} = useParams();
  
  const {error, isLoading, data} = useGetSinglePropertyByID({id})
  const showSingleProperty = data?.data

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Something went wrong!!!</h1>
  
  

  return (
    <div className='relative'>
      {/* IMAGES CONTAINER */}
        <div>
        <div className='hidden md:block'>
          <ImagePreviewDesk setShowGallery={setShowGallery} allImages={showSingleProperty?.media} />
        </div>
        <div className='block md:hidden bg-red-500 [@media(min-width:530px)]:w-[80%] [@media(min-width:530px)]:mt-3 mx-auto'>
          <ImagePreviewMobile setShowGallery={setShowGallery} images={showSingleProperty?.media} />
        </div>
        <AnimatePresence mode='wait'>
        {showGallery &&
          <ImageGallery images={showSingleProperty?.media} setShowGallery={setShowGallery} />
        }
          </AnimatePresence>
        </div>
      {/*END OF IMAGES CONTAINER */}

      {/* SHOW DATA FOR SINGLE PROPERTY */}
      <PropertyInfo showSingleProperty={showSingleProperty}/>

      {/* SHOW DATA FOR SINGLE  */}


    </div>
  )
}

export default ShowSingleProperty