import { useParams } from "react-router-dom";
import { useSinglePropertyByAgentById } from "../../../hooks/agent/useAgentDashboardProperties";

const ShowSinglePropertyToAgent = () => {
  const { id } = useParams();

  // Fetch property using React Query hook
  const { data: response, isLoading, isError } = useSinglePropertyByAgentById(id);

  // The actual property object is inside response.data
  const property = response?.data || {};

  if (isLoading)
    return <h1 className="text-center mt-10">در حال بارگذاری اطلاعات ملک...</h1>;
  if (isError)
    return <h1 className="text-center mt-10 text-red-500">خطا در دریافت اطلاعات ملک</h1>;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">

      {/* عنوان ملک */}
      <h1 className="text-3xl font-bold text-blue-700">{property.title}</h1>

      {/* تصویر اصلی */}
      {property.media?.length > 0 && (
        <img
          src={property.media.find(img => img.isPrimary)?.url || property.media[0]?.url}
          alt="تصویر ملک"
          className="w-full h-96 object-cover rounded-xl shadow"
        />
      )}

      {/* توضیحات */}
      <div>
        <h2 className="text-xl font-semibold mb-2">توضیحات</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* اطلاعات کلی */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
        <div><strong>نوع ملک:</strong> {property.propertyType}</div>
        <div><strong>نوع معامله:</strong> {property.dealType}</div>
        <div><strong>وضعیت:</strong> {property.status}</div>
        <div><strong>تعداد بازدید:</strong> {property.views}</div>
        <div><strong>سال ساخت:</strong> {property.details?.yearBuild || "-"}</div>
        <div><strong>قیمت:</strong> {property.price?.amount} {property.price?.currency}</div>
      </div>

      {/* موقعیت ملک */}
      <div>
        <h2 className="text-xl font-semibold mb-2">موقعیت</h2>
        <p>
          {property.location?.province}، {property.location?.city}، {property.location?.district}، {property.location?.streetAddress}
        </p>
        <p className="text-gray-600">نشانه: {property.location?.landmark}</p>
      </div>

      {/* جزئیات ملک */}
      <div>
        <h2 className="text-xl font-semibold mb-2">جزئیات ملک</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>اتاق خواب: {property.details?.bedroom}</div>
          <div>حمام: {property.details?.bathroom}</div>
          <div>مساحت: {property.details?.area || "-"}</div>
          <div>طبقه: {property.details?.floor || "-"}</div>
          <div>پارکینگ: {property.details?.parking ? "دارد" : "ندارد"}</div>
          <div>مبله: {property.details?.furniture ? "بله" : "خیر"}</div>
        </div>
      </div>

      {/* امکانات */}
      {property.amenities?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">امکانات</h2>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* تصاویر دیگر */}
      {property.media?.length > 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">تصاویر دیگر</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.media.map((img) => (
              <img
                key={img.public_id}
                src={img.url}
                alt={img.caption}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ShowSinglePropertyToAgent;
