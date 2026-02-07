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
          type="number"
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
        <InputField
          name="price.period"
          register={register}
          placeholder="زمان کرایه"
          error={errors.price?.period}
        />
        
        {/* negotiable */}
        <InputField
          name="price.negotiable"
          register={register}
          placeholder="ایا قابل مذاکره است؟"
          error={errors.price?.negotiable}
        />

      </div>
    </section>
  );
};

export default Price;