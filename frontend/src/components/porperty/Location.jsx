import InputField from "../inputBoxes/InputField";
import {provinces} from '../../i18n/fa/provincesAndSelectBoxData.json'

const Location = ({ register, errors }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">موقعیت</h2>

      <div className="grid md:grid-cols-3 gap-4">

    <div className="flex flex-col">
      <select
        {...register("location.province", { 
          required: "ولایت الزامی است" // Optional validation
        })}
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">ولایت</option>
        {
          provinces.map((province) => {
            return <option key={province.value} value={province.value}>{province.label}</option>
          })
        }
      </select>
      {errors?.location?.province && (
        <span className="text-red-500 text-sm mt-1">
          {errors.location.province.message}
        </span>
      )}
    </div>


        <InputField
          name="location.city"
          register={register}
          placeholder="شهر"
          error={errors?.location?.city}

        />

        <InputField
          name="location.district"
          register={register}
          placeholder="ناحیه"
          error={errors?.location?.district}

        />

        <InputField
          name="location.streetAddress"
          register={register}
          placeholder="آدرس سرک"
          wrapperClass="md:col-span-2"
          error={errors?.location?.streetAddress}

        />

        <InputField
          name="location.landmark"
          register={register}
          error={errors?.location?.landmark}
          placeholder="نزدیک به (نقطهٔ شناخته‌شده)"
        />

      </div>
    </section>
  );
};

export default Location;
