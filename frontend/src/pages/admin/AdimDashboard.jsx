import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineHome, 
  HiOutlineUserGroup, 
  HiOutlineUsers,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineClock,
//   HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUserPlus,
} from 'react-icons/hi2'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users')
  const [filterStatus, setFilterStatus] = useState('all')

  // Sample Users Data
  const users = [
    { id: 1, name: 'احمد رحیمی', email: 'ahmad@email.com', role: 'agent', status: 'active', joined: '۱۴۰۳/۰۱/۱۵', properties: 12, avatar: 'AR' },
    { id: 2, name: 'فاطمه کریمی', email: 'fatema@email.com', role: 'tenant', status: 'active', joined: '۱۴۰۳/۰۲/۲۰', properties: 0, avatar: 'FK' },
    { id: 3, name: 'علی محمدی', email: 'ali@email.com', role: 'agent', status: 'pending', joined: '۱۴۰۳/۰۳/۱۰', properties: 0, avatar: 'AM' },
    { id: 4, name: 'زهرا احمدی', email: 'zahra@email.com', role: 'agent', status: 'suspended', joined: '۱۴۰۲/۱۲/۰۵', properties: 5, avatar: 'ZA' },
    { id: 5, name: 'حسین رضایی', email: 'hossein@email.com', role: 'tenant', status: 'active', joined: '۱۴۰۳/۰۱/۲۵', properties: 0, avatar: 'HR' },
  ]

  // Sample Properties Data
  const properties = [
    { id: 1, title: 'آپارتمان لوکس در شهر نو', agent: 'احمد رحیمی', price: '$85,000', type: 'فروشی', status: 'approved', views: 234, date: '۱۴۰۳/۰۲/۰۱' },
    { id: 2, title: 'خانه ویلایی در کارته چهار', agent: 'زهرا احمدی', price: '$120,000', type: 'فروشی', status: 'approved', views: 156, date: '۱۴۰۳/۰۱/۲۰' },
    { id: 3, title: 'دفتر کار تجاری', agent: 'علی محمدی', price: '$450/month', type: 'اجاره', status: 'pending', views: 0, date: '۱۴۰۳/۰۳/۱۰' },
    { id: 4, title: 'زمین ۵۰۰ متری', agent: 'علی محمدی', price: '$65,000', type: 'فروشی', status: 'pending', views: 0, date: '۱۴۰۳/۰۳/۰۹' },
    { id: 5, title: 'آپارتمان دو خوابه', agent: 'احمد رحیمی', price: '$550/month', type: 'اجاره', status: 'rejected', views: 0, date: '۱۴۰۳/۰۲/۲۸' },
    { id: 6, title: 'مغازه تجاری', agent: 'فاطمه کریمی', price: '$300/month', type: 'اجاره', status: 'approved', views: 89, date: '۱۴۰۳/۰۱/۱۵' },
  ]

  // Sample Agent Requests
  const agentRequests = [
    { id: 1, name: 'علی محمدی', email: 'ali@email.com', phone: '۰۷۷۷۱۲۳۴۵۶', documents: 'لیسانس', experience: '۳ سال', requested: '۱۴۰۳/۰۳/۰۸' },
    { id: 2, name: 'سارا حسینی', email: 'sara@email.com', phone: '۰۷۷۸۲۳۴۵۶۷', documents: 'دیپلم', experience: '۱ سال', requested: '۱۴۰۳/۰۳/۰۵' },
    { id: 3, name: 'رضا کریمی', email: 'reza@email.com', phone: '۰۷۷۶۵۴۳۲۱۰', documents: 'ماستری', experience: '۵ سال', requested: '۱۴۰۳/۰۲/۲۵' },
  ]

  const stats = [
    { label: 'کاربران کل', value: '۱,۲۳۴', icon: HiOutlineUsers, color: 'bg-blue-500', change: '+۱۲' },
    { label: 'نمایندگان', value: '۴۵۶', icon: HiOutlineUserGroup, color: 'bg-green-500', change: '+۸' },
    { label: 'ملک‌ها', value: '۸۹۲', icon: HiOutlineBuildingOffice, color: 'bg-purple-500', change: '+۲۳' },
    { label: 'درخواست‌ها', value: '۱۸', icon: HiOutlineClock, color: 'bg-orange-500', change: '+۵' },
  ]

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">تایید شده</span>
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">در انتظار</span>
      case 'rejected':
        return <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">رد شده</span>
      case 'suspended':
        return <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">مسدود</span>
      default:
        return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{status}</span>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 mx-5xl">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">پنل مدیریت</h1>
            <div className="flex items-center gap-4">
              <button className="relative">
                <HiOutlineBell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  ۱۲
                </span>
              </button>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                AD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 m-4 p-4 rounded-xl text-white">
        <h2 className="text-lg font-bold">پنل مدیریت 🛡️</h2>
        <p className="text-purple-100 text-sm mt-1">مدیریت کاربران، ملک‌ها و درخواست‌ها</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">{stat.change} نسبت به دیروز</p>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl shadow-sm p-2 flex items-center gap-2">
          {/* <HiOutlineSearch className="w-5 h-5 text-gray-400" /> */}
          commented2
          <input 
            type="text" 
            placeholder="جستجوی کاربران، ملک‌ها، درخواست‌ها..."
            className="flex-1 outline-none text-sm"
          />
          <button className="bg-gray-100 p-2 rounded-lg">
            commented
            {/* <HiOutlineFilter className="w-4 h-4 text-gray-600" /> */}
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b bg-white mt-4 sticky top-[73px] z-10 overflow-x-auto">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'users' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
          }`}
        >
          <HiOutlineUsers className="w-4 h-4 inline ml-1" />
          کاربران
        </button>
        <button
          onClick={() => setActiveTab('properties')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'properties' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
          }`}
        >
          <HiOutlineBuildingOffice className="w-4 h-4 inline ml-1" />
          ملک‌ها
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap relative ${
            activeTab === 'requests' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
          }`}
        >
          <HiOutlineUserPlus className="w-4 h-4 inline ml-1" />
          درخواست‌های نمایندگی
          <span className="absolute -top-1 -left-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            ۳
          </span>
        </button>
      </div>

      {/* Status Filter for Properties */}
      {activeTab === 'properties' && (
        <div className="px-4 mt-3 flex gap-2 overflow-x-auto pb-2">
          {['all', 'pending', 'approved', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                filterStatus === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 border'
              }`}
            >
              {status === 'all' && 'همه'}
              {status === 'pending' && 'در انتظار'}
              {status === 'approved' && 'تایید شده'}
              {status === 'rejected' && 'رد شده'}
            </button>
          ))}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="px-4 mt-4 space-y-3 pb-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    user.role === 'agent' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {user.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{user.name}</h3>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                {getStatusBadge(user.status)}
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">نقش</p>
                  <p className="font-semibold">{user.role === 'agent' ? 'نماینده' : 'مستاجر'}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">ملک‌ها</p>
                  <p className="font-semibold">{user.properties}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">تاریخ</p>
                  <p className="font-semibold text-xs">{user.joined}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
                  مشاهده
                </button>
                {user.role === 'agent' && user.status === 'pending' && (
                  <>
                    <button className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg text-sm">
                      تایید
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm">
                      رد
                    </button>
                  </>
                )}
                {user.status === 'active' && (
                  <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm">
                    مسدود
                  </button>
                )}
                {user.status === 'suspended' && (
                  <button className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg text-sm">
                    فعال
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Properties Tab */}
      {activeTab === 'properties' && (
        <div className="px-4 mt-4 space-y-3 pb-4">
          {properties
            .filter(p => filterStatus === 'all' || p.status === filterStatus)
            .map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{property.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">نماینده: {property.agent}</p>
                </div>
                {getStatusBadge(property.status)}
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">قیمت</p>
                  <p className="font-semibold text-blue-600">{property.price}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">نوع</p>
                  <p className="font-semibold">{property.type}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-center">
                  <p className="text-gray-500">تاریخ</p>
                  <p className="font-semibold text-xs">{property.date}</p>
                </div>
              </div>

              {property.status === 'pending' && (
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    تایید
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                    <HiOutlineXCircle className="w-4 h-4" />
                    رد
                  </button>
                </div>
              )}

              {property.status !== 'pending' && (
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
                    مشاهده
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm">
                    جزئیات
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Agent Requests Tab */}
      {activeTab === 'requests' && (
        <div className="px-4 mt-4 space-y-3 pb-4">
          {agentRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-sm p-4 border-r-4 border-yellow-400">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold">
                    {request.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{request.name}</h3>
                    <p className="text-xs text-gray-500">{request.email}</p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                  درخواست جدید
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="text-gray-500">تماس</p>
                  <p className="font-semibold">{request.phone}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="text-gray-500">مدرک</p>
                  <p className="font-semibold">{request.documents}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="text-gray-500">تجربه</p>
                  <p className="font-semibold">{request.experience}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="text-gray-500">تاریخ</p>
                  <p className="font-semibold">{request.requested}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                  <HiOutlineCheckCircle className="w-4 h-4" />
                  تایید درخواست
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                  <HiOutlineXCircle className="w-4 h-4" />
                  رد درخواست
                </button>
              </div>
              
              <button className="w-full mt-2 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm">
                مشاهده مدارک
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 flex justify-around items-center">
        <Link to="/admin" className="flex flex-col items-center text-purple-600">
          <HiOutlineHome className="w-6 h-6" />
          <span className="text-xs">خانه</span>
        </Link>
        <Link to="/admin/users" className="flex flex-col items-center text-gray-500">
          <HiOutlineUsers className="w-6 h-6" />
          <span className="text-xs">کاربران</span>
        </Link>
        <Link to="/admin/properties" className="flex flex-col items-center text-gray-500 relative">
          <HiOutlineBuildingOffice className="w-6 h-6" />
          <span className="text-xs">ملک‌ها</span>
        </Link>
        <Link to="/admin/requests" className="flex flex-col items-center text-gray-500 relative">
          <HiOutlineUserPlus className="w-6 h-6" />
          <span className="text-xs">درخواست‌ها</span>
          <span className="absolute -top-1 right-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            ۳
          </span>
        </Link>
        <Link to="/admin/profile" className="flex flex-col items-center text-gray-500">
          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
          <span className="text-xs">پروفایل</span>
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard

// HiOutlineFilter