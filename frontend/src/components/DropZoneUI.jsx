
// import { useCallback, useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import ImageCard from "./dropZone/ImageCard";
// import AddImageButton from "./dropZone/AddImageButton";
// import toast from "react-hot-toast";
// import { LuImagePlus } from "react-icons/lu";

// function DropzoneUI({ field, errors }) {
//   const { value = [], onChange } = field;
  
//   const [images, setImages] = useState([]);
//   const [hasSizeError, setHasSizeError] = useState(false);

//   // ✅ FIX: Move ALL logic OUTSIDE the setImages updater
//   const onDrop = useCallback((acceptedFiles) => {
//     // 1. Calculate everything FIRST (this runs in event handler, not during render)
//     const remainingSlots = 30 - images.length;
    
//     if (remainingSlots <= 0) {
//       toast.error("حداکثر 30 عکس می‌توانید آپلود کنید");
//       return;
//     }

//     const filesToAdd = acceptedFiles.slice(0, remainingSlots);
//     const hasLargeFile = filesToAdd.some(file => (file.size / 1024 / 1024) > 2);
    
//     // 2. Create new images array
//     const newImages = filesToAdd
//       .filter(file => (file.size / 1024 / 1024) <= 2)
//       .map((file) => ({
//         file,
//         preview: URL.createObjectURL(file),
//         public_id: Date.now() + Math.floor(Math.random() * 1000),
//         loading: true,
//         caption: "One of the beautiest house in the market",
//         isPrimary: false,
//       }));

//     // 3. Update ALL state AFTER calculations (these run after render)
//     if (newImages.length > 0) {
//       setImages([...images, ...newImages]);
//       onChange([...value, ...newImages]); // ← Now safe! Not inside updater
//     }
    
//     setHasSizeError(hasLargeFile); // ← Also safe

//   }, [images, value, onChange]); // ← Now depends on images (this is fine)

//   const { getRootProps, getInputProps, open } = useDropzone({
//     onDrop,
//     noClick: images.length > 0,
//   });

//   // Cleanup object URLs
//   useEffect(() => {
//     return () => {
//       images.forEach((img) => {
//         if (img.preview) URL.revokeObjectURL(img.preview);
//       });
//     };
//   }, [images]);

//   const removeImageFromPrevAndForm = (public_id) => {
//     const newImages = images.filter((img) => img.public_id !== public_id);
//     setImages(newImages);
//     onChange(newImages); // ← This is fine (called in event handler)
//   };

//   const handleImageLoad = (public_id) => {
//     setTimeout(() => {
//       setImages((prev) =>
//         prev.map((img) => 
//           img.public_id === public_id ? { ...img, loading: false } : img
//         )
//       );
//     }, 1000);
//   };

//   return (
//     <div {...getRootProps()} className="border rounded-lg p-4 cursor-pointer ring-2 ring-blue-600 focus:ring-blue-600 transition-colors duration-200">
//       <input {...getInputProps()} name="media" />
      
//       {images.length === 0 ? (
//         <div className="h-60 flex items-center justify-center">
//           <div className="w-full h-full flex flex-col items-center justify-center rounded-lg">
//             <LuImagePlus className="text-blue-600" size={108} />
//             <p className="text-gray-600 mt-2 text-sm">
//               برای آپلود عکس کلیک کنید <span className="text-blue-700">یا فایل تان را بکشید</span>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-2">
//           {images.map((img, index) => (
//             <ImageCard 
//               key={img.public_id} 
//               img={img} 
//               index={index} 
//               onRemove={removeImageFromPrevAndForm} 
//               onLoad={handleImageLoad} 
//             />
//           ))}
//           {images.length < 30 && <AddImageButton open={open} />}
//         </div>
//       )}
      
//       {hasSizeError && (
//         <p className="text-red-500 mt-2">هر عکس باید کمتر از 2 مگابایت باشد</p>
//       )}
//       {errors?.media && (
//         <p className="text-red-500 mt-2 text-sm">{errors.media.message}</p>
//       )}
//     </div>
//   );
// }

// export default DropzoneUI;

import { useCallback, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { useDropzone } from "react-dropzone";
import ImageCard from "./dropZone/ImageCard";
import AddImageButton from "./dropZone/AddImageButton";
import toast from "react-hot-toast";
import { LuImagePlus } from "react-icons/lu";

const DropzoneUI = forwardRef(({ field, errors }, ref) => {
  const { value = [], onChange } = field;
  
  const [images, setImages] = useState([]); // Local state WITH file objects
  const [hasSizeError, setHasSizeError] = useState(false);

  // Expose images to parent component via ref
  useImperativeHandle(ref, () => ({
    getImages: () => images
  }));

  const onDrop = useCallback((acceptedFiles) => {
    const remainingSlots = 30 - images.length;
    
    if (remainingSlots <= 0) {
      toast.error("حداکثر 30 عکس می‌توانید آپلود کنید");
      return;
    }

    const filesToAdd = acceptedFiles.slice(0, remainingSlots);
    const hasLargeFile = filesToAdd.some(file => (file.size / 1024 / 1024) > 2);
    
    // Create full objects for LOCAL state (WITH files)
    const newImages = filesToAdd
      .filter(file => (file.size / 1024 / 1024) <= 2)
      .map((file) => ({
        file,        // ← Keep for local state
        preview: URL.createObjectURL(file),
        public_id: Date.now() + Math.floor(Math.random() * 1000),
        loading: true,
        caption: "One of the beautiest house in the market",
        isPrimary: false,
      }));

    // Create METADATA ONLY for React Hook Form (NO files)
    const newMetadata = newImages.map(({ file, preview, loading, ...metadata }) => ({
      ...metadata  // ← Only public_id, caption, isPrimary
    }));

    if (newImages.length > 0) {
      // Update local state (WITH files)
      setImages([...images, ...newImages]);
      
      // Update RHF with METADATA ONLY (NO files)
      onChange([...value, ...newMetadata]);
    }
    
    setHasSizeError(hasLargeFile);

  }, [images, value, onChange]);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: images.length > 0,
  });

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  const removeImageFromPrevAndForm = (public_id) => {
    // Remove from local state (with files)
    const newImages = images.filter((img) => img.public_id !== public_id);
    setImages(newImages);
    
    // Remove from RHF state (metadata only)
    const newMetadata = value.filter((item) => item.public_id !== public_id);
    onChange(newMetadata);
  };

  const handleImageLoad = (public_id) => {
    setTimeout(() => {
      setImages((prev) =>
        prev.map((img) => 
          img.public_id === public_id ? { ...img, loading: false } : img
        )
      );
    }, 1000);
  };

  return (
    <div {...getRootProps()} className="border rounded-lg p-4 cursor-pointer ring-2 ring-blue-600 focus:ring-blue-600 transition-colors duration-200">
      <input {...getInputProps()} name="media" />
      
      {images.length === 0 ? (
        <div className="h-60 flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center rounded-lg">
            <LuImagePlus className="text-blue-600" size={108} />
            <p className="text-gray-600 mt-2 text-sm">
              برای آپلود عکس کلیک کنید <span className="text-blue-700">یا فایل تان را بکشید</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {images.map((img, index) => (
            <ImageCard 
              key={img.public_id} 
              img={img} 
              index={index} 
              onRemove={removeImageFromPrevAndForm} 
              onLoad={handleImageLoad} 
            />
          ))}
          {images.length < 30 && <AddImageButton open={open} />}
        </div>
      )}
      
      {hasSizeError && (
        <p className="text-red-500 mt-2">هر عکس باید کمتر از 2 مگابایت باشد</p>
      )}
      {errors?.media && (
        <p className="text-red-500 mt-2 text-sm">{errors.media.message}</p>
      )}
    </div>
  );
});

export default DropzoneUI;