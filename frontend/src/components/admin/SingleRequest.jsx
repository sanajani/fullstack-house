import { useAcceptAgentRequest } from "../../hooks/admin/useAgents";
import { formatDate } from "../../utils/dateFormat";
// import { useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-hot-toast'

const SingleRequest = ({agent, activeTab}) => {

    // const queryClient = useQueryClient();
    const {agentInfo, name, _id, phoneNumber1,createdAt , email} = agent.userId || {};
    const formattedDate = formatDate(createdAt);
    const { mutate } = useAcceptAgentRequest();

    const {agencyName, experienceYears} = agentInfo || {};

    const acceptedAsAgentFunc = (userId, name) => {
        mutate(userId, {
            onSuccess:(res) => {
                // queryClient.invalidateQueries(["agentpendingrequests"]);
                toast.success(`${name} موفقانه تبدیل ب نماینده شدن`)
            },
            onError: (err) => {
                console.log(err.res.message, 'this is error attampt');
                toast.error(err.message)
            }
        })
    }
    
  return (
    <div className="flex bg-white mx-3 my-4 flex-col p-5 rounded-md">
        <div className="flex flex-col">
            <h1 className="font-semibold">{name}</h1>
            <span className="text-[9px]">{email || 'ایمیل درج نشده'}</span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-4">
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">شماره تماس</span>
                <span>{phoneNumber1}</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">تجربه کاری</span>
                <span>{experienceYears}</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">نام دوکان</span>
                <span>{agencyName}</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">تاریخ</span>
                <span>{formattedDate}</span>
            </div>
        </div>
        <div className="flex justify-between gap-4">
           {activeTab === "pending" && <>
            <button onClick={() => acceptedAsAgentFunc(_id, name)} className="flex-1 bg-green-100 text-green-700 cursor-pointer py-4 px-2">تایید درخواست</button>
            <button className="flex-1 bg-red-100 text-red-700 cursor-pointer py-4 px-2">رد درخواست</button> 
           </>
            }
            <button className="flex-1 bg-blue-100 text-blue-700 cursor-pointer py-4 px-2">مشاهده پروفایل</button>
        </div>
    </div>  )
}

export default SingleRequest