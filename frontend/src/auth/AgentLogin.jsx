import { Link } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { agentLoginSchema } from "../utils/zodSchema";
import { useForm } from "react-hook-form";
import FormField from "../components/inputBoxes/FormField";
import { useLoginAgent } from "../hooks/useBecomeAgent";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const AgentLogin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(agentLoginSchema)});
  const loginMutation = useLoginAgent();
  
  // login function call api from backend
  const loginFormSubmit = (data) => {
    loginMutation.mutate(data);
  }

  return (
    <div className="min-h-screen max-w-6xl flex items-center justify-center bg-gray-50 mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-5 text-right">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ورود نماینده</h1>
          <p className="text-gray-500 text-sm">برای ادامه، اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(loginFormSubmit)}>

          {/* Phone Number */}
          <FormField error={errors.phoneNumber1} label={'شماره تماس '}>
            <input 
              placeholder="۰۷۹XXXXXXXX"
              type={'text'} 
              {...register('phoneNumber1')}
              className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              autoComplete="off"
            />
          </FormField>
          <FormField error={errors.password} label={'رمز عبور'} className="relative">
            <input 
              placeholder="رمز عبور شما"
              type={showPassword ? 'text' : 'password'} 
              {...register('password')}
              className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 inset-y-0 top-3 pr-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </FormField>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            ورود
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center">
          حساب ندارید؟ <Link to="/signup" className="text-blue-600">ثبت نام</Link>
        </p>
      </div>
    </div>
  );
};

export default AgentLogin;
