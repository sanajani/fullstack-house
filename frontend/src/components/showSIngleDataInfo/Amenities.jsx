
const Amenities = ({showSingleProperty}) => {
  return (
      <div className='bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] space-y-5'>

    <div className='flex items-center gap-3'>
      <div className='w-1 h-6 bg-purple-500 rounded-full'></div>
      <h2 className='font-semibold text-lg text-gray-800 flex items-center gap-2'>
        <span className='text-purple-500'>✨</span>
        امکانات
      </h2>
    </div>

    <div className='flex flex-wrap gap-3'>
      <span className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm'>
        <span className='text-blue-600'>🔥</span>
        سیستم گرمایشی
      </span>
      <span className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm'>
        <span className='text-blue-600'>🌆</span>
        بالکن
      </span>
      <span className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm'>
        <span className='text-blue-600'>🌐</span>
        اینترنت
      </span>
      <span className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm'>
        <span className='text-blue-600'>⬆️</span>
        آسانسور
      </span>
      <span className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm'>
        <span className='text-blue-600'>🚗</span>
        پارکینگ
      </span>
    </div>

  </div>
  )
}

export default Amenities