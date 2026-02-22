import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from "../../components/inputBoxes/FormField";
import ShowInfo from "../../components/inputBoxes/ShowInfo";
import { profileSchema } from "../../utils/zodSchema";
import { useUpdateProfile, useGetUserProfile } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);

  const { mutate } = useUpdateProfile();
  const { data, isLoading, isError, error } = useGetUserProfile();

  const userInfo = data?.data;

  // ✅ Hooks must be before any return
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(profileSchema),
  });

  // ✅ Reset form when async data arrives
  useEffect(() => {
    if (userInfo) {
      reset({
        name: userInfo?.name || '',
        lastName: userInfo?.lastName || '',
        phoneNumber1: userInfo?.phoneNumber1 || '',
        email: userInfo?.email || '',
        province: userInfo?.province || '',
        district: userInfo?.district || '',
      });
    }
  }, [userInfo, reset]);

  // ✅ Safe conditional return AFTER hooks
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error {error.message}</h1>;
  }

  const onSubmit = (formData) => {
    
    mutate(formData, {onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['userProfile']})
      toast.success("موفقانه اپدیت شد")
      setIsEditing(false)
    }, onError: (error) => {
      toast.error(`خطا صورت گرتف ${error.message}`)
    }});
    
  };
  
  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
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

        {/* Role Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-1 rounded-full text-sm ${
            userInfo?.role === 'agent'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {userInfo?.role === 'agent' ? 'نماینده' : 'مستاجر'}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <FormField label="نام" error={errors.name}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('name')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.name} />
              )}
            </FormField>

            <FormField label="نام خانوادگی" error={errors.lastName}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('lastName')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.lastName} />
              )}
            </FormField>

            <FormField label="شماره تماس" error={errors.phoneNumber1}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('phoneNumber1')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.phoneNumber1} />
              )}
            </FormField>

            <FormField label="ایمیل" error={errors.email}>
              {isEditing ? (
                <input
                  type="email"
                  {...register('email')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.email || '—'} />
              )}
            </FormField>

            <FormField label="ولایت" error={errors.province}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('province')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.province || '—'} />
              )}
            </FormField>

            <FormField label="ناحیه" error={errors.district}>
              {isEditing ? (
                <input
                  type="text"
                  {...register('district')}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              ) : (
                <ShowInfo FieldName={userInfo?.district || '—'} />
              )}
            </FormField>

          </div>

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

        {/* Agent Section */}
        {userInfo?.role === 'agent' && !isEditing && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-4">اطلاعات نمایندگی</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="نام آژانس">
                <ShowInfo FieldName="آژانس املاک الف" />
              </FormField>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;