
const TitleAndDesc = ({showSingleProperty}) => {
  return (
      <div className='bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 space-y-6'>

    <div className='space-y-4'>
      <h1 className='font-bold text-2xl md:text-3xl leading-10 text-right text-gray-800'>
        {showSingleProperty.title}
      </h1>

      <p className='text-gray-600 text-base md:text-lg leading-8 bg-gray-50 p-4 rounded-xl border border-gray-200 text-right'>
        {showSingleProperty.description}
      </p>
    </div>

    <div className='flex flex-wrap gap-3 pt-2'>
      <span className='bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2'>
        <span className='text-blue-500'>🏠</span>
        نوع ملک: <span className='font-bold'>آپارتمان</span>
      </span>
      <span className='bg-green-50 text-green-700 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2'>
        <span className='text-green-500'>💰</span>
        نوع معامله: <span className='font-bold'>کرایی</span>
      </span>
    </div>

  </div>
  )
}

export default TitleAndDesc;
