import { HiOutlineBell } from "react-icons/hi2";

const AgentHeader = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">پنل نماینده</h1>

      <div className="flex items-center gap-4">
        <button className="relative">
          <HiOutlineBell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          AA
        </div>
      </div>
    </header>
  );
};

export default AgentHeader;