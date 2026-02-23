// import BasicInfo from "../../components/porperty/BasicInfo";
// import Details from "../../components/porperty/Details";
// import Location from "../../components/porperty/Location";
// import Media from "../../components/porperty/Media";
// import Price from "../../components/porperty/Price";

// import { useForm } from 'react-hook-form';
// import {propertySchema} from '../../utils/zodSchema'
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useState } from "react";

// import { useCreateProperty } from "../../hooks/useProperties";
// import { buildPropertyFormData } from "../../utils/formdata";
// import { debugFormData } from "../../utils/debug";

// const CreateProperty = () => {
//   const { mutate } = useCreateProperty();
//   const [Loading, setLoading] = useState();
//   const {
//   register,
//   handleSubmit,
//   control,
//   formState: { errors }
// } = useForm({
//   resolver: zodResolver(propertySchema),
//   defaultValues: {
//     media: [] 
//   }
// })
  
//   const handleCreateProperty = (data) => {
//     // const formdata = buildPropertyFormData(data);
//     // const dbg = debugFormData(formdata)
//     console.log('this is transformed data', data);
//     // console.log(formdata.getAll('media'));
//     // console.log(formdata.get('title'));
//     // To see everything in FormData:
// // for (let pair of formdata.entries()) {
// //   console.log(pair[0], pair[1]);
// // }
//   // const formData = new FormData();

//   // // Append text fields
//   // Object.keys(data).forEach((key) => {
//   //   if (key !== "images") {
//   //     formData.append(key, data[key]);
//   //   }
//   // });

//   // // Append images
//   // for (let i = 0; i < data.images.length; i++) {
//   //   formData.append("images", data.images[i]);
//   // }

//   // mutate(formData);
//   //   mutate(data)
//   }
  
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center md:p-6">
//       <form className="w-full md:max-w-5xl bg-white shadow-2xl rounded-xl p-3 md:p-6 space-y-4 md:space-y-6" onSubmit={handleSubmit(handleCreateProperty)}>
        
//         <h1 className="md:text-2xl text-lg font-bold text-white bg-blue-700 p-3 rounded-lg">اضافه کردن خانه</h1>

//         {/* Basic Info */}
//         <BasicInfo register={register} errors={errors} />

//         {/* Location */}
//         <Location register={register} errors={errors} />

//         {/* Media */}
//         <Media errors={errors} control={control} />

//         {/* Details */}
//         <Details register={register} errors={errors} />

//         {/* Price */}
//         <Price register={register} errors={errors} />

//         <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer">
//           پست کردن خانه
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateProperty;

import BasicInfo from "../../components/porperty/BasicInfo";
import Details from "../../components/porperty/Details";
import Location from "../../components/porperty/Location";
import Media from "../../components/porperty/Media";
import Price from "../../components/porperty/Price";

import { useForm } from 'react-hook-form';
import { propertySchema } from '../../utils/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from "react";

import { useCreateProperty } from "../../hooks/useProperties";
import { buildPropertyFormData } from "../../utils/formdata";

const CreateProperty = () => {
  const { mutate } = useCreateProperty();
  const dropzoneRef = useRef(); // ← Create ref to access images with files
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      media: [] 
    }
  });
  
  const handleCreateProperty = (data) => {
    // Get images WITH FILE objects from DropzoneUI ref
    const imagesWithFiles = dropzoneRef.current?.getImages() || [];
    
    console.log('Form data (metadata only):', data);
    console.log('Images with files:', imagesWithFiles);
    
    // Build FormData with both metadata and files
    const formData = buildPropertyFormData(data, imagesWithFiles);
    
    // Debug: see what's in FormData
    for (let pair of formData.entries()) {
      if (pair[1] instanceof File) {
        console.log(`${pair[0]}: [FILE] ${pair[1].name}`);
      } else {
        console.log(`${pair[0]}:`, pair[1]);
      }
    }
    
    // Send to backend
    mutate(formData);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center md:p-6">
      <form className="w-full md:max-w-5xl bg-white shadow-2xl rounded-xl p-3 md:p-6 space-y-4 md:space-y-6" onSubmit={handleSubmit(handleCreateProperty)}>
        
        <h1 className="md:text-2xl text-lg font-bold text-white bg-blue-700 p-3 rounded-lg">اضافه کردن خانه</h1>

        {/* Basic Info */}
        <BasicInfo register={register} errors={errors} />

        {/* Location */}
        <Location register={register} errors={errors} />

        {/* Media - pass the ref */}
        <Media 
          errors={errors} 
          control={control} 
          dropzoneRef={dropzoneRef}  // ← Pass ref to Media component
        />

        {/* Details */}
        <Details register={register} errors={errors} />

        {/* Price */}
        <Price register={register} errors={errors} />

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer">
          پست کردن خانه
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;