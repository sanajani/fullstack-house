import InputField from "../inputBoxes/InputField";

const Location = ({ register, errors }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">موقعیت</h2>

      <div className="grid md:grid-cols-3 gap-4">

        <InputField
          name="location.province"
          register={register}
          placeholder="ولایت"
          error={errors?.location?.province}
        />

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
