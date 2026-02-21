
import { Link, Navigate } from "react-router-dom";
import FormField from "../components/inputBoxes/FormField";
import {zodResolver} from '@hookform/resolvers/zod'
import { BecomeAgentSchema } from "../utils/zodSchema";

import {useForm} from 'react-hook-form'
import { useBecomeAgent } from "../hooks/useBecomeAgent";
import { useGetUserProfile } from "../hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const BecomeAgent = () => {
  const {data, isLoading, isError, error} = useGetUserProfile();
  const userInfo = data?.data;
  const becomeAgentMutation = useBecomeAgent();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: zodResolver(BecomeAgentSchema)});

  useEffect(() => {
    if(userInfo){
        reset({
        name: userInfo?.name || '',
        lastName: userInfo?.lastName || '',
        phoneNumber1: userInfo?.phoneNumber1 || '',
        email: userInfo?.email || '',
        province: userInfo?.province || '',
        district: userInfo?.district || '',
      });
    }
  }, [userInfo, reset])

  
  const becomeAgentFormSubmit = (data) => {
    becomeAgentMutation.mutate(data, {
      onSuccess: () => {
        <Navigate to='create-property' replace={true} />
        toast.success("فرم تان برای ارزیابی ب مدیر ارسال شد")
      },
      onError: (error)=> {
        console.log('error from frontend', error.name);
        
        toast.error(`مشکلی در ${error.message} لطفا طبق هدایت پیش بروید`)
      }
    });
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error {error.message}</h1>
  }

  return (
    <div className="min-h-screen max-w-6xl flex items-center justify-center bg-gray-50 mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-3 text-right">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ثبت نام به معامله گر</h1>
          <p className="text-gray-500 text-sm">برای شروع، اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(becomeAgentFormSubmit)} className="space-y-1 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">

          {/* Name */}
          {/* <FormField label={'نام '} error={errors.name} > */}
          <FormField label='نام' error={errors.name}>
            <input
              type="text"
              placeholder="نام شما"
              autoComplete="off"
              {...register('name')}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

          {/* Last Name */}
          {/* <FormField> */}
          <FormField label='نام خانوادگی' error={errors.lastName}>
            <input
              type="text"
              placeholder="نام خانوادگی شما"
              {...register('lastName')}
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

          {/* Phone */}
          <FormField label='شماره تماس' error={errors.phoneNumber1}>
            <input
              type="text"
              autoComplete="off"
              {...register('phoneNumber1')}
              placeholder="078XXXXXXXX"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

         {/* PhoneNumber2 */}
          <FormField label='شماره تماس دوم ' error={errors.phoneNumber2}>
            <input
              type="text"
              placeholder="079XXXXXXXX"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('phoneNumber2')}
            />
          </FormField>

          {/* Email */}
          <FormField label=' ایمیل (اختیاری)' error={errors.email}>
            <input
              type="text"
              placeholder="example@mail.com"
              autoComplete="off"
              {...register('email')}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

          {/* Username */}
          <FormField label=' نام کاربری (اختیاری)' error={errors.username}>
            <input
              type="text"
              placeholder="username"
              autoComplete="off"
              {...register('username')}

              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

          {/* Province */}
          <FormField label='ولایت' error={errors.province}>
            <input
              type="text"
              placeholder="ولایت"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('province')}
            />
          </FormField>

          {/* District */}
          <FormField label='ناحیه ' error={errors.district}>
            <input
              type="text"
              placeholder="ناحیه"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('district')}
            />
          </FormField>

{/* agent info */}
                   {/* agency Name */}
          <FormField label='نام دفتر معاملات' error={errors.agencyName}>
            <input
              type="text"
              placeholder="نام دفتر معاملات"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('agencyName')}
            />
          </FormField>

                   {/* Experience Years */}
          <FormField label='چند سال تجربه کاری ' error={errors.experienceYears}>
            <input
              type="text"
              placeholder="تجربه کاری"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('experienceYears')}
            />
          </FormField>

                   {/* Specialization */}
          <FormField label='جی شمار خاص میکند' error={errors.specialization}>
            <input
              type="text"
              placeholder="چی شمار خاص میکند"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('specialization')}
            />
          </FormField>

                           {/* Bio */}
          <FormField label='درمورد خود بنویسد' error={errors.bio} className='md:col-span-2'>
            <textarea cols={30} rows={5}
              type="textarea"
              placeholder="در مورد خود بنویسید"
              className="w-full md:col-span-2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              autoComplete="off"
              {...register('bio')}
            />
          </FormField>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white cursor-pointer font-medium py-2 rounded-lg hover:bg-blue-700 md:col-span-2 transition"
          >
            ثبت نام
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center">
          قبلاً حساب دارید؟ <Link to="/login" className="text-blue-600">ورود</Link>
        </p>
      </div>
    </div>
  );
};

export default BecomeAgent;
