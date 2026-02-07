import InputField from "../inputBoxes/InputField";

const Location = ({ register }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">موقعیت</h2>

      <div className="grid md:grid-cols-3 gap-4">

        <InputField
          name="province"
          register={register}
          placeholder="ولایت"
        />

        <InputField
          name="city"
          register={register}
          placeholder="شهر"
        />

        <InputField
          name="district"
          register={register}
          placeholder="ناحیه"
        />

        <InputField
          name="streetAddress"
          register={register}
          placeholder="آدرس سرک"
          wrapperClass="md:col-span-2"
        />

        <InputField
          name="landmark"
          register={register}
          placeholder="نزدیک به (نقطهٔ شناخته‌شده)"
        />

      </div>
    </section>
  );
};

export default Location;
