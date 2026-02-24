const amenityMap = {
  parking: { label: "پارکینگ", icon: "🚗" },
  elevator: { label: "آسانسور", icon: "⬆️" },
  security: { label: "نگهبانی", icon: "🛡️" },
  garden: { label: "باغ", icon: "🌳" },
  pool: { label: "استخر", icon: "🏊" },
  balcony: { label: "بالکن", icon: "🌆" },
  ac: { label: "کولر", icon: "❄️" },
  heating: { label: "سیستم گرمایشی", icon: "🔥" },
  internet: { label: "اینترنت", icon: "🌐" },
  calble_tv: { label: "تلویزیون کابلی", icon: "📺" },
  pet_friendly: { label: "مناسب حیوانات خانگی", icon: "🐾" },
  furniture: { label: "مبله", icon: "🛋️" },
};

const Amenities = ({ showSingleProperty }) => {
  
  const amenities = showSingleProperty?.amenities || [];

  if (!amenities.length) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] space-y-5">
      
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
        <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
          <span className="text-purple-500">✨</span>
          امکانات
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {amenities.map((item) => {
          const amenity = amenityMap[item];
          if (!amenity) return null;

          return (
            <span
              key={item}
              className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 border border-blue-200 shadow-sm"
            >
              <span className="text-blue-600">{amenity.icon}</span>
              {amenity.label}
            </span>
          );
        })}
      </div>

    </div>
  );
};

export default Amenities;