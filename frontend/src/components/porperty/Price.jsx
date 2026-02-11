// import FormFieldNoLabel from "../inputBoxes/FormFieldNoLabel"

// const Price = () => {
//   return (
//         <section className="space-y-3">
//           <h2 className="font-semibold text-lg text-gray-700">قیمت</h2>
//           <div className="grid md:grid-cols-3 gap-4">
//             <FormFieldNoLabel>
//                 <input type="number" className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded-lg p-2" placeholder="مقدار" />
//             </FormFieldNoLabel>
//             <FormFieldNoLabel>    
//             <select className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded-lg p-2">
//               <option>واحد پولی</option>
//             </select>
//             </FormFieldNoLabel>
//             <FormFieldNoLabel>
//                 <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded-lg p-2" placeholder="زمان کرایه" />
//             </FormFieldNoLabel>
//           </div>
//         </section>
//   )
// }

// export default Price

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
          <option value="dollar">دالر</option>
        </InputField>

    {/* Period */}
        <InputField as="select" name="price.period" register={register} error={errors.price?.period}>
          <option value="">زمان کرایه</option>
          <option value="daily">روزانه</option>
          <option value="monthly">ماهانه</option>
          <option value="3 month">هر سه ماه</option>
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