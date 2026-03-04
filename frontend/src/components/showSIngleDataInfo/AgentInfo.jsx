import { Link } from "react-router-dom";

import WhatsappActionCall from "./WhatsappActionCall";

const AgentInfo = ({agentData}) => {
  const {name, agentInfo, phoneNumber1} = agentData?.agent;
  console.log(agentData);
  
  
  return (
      <div className='bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'>
    <div className='flex items-center justify-between'>
      <div className='text-right'>
        <div className="mb-2">
          <div className='text-sm text-gray-500 mb-1'>پوست کننده</div>
          <div className='font-medium text-gray-800'>{name}</div>
        </div>
        <div>
          <div className='text-sm text-gray-500 mb-1'>دفتر معاملات</div>
          <div className='font-medium text-gray-800'>{agentInfo?.agencyName}</div>
        </div>
      </div>
      <WhatsappActionCall phoneNumber1={phoneNumber1} propertyData={agentData} />
    </div>
  </div>
  )
}

      // <div className=' absolute bottom-24 right-10 p-4 border rounded-full text-3xl bg-green-800 text-white cursor-pointer'>
    
      // </div>

export default AgentInfo