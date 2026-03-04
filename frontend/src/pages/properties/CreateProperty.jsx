import BasicInfo from "../../components/porperty/BasicInfo";
import Details from "../../components/porperty/Details";
import Location from "../../components/porperty/Location";
import Media from "../../components/porperty/Media";
import Price from "../../components/porperty/Price";

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { propertySchema } from '../../utils/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from "react";

import { useCreateProperty } from "../../hooks/useProperties";
import { buildPropertyFormData } from "../../utils/formdata";
import toast from "react-hot-toast";
import { useState } from "react";
import AddAmenities from "../../components/porperty/AddAmenities";
import { SpinnerGradient } from "../../components/skeletons/Spinner";

const CreateProperty = () => {
  const { mutate } = useCreateProperty();
  const dropzoneRef = useRef(); // ← Create ref to access images with files
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      media: [],
      amenities: []

    }
  });
  
  const handleCreateProperty = (data) => {
    console.log(data);
    
    setLoading(true)
    // Get images WITH FILE objects from DropzoneUI ref
    const imagesWithFiles = dropzoneRef.current?.getImages() || [];
    
    // Build FormData with both metadata and files
    const formData = buildPropertyFormData(data, imagesWithFiles);
    
    // Send to backend
    mutate(formData, {
      onSuccess: (res) => {
        setLoading(false)
        navigate('/', {replace: true})
        toast.success("موفقا خانه شما در لیست بازدید اضافه شد")
      },
      onError: (err) => {
        console.log('❌ Error:', err);
        console.log('Error response:', err.response?.data); // ← This will show WHY
        console.log('Error status:', err.response?.status);
        console.log('Error details:', err.response?.data?.details); // ← Joi validation errors     
        setLoading(false)
        toast.error(err.response?.data?.details)   
      }
    });
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

        {/* AddAmenities */}
        <AddAmenities control={control} />

        {/* Price */}
        <Price register={register} errors={errors} />

        <button className={`w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer ${loading ? 'flex justify-center items-center cursor-not-allowed bg-blue-50 transition-colors gap-4': ''}`} disabled={loading} type="submit">
         {/* {!loading ? " پست کردن خانه" : `${ `صبر کنید ${<SpinnerGradient/>}`}`} */}
         {!loading ? " پست کردن خانه" : (
            <>
              <SpinnerGradient />
              <span>صبر کنید</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;