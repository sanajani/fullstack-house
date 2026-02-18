import React from 'react'

const AgentInfo = (showSingleProperty) => {
  return (
      <div className='bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'>
    <div className='flex items-center justify-between'>
      <div className='text-right'>
        <div className='text-sm text-gray-500 mb-1'>پوست کننده</div>
        <div className='font-medium text-gray-800'>{showSingleProperty.agent}</div>
      </div>
      <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold'>
        👤
      </div>
    </div>
  </div>
  )
}

export default AgentInfo