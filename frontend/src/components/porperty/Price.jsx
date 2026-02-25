import InputField from "../inputBoxes/InputField";

const Price = ({ register,errors }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">قیمت</h2>

      <div className="grid md:grid-cols-3 gap-4">

        {/* Amount */}
        <InputField
          name="price.amount"
          register={register}
          type="text"
          placeholder="مقدار"
          error={errors.price?.amount}
        />

        {/* Currency */}
        <InputField as="select" name="price.currency" register={register} error={errors.price?.currency}>
          <option value="">واحد پولی</option>
          <option value="afghani">افغانی</option>
          <option value="doller">دالر</option>
        </InputField>

    {/* Period */}
        <InputField as="select" name="price.period" register={register} error={errors.price?.period}>
          <option value="">زمان کرایه</option>
          <option value="daily">روزانه</option>
          <option value="monthly">ماهانه</option>
          <option value="yearly">هر سه ماه</option>
        </InputField>
        {/* negotiable */}
            {/* Period */}
        <InputField as="select" name="price.negotiable" register={register} error={errors.price?.negotiable}>
          <option value="yes">آیا قابل مذاکره </option>
          <option value="yes">بلی قابل مذاکره است</option>
          <option value="no">نخیر قابل مذاکره نیست</option>
        </InputField>

      </div>
    </section>
  );
};

export default Price;