
// import InputField from "../inputBoxes/InputField";
import Dropzone from "../DropZone";

const Media = ({ register }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">عکس‌ها</h2>

      {/* Single file input */}
      {/* <InputField
        as="input"
        type="file"
        name="media"
        register={register}
        className="cursor-pointer"
        multiple
      /> */}
      <div>
        <Dropzone />
      </div>
    </section>
  );
};

export default Media;