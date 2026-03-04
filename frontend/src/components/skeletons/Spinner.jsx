export const SpinnerGradient = () => (
  <div className="relative w-12 h-12">
    <div className="absolute w-full h-full rounded-full border-4 border-gray-100"></div>
    <div className="absolute w-full h-full rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
  </div>
);
