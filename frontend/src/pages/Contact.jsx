// pages/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later connect to backend
    alert("پیام شما ارسال شد");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center px-4 py-16">
      <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          تماس با ما
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-1 font-medium">نام</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="نام خود را بنویسید"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">ایمیل</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">پیام</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="پیام خود را بنویسید..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            ارسال پیام
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;