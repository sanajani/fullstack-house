
const AddImageButton = ({ open }) => {
  return (
          <button
            type="button"
            onClick={open}
            className="border flex items-center justify-center h-[170px] rounded cursor-pointer text-2xl text-gray-500 hover:bg-gray-100 transition-colors duration-200"
          >
            +
          </button>  )
}

export default AddImageButton