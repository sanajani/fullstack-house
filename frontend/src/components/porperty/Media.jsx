
// // import InputField from "../inputBoxes/InputField";
// import DropZone from "../DropZone";

// const Media = ({ control,errors }) => {
//   return (
//     <section className="space-y-3">
//       <h2 className="font-semibold text-lg text-gray-700">عکس‌ها</h2>
//       <div>
//         <DropZone control={control} errors={errors} />
//       </div>
//     </section>
//   );
// };

// export default Media;

// import DropZone from "./DropZone";
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