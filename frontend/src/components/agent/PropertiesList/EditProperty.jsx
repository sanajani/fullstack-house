import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect, useState, useCallback } from "react";

import { useSinglePropertyByAgentById, useUpdateProperty } from "../../../hooks/agent/useAgentDashboardProperties";
// import { propertySchema } from "../../../utils/zodSchema";
import { buildPropertyFormData } from "../../../utils/formdata";
import BasicInfo from "../../porperty/BasicInfo";
import Location from "../../porperty/Location";
import Media from "../../porperty/Media";
import Details from "../../porperty/Details";
import AddAmenities from "../../porperty/AddAmenities";
import Price from "../../porperty/Price";
import toast from "react-hot-toast";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dropzoneRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isDataPrefilled, setIsDataPrefilled] = useState(false);

  // Fetch existing property
  const { data: propertyResponse, isLoading, isError, error } = useSinglePropertyByAgentById(id);
  const property = propertyResponse?.data;

  // Update mutation
  const { mutate } = useUpdateProperty();

  // React Hook Form
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    // resolver: zodResolver(propertySchema),
    defaultValues: {
      title: "",
      propertyType: "",
      description: "",
      transaction: "",
      location: {
        province: "",
        city: "",
        district: "",
        streetAddress: "",
        landmark: "",
      },
      details: {
        bedroom: "",
        bathroom: "",
        area: "",
        floor: "",
        totalFloor: "",
        yearBuild: "",
        furniture: false,
        parking: false,
      },
      price: {
        amount: "",
        currency: "afghani",
        period: "",
        negotiable: false,
      },
      amenities: [],
      media: [],
    },
  });

  // Cleanup function for object URLs
  const cleanupObjectUrls = useCallback((images) => {
    if (images && Array.isArray(images)) {
      images.forEach(img => {
        if (img.preview && img.preview.startsWith('blob:')) {
          URL.revokeObjectURL(img.preview);
        }
      });
    }
  }, []);

  // Prefill form once property is fetched
  useEffect(() => {
    if (property && !isDataPrefilled) {
      console.log("Prefilling form with property data:", property);
      
      // 1. Reset form with property data
      reset({
        title: property.title || "",
        propertyType: property.propertyType || "",
        description: property.description || "",
        transaction: property.dealType || "",
        location: {
          province: property.location?.province || "",
          city: property.location?.city || "",
          district: property.location?.district || "",
          streetAddress: property.location?.streetAddress || "",
          landmark: property.location?.landmark || "",
        },
        details: {
          bedroom: property.details?.bedroom?.toString() || "",
          bathroom: property.details?.bathroom?.toString() || "",
          area: property.details?.area?.toString() || "",
          floor: property.details?.floor?.toString() || "",
          totalFloor: property.details?.totalFloor?.toString() || "",
          yearBuild: property.details?.yearBuild?.toString() || "",
          furniture: property.details?.furniture || false,
          parking: property.details?.parking || false,
        },
        price: {
          amount: property.price?.amount?.toString() || "",
          currency: property.price?.currency || "afghani",
          period: property.price?.period || "",
          negotiable: property.price?.negotiable || false,
        },
        amenities: property.amenities || [],
        media: property.media || [],
      });

      // 2. Prefill Dropzone with existing images
      if (dropzoneRef.current && property.media?.length > 0) {
        // Clean up any existing previews first
        const currentImages = dropzoneRef.current.getImages?.() || [];
        cleanupObjectUrls(currentImages);

        // Format images for Dropzone
        const dropzoneImages = property.media.map(img => ({
          url: img.url,
          public_id: img.public_id,
          caption: img.caption || "",
          isPrimary: img.isPrimary || false,
          file: null,
          preview: img.url, // Use the URL directly for server images
          loading: false,
          isExisting: true, // Flag to identify existing images
        }));

        // Set images in dropzone
        if (typeof dropzoneRef.current.setImages === 'function') {
          dropzoneRef.current.setImages(dropzoneImages);
        } else if (dropzoneRef.current.images) {
          // If dropzone uses a state setter
          dropzoneRef.current.images.setValue(dropzoneImages);
        }
      }

      setIsDataPrefilled(true);
    }

    // Cleanup function
    return () => {
      if (dropzoneRef.current) {
        const images = dropzoneRef.current.getImages?.() || [];
        cleanupObjectUrls(images);
      }
    };
  }, [property, reset, cleanupObjectUrls, isDataPrefilled]);

  // Handle error when property fetch fails
  useEffect(() => {
    if (isError) {
      console.error("Error fetching property:", error);
      toast.error("خطا در دریافت اطلاعات ملک");
    }
  }, [isError, error]);

  const onSubmit = async (formData) => {
    console.log("Submitting form with data:", formData);
    setLoading(true);

    try {
      // Get images from dropzone
      const imagesWithFiles = dropzoneRef.current?.getImages?.() || [];
      
      // Separate existing images and new files
      const existingImages = imagesWithFiles.filter(img => img.isExisting);
      const newFiles = imagesWithFiles.filter(img => img.file instanceof File);
      
      console.log("Existing images:", existingImages.length);
      console.log("New files:", newFiles.length);

      // Build FormData payload
      const payload = buildPropertyFormData(formData, newFiles, existingImages);

      mutate({ propertyId: id, data: payload }, {
        onSuccess: (response) => {
          setLoading(false);
          toast.success("ملک با موفقیت آپدیت شد");
          navigate('/dashboard/agent', { replace: true });
        },
        onError: (err) => {
          setLoading(false);
          console.error("Update error:", err.response?.data);
          toast.error(err.response?.data?.message || "خطا در آپدیت ملک");
        }
      });
    } catch (error) {
      setLoading(false);
      console.error("Form submission error:", error);
      toast.error("خطا در ارسال فرم");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <h1 className="mt-4 text-lg text-gray-700">در حال بارگذاری اطلاعات ملک...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-xl text-red-500 mb-4">خطا در دریافت اطلاعات ملک</h1>
          <p className="text-gray-600 mb-4">لطفاً دوباره تلاش کنید</p>
          <button 
            onClick={() => navigate('/dashboard/agent')}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
          >
            بازگشت به داشبورد
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center md:p-6">
      <form 
        className="w-full md:max-w-5xl bg-white shadow-2xl rounded-xl p-3 md:p-6 space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="md:text-2xl text-lg font-bold text-white bg-blue-700 p-3 rounded-lg">
          ویرایش خانه
        </h1>

        <BasicInfo register={register} errors={errors} />
        <Location register={register} errors={errors} />
        <Media control={control} errors={errors} dropzoneRef={dropzoneRef} />
        <Details register={register} errors={errors} />
        <AddAmenities control={control} />
        <Price register={register} errors={errors} />

        <button 
          className={`w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer transition-all duration-200 ${
            loading ? "opacity-50 cursor-not-allowed bg-blue-500" : ""
          }`}
          disabled={loading} 
          type="submit"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              در حال پردازش...
            </span>
          ) : (
            "به‌روزرسانی ملک"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProperty;