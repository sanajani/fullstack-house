
import { Link } from "react-router-dom";
import FormField from "../components/inputBoxes/FormField";
import {zodResolver} from '@hookform/resolvers/zod'
import { signupSchema } from "../utils/zodSchema";

import {useForm} from 'react-hook-form'

const Signup = () => {

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(signupSchema)});

  const signupFormSubmit = (data) => {
    console.log(data);
    
  }

  return (
    <div className="min-h-screen max-w-6xl flex items-center justify-center bg-gray-50 mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-5 text-right">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ثبت نام مستاجر</h1>
          <p className="text-gray-500 text-sm">برای شروع، اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(signupFormSubmit)} className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

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
              placeholder="۰۷۹XXXXXXXX"
              autoComplete="off"
              {...register('phoneNumber1')}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormField>

          {/* Password */}
          <FormField label='رمز عبور' error={errors.password}>
            <input
              type="password"
              placeholder="رمز عبور"
              autoComplete="off"
              {...register('password')}

              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <FormField label='ولایت (اختیاری)' error={errors.province}>
            <input
              type="text"
              placeholder="ولایت"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('province')}

            />
          </FormField>

          {/* District */}
          <FormField label='ناحیه (اختیاری) ' error={errors.district}>
            <input
              type="text"
              placeholder="ناحیه"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...register('district')}
            />
          </FormField>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 md:col-span-2 transition"
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

export default Signup;
