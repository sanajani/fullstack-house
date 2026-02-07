

import InputField from "../inputBoxes/InputField";

const Media = ({ register }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">عکس‌ها</h2>

      {/* Single file input */}
      <InputField
        as="input"
        type="file"
        name="media"
        register={register}
      />
    </section>
  );
};

export default Media;