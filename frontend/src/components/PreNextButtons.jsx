import React from 'react'

const PreNextButtons = ({page, pages, nextPage, prePage}) => {
  return (
        <div className="flex justify-evenly mb-20" >
          <span className={`block px-4 py-1 rounded-lg font-bold cursor-pointer hover:bg-blue-800 bg-blue-700 text-white ${page === pages ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={nextPage}>صفحه بعد</span>
          <span className="bg-gray-200 px-4 py-1 rounded-md font-bold">{pages} / {page}</span> 
          <span className={`block px-4 py-1 rounded-lg font-bold cursor-pointer hover:bg-blue-800 bg-blue-700 text-white ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={prePage}>صفحه قبل</span>
        </div>  )
}

export default PreNextButtons