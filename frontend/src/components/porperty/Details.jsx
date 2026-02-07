import InputField from "../inputBoxes/InputField";

const Details = ({ register }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">معلومات</h2>

      <div className="grid md:grid-cols-3 gap-4">

        <InputField
          type="number"
          name="bedroom"
          register={register}
          placeholder="تعداد اتاق خواب"
        />

        <InputField
          type="number"
          name="bathroom"
          register={register}
          placeholder="تعداد حمام"
        />

        <InputField
          type="number"
          name="area"
          register={register}
          placeholder="متراژ"
        />

        <InputField
          type="number"
          name="floor"
          register={register}
          placeholder="منزل"
        />

        <InputField
          type="number"
          name="totalFloor"
          register={register}
          placeholder="کل منزل‌ها"
        />

        <InputField
          type="number"
          name="yearBuild"
          register={register}
          placeholder="سال تأسیس"
        />

      </div>
    </section>
  );
};

export default Details;