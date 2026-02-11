import { Link } from "react-router-dom";

const PropertyPreview = () => {
  return (
    <div className="p-3 border-2 m-2 mb-9 rounded-2xl border-blue-700">
      <Link to='/property/6423823422'>
      {/* iamges */}
      <div>
        <img
        className="w-full h-full object-cover cursor-pointer"
          src="https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=1200"
          alt=""
        />
      </div>
      {/* all the informations */}
      <div>
        {/* title */}
        <h1 className="font-semibold text-blue-700 my-2">
          آپارتمان ۲ خوابه در منطقه الهیه
        </h1>
        {/* descriptions */}
        <p className="my-3">
          این آپارتمان نقلی و مدرن، دارای ۲ اتاق خواب، آشپزخانه مجهز و بالکن با
          نورگیری عالی است. مناسب خانواده‌های کوچک و افرادی که دنبال آرامش در
          مرکز شهر هستند.
        </p>
        <div className="flex text-blue-800 justify-between font-bold">
          <p className="">خانه کرایی</p>
          <p>آپارتمان</p>
          <p>12000</p>
        </div>
      </div>
      </Link>

    </div>
  );
};

export default PropertyPreview;
