const CardBody = ({ info }) => {

  return (
    <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 gap-4">
      {info?.map(({ label, value }, index) => {
        return (
          <div
            key={index}
            className="bg-gray-100 flex justify-center items-center flex-col py-2 rounded-md"
          >
            <span className="text-sm text-gray-500">{label}</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CardBody;
