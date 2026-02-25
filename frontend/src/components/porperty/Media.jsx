import DropZone from "../DropZone";
const Media = ({ errors, control, dropzoneRef }) => {
  return (
    <div className="border border-blue-600 p-3 md:p-6 rounded-2xl space-y-4">
      <h2 className="text-lg font-semibold text-blue-700">عکس‌ها</h2>
      <DropZone control={control} errors={errors} dropzoneRef={dropzoneRef} />
    </div>
  );
};

export default Media;