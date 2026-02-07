import InputField from "../inputBoxes/InputField";

const BasicInfo = ({ register }) => {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      
      {/* Title */}
      <InputField
        name="title"
        register={register}
        placeholder="عنوان آگهی"
      />

      {/* Property Type */}
      <InputField as="select" name="propertyType" register={register}>
        <option value="">نوع ملک</option>
        <option value="apartment">اپارتمان</option>
        <option value="house">خانه</option>
        <option value="villa">ویلا</option>
        <option value="room">اتاق</option>
        <option value="studio">استودیو</option>
        <option value="commercial">تجاری</option>
        <option value="land">زمین</option>
      </InputField>

      {/* Description */}
      <InputField
        as="textarea"
        name="description"
        register={register}
        rows={5}
        placeholder="در مورد ملک بنویسید"
        wrapperClass="md:col-span-2"
        className="resize-none"
      />

      {/* Transaction */}
      <InputField as="select" name="transaction" register={register}>
        <option value="">نوع معامله</option>
        <option value="rent">کرایه</option>
        <option value="sell">فروش</option>
        <option value="gerawi">رهن و اجاره</option>
      </InputField>

    </section>
  );
};

export default BasicInfo;
