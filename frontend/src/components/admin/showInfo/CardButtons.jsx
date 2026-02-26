
const CardButtons = () => {
  return (
    <div className="flex justify-between my-5 text-base gap-3">
        <button className="bg-blue-50 font-bold text-blue-400 p-1 flex-1 cursor-pointer">مشاهده</button>
        <button className="flex-1 bg-red-50 text-red-500 cursor-pointer p-1">مسدود</button>
    </div>
  )
}

export default CardButtons;
