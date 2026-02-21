import React from 'react'

const SingleRequest = () => {
  return (
    <div className="flex bg-white mx-3 my-4 flex-col p-5 rounded-md">
        <div className="flex flex-col">
            <h1 className="font-semibold">ثناوالله</h1>
            <span className="text-[9px]">webdevfarsi@gmail.com</span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-4">
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">شماره تماس</span>
                <span>0799909329</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">تجربه کاری</span>
                <span>23 سال</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">نام دوکان</span>
                <span>رهنمایی معاملات غزنه</span>
            </div>
            <div className="flex flex-col py-4 rounded-lg justify-center bg-gray-200 items-center">
                <span className="text-[10px] mb-1 text-gray-700 ">تاریخ</span>
                <span>5/11/2026</span>
            </div>
        </div>
        <div className="flex justify-between gap-4">
            <button className="flex-1 bg-green-100 text-green-700 cursor-pointer py-4 px-2">تایید درخواست</button>
            <button className="flex-1 bg-red-100 text-red-700 cursor-pointer py-4 px-2">رد درخواست</button>
            <button className="flex-1 bg-blue-100 text-blue-700 cursor-pointer py-4 px-2">مشاهده پروفایل</button>
        </div>
    </div>  )
}

export default SingleRequest