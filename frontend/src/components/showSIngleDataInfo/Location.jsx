
const Location = ({dummyProperties}) => {
    if(!dummyProperties || Object.keys(dummyProperties).length < 1){
        return <h1>No data</h1>
    }
  return (
      <div className='bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] space-y-5'>

    <div className='flex items-center gap-3'>
      <div className='w-1 h-6 bg-blue-500 rounded-full'></div>
      <h2 className='font-semibold text-lg text-gray-800 flex items-center gap-2'>
        <span className='text-blue-500'>📍</span>
        موقعیت ملک
      </h2>
    </div>

    <div className='space-y-4'>
      <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>🇦🇫</span>
          ولایت
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.province}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>🏙️</span>
          مرکز
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.city}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>🗺️</span>
          ناحیه
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.district}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>🛣️</span>
          کوچه
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.streetAddress}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>📌</span>
          آدرس دقیق
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.exactLocation || "مشخص نشده"}</span>
      </div>
      <div className='flex justify-between items-center py-3'>
        <span className='text-gray-500 text-sm flex items-center gap-2'>
          <span className='text-gray-400'>🏛️</span>
          نشانی
        </span>
        <span className='font-medium text-gray-800'>{dummyProperties.location?.landmark}</span>
      </div>
    </div>

  </div>
  )
}

export default Location