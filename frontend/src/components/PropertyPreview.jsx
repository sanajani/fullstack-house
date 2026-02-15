import { Link } from "react-router-dom";

const PropertyPreview = ({property}) => {
  // console.log('preview ',;
  
  return (
    <div className="p-3 border-2 m-2 mb-9 rounded-2xl border-blue-700">
      <Link to={`/property/${property._id}`}>
      {/* iamges */}
      <div>
        <img
        className="w-full h-full object-cover cursor-pointer"
          src={ property.media[0].url ||"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"}
          alt=""
        />
      </div>
      {/* all the informations */}
      <div>
        {/* title */}
        <h1 className="font-semibold text-blue-700 my-2">
          {property.title}
        </h1>
        {/* descriptions */}
        <p className="my-3">
          {property.description.length > 100
            ? property.description.substring(0, 100) + "..."
            : property.description}
        </p>
        <div className="flex text-blue-800 justify-between font-bold">
          <p className="">{property.location.city}</p>
          <p>{property.transaction}</p>
          <p>{property.price.amount}</p>
        </div>
      </div>
      </Link>

    </div>
  );
};

export default PropertyPreview;
