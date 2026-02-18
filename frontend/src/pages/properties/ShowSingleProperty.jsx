
import ImageGallery from '../../components/gallary/ImageGallery';
import ImagePreviewDesk from '../../components/gallary/ImagePreviewDesk'
import ImagePreviewMobile from '../../components/gallary/ImagePreviewMobile';
import PropertyInfo from '../../components/showSIngleDataInfo/PropertyInfo';

import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSinglePropertyByID } from '../../hooks/useProperties';


// const showSingleProperty = {
//     _id: "660100000000000000000001",
//     agent: "65f000000000000000001001",
//     title: "آپارتمان مدرن در مرکز کابل شهرنو افغانستان بهترین مکان",
//     description: "آپارتمان روشن و مدرن نزدیک به بازارها، مدارس و بیمارستان‌ها ارتمان روشن و مدرن نزدیک به بازارها، مدارس و بیمارستان‌هارتمان روشن و مدرن نزدیک به بازارها، مدارس و بیمارستان‌ه ارتمان روشن و مدرن نزدیک به بازارها، مدارس و بیمارستان‌هارتمان روشن و مدرن نزدیک به بازارها، مدارس و بیمارستان‌ه .",
//     propertyType: "apartment",
//     transaction: "rent",
//     location: {
//       province: "کابل",
//       city: "کابل",
//       district: "ناحیه ۱۰",
//       streetAddress: "خیابان ۱۵",
//       exactLocation: "نزدیک مرکز خرید سیتی سنتر",
//       landmark: "سیتی سنتر"
//     },
//     details: {
//       bedroom: 2,
//       bathroom: 1,
//       area: 115,
//       floor: 3,
//       totalFloor: 6,
//       yearBuild: 1400,
//       furniture: true,
//       parking: true,
//       security: "نگهبان امنیتی ۲۴ ساعته"
//     },
//     amenities: ["پارکینگ", "آسانسور", "اینترنت", "بالکن", "سیستم گرمایشی"],
//     price: {
//       amount: 25000,
//       currency: "افغانی",
//       period: "ماهانه",
//       negotiable: true
//     },
//     media: [
//       {
//         url: "https://picsum.photos/800/600?random=21",
//         public_id: "eng1",
//         caption: "نمای اتاق نشیمن",
//         isPrimary: true
//       }
//     ],
//     createdAt: "2025-05-01T10:00:00Z",
//     updatedAt: "2025-05-01T10:00:00Z"

//   }

const ShowSingleProperty = () => {
  const [showGallery, setShowGallery] = useState(false);
  const {id} = useParams();
  
  const {error, isLoading, data} = useGetSinglePropertyByID({id})
  const showSingleProperty = data?.data

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Something went wrong!!!</h1>
  
  
  return (
    <div>
      {/* IMAGES CONTAINER */}
        <div>
        <div className='hidden md:block'>
          <ImagePreviewDesk setShowGallery={setShowGallery} images={showSingleProperty?.media} />
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