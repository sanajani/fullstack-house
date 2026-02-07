import BasicInfo from "../components/porperty/BasicInfo";
import Details from "../components/porperty/Details";
import Location from "../components/porperty/Location";
import Media from "../components/porperty/Media";
import Price from "../components/porperty/Price";

import { useForm } from 'react-hook-form';
import {propertySchema} from '../utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod';

const CreateProperty = () => {
  const {register,handleSubmit, formState:{errors} } = useForm({resolver: zodResolver(propertySchema)})
  console.log(errors);
  
  const handleCreateProperty = (data) => {
    console.log('this is func', data);
    
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center md:p-6">
      <form className="w-full md:max-w-5xl bg-white shadow-2xl rounded-xl p-3 md:p-6 space-y-4 md:space-y-6" onSubmit={handleSubmit(handleCreateProperty)}>
        
        <h1 className="md:text-2xl text-lg font-bold text-white bg-blue-700 p-3 rounded-lg">اضافه کردن خانه</h1>

        {/* Basic Info */}
        <BasicInfo register={register} errors={errors} />

        {/* Location */}
        <Location register={register} errors={errors} />

        {/* Details */}
        <Details register={register} errors={errors} />

        {/* Price */}
        <Price register={register} errors={errors} />

        {/* Media */}
        <Media register={register} errors={errors}/>

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer">
          پست کردن خانه
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;
