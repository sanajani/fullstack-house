
const CardHeader = ({name, email}) => {
  return (
    <div className="flex flex-col py-3">
        <h2 className="font-bold text-xl">{name}</h2>
        <span className="text-[10px] mt-1">{email || 'ایمیل موجود نیست'}</span>
    </div>
  )
}

export default CardHeader