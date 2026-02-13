
// import InputField from "../inputBoxes/InputField";
import DropZone from "../DropZone";

const Media = ({ control,errors }) => {
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-700">عکس‌ها</h2>
      <div>
        <DropZone control={control} errors={errors} />
      </div>
    </section>
  );
};

export default Media;
