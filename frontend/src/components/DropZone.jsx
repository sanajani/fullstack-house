import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdDelete } from "react-icons/md";

function Dropzone() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Date.now() + Math.floor(Math.random() * 1000),
      loading: true, // add loading flag
    }));

    setImages((prev) => [...prev, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: images.length > 0,
  });

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  const removeImageFromPrevAndForm = (id) => {
    const newImages = images.filter((img) => img.id !== id);
    setImages(newImages);
  };

  const handleImageLoad = (id) => {
    // simulate loading delay of 300ms
    setTimeout(() => {
      setImages((prev) =>
        prev.map((img) => (img.id === id ? { ...img, loading: false } : img))
      );
    }, 1000);
  };

  return (
    <div {...getRootProps()} className="border rounded-lg p-4 cursor-pointer">
      <input {...getInputProps()} />

      {images.length === 0 ? (
        <div className="h-60 flex items-center justify-center">
          <p>Drag & drop or click to upload</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`relative ${index === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              {/* Skeleton */}
              {img.loading && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
              )}

              {/* Image */}
              <img
                src={img.preview}
                alt="preview"
                onLoad={() => handleImageLoad(img.id)}
                className={`w-full object-cover rounded ${
                  index === 0 ? "h-[300px]" : "h-[170px]"
                } ${img.loading ? "hidden" : "block"}`}
              />

              {/* Delete button */}
              {!img.loading && (
                <button
                  type="button"
                  onClick={() => removeImageFromPrevAndForm(img.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                >
                  <MdDelete className="text-red-500" size={20} />
                </button>
              )}
            </div>
          ))}

          {/* Add new image button */}
          <button
            type="button"
            onClick={open}
            className="border flex items-center justify-center h-[170px] rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default Dropzone;