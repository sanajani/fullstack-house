

import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber1: "",
    password: "",
    email: "",
    username: "",
    province: "",
    district: "",
    preferedLocation: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Send data to backend
  };

  return (
    <div className="min-h-screen max-w-6xl flex items-center justify-center bg-gray-50 mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-5 text-right">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ثبت نام مستاجر</h1>
          <p className="text-gray-500 text-sm">برای شروع، اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

          {/* Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">نام</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام شما"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">نام خانوادگی</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="نام خانوادگی شما"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium mb-1 block">شماره تلفن</label>
            <input
              type="text"
              name="phoneNumber1"
              value={formData.phoneNumber1}
              onChange={handleChange}
              placeholder="۰۷۹XXXXXXXX"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-1 block">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-1 block">ایمیل (اختیاری)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium mb-1 block">نام کاربری (اختیاری)</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Province */}
          <div>
            <label className="text-sm font-medium mb-1 block">ولایت</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="ولایت"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* District */}
          <div>
            <label className="text-sm font-medium mb-1 block">ناحیه (اختیاری)</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="ناحیه"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
          قبلاً حساب دارید؟ <a href="/login" className="text-blue-600">ورود</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;