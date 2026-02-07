import BasicInfo from "../components/porperty/BasicInfo";
import Details from "../components/porperty/Details";
import Location from "../components/porperty/Location";
import Media from "../components/porperty/Media";
import Price from "../components/porperty/Price";

const CreateProperty = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center md:p-6">
      <div className="w-full md:max-w-5xl bg-white shadow-2xl rounded-xl p-3 md:p-6 space-y-4 md:space-y-6">
        
        <h1 className="md:text-2xl text-lg font-bold text-white bg-blue-700 p-3 rounded-lg">اضافه کردن خانه</h1>

        {/* Basic Info */}
        <BasicInfo/>

        {/* Location */}
        <Location/>

        {/* Details */}
        <Details/>

        {/* Price */}
        <Price/>

        {/* Media */}
        <Media />

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90">
          Submit Property
        </button>
      </div>
    </div>
  );
}

export default CreateProperty;
