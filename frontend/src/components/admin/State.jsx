
const State = ({stats}) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 p-2 text-center">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <div
                className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2 text-right">
              {stat.change} نسبت به دیروز
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default State;
