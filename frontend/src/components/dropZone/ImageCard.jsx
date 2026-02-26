import { MdDelete } from "react-icons/md";

function ImageCard({ img, index, onRemove, onLoad }) {
    
  return (
    <div
      className={`relative ${index === 0 ? "col-span-2 row-span-2" : ""}`}
    >
      {img.loading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
      )}

      <img
        src={img.preview}
        alt="preview"
        onLoad={() => onLoad(img.public_id)}
        className={`w-full object-cover border rounded hover:opacity-60 ${
          index === 0 ? "h-[300px]" : "h-[170px]"
        } ${img.loading ? "opacity-0" : "opacity-100"}`}
      />

      {!img.loading && (
        <button
          type="button"
          onClick={() => onRemove(img.public_id)}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
        >
          <MdDelete className="text-red-500 cursor-pointer" size={24} />
        </button>
      )}
    </div>
  );
}

export default ImageCard;