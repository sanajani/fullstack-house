import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineHome, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlinePlusCircle,
  HiOutlineBell,
  HiOutlineChartBar
} from 'react-icons/hi2'

const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState('properties')

  // Sample data
  const stats = [
    { label: 'کل ملک‌ها', value: '24', icon: HiOutlineHome, color: 'bg-blue-500' },
    { label: 'پیام‌های جدید', value: '8', icon: HiOutlineChatBubbleLeftRight, color: 'bg-green-500' },
    { label: 'مشتریان', value: '156', icon: HiOutlineUserGroup, color: 'bg-purple-500' },
    { label: 'بازدید امروز', value: '342', icon: HiOutlineEye, color: 'bg-orange-500' },
  ]

  const properties = [
    { id: 1, title: 'آپارتمان لوکس در شهر نو', price: '$85,000', status: 'فروشی', views: 234, messages: 12 },
    { id: 2, title: 'خانه ویلایی در کارته چهار', price: '$120,000', status: 'فروشی', views: 156, messages: 8 },
    { id: 3, title: 'دفتر کار تجاری در شهرک', price: '$450/month', status: 'اجاره', views: 89, messages: 3 },
    { id: 4, title: 'زمین ۵۰۰ متری', price: '$65,000', status: 'فروشی', views: 67, messages: 5 },
  ]

  const messages = [
    { id: 1, name: 'احمد رحیمی', message: 'در مورد ملک شماره ۳ سوال دارم...', time: '۵ دقیقه پیش', unread: true },
    { id: 2, name: 'فاطمه کریمی', message: 'آیا قیمت قابل مذاکره است؟', time: '۲ ساعت پیش', unread: true },
    { id: 3, name: 'علی محمدی', message: 'برای بازدید فردا ساعت ۱۰ هماهنگ...', time: 'دیروز', unread: false },
    { id: 4, name: 'زهرا احمدی', message: 'مدارک ملک را ارسال کنید', time: 'دیروز', unread: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">پنل نماینده</h1>
            <div className="flex items-center gap-4">
              <button className="relative">
                <HiOutlineBell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                AA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 m-4 p-4 rounded-xl text-white">
        <h2 className="text-lg font-bold">خوش آمدید، احمد! 👋</h2>
        <p className="text-blue-100 text-sm mt-1">به پنل مدیریت خود خوش آمدید</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-4">
        <Link 
          to="/agent/properties/create" 
          className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <HiOutlinePlusCircle className="w-5 h-5" />
          افزودن ملک جدید
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b bg-white mt-4 sticky top-[73px] z-10">
        <button
          onClick={() => setActiveTab('properties')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'properties' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500'
          }`}
        >
          ملک‌ها
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex-1 py-3 text-sm font-medium relative ${
            activeTab === 'messages' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500'
          }`}
        >
          پیام‌ها
          <span className="absolute -top-1 left-1/2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            8
          </span>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'analytics' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500'
          }`}
        >
          آمار
        </button>
      </div>

      {/* Properties Tab */}
      {activeTab === 'properties' && (
        <div className="px-4 mt-4 space-y-3 pb-4">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{property.title}</h3>
                  <p className="text-blue-600 font-bold mt-1">{property.price}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  property.status === 'فروشی' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {property.status}
                </span>
              </div>
              
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <HiOutlineEye className="w-4 h-4" />
                  {property.views} بازدید
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                  {property.messages} پیام
                </span>
              </div>

              <div className="flex gap-2 mt-3 pt-3 border-t">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  <HiOutlineEye className="w-4 h-4" />
                  مشاهده
                </button>
                <button className="flex-1 bg-yellow-50 text-yellow-600 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  <HiOutlinePencilSquare className="w-4 h-4" />
                  ویرایش
                </button>
                <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  <HiOutlineTrash className="w-4 h-4" />
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="px-4 mt-4 space-y-3 pb-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`bg-white rounded-xl shadow-sm p-4 ${msg.unread ? 'border-r-4 border-blue-600' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      {msg.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{msg.name}</h3>
                      <p className="text-xs text-gray-500">{msg.time}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mr-10">{msg.message}</p>
                </div>
                {msg.unread && (
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
              </div>
              <div className="flex gap-2 mt-3 mr-10">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
                  پاسخ
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm">
                  مشاهده ملک
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="px-4 mt-4 space-y-4 pb-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-semibold mb-3">خلاصه فعالیت</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>بازدید کل</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>پیام‌ها</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>تماس‌ها</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-semibold mb-3">ملک‌های پربازدید</h3>
            {properties.slice(0, 3).map((p) => (
              <div key={p.id} className="flex justify-between items-center py-2 border-b last:border-0">
                <span className="text-sm text-gray-700">{p.title}</span>
                <span className="text-sm font-semibold">{p.views} بازدید</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 flex justify-around items-center">
        <Link to="/dashboard" className="flex flex-col items-center text-blue-600">
          <HiOutlineHome className="w-6 h-6" />
          <span className="text-xs">خانه</span>
        </Link>
        <Link to="/properties" className="flex flex-col items-center text-gray-500">
          <HiOutlineChartBar className="w-6 h-6" />
          <span className="text-xs">ملک‌ها</span>
        </Link>
        <Link to="/messages" className="flex flex-col items-center text-gray-500 relative">
          <HiOutlineChatBubbleLeftRight className="w-6 h-6" />
          <span className="text-xs">پیام‌ها</span>
          <span className="absolute -top-1 right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            8
          </span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-500">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="text-xs">پروفایل</span>
        </Link>
      </div>
    </div>
  )
}

export default AgentDashboard