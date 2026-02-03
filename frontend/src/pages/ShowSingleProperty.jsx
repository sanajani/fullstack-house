
import ImagePreviewDesk from '../components/gallary/ImagePreviewDesk'
import ImagePreviewMobile from '../components/gallary/ImagePreviewMobile';

const ShowSingleProperty = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <ImagePreviewDesk />
      </div>
      <div className='block md:hidden bg-red-500 [@media(min-width:530px)]:w-[80%] [@media(min-width:530px)]:mt-3 mx-auto'>
        <ImagePreviewMobile/>
      </div>
    </div>
  )
}

export default ShowSingleProperty