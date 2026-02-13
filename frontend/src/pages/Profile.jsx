import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from "../components/inputBoxes/FormField";
import ShowInfo from "../components/inputBoxes/ShowInfo";
import { profileSchema } from "../utils/zodSchema";

const mockUserData = {
  name: "علی",
  lastName: "محمدی",
  phoneNumber1: "۰۷۹۱۲۳۴۵۶۷",
  email: "ali@example.com",
  province: "کابل",
  district: "ناحیه ۳",
  role: "tenant"
};


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUserData);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userData.name,
      lastName: userData.lastName,
      phoneNumber1: userData.phoneNumber1,
      email: userData.email || '',
      province: userData.province || '',
      district: userData.district || '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data) => {
    // Remove confirmPassword and empty password from data
    const { confirmPassword, password, ...restData } = data;
    
    // Only include password if it was provided
    const updateData = password ? { ...restData, password } : restData;
    
    // Here you would call your API to update the user
    console.log("Updating user with:", updateData);
    
    // Update local state
    setUserData(prev => ({
      ...prev,
      ...updateData
    }));
    
    // Exit edit mode
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Header with edit/save buttons */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">پروفایل من</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              ویرایش پروفایل
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer"
              >
                انصراف
              </button>
            </div>
          )}
        </div>

        {/* User Role Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-1 rounded-full text-sm ${
            userData.role === 'agent' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {userData.role === 'agent' ? 'نماینده' : 'مستاجر'}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <FormField label="نام" error={errors.name}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('name')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.name} />
              )}
            </FormField>

            {/* Last Name */}
            <FormField label="نام خانوادگی" error={errors.lastName}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('lastName')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.lastName} />
              )}
            </FormField>

            {/* Phone */}
            <FormField label="شماره تماس" error={errors.phoneNumber1}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('phoneNumber1')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.phoneNumber1} />
              )}
            </FormField>

            {/* Email */}
            <FormField label="ایمیل" error={errors.email}>
              {isEditing ? (
                <input
                  type="email"
                  {...register('email')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.email || '—'} />
              )}
            </FormField>

            {/* Province */}
            <FormField label="ولایت" error={errors.province}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('province')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.province || '—'} />
              )}
            </FormField>

            {/* District */}
            <FormField label="ناحیه" error={errors.district}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('district')}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <ShowInfo FieldName={userData.district || '—'} />
              )}
            </FormField>

            {/* Password - Only show in edit mode */}
            {isEditing && (
              <>
                <FormField label="رمز عبور جدید" error={errors.password}>
                  <input
                    type="password"
                    {...register('password')}
                    placeholder="برای تغییر رمز عبور را وارد کنید"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormField>

                <FormField label="تکرار رمز عبور" error={errors.confirmPassword}>
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    placeholder="تکرار رمز عبور جدید"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormField>
              </>
            )}
          </div>

          {/* Submit button - Only show in edit mode */}
          {isEditing && (
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              >
                ذخیره تغییرات
              </button>
            </div>
          )}
        </form>

        {/* Agent-specific section - optional */}
        {userData.role === 'agent' && !isEditing && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-4">اطلاعات نمایندگی</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="نام آژانس">
                <ShowInfo FieldName="آژانس املاک الف" />
              </FormField>
              <FormField label="سال تجربه">
                <ShowInfo FieldName="۵ سال" />
              </FormField>
              <FormField label="شماره لایسنس">
                <ShowInfo FieldName="۱۲۳۴۵" />
              </FormField>
              <FormField label="تخصص">
                <ShowInfo FieldName="فروش، رهن و اجاره" />
              </FormField>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
