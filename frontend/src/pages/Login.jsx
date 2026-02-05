import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Send login request to backend
  };

  return (
    <div className="min-h-screen max-w-6xl flex items-center justify-center bg-gray-50 mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-5 text-right">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ورود مستاجر</h1>
          <p className="text-gray-500 text-sm">برای ادامه، اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

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

          {/* Phone Number */}
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ورود
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center">
          حساب ندارید؟ <a href="/signup" className="text-blue-600">ثبت نام</a>
        </p>
      </div>
    </div>
  );
};

export default Login;