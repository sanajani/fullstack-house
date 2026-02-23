
// import { useCallback, useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import ImageCard from "./dropZone/ImageCard";
// import AddImageButton from "./dropZone/AddImageButton";
// import toast from "react-hot-toast";
// import { LuImagePlus } from "react-icons/lu";


// function DropzoneUI({ field, errors }) {
  
//   const {value=[], onChange} = field;
  
//   const [images, setImages] = useState([]);
//   const [hasSizeError, setHasSizeError] = useState(false);

// // dropzone onDrop handler
//   const onDrop = useCallback((acceptedFiles) => {
    
//     // Calculate how many more images we can add
//     const remainingSlots = 30 - images.length;
    
//     if (remainingSlots <= 0) {
//         toast.error("حداکثر ۴ عکس می‌توانید آپلود کنید");
//       // alert("شما فقط می توانید 4 عکس آپلود کنید"); // You can only upload 4 images
//       return;
//     }

//     // Only take the first 'remainingSlots' images
//     const filesToAdd = acceptedFiles.slice(0, remainingSlots);

//         // Check if ANY file is too large
//     const hasLargeFile = filesToAdd.some(file => (file.size / 1024 / 1024) > 2);
//     // hasLargeFile && toast.error("هر عکس باید کمتر از 2 مگابایت باشد");
//     if (hasLargeFile) {
//       // alert("هر عکس باید کمتر از 2 مگابایت باشد"); // Each image must be less than 2MB
//       toast.error("هر عکس باید کمتر از 2 مگابایت باشد");
//     }

//     setHasSizeError(hasLargeFile);

//     const newImages = filesToAdd
//     .filter(file =>  (file.size / 1024 / 1024) <= 2)
//     .map((url) => ({
//         url,
//         preview: URL.createObjectURL(url),
//         public_id: Date.now() + Math.floor(Math.random() * 1000),
//         loading: true, // add loading flag
//         caption: url.caption || "One of the beautiest house in the market", // default caption
//         isPrimary: url.isPrimary || false, // default primary flag
//       }));

//     setImages((prev) => [...prev, ...newImages]);
    
//     onChange([...value, ...newImages]);

//   }, [images.length, value, onChange]);
  
//   // id
//   const { getRootProps, getInputProps, open } = useDropzone({
//     onDrop,
//     noClick: images.length > 0,
//     // Remove maxFiles or set it higher to allow selecting more than 4
//     // maxFiles: 10, // You can set this higher if you want
//   });

//   useEffect(() => {
//     return () => {
//       images.forEach((img) => URL.revokeObjectURL(img.preview));
//     };
//   }, [images]);

//   const removeImageFromPrevAndForm = (public_id) => {
//     const newImages = images.filter((img) => img.public_id !== public_id);
//     setImages(newImages);
//     onChange(newImages);
//   };

//   const handleImageLoad = (public_id) => {
//     // simulate loading delay of 300ms
//     setTimeout(() => {
//       setImages((prev) =>
//         prev.map((img) => (img.public_id === public_id ? { ...img, loading: false } : img))
//       );
//     }, 1000);
//   };

//   return (
//     <div {...getRootProps()} className="border rounded-lg p-4 cursor-pointer ring-2 ring-blue-600  focus:ring-blue-600 transition-colors duration-200">
//       <input {...getInputProps()} name="media" error={errors?.media} />

//       {images.length === 0 ? (
//         <div className="h-60 flex items-center justify-center">
//           <div className="w-full h-full flex flex-col items-center justify-center rounded-lg">
//               <LuImagePlus className="text-blue-600" size={108} />
//               <p className="text-gray-600 mt-2 text-sm">برای آپلود عکس کلیک کنید <span className="text-blue-700">یا فایل تان را بکشید</span></p>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-2">
//           {images.map((img, index) => (
//              <ImageCard key={img.public_id} img={img} index={index} onRemove={removeImageFromPrevAndForm} onLoad={handleImageLoad} />
//           ))}

//           {/* Only show AddImageButton if less than 4 images */}
//           {images.length < 30 && <AddImageButton open={open} />}
//         </div>
//       )}
//       {hasSizeError && <p className="text-red-500 mt-2">هر عکس باید کمتر از 2 مگابایت باشد</p>}
//       {errors?.media && (
//         <p className="text-red-500 mt-2 text-sm">{errors?.media?.message}</p>
//       )}
//     </div>
//   );
// }

// export default DropzoneUI;

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageCard from "./dropZone/ImageCard";
import AddImageButton from "./dropZone/AddImageButton";
import toast from "react-hot-toast";
import { LuImagePlus } from "react-icons/lu";

function DropzoneUI({ field, errors }) {
  const { value = [], onChange } = field;
  
  const [images, setImages] = useState([]);
  const [hasSizeError, setHasSizeError] = useState(false);

  // ✅ FIX: Use functional update to remove images.length dependency
  const onDrop = useCallback((acceptedFiles) => {
    setImages(prevImages => {
      const remainingSlots = 30 - prevImages.length;
      
      if (remainingSlots <= 0) {
        toast.error("حداکثر 30 عکس می‌توانید آپلود کنید");
        return prevImages;
      }

      const filesToAdd = acceptedFiles.slice(0, remainingSlots);
      const hasLargeFile = filesToAdd.some(file => (file.size / 1024 / 1024) > 2);
      
      if (hasLargeFile) {
        toast.error("هر عکس باید کمتر از 2 مگابایت باشد");
        setHasSizeError(true);
      } else {
        setHasSizeError(false);
      }

      const newImages = filesToAdd
        .filter(file => (file.size / 1024 / 1024) <= 2)
        .map((file) => ({
          file,
          preview: URL.createObjectURL(file),
          public_id: Date.now() + Math.floor(Math.random() * 1000),
          loading: true,
          caption: "One of the beautiest house in the market",
          isPrimary: false,
        }));

      // Update form state with new images
      onChange([...value, ...newImages]);
      
      return [...prevImages, ...newImages];
    });
  }, [value, onChange]); // ✅ Only value and onChange - images.length removed!

  // useDropzone now gets a stable onDrop function
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,  // ← This is stable between renders
    noClick: images.length > 0,  // ← This can change, it's fine
  });

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  const removeImageFromPrevAndForm = (public_id) => {
    setImages(prev => {
      const newImages = prev.filter((img) => img.public_id !== public_id);
      onChange(newImages);
      return newImages;
    });
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
}

export default DropzoneUI;