import InputField from "../inputBoxes/InputField";

const Details = ({ register, errors }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">معلومات</h2>

      <div className="grid md:grid-cols-3 gap-4">

        <InputField
          type="text"
          name="details.bedroom"
          register={register}
          placeholder="تعداد اتاق خواب"
          error={errors.details?.bedroom}
        />

        <InputField
          type="text"
          name="details.bathroom"
          register={register}
          placeholder="تعداد حمام"
          error={errors.details?.bathroom}

        />

        <InputField
          name="details.area"
          register={register}
          placeholder="متراژ"
          error={errors.details?.area}

        />

        <InputField
          type="text"
          name="details.floor"
          register={register}
          placeholder="منزل"
          error={errors.details?.floor}

        />

        <InputField
          type="text"
          name="details.totalFloor"
          register={register}
          error={errors.details?.totalFloor}
          placeholder="کل منزل‌ها"
        />

        <InputField
          name="details.yearBuild"
          register={register}
          placeholder="سال تأسیس"
          error={errors.details?.yearBuild}

        />

      </div>
    </section>
  );
};

export default Details;