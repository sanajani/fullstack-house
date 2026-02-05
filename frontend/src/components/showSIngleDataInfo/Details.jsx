import React from 'react'

const Details = ({dummyProperties}) => {
  return (
      <div className='bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] space-y-5'>

    <div className='flex items-center gap-3'>
      <div className='w-1 h-6 bg-green-500 rounded-full'></div>
      <h2 className='font-semibold text-lg text-gray-800 flex items-center gap-2'>
        <span className='text-green-500'>📊</span>
        جزئیات ملک
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>اتاق خواب</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.bedroom}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>تشناب</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.bathroom}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>متراژ (m²)</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.area}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>طبقه</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.floor}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>کل طبقات</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.totalFloor}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>سال تأسیس</span>
        <span className='font-bold text-gray-800 text-lg'>{dummyProperties.details?.yearBuild}</span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>فرنیچر</span>
        <span className={`font-bold ${dummyProperties.details?.furniture ? 'text-green-600' : 'text-red-600'}`}>
          {dummyProperties.details?.furniture ? '✅ دارد' : '❌ ندارد'}
        </span>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>پارکینگ</span>
        <span className={`font-bold ${dummyProperties.details?.parking ? 'text-green-600' : 'text-red-600'}`}>
          {dummyProperties.details?.parking ? '✅ دارد' : '❌ ندارد'}
        </span>
      </div>
      <div className='md:col-span-2 flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200'>
        <span className='text-gray-500 text-sm'>سیستم امنیتی</span>
        <span className='font-medium text-gray-800 text-right'>{dummyProperties.details?.security}</span>
      </div>
    </div>

  </div>
  )
}

export default Details