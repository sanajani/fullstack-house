export const PropertyCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    {/* Image placeholder */}
    <div className="w-full h-64 bg-gray-200 animate-pulse" />
    
    {/* Content placeholders */}
    <div className="p-5 space-y-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
      <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3" />
    </div>
  </div>
);
