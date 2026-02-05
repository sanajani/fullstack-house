
const Price = ({dummyProperties}) => {
  return (
      <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-[0_12px_32px_rgba(37,99,235,0.3)] space-y-5 text-white'>

    <div className='flex items-center gap-3'>
      <div className='w-1 h-6 bg-yellow-400 rounded-full'></div>
      <h2 className='font-semibold text-lg flex items-center gap-2'>
        <span className='text-yellow-300'>💵</span>
        جزئیات قیمت
      </h2>
    </div>

    <div className='space-y-4'>
      <div className='flex justify-between items-center py-3 border-b border-blue-500/30 last:border-0'>
        <span className='text-blue-100 text-sm flex items-center gap-2'>
          <span className='text-yellow-300'>💰</span>
          مقدار
        </span>
        <span className='font-bold text-xl'>{dummyProperties.price?.amount.toLocaleString()}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-blue-500/30 last:border-0'>
        <span className='text-blue-100 text-sm flex items-center gap-2'>
          <span className='text-yellow-300'>🏦</span>
          واحد پولی
        </span>
        <span className='font-bold text-lg'>{dummyProperties.price?.currency}</span>
      </div>
      <div className='flex justify-between items-center py-3 border-b border-blue-500/30 last:border-0'>
        <span className='text-blue-100 text-sm flex items-center gap-2'>
          <span className='text-yellow-300'>📅</span>
          دوره پرداخت
        </span>
        <span className='font-bold text-lg'>{dummyProperties.price?.period || "یک بار"}</span>
      </div>
      <div className='flex justify-between items-center py-3'>
        <span className='text-blue-100 text-sm flex items-center gap-2'>
          <span className='text-yellow-300'>🤝</span>
          قابل مذاکره
        </span>
        <span className={`font-bold ${dummyProperties.price?.negotiable ? 'text-green-300' : 'text-red-300'}`}>
          {dummyProperties.price?.negotiable ? '✅ بلی' : '❌ نه'}
        </span>
      </div>
    </div>

  </div>
  )
}

export default Price